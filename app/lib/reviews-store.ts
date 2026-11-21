import { createHash, randomBytes } from "node:crypto";
import { Pool } from "pg";

export type ReviewInput = { displayName: string; rating: number; body: string };
export type SiteReview = ReviewInput & {
  id: string;
  source: "client_link" | "owner_entry";
  status: "pending" | "published" | "withdrawn";
  createdAt: Date;
  publishedAt: Date | null;
};

let pool: Pool | undefined;

export function reviewsDatabaseConfigured() {
  return Boolean(process.env.DATABASE_URL);
}

function db() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) throw new Error("Review database is not configured");
  if (pool) return pool;
  pool = new Pool({
    connectionString,
    max: 3,
    connectionTimeoutMillis: 3000,
    query_timeout: 5000,
    idleTimeoutMillis: 10000,
    allowExitOnIdle: true,
  });
  pool.on("error", () => {
    // Idle connections may fail independently of requests. Do not log details:
    // deployment and database errors can contain sensitive connection information.
  });
  return pool;
}

const columns = `id, display_name AS "displayName", rating, body, source, status,
  created_at AS "createdAt", published_at AS "publishedAt"`;
const digest = (token: string) => createHash("sha256").update(token).digest("hex");

export async function listPublishedReviews(): Promise<SiteReview[]> {
  if (!reviewsDatabaseConfigured()) return [];
  const { rows } = await db().query<SiteReview>(
    `SELECT ${columns} FROM diamond_site_reviews WHERE status = 'published'
    ORDER BY published_at DESC, id LIMIT 100`,
  );
  return rows;
}

export async function listManageReviews(): Promise<SiteReview[]> {
  const { rows } = await db().query<SiteReview>(
    `SELECT ${columns} FROM diamond_site_reviews
    ORDER BY (status = 'pending') DESC, created_at DESC, id LIMIT 250`,
  );
  return rows;
}

export async function createReviewInvite() {
  const token = randomBytes(32).toString("base64url");
  const { rows } = await db().query<{ expiresAt: Date }>(
    'INSERT INTO diamond_review_invites (token_hash) VALUES ($1) RETURNING expires_at AS "expiresAt"',
    [digest(token)],
  );
  return { token, expiresAt: rows[0].expiresAt };
}

export async function reviewInviteAvailable(token: string) {
  const { rowCount } = await db().query(
    `SELECT 1 FROM diamond_review_invites
     WHERE token_hash = $1 AND used_at IS NULL AND expires_at > CURRENT_TIMESTAMP`,
    [digest(token)],
  );
  return rowCount === 1;
}

export async function submitInvitedReview(token: string, input: ReviewInput) {
  // One SQL statement: a concurrent updater waits and must recheck used_at.
  // If insertion fails, PostgreSQL rolls the update back with the same statement.
  const { rowCount } = await db().query(
    `WITH redeemed AS (
      UPDATE diamond_review_invites SET used_at = CURRENT_TIMESTAMP
      WHERE token_hash = $1 AND used_at IS NULL AND expires_at > CURRENT_TIMESTAMP
      RETURNING token_hash
    )
    INSERT INTO diamond_site_reviews (invite_hash, source, display_name, rating, body)
    SELECT token_hash, 'client_link', $2, $3, $4 FROM redeemed`,
    [digest(token), input.displayName, input.rating, input.body],
  );
  return rowCount === 1;
}

export async function createManualReview(input: ReviewInput) {
  await db().query(
    `INSERT INTO diamond_site_reviews (source, display_name, rating, body)
      VALUES ('owner_entry', $1, $2, $3)`,
    [input.displayName, input.rating, input.body],
  );
}

export async function changeReviewStatus(id: string, action: "publish" | "withdraw") {
  const query = action === "publish"
    ? `UPDATE diamond_site_reviews SET status = 'published', published_at = CURRENT_TIMESTAMP
       WHERE id = $1 AND status IN ('pending', 'withdrawn')`
    : `UPDATE diamond_site_reviews SET status = 'withdrawn', published_at = NULL
       WHERE id = $1 AND status IN ('pending', 'published')`;
  const { rowCount } = await db().query(query, [id]);
  return rowCount === 1;
}

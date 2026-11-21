/*
 * Run against a disposable, migrated local DB and Next server, never production:
 * REVIEWS_TEST_ORIGIN=http://127.0.0.1:3027 REVIEWS_TEST_DATABASE_URL=... \
 * REVIEWS_ADMIN_SECRET=... node --test tests/reviews.integration.mjs
 */
import assert from "node:assert/strict";
import { createHash, randomBytes } from "node:crypto";
import { test } from "node:test";
import { Client } from "pg";

const origin = process.env.REVIEWS_TEST_ORIGIN;
const databaseUrl = process.env.REVIEWS_TEST_DATABASE_URL;
const password = process.env.REVIEWS_ADMIN_SECRET;

function localOnly(value) {
  try { return ["localhost", "127.0.0.1", "[::1]"].includes(new URL(value).hostname); }
  catch { return false; }
}

async function send(route, body, { cookie, inboundOrigin } = {}) {
  return fetch(origin + "/api/reviews/" + route, {
    method: body ? "POST" : "GET",
    headers: {
      ...(body ? { "Content-Type": "application/json", Origin: inboundOrigin ?? origin } : {}),
      ...(cookie ? { Cookie: cookie } : {}),
    },
    ...(body ? { body: JSON.stringify(body) } : {}),
  });
}

test("authenticated review flow and atomic parallel redemption", async () => {
  assert.ok(localOnly(origin) && localOnly(databaseUrl) && password, "Use disposable local application/database only.");
  const marker = "Local synthetic QA " + randomBytes(7).toString("hex");
  const validInput = { displayName: "QA Test", body: marker, rating: 2, consent: true };
  const db = new Client({ connectionString: databaseUrl });
  await db.connect();
  try {
    assert.equal((await send("manage")).status, 401);
    assert.equal((await send("manage", { action: "invite" })).status, 401);
    assert.equal((await send("manage", { action: "manual", ...validInput })).status, 401);
    assert.equal((await send("manage", { action: "login", password: "not authenticated" })).status, 401);
    assert.equal((await send("manage", { action: "login", password }, { inboundOrigin: "https://example.org" })).status, 403);

    const login = await send("manage", { action: "login", password });
    assert.equal(login.status, 200);
    const setCookie = login.headers.get("set-cookie");
    assert.match(setCookie, /HttpOnly/);
    assert.match(setCookie, /SameSite=Strict/);
    const cookie = setCookie.split(";")[0];
    const tamperedCookie = cookie.slice(0, -1) + (cookie.endsWith("a") ? "b" : "a");
    assert.equal((await send("manage", { action: "invite" }, { cookie: tamperedCookie })).status, 401);

    async function invite() {
      const reply = await send("manage", { action: "invite" }, { cookie });
      assert.equal(reply.status, 201);
      return (await reply.json()).token;
    }
    const token = await invite();
    const randomBadToken = randomBytes(32).toString("base64url");
    assert.equal((await send("submit", { token: randomBadToken, check: true })).status, 409);
    const hash = (value) => createHash("sha256").update(value).digest("hex");
    let row = (await db.query("SELECT token_hash, used_at FROM diamond_review_invites WHERE token_hash = $1", [hash(token)])).rows[0];
    assert.equal(row.token_hash, hash(token));
    assert.equal(row.used_at, null);

    const expired = await invite();
    await db.query("UPDATE diamond_review_invites SET expires_at = CURRENT_TIMESTAMP - INTERVAL '1 minute' WHERE token_hash = $1", [hash(expired)]);
    assert.equal((await send("submit", { token: expired, check: true })).status, 409);
    assert.equal((await send("submit", { token: expired, ...validInput })).status, 409);

    assert.equal((await send("submit", { token, check: true })).status, 200);
    assert.equal((await send("submit", { token, check: true })).status, 200);
    assert.equal((await send("submit", { token, ...validInput, consent: false })).status, 400);
    assert.equal((await send("submit", { token, ...validInput }, { inboundOrigin: "https://example.org" })).status, 403);
    assert.equal((await send("submit", { token, check: true })).status, 200);
    const responses = await Promise.all(Array.from({ length: 8 }, () => send("submit", { token, ...validInput })));
    assert.equal(responses.filter((reply) => reply.status === 201).length, 1);
    assert.equal(responses.filter((reply) => reply.status === 409).length, 7);
    assert.equal((await send("submit", { token, check: true })).status, 409);
    row = (await db.query("SELECT used_at FROM diamond_review_invites WHERE token_hash = $1", [hash(token)])).rows[0];
    assert.ok(row.used_at);
    assert.equal((await db.query("SELECT count(*)::int AS count FROM diamond_site_reviews WHERE invite_hash = $1", [hash(token)])).rows[0].count, 1);

    const page = () => fetch(origin + "/reviews").then((r) => r.text());
    assert.ok(!(await page()).includes(marker), "Pending reviews must not become public before moderation.");
    const { reviews } = await (await send("manage", undefined, { cookie })).json();
    const item = reviews.find((review) => review.body === marker);
    assert.equal(item.status, "pending");
    assert.equal(item.source, "client_link");
    assert.equal((await send("manage", { action: "publish", id: item.id })).status, 401);
    assert.equal((await send("manage", { action: "publish", id: item.id }, { cookie })).status, 200);
    assert.ok((await page()).includes(marker), "Published low-rating review should be shown by the public route.");
    assert.equal((await send("manage", { action: "withdraw", id: item.id }, { cookie })).status, 200);
    assert.ok(!(await page()).includes(marker));

    const manualMarker = marker + " manual";
    assert.equal((await send("manage", { action: "manual", ...validInput, body: manualMarker, consent: false }, { cookie })).status, 400);
    assert.equal((await send("manage", { action: "manual", ...validInput, body: manualMarker }, { cookie })).status, 201);
    const manual = (await (await send("manage", undefined, { cookie })).json()).reviews.find((review) => review.body === manualMarker);
    assert.equal(manual.source, "owner_entry");
    assert.equal(manual.status, "pending");

    const logout = await send("manage", { action: "logout" }, { cookie });
    assert.match(logout.headers.get("set-cookie"), /Max-Age=0/);
  } finally {
    await db.end();
  }
});

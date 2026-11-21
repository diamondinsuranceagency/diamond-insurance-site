import { createHash, createHmac, randomBytes, timingSafeEqual } from "node:crypto";

const cookieName = "diamond_review_owner";
const lifetime = 8 * 60 * 60;
const cookiePath = "/api/reviews/manage";
const secretFormat = /^[a-zA-Z0-9_-]{32,128}$/;

function secret() {
  const value = process.env.REVIEWS_ADMIN_SECRET;
  return value && secretFormat.test(value) ? value : null;
}

export function reviewsOwnerConfigured() { return secret() !== null; }

const hash = (input: string) => createHash("sha256").update(input).digest();

export function matchesOwnerSecret(input: unknown) {
  const key = secret();
  if (!key || typeof input !== "string" || !secretFormat.test(input)) return false;
  return timingSafeEqual(hash(input), hash(key));
}

function signature(payload: string, key: string) {
  return createHmac("sha256", key).update("diamond-review-owner-v1:").update(payload).digest("base64url");
}

function cookie(token: string, maxAge: number) {
  return `${cookieName}=${token}; Max-Age=${maxAge}; Path=${cookiePath}; HttpOnly; SameSite=Strict${process.env.NODE_ENV === "production" ? "; Secure" : ""}`;
}

export function openOwnerSession() {
  const key = secret();
  if (!key) throw new Error("Review owner is not configured");
  const payload = `${Math.floor(Date.now() / 1000) + lifetime}.${randomBytes(24).toString("base64url")}`;
  return cookie(`${payload}.${signature(payload, key)}`, lifetime);
}

export function clearOwnerSession() { return cookie("", 0); }

export function hasOwnerSession(request: Request) {
  const key = secret();
  if (!key) return false;
  const header = request.headers.get("cookie") ?? "";
  const pair = header.split(";").map((value) => value.trim())
    .find((value) => value.startsWith(`${cookieName}=`));
  const token = pair?.slice(cookieName.length + 1) ?? "";
  const match = /^(\d{10})\.([A-Za-z0-9_-]{32})\.([A-Za-z0-9_-]{43})$/.exec(token);
  if (!match) return false;
  const [, expiresAt, nonce, mac] = match;
  const now = Math.floor(Date.now() / 1000);
  const expiry = Number(expiresAt);
  const expected = signature(`${expiresAt}.${nonce}`, key);
  return expiry > now && expiry <= now + lifetime
    && timingSafeEqual(Buffer.from(mac), Buffer.from(expected));
}

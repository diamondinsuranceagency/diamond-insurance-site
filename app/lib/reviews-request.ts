import type { ReviewInput } from "./reviews-store";

const MAX_REQUEST_BYTES = 12_000;
export const inviteTokenPattern = /^[A-Za-z0-9_-]{43}$/;
export const reviewIdPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export function json(value: unknown, status = 200, cookies?: string) {
  const headers = new Headers({ "Cache-Control": "no-store" });
  if (cookies) headers.set("Set-Cookie", cookies);
  return Response.json(value, { status, headers });
}

export function problem(error: string, status: number) {
  return json({ error }, status);
}

export function sameOrigin(request: Request) {
  const sentOrigin = request.headers.get("origin");
  if (!sentOrigin) return false;
  const trustedOrigins = [
    process.env.REVIEWS_SITE_ORIGIN ?? process.env.NEXT_PUBLIC_SITE_URL,
    process.env.VERCEL_ENV === "preview" && process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : null,
    process.env.NODE_ENV !== "production" ? request.url : null,
  ];
  return trustedOrigins.some((url) => {
    if (!url) return false;
    try { return new URL(url).origin === sentOrigin; } catch { return false; }
  });
}

export async function readJson(request: Request): Promise<Record<string, unknown> | null> {
  if (request.headers.get("content-type")?.split(";")[0].trim() !== "application/json"
      || Number(request.headers.get("content-length") ?? "0") > MAX_REQUEST_BYTES
      || !request.body) return null;

  const reader = request.body.getReader();
  const decoder = new TextDecoder("utf-8", { fatal: true });
  let body = "";
  let count = 0;
  try {
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      count += value.byteLength;
      if (count > MAX_REQUEST_BYTES) {
        await reader.cancel();
        return null;
      }
      body += decoder.decode(value, { stream: true });
    }
    const obj: unknown = JSON.parse(body + decoder.decode());
    if (obj === null || typeof obj !== "object" || Array.isArray(obj)) return null;
    return obj as Record<string, unknown>;
  } catch {
    return null;
  } finally {
    reader.releaseLock();
  }
}

export function parseReview(input: Record<string, unknown>): ReviewInput | null {
  const { rating, body, consent, displayName } = input;
  if (
    consent !== true || typeof rating !== "number" || !Number.isInteger(rating)
    || rating < 1 || rating > 5 || typeof body !== "string"
    || (displayName !== undefined && typeof displayName !== "string")
  ) return null;
  const trimmed = body.trim();
  const name = typeof displayName === "string" ? displayName.trim() : "";
  if (trimmed.length < 1 || trimmed.length > 1500 || name.length > 80
      || /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/.test(trimmed)
      || /[\x00-\x1F\x7F]/.test(name)) return null;
  return { rating, body: trimmed, displayName: name || "Anonymous" };
}

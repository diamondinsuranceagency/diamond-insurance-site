import {
  clearOwnerSession, hasOwnerSession, matchesOwnerSecret, openOwnerSession, reviewsOwnerConfigured,
} from "../../../lib/reviews-owner";
import { json, parseReview, problem, readJson, reviewIdPattern, sameOrigin } from "../../../lib/reviews-request";
import {
  changeReviewStatus, createManualReview, createReviewInvite, listManageReviews, reviewsDatabaseConfigured,
} from "../../../lib/reviews-store";

export const runtime = "nodejs";

const unavailable = () => problem("Review management is not available right now.", 503);
const unauthorized = () => problem("Sign in to manage reviews.", 401);
const ownerReady = () => reviewsDatabaseConfigured() && reviewsOwnerConfigured();

export async function GET(request: Request) {
  if (!ownerReady()) return unavailable();
  if (!hasOwnerSession(request)) return unauthorized();
  try {
    return json({ reviews: await listManageReviews() });
  } catch {
    return unavailable();
  }
}

export async function POST(request: Request) {
  if (!sameOrigin(request)) return problem("Open review management directly on the Diamond Insurance website.", 403);
  if (!ownerReady()) return unavailable();
  const value = await readJson(request);
  if (!value) return problem("This request is not valid.", 400);
  const { action } = value;
  if (action === "login") {
    if (!matchesOwnerSecret(value.password)) return unauthorized();
    return json({ ok: true }, 200, openOwnerSession());
  }
  if (action === "logout") return json({ ok: true }, 200, clearOwnerSession());
  if (!hasOwnerSession(request)) return unauthorized();

  try {
    if (action === "invite") return json({ ok: true, ...await createReviewInvite() }, 201);
    if (action === "manual") {
      const input = parseReview(value);
      if (!input) return problem("Enter the rating and original review and confirm the client gave permission.", 400);
      await createManualReview(input);
      return json({ ok: true }, 201);
    }
    if (action === "publish" || action === "withdraw") {
      const { id } = value;
      if (typeof id !== "string" || !reviewIdPattern.test(id)) return problem("This review is not valid.", 400);
      if (!await changeReviewStatus(id, action)) return problem("This review is not available or already changed.", 409);
      return json({ ok: true });
    }
    return problem("This action is not recognized.", 400);
  } catch {
    return unavailable();
  }
}

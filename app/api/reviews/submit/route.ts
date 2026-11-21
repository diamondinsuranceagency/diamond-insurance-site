import { inviteTokenPattern, json, parseReview, problem, readJson, sameOrigin } from "../../../lib/reviews-request";
import { reviewInviteAvailable, reviewsDatabaseConfigured, submitInvitedReview } from "../../../lib/reviews-store";

export const runtime = "nodejs";

export async function POST(request: Request) {
  if (!sameOrigin(request)) return problem("Open this form directly on the Diamond Insurance website.", 403);
  if (!reviewsDatabaseConfigured()) return problem("Review submissions are not available right now.", 503);
  const value = await readJson(request);
  if (!value) return problem("Check the form and try again.", 400);
  const { token } = value;
  if (typeof token !== "string" || !inviteTokenPattern.test(token)) {
    return problem("This review link is missing or invalid.", 400);
  }
  try {
    if (value.check === true) {
      return await reviewInviteAvailable(token)
        ? json({ ok: true })
        : problem("This link has expired, is invalid, or has already been used.", 409);
    }
    const input = parseReview(value);
    if (!input) return problem("Enter a star rating and comment and confirm permission to publish.", 400);
    if (!await submitInvitedReview(token, input)) {
      return problem("This link has expired, is invalid, or has already been used.", 409);
    }
    return json({ ok: true }, 201);
  } catch {
    return problem("We couldn’t save your review right now. Please try again later.", 503);
  }
}

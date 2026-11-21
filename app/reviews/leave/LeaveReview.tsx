"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import ReviewForm, { reviewApi, type ReviewInput } from "../ReviewForm";

function subscribe(callback: () => void) {
  window.addEventListener("hashchange", callback);
  return () => window.removeEventListener("hashchange", callback);
}
function readToken() { return window.location.hash.slice(1); }
function serverToken() { return null; }
const tokenPattern = /^[A-Za-z0-9_-]{43}$/;

export default function LeaveReview() {
  const token = useSyncExternalStore(subscribe, readToken, serverToken);
  const [linkCheck, setLinkCheck] = useState<{ token: string; error: string }>();
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);
  const [retry, setRetry] = useState(0);

  useEffect(() => {
    if (!token || !tokenPattern.test(token) || sent) return;
    let mounted = true;
    reviewApi("/api/reviews/submit", { token, check: true }).then(
      () => { if (mounted) setLinkCheck({ token, error: "" }); },
      (e) => { if (mounted) setLinkCheck({ token, error: e instanceof Error ? e.message : "Your invitation couldn’t be checked." }); },
    );
    return () => { mounted = false; };
  }, [token, sent, retry]);

  async function submit(review: ReviewInput) {
    try {
      await reviewApi("/api/reviews/submit", { token, ...review });
      window.history.replaceState(null, "", window.location.pathname);
      setSent(true);
    } catch (e) {
      if (typeof e === "object" && e && "status" in e && (e.status === 404 || e.status === 409 || e.status === 410)) {
        setError(e instanceof Error ? e.message : "This invitation can no longer be used.");
      } else throw e;
    }
  }

  if (sent) {
    return <div role="status" className="rounded-2xl bg-teal-50 p-6 text-teal-950"><h2 className="text-xl font-bold">Thank you for sharing your experience.</h2><p className="mt-2">Your review was received and won’t appear until it’s checked for privacy and spam. This link can’t be used again.</p></div>;
  }
  if (token === null) return <p role="status" className="text-slate-600">Opening your review invitation…</p>;
  if (!tokenPattern.test(token)) {
    return <p role="status" className="rounded-2xl bg-slate-100 p-6 text-slate-700">Use the complete review link sent to you by Diamond Insurance Agency. If it’s missing or expired, contact the agency for help.</p>;
  }
  if (linkCheck?.token !== token) return <p role="status" className="text-slate-600">Checking your review invitation…</p>;
  if (linkCheck.error || error) return (
    <div className="space-y-4">
      <p role="alert" className="rounded-2xl bg-amber-50 p-5 text-amber-950">{error || linkCheck.error}</p>
      {!error && <button type="button" className="font-semibold text-teal-800 underline" onClick={() => {setLinkCheck(undefined); setRetry((n) => n + 1);}}>Check again</button>}
    </div>
  );
  return <ReviewForm key={token} onSubmit={submit} />;
}

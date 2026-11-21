"use client";

import { useState, type FormEvent } from "react";

export type ReviewInput = {
  displayName: string;
  body: string;
  rating: number;
  consent: true;
};

export const fieldStyle = "mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700";
export const buttonStyle = "inline-flex min-h-12 items-center justify-center rounded-full bg-teal-800 px-6 py-3 font-semibold text-white transition hover:bg-teal-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-800 disabled:opacity-50";

export async function reviewApi(url: string, input?: object) {
  const response = await fetch(url, input ? {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
    cache: "no-store",
  } : { cache: "no-store" });
  const data = await response.json().catch(() => null);
  if (!response.ok || !data) {
    throw Object.assign(new Error(data?.error ?? "Something went wrong. Please try again."), { status: response.status });
  }
  return data;
}

export default function ReviewForm({ manual = false, onSubmit }: {
  manual?: boolean;
  onSubmit: (input: ReviewInput) => Promise<void>;
}) {
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    setError("");
    setBusy(true);
    try {
      if (data.get("consent") !== "yes") return;
      await onSubmit({
        displayName: String(data.get("displayName") ?? "").trim(),
        body: String(data.get("body") ?? "").trim(),
        rating: Number(data.get("rating")),
        consent: true,
      });
      form.reset();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Couldn’t save your review. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={submit} className="space-y-6" aria-busy={busy}>
      <fieldset disabled={busy} className="min-w-0 space-y-6">
        <label className="block text-sm font-semibold">
          Name shown publicly <span className="font-normal text-slate-500">(optional)</span>
          <input name="displayName" placeholder="First name and last initial" maxLength={60} className={fieldStyle} />
        </label>
        <fieldset>
          <legend className="text-sm font-semibold">Overall rating</legend>
          <div className="mt-2 grid grid-cols-5 gap-1.5 sm:gap-3">
            {[1, 2, 3, 4, 5].map((rating) => (
              <label key={rating} className="min-w-0 cursor-pointer">
                <input className="peer sr-only" type="radio" name="rating" value={rating} required aria-label={rating + (rating === 1 ? " star" : " stars")} />
                <span aria-hidden="true" className="flex min-h-12 items-center justify-center gap-0.5 rounded-xl border border-slate-300 px-1 text-sm text-slate-700 peer-checked:border-teal-800 peer-checked:bg-teal-800 peer-checked:text-white peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-teal-800">{rating} ★</span>
              </label>
            ))}
          </div>
        </fieldset>
        <label className="block text-sm font-semibold">
          {manual ? "Client’s own words" : "Your review"}
          <textarea name="body" required rows={5} maxLength={1500} placeholder={manual ? "Paste the client’s approved testimonial." : "What was it like working with Diamond Insurance Agency?"} className={fieldStyle} />
          <span className="mt-2 block font-normal leading-5 text-slate-600">Please leave out policy numbers, health details, phone numbers and addresses.</span>
        </label>
        <label className="flex items-start gap-3 text-sm leading-6 text-slate-700">
          <input type="checkbox" name="consent" value="yes" required className="mt-1.5 h-4 w-4 shrink-0 accent-teal-800" />
          {manual ? "This is a genuine client testimonial, and the client gave permission to publish these words, this rating and this display name." : "I agree that Diamond Insurance Agency may publish my review, rating and chosen display name. If I leave the name blank, it will show as Anonymous."}
        </label>
      </fieldset>
      {error && <p role="alert" className="rounded-xl bg-red-50 p-3 text-sm text-red-900">{error}</p>}
      <button className={buttonStyle} disabled={busy} type="submit">{busy ? "Saving…" : manual ? "Save for review" : "Submit review"}</button>
    </form>
  );
}

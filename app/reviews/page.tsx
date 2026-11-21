import Link from "next/link";
import { reviews } from "../data/reviews";
import { listPublishedReviews } from "../lib/reviews-store";

export const dynamic = "force-dynamic";
export const metadata = {
  title: "Client reviews",
  description: "Read what clients have shared about their experience with Diamond Insurance Agency.",
};

const dateFormat = new Intl.DateTimeFormat("en-US", { dateStyle: "medium", timeZone: "America/New_York" });

export default async function ReviewsPage() {
  const published = await listPublishedReviews().catch(() => []);
  const cards = [
    ...published.map((r) => ({
      id: r.id,
      category: "Life Insurance",
      text: r.body,
      name: r.displayName,
      date: dateFormat.format(new Date(r.publishedAt ?? r.createdAt)),
      rating: r.rating,
      ownerEntered: r.source === "owner_entry",
    })),
    ...reviews.map((r) => ({ ...r, rating: null, ownerEntered: false })),
  ];

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12 text-slate-900 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <Link href="/" className="font-semibold text-teal-800 underline-offset-4 hover:underline">← Return Home</Link>

        <header className="mt-9 rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950 p-7 text-white sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-200">Diamond Insurance Agency</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-6xl">Client reviews</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200">Read what clients have shared about working with our agency.</p>
          <p className="mt-4 text-sm font-semibold text-teal-100">{cards.length} {cards.length === 1 ? "review" : "reviews"}</p>
        </header>

        <div className="mt-6 rounded-2xl border border-teal-100 bg-teal-50 px-5 py-4 text-sm leading-6 text-teal-950">
          <span className="font-semibold">Have a review invitation?</span> Open the private link you received to share your experience.
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {cards.map((review) => (
            <article key={review.id} className="flex min-w-0 flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-800">{review.category}</p>
                {review.rating && (
                  <span className="text-sm font-semibold text-amber-800" aria-label={review.rating + " out of 5 stars"}>
                    <span aria-hidden="true">{"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}</span>
                  </span>
                )}
              </div>

              <blockquote className="mt-5 flex-1 whitespace-pre-wrap break-words text-lg leading-8 text-slate-700">“{review.text}”</blockquote>

              <div className="mt-7 border-t border-slate-100 pt-5">
                <p className="font-semibold text-slate-900">{review.name}</p>
                <p className="mt-1 text-sm text-slate-600">{review.date}{review.ownerEntered ? " · Shared with client permission" : ""}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

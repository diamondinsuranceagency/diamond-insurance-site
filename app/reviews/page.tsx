import Link from "next/link";
import { reviews } from "../data/reviews";

export const metadata = {
  title: "Client Reviews | Diamond Insurance Agency",
  description:
    "Read client reviews for Diamond Insurance Agency and verify them through Agent Verified.",
};

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 text-slate-900">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/"
          className="font-semibold text-teal-800 underline-offset-4 hover:underline"
        >
          ← Return Home
        </Link>

        <div className="mt-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
            Client feedback
          </p>

          <h1 className="mt-3 text-4xl font-bold md:text-6xl">
            Verified client reviews
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Read feedback submitted by clients. Each review includes a link to
            the Agent Verified source page.
          </p>

          <p className="mt-3 text-sm font-semibold text-slate-500">
            {reviews.length} reviews
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {reviews.map((review) => (
            <article
              key={review.id}
              className="flex flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
                {review.category}
              </p>

              <blockquote className="mt-5 flex-1 text-lg leading-8 text-slate-700">
                “{review.text}”
              </blockquote>

              <div className="mt-8 border-t border-slate-100 pt-6">
                <p className="font-semibold text-slate-900">{review.name}</p>
                <p className="mt-1 text-sm text-slate-500">{review.date}</p>

                <a
                  href={review.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-sm font-semibold text-teal-800 underline-offset-4 hover:underline"
                >
                  Verify on Agent Verified
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-block rounded-full bg-teal-800 px-7 py-4 font-semibold text-white transition hover:bg-teal-900"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </main>
  );
}
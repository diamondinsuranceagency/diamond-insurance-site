"use client";

import { useEffect, useState } from "react";
import type { Review } from "../data/reviews";

type ReviewsCarouselProps = {
  reviews: Review[];
};

function shuffleReviews(items: Review[]) {
  const shuffled = [...items];

  for (let index = shuffled.length - 1; index > 0; index--) {
    const randomIndex = Math.floor(Math.random() * (index + 1));

    [shuffled[index], shuffled[randomIndex]] = [
      shuffled[randomIndex],
      shuffled[index],
    ];
  }

  return shuffled;
}

export default function ReviewsCarousel({
  reviews,
}: ReviewsCarouselProps) {
  const [randomizedReviews, setRandomizedReviews] =
    useState<Review[]>(reviews);

  const [expandedReviews, setExpandedReviews] = useState<Set<string>>(
    new Set(),
  );

  useEffect(() => {
    setRandomizedReviews(shuffleReviews(reviews));
  }, [reviews]);

  if (randomizedReviews.length === 0) {
    return (
      <div className="rounded-3xl bg-white p-8 text-center text-slate-700 shadow-sm">
        No reviews available yet.
      </div>
    );
  }

  const displayedReviews = randomizedReviews.slice(0, 10);
  const scrollingReviews = [...displayedReviews, ...displayedReviews];

  function toggleReview(reviewKey: string) {
    setExpandedReviews((current) => {
      const updated = new Set(current);

      if (updated.has(reviewKey)) {
        updated.delete(reviewKey);
      } else {
        updated.add(reviewKey);
      }

      return updated;
    });
  }

  return (
    <div className="overflow-hidden">
      <div className="review-track flex w-max items-start gap-6 py-3">
        {scrollingReviews.map((review, index) => {
          const reviewKey = `${review.id}-${index}`;
          const isExpanded = expandedReviews.has(reviewKey);
          const isLongReview = review.text.length > 220;

          return (
            <article
              key={reviewKey}
              className="w-[320px] shrink-0 rounded-[1.75rem] border border-white/10 bg-white p-7 text-left text-slate-900 shadow-[0_20px_60px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-2 md:w-[380px]"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
                {review.category}
              </p>

              <blockquote
                className={`mt-5 text-lg leading-8 text-slate-700 ${
                  isExpanded ? "" : "line-clamp-5"
                }`}
              >
                “{review.text}”
              </blockquote>

              {isLongReview && (
                <button
                  type="button"
                  onClick={() => toggleReview(reviewKey)}
                  className="mt-3 text-sm font-bold text-teal-800 underline-offset-4 hover:underline"
                >
                  {isExpanded ? "Show less" : "Read more"}
                </button>
              )}

              <div className="mt-7 border-t border-slate-100 pt-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-bold text-slate-900">{review.name}</p>
                    <p className="mt-1 text-sm text-slate-500">
                      {review.date}
                    </p>
                  </div>

                  <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-teal-700">
                    Verified
                  </span>
                </div>

                <a
                  href={review.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-teal-800 underline-offset-4 hover:underline"
                >
                  View original review
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
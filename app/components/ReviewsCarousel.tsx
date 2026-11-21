"use client";

import { useState } from "react";
import type { Review } from "../data/reviews";

type ReviewsCarouselProps = {
  reviews: Review[];
};

export default function ReviewsCarousel({
  reviews,
}: ReviewsCarouselProps) {
  const [expandedReviews, setExpandedReviews] = useState<Set<string>>(
    new Set(),
  );

  if (reviews.length === 0) {
    return (
      <div className="rounded-3xl bg-white p-8 text-center text-slate-700 shadow-sm">
        No reviews available yet.
      </div>
    );
  }

  const displayedReviews = reviews.slice(0, 10);
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

                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
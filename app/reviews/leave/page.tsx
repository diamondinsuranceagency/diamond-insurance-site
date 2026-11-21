import type { Metadata } from "next";
import Link from "next/link";
import LeaveReview from "./LeaveReview";

export const metadata: Metadata = {
  title: "Leave a review",
  robots: { index: false, follow: false },
  referrer: "no-referrer",
};

export default function LeaveReviewPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 text-slate-900 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-xl">
        <Link href="/reviews" className="text-sm font-semibold text-teal-800 hover:underline">← Client reviews</Link>
        <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <header className="bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950 p-7 text-white sm:p-9">
            <p className="text-xs font-bold uppercase tracking-[.19em] text-teal-200">Diamond Insurance Agency</p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Share your experience</h1>
            <p className="mt-3 max-w-md text-sm leading-6 text-slate-200">Tell us what went well or what we could do better. Your private invitation can be used once.</p>
          </header>
          <div className="p-6 sm:p-9"><LeaveReview /></div>
        </div>
      </div>
    </main>
  );
}

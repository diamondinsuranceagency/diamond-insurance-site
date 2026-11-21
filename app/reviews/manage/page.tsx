import type { Metadata } from "next";
import Link from "next/link";
import ManageReviews from "./ManageReviews";

export const metadata: Metadata = {
  title: "Manage reviews",
  robots: { index: false, follow: false },
  referrer: "no-referrer",
};

export default function ManageReviewsPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 text-slate-900 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-5xl">
        <Link href="/reviews" className="text-sm font-semibold text-teal-800 hover:underline">← Public reviews</Link>
        <p className="mt-7 text-xs font-bold uppercase tracking-[.19em] text-teal-800">Owner only</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">Manage reviews</h1>
        <p className="mt-3 max-w-xl leading-7 text-slate-600">Create one-time links, add client-approved testimonials and manage which reviews appear on your site.</p>
        <ManageReviews />
      </div>
    </main>
  );
}

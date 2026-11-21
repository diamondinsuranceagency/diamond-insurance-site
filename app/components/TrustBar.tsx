import Link from "next/link";

export default function TrustBar() {
  return (
    <section className="border-b border-slate-200 bg-white px-6 py-8">
      <div className="mx-auto grid max-w-6xl items-center gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/reviews" className="text-2xl font-bold text-teal-800 underline-offset-4 hover:underline">
            Client Reviews
          </Link>
          <p className="mt-1 text-sm text-slate-600">Hear directly from clients</p>
        </div>

        <div>
          <p className="text-2xl font-bold text-teal-800">
            Personal Guidance
          </p>
          <p className="mt-1 text-sm text-slate-600">
            Coverage explained clearly
          </p>
        </div>

        <div>
          <p className="text-2xl font-bold text-teal-800">
            Flexible Options
          </p>
          <p className="mt-1 text-sm text-slate-600">
            Plans built around your needs
          </p>
        </div>

        <div>
          <a
            href="https://calendly.com/diamondinsurance/life"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-teal-800 px-6 py-3 font-semibold text-white transition hover:bg-teal-900"
          >
            Book a Consultation
          </a>

          <p className="mt-2 text-sm text-slate-600">
            Choose a convenient time
          </p>
        </div>
      </div>
    </section>
  );
}
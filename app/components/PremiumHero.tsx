import Link from "next/link";

type PremiumHeroProps = {
  reviewCount: number;
};

const calendlyUrl = "https://calendly.com/diamondinsurance/life";

export default function PremiumHero({
  reviewCount,
}: PremiumHeroProps) {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-sky-950">
      {/* Coastal background */}
      <div
        className="absolute inset-0 -z-30 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/coastal-hero.jpg'), linear-gradient(135deg, #062c43 0%, #075985 45%, #0f766e 100%)",
        }}
      />

      {/* Dark overlay for readable text */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-r from-slate-950/95 via-sky-950/80 to-teal-900/35" />

      {/* Soft lighting */}
      <div className="absolute -right-24 top-24 -z-10 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />
      <div className="absolute -bottom-40 left-1/3 -z-10 h-[34rem] w-[34rem] rounded-full bg-teal-300/15 blur-3xl" />

      {/* Decorative coastal lines */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950/40 to-transparent" />

      <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-14 px-6 pb-20 pt-36 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        {/* Main message */}
        <div className="premium-fade-up max-w-4xl">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-cyan-50 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-cyan-300" />
            Personal insurance guidance with a relaxed approach
          </div>

          <h1 className="mt-7 text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Protect what matters most.
            <span className="mt-2 block bg-gradient-to-r from-cyan-100 via-white to-teal-100 bg-clip-text text-transparent">
              Move forward with confidence.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-cyan-50/90 md:text-xl">
            Straightforward life insurance and supplemental coverage guidance
            built around your family, priorities, and budget.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-8 py-4 text-center font-bold text-sky-950 shadow-xl shadow-slate-950/20 transition hover:-translate-y-1 hover:bg-cyan-50"
            >
              Schedule a Consultation
            </a>

            <Link
              href="#services"
              className="rounded-full border border-white/30 bg-white/10 px-8 py-4 text-center font-bold text-white backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/15"
            >
              Explore Coverage
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-sm text-cyan-50/90">
            <div className="flex items-center gap-2">
              <span className="text-cyan-300">✓</span>
              Clear explanations
            </div>

            <div className="flex items-center gap-2">
              <span className="text-cyan-300">✓</span>
              Personalized options
            </div>

            <div className="flex items-center gap-2">
              <span className="text-cyan-300">✓</span>
              No-pressure conversations
            </div>
          </div>
        </div>

        {/* Floating trust panel */}
        <div className="premium-fade-up-delayed relative mx-auto w-full max-w-md">
          <div className="absolute -inset-5 rounded-[2.25rem] bg-gradient-to-br from-cyan-300/25 to-teal-300/5 blur-2xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 p-7 shadow-2xl shadow-slate-950/30 backdrop-blur-xl md:p-9">
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-200/10 blur-3xl" />

            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-100">
              Trusted guidance
            </p>

            <div className="mt-7">
              <p className="text-5xl font-bold text-white">{reviewCount}+</p>
              <p className="mt-2 text-lg text-cyan-50">
                Client reviews available for verification
              </p>
            </div>

            <div className="my-7 h-px bg-white/15" />

            <div className="space-y-5">
              <div>
                <p className="font-bold text-white">Whole Life Insurance</p>
                <p className="mt-1 text-sm leading-6 text-cyan-50/75">
                  Long-term protection designed to remain in place throughout
                  your lifetime.
                </p>
              </div>

              <div>
                <p className="font-bold text-white">Term Life Insurance</p>
                <p className="mt-1 text-sm leading-6 text-cyan-50/75">
                  Flexible coverage for the years when your family may need it
                  most.
                </p>
              </div>

              <div>
                <p className="font-bold text-white">Supplemental Plans</p>
                <p className="mt-1 text-sm leading-6 text-cyan-50/75">
                  Additional options that may help address certain out-of-pocket
                  expenses.
                </p>
              </div>
            </div>

            <Link
              href="#reviews"
              className="mt-8 inline-flex items-center gap-2 font-bold text-cyan-100 transition hover:text-white"
            >
              Read client experiences
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="absolute -bottom-5 -left-5 rounded-2xl border border-white/20 bg-white px-5 py-4 shadow-xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal-700">
              Agent Verified
            </p>
            <p className="mt-1 text-sm font-semibold text-slate-800">
              Reviews linked to source
            </p>
          </div>
        </div>
      </div>

      <Link
        href="#services"
        aria-label="Scroll to coverage options"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70 transition hover:text-white md:flex"
      >
        Explore
        <span className="hero-scroll-indicator text-xl">↓</span>
      </Link>
    </section>
  );
}
import Link from "next/link";
import Header from "./components/Header";
import TrustBar from "./components/TrustBar";
import ReviewsCarousel from "./components/ReviewsCarousel";
import PremiumHero from "./components/PremiumHero";
import FloatingBookingButton from "./components/FloatingBookingButton";
import FaqSection from "./components/FaqSection";
import { reviews } from "./data/reviews";

const calendlyUrl = "https://calendly.com/diamondinsurance/life";

const agentVerifiedReviewsUrl =
  "https://www.agentverified.com/united-states/miami/florida/life-insurance-agent/john-williams/reviews";

const processSteps = [
  {
    number: "01",
    title: "Schedule",
    text: "Choose a convenient time for an introductory conversation.",
  },
  {
    number: "02",
    title: "Review Your Goals",
    text: "Discuss your family, priorities, budget, and current coverage.",
  },
  {
    number: "03",
    title: "Explore Options",
    text: "Review suitable coverage choices with clear explanations.",
  },
  {
    number: "04",
    title: "Move Forward",
    text: "Choose whether a recommended option makes sense for you.",
  },
];

export default function Homepage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <FloatingBookingButton />

      <PremiumHero reviewCount={reviews.length} />

      <TrustBar />

      {/* Services */}
      <section
        id="services"
        className="relative overflow-hidden bg-[#f8f7f4] px-6 py-24"
      >
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-cyan-200/20 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-teal-200/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-700">
              Coverage options
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Insurance designed around real life
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Clear explanations, thoughtful recommendations, and coverage
              options built around your goals instead of a one-size-fits-all
              sales pitch.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            <article className="group rounded-[2rem] border border-white bg-white/90 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-2 hover:border-cyan-200 hover:shadow-[0_28px_80px_rgba(15,118,110,0.15)]">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-100 to-teal-100 text-2xl shadow-inner">
                🛡️
              </div>

              <h3 className="mt-8 text-2xl font-bold text-slate-900">
                Whole Life Insurance
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Permanent coverage designed to remain in place throughout your
                lifetime, with predictable protection and long-term value.
              </p>

              <Link
                href="/whole-life-insurance"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-teal-800 transition group-hover:gap-3"
              >
                Explore whole life coverage
                <span aria-hidden="true">→</span>
              </Link>
            </article>

            <article className="group rounded-[2rem] border border-white bg-white/90 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-2 hover:border-cyan-200 hover:shadow-[0_28px_80px_rgba(15,118,110,0.15)]">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-100 to-cyan-100 text-2xl shadow-inner">
                ⏳
              </div>

              <h3 className="mt-8 text-2xl font-bold text-slate-900">
                Term Life Insurance
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Flexible protection for a defined period, often used to help
                cover income, family responsibilities, debt, or major financial
                obligations.
              </p>

              <Link
                href="/term-life-insurance"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-teal-800 transition group-hover:gap-3"
              >
                Explore term coverage
                <span aria-hidden="true">→</span>
              </Link>
            </article>

            <article className="group rounded-[2rem] border border-white bg-white/90 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-2 hover:border-cyan-200 hover:shadow-[0_28px_80px_rgba(15,118,110,0.15)]">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-100 to-emerald-100 text-2xl shadow-inner">
                ✚
              </div>

              <h3 className="mt-8 text-2xl font-bold text-slate-900">
                Supplemental Plans
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Additional plan options that may help address certain expenses
                not fully covered by traditional health insurance.
              </p>

              <Link
                href="/supplemental-plans"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-teal-800 transition group-hover:gap-3"
              >
                Explore supplemental options
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="relative overflow-hidden bg-white px-6 py-24"
      >
        <div className="absolute -left-28 top-1/3 h-80 w-80 rounded-full bg-cyan-100/40 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-teal-100/40 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-cyan-200/50 via-sky-100/30 to-teal-200/40 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2.25rem] border border-white bg-gradient-to-br from-sky-950 via-cyan-900 to-teal-700 p-8 shadow-[0_28px_80px_rgba(15,23,42,0.18)] md:p-10">
              <div className="absolute -right-16 top-0 h-56 w-56 rounded-full bg-cyan-200/15 blur-3xl" />
              <div className="absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-teal-200/10 blur-3xl" />

              <p className="relative text-sm font-semibold uppercase tracking-[0.22em] text-cyan-100">
                Diamond Insurance Agency
              </p>

              <h2 className="relative mt-5 max-w-md text-4xl font-bold leading-tight text-white md:text-5xl">
                Guidance that feels clear, personal, and human.
              </h2>

              <p className="relative mt-6 max-w-lg text-lg leading-8 text-cyan-50/85">
                No confusing pressure. No rushed decisions. Just thoughtful
                conversations focused on helping you understand your options.
              </p>

              <div className="relative mt-10 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-100">
                    Personal
                  </p>
                  <p className="mt-2 font-semibold text-white">
                    Recommendations based on your priorities
                  </p>
                </div>

                <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-100">
                    Straightforward
                  </p>
                  <p className="mt-2 font-semibold text-white">
                    Clear explanations without the jargon
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-700">
              Why work with us
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Insurance should feel understandable.
            </h2>

            <p className="mt-7 text-lg leading-8 text-slate-600">
              Diamond Insurance Agency helps individuals and families explore
              life insurance and supplemental coverage with a calm, practical
              approach.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              We take the time to understand what matters to you, explain the
              differences between coverage options, and help you make a
              confident decision that fits your goals and budget.
            </p>

            <div className="mt-9 grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-[#f8f7f4] p-5">
                <p className="font-bold text-slate-900">
                  No-pressure conversations
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Take the time you need to understand your choices.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-[#f8f7f4] p-5">
                <p className="font-bold text-slate-900">
                  Coverage explained clearly
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Understand what you are considering before making a decision.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-[#f8f7f4] p-5">
                <p className="font-bold text-slate-900">
                  Personalized options
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Recommendations shaped around your needs and priorities.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-[#f8f7f4] p-5">
                <p className="font-bold text-slate-900">Long-term support</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  A relationship designed to continue beyond the initial
                  policy.
                </p>
              </div>
            </div>

            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-teal-800 px-7 py-4 font-bold text-white shadow-lg shadow-teal-900/15 transition hover:-translate-y-1 hover:bg-teal-900"
            >
              Talk With an Advisor
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative overflow-hidden bg-[#f8f7f4] px-6 py-24">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-cyan-200/25 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-teal-200/25 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-700">
              A simple process
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              From questions to confident coverage
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              No confusing process and no pressure. Just a straightforward path
              to understanding your options.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <article
                key={step.number}
                className="group relative rounded-[2rem] border border-white bg-white p-8 shadow-[0_18px_55px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_28px_75px_rgba(15,118,110,0.14)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-950 to-teal-700 text-sm font-bold tracking-[0.14em] text-white shadow-lg">
                  {step.number}
                </div>

                <h3 className="mt-7 text-2xl font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">{step.text}</p>

                <div className="mt-7 h-1 w-12 rounded-full bg-gradient-to-r from-cyan-400 to-teal-600 transition-all duration-300 group-hover:w-20" />
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-teal-800 px-8 py-4 font-bold text-white shadow-lg shadow-teal-900/15 transition hover:-translate-y-1 hover:bg-teal-900"
            >
              Start With a Conversation
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section
        id="reviews"
        className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white"
      >
        <div className="absolute -left-24 top-20 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-teal-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">
              Client experiences
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              Real feedback. Independently verifiable.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Read client experiences and verify each review through the
              original Agent Verified source.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-300">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
                {reviews.length} client reviews
              </span>

              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
                Source-linked feedback
              </span>

              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
                Updated as reviews are added
              </span>
            </div>
          </div>

          <div className="mt-14 rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-[0_30px_100px_rgba(0,0,0,0.3)] backdrop-blur-xl md:p-6">
            <ReviewsCarousel reviews={reviews} />
          </div>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/reviews"
              className="rounded-full bg-white px-8 py-4 font-bold text-slate-950 shadow-xl transition hover:-translate-y-1 hover:bg-cyan-50"
            >
              See All Reviews
            </Link>

            <a
              href={agentVerifiedReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 bg-white/5 px-8 py-4 font-bold text-white backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/10"
            >
              Verify on Agent Verified
            </a>
          </div>
        </div>
      </section>

      <FaqSection />

      {/* Final CTA */}
      <section
        id="schedule"
        className="relative overflow-hidden bg-[#f8f7f4] px-6 py-24"
      >
        <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-cyan-200/30 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-teal-200/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-sky-950 via-cyan-900 to-teal-800 p-8 shadow-[0_30px_100px_rgba(15,23,42,0.22)] md:p-14 lg:p-16">
            <div className="absolute right-10 top-10 h-64 w-64 rounded-full bg-cyan-200/10 blur-3xl" />

            <div className="relative grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-100">
                  Start the conversation
                </p>

                <h2 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-white md:text-5xl">
                  Let&apos;s build a plan around what matters most to you.
                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-cyan-50/85">
                  Schedule a relaxed, no-pressure conversation to review your
                  goals, understand your options, and take the next step with
                  confidence.
                </p>

                <div className="mt-8 flex flex-wrap gap-4 text-sm text-cyan-50/90">
                  <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-md">
                    Clear explanations
                  </span>

                  <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-md">
                    Personalized guidance
                  </span>

                  <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-md">
                    Convenient scheduling
                  </span>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/15 bg-white/10 p-7 backdrop-blur-xl md:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-100">
                  Book your consultation
                </p>

                <p className="mt-4 text-2xl font-bold text-white">
                  Choose a time that works for you.
                </p>

                <p className="mt-4 leading-7 text-cyan-50/80">
                  You&apos;ll be taken to the Diamond Insurance Agency
                  scheduling page to select an available appointment.
                </p>

                <a
                  href={calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-sky-950 shadow-xl transition hover:-translate-y-1 hover:bg-cyan-50"
                >
                  Schedule a Consultation
                  <span aria-hidden="true">→</span>
                </a>

                <p className="mt-4 text-center text-xs leading-5 text-cyan-50/65">
                  Scheduling a consultation does not obligate you to purchase
                  coverage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
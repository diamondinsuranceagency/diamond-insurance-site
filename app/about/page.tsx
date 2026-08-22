import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const calendlyUrl = "https://calendly.com/diamondinsurance/life";

const profilePhotoUrl =
  "https://r2.fivemanage.com/XB7J4vUUmXztfNpdKvj67/profilepic.png";

const states = [
  "Florida",
  "Texas",
  "Virginia",
  "Maryland",
  "North Carolina",
  "Ohio",
];

const carriers = [
  "American General Life Insurance",
  "American Amicable",
  "United Home Life",
  "ManhattanLife",
];

const expectations = [
  {
    number: "01",
    title: "Listen First",
    description:
      "Every conversation begins with your goals, family responsibilities, budget, and questions.",
  },
  {
    number: "02",
    title: "Explain Clearly",
    description:
      "Coverage options are discussed in straightforward language without unnecessary jargon.",
  },
  {
    number: "03",
    title: "Compare Options",
    description:
      "Available solutions can be reviewed across multiple insurance carriers when appropriate.",
  },
  {
    number: "04",
    title: "Support the Decision",
    description:
      "You receive the information needed to make your own informed decision without unnecessary pressure.",
  },
];

export const metadata: Metadata = {
  title: "Meet John Williams | Diamond Insurance Agency",
  description:
    "Meet John Williams of Diamond Insurance Agency, an insurance professional with five years of experience serving clients across six states.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f8f7f4] text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-950 via-cyan-900 to-teal-800 px-6 pb-24 pt-16 text-white md:pb-28">
        <div className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-cyan-300/10 blur-3xl" />
        <div className="absolute -bottom-40 left-1/4 h-[30rem] w-[30rem] rounded-full bg-teal-300/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <Link
            href="/"
            className="text-sm font-semibold text-cyan-100 transition hover:text-white"
          >
            ← Return Home
          </Link>

          <div className="mt-14 grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-100">
                Meet your advisor
              </p>

              <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
                Meet John Williams
              </h1>

              <p className="mt-7 max-w-2xl text-xl leading-9 text-cyan-50/90">
                Helping individuals and families understand their insurance
                options and make informed decisions with clarity and
                confidence.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href={calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white px-8 py-4 text-center font-bold text-sky-950 shadow-xl transition hover:-translate-y-1 hover:bg-cyan-50"
                >
                  Schedule a Consultation
                </a>

                <Link
                  href="/reviews"
                  className="rounded-full border border-white/25 bg-white/10 px-8 py-4 text-center font-bold text-white backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/15"
                >
                  Read Client Reviews
                </Link>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-lg">
              <div className="absolute -inset-5 rounded-[2.75rem] bg-gradient-to-br from-cyan-300/25 to-teal-300/10 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/20 bg-white/10 p-3 shadow-2xl shadow-slate-950/30 backdrop-blur-xl">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-slate-900">
                  <Image
                    src={profilePhotoUrl}
                    alt="John Williams of Diamond Insurance Agency"
                    fill
                    priority
                    sizes="(max-width: 1024px) 90vw, 480px"
                    className="object-cover"
                  />

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent px-7 pb-7 pt-24">
                    <p className="text-2xl font-bold">John Williams</p>
                    <p className="mt-1 text-cyan-100">
                      Diamond Insurance Agency
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-4 rounded-2xl border border-slate-200 bg-white px-6 py-5 text-slate-900 shadow-2xl sm:-left-8">
                <p className="text-3xl font-bold text-teal-800">5+</p>
                <p className="mt-1 text-sm font-semibold">
                  Years of experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="relative z-10 -mt-8 px-6">
        <div className="mx-auto grid max-w-7xl gap-4 rounded-[2rem] border border-white bg-white p-5 shadow-[0_24px_70px_rgba(15,23,42,0.12)] sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl bg-[#f8f7f4] p-5 text-center">
            <p className="text-3xl font-bold text-teal-800">5+</p>
            <p className="mt-2 text-sm font-semibold text-slate-600">
              Years of experience
            </p>
          </div>

          <div className="rounded-2xl bg-[#f8f7f4] p-5 text-center">
            <p className="text-3xl font-bold text-teal-800">6</p>
            <p className="mt-2 text-sm font-semibold text-slate-600">
              States served
            </p>
          </div>

          <div className="rounded-2xl bg-[#f8f7f4] p-5 text-center">
            <p className="text-3xl font-bold text-teal-800">4+</p>
            <p className="mt-2 text-sm font-semibold text-slate-600">
              Insurance carriers
            </p>
          </div>

          <div className="rounded-2xl bg-[#f8f7f4] p-5 text-center">
            <p className="text-3xl font-bold text-teal-800">100%</p>
            <p className="mt-2 text-sm font-semibold text-slate-600">
              Client-focused guidance
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-700">
              A personal approach
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              Insurance should feel understandable—not overwhelming.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-slate-600">
            <p>
              Insurance is not simply about purchasing a policy. It is about
              helping protect the people, responsibilities, and goals that
              matter most when life does not go according to plan.
            </p>

            <p>
              For more than five years, John Williams has helped individuals
              and families explore life insurance and supplemental coverage
              through clear, thoughtful conversations.
            </p>

            <p>
              The goal is not to rush anyone into a decision. It is to
              understand each client&apos;s priorities, explain available
              options, and help them evaluate coverage that fits their needs and
              budget.
            </p>
          </div>
        </div>
      </section>

      {/* Expectations */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-700">
              What clients can expect
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              Guidance built around the person—not the policy.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Every recommendation should begin with understanding what the
              client is trying to protect.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {expectations.map((item) => (
              <article
                key={item.number}
                className="group rounded-[2rem] border border-slate-200 bg-[#f8f7f4] p-7 transition duration-300 hover:-translate-y-2 hover:border-teal-200 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-950 to-teal-700 text-xs font-bold tracking-[0.14em] text-white">
                  {item.number}
                </div>

                <h3 className="mt-7 text-2xl font-bold">{item.title}</h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>

                <div className="mt-7 h-1 w-12 rounded-full bg-gradient-to-r from-cyan-400 to-teal-600 transition-all duration-300 group-hover:w-20" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Licensed states */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-700">
              States served
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              Serving clients across six states.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Licensing and product availability may vary by state, insurance
              carrier, product, and applicant.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {states.map((state) => (
              <div
                key={state}
                className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-50 font-bold text-teal-800"
                >
                  ✓
                </span>

                <p className="text-lg font-bold">{state}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Carriers */}
      <section className="bg-slate-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">
                Insurance carriers
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                Access to multiple established carriers.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                Working with multiple insurance carriers may provide access to
                different underwriting approaches, policy structures, and
                coverage options.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {carriers.map((carrier) => (
                <div
                  key={carrier}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
                >
                  <p className="text-lg font-bold">{carrier}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-10 text-sm leading-7 text-slate-400">
            Carrier appointments and product availability may change. The
            inclusion of a carrier name does not represent an endorsement,
            guarantee of eligibility, or guarantee that every carrier or
            product is available in every state.
          </p>
        </div>
      </section>

      {/* Coverage links */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-700">
              Explore your options
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              Learn before you make a decision.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <Link
              href="/whole-life-insurance"
              className="group rounded-[2rem] border border-slate-200 bg-[#f8f7f4] p-8 transition hover:-translate-y-2 hover:border-teal-200 hover:shadow-xl"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
                Permanent protection
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                Whole Life Insurance
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Explore lifetime coverage, cash value, benefits, and
                limitations.
              </p>

              <p className="mt-7 font-bold text-teal-800">
                Learn more <span aria-hidden="true">→</span>
              </p>
            </Link>

            <Link
              href="/term-life-insurance"
              className="group rounded-[2rem] border border-slate-200 bg-[#f8f7f4] p-8 transition hover:-translate-y-2 hover:border-teal-200 hover:shadow-xl"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
                Temporary protection
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                Term Life Insurance
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Understand term lengths, costs, common uses, and conversion
                considerations.
              </p>

              <p className="mt-7 font-bold text-teal-800">
                Learn more <span aria-hidden="true">→</span>
              </p>
            </Link>

            <Link
              href="/living-benefits"
              className="group rounded-[2rem] border border-slate-200 bg-[#f8f7f4] p-8 transition hover:-translate-y-2 hover:border-teal-200 hover:shadow-xl"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
                Policy features
              </p>

              <h3 className="mt-4 text-2xl font-bold">Living Benefits</h3>

              <p className="mt-4 leading-7 text-slate-600">
                Learn how certain policies may provide access to benefits after
                qualifying events.
              </p>

              <p className="mt-7 font-bold text-teal-800">
                Learn more <span aria-hidden="true">→</span>
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-sky-950 via-cyan-900 to-teal-800 p-8 text-white shadow-2xl md:p-14">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-100">
                Start the conversation
              </p>

              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                Let&apos;s review what matters most to you.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-cyan-50/85">
                Schedule a relaxed, no-pressure consultation to discuss your
                goals, budget, current coverage, and available options.
              </p>
            </div>

            <div className="lg:text-right">
              <a
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full bg-white px-8 py-4 font-bold text-sky-950 transition hover:-translate-y-1 hover:bg-cyan-50"
              >
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="border-t border-slate-200 bg-white px-6 py-10">
        <div className="mx-auto max-w-7xl text-sm leading-7 text-slate-500">
          Insurance licensing, carrier appointments, coverage availability,
          premiums, benefits, exclusions, and underwriting requirements vary by
          state, carrier, policy, and applicant. Information on this page is for
          general educational purposes and is not a guarantee of eligibility or
          coverage.
        </div>
      </section>
    </main>
  );
}
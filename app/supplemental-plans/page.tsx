import type { Metadata } from "next";
import Link from "next/link";

const calendlyUrl = "https://calendly.com/diamondinsurance/life";

export const metadata: Metadata = {
  title: "Supplemental Insurance Plans | Diamond Insurance Agency",
  description:
    "Learn how supplemental insurance may help with certain expenses not fully covered by major medical insurance.",
};

export default function SupplementalPlansPage() {
  return (
    <main className="min-h-screen bg-[#f8f7f4] text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-950 via-cyan-900 to-teal-800 px-6 py-28 text-white">
        <div className="absolute -right-24 top-12 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />
        <div className="absolute -bottom-32 left-1/4 h-96 w-96 rounded-full bg-teal-300/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <Link
            href="/"
            className="text-sm font-semibold text-cyan-100 transition hover:text-white"
          >
            ← Return Home
          </Link>

          <p className="mt-12 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-100">
            Additional financial protection
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
            Supplemental coverage for expenses life may bring.
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-cyan-50/90 md:text-xl">
            Supplemental insurance may provide benefits for certain qualifying
            events and expenses that major medical insurance does not fully
            address.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-8 py-4 text-center font-bold text-sky-950 shadow-xl transition hover:-translate-y-1 hover:bg-cyan-50"
            >
              Discuss Supplemental Options
            </a>

            <Link
              href="/learn"
              className="rounded-full border border-white/25 bg-white/10 px-8 py-4 text-center font-bold text-white backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/15"
            >
              Visit the Learning Center
            </Link>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">
              How it works
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              Coverage designed to complement—not replace—medical insurance.
            </h2>

            <p className="mt-7 text-lg leading-8 text-slate-600">
              Supplemental plans may pay benefits after a qualifying illness,
              injury, hospitalization, or other covered event. The exact
              benefit structure depends on the policy.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Some policies pay benefits directly to the insured person, while
              others may pay a provider. Benefits, exclusions, waiting periods,
              and claim requirements vary by carrier and product.
            </p>
          </div>

          <aside className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
              Important distinction
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              Supplemental insurance is not major medical insurance.
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              These plans are generally designed to provide additional benefits
              for specific covered events. They should not be treated as a
              replacement for comprehensive health coverage.
            </p>
          </aside>
        </div>
      </section>

      {/* Possible uses */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">
              Potential uses
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Benefits may help with more than medical bills.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Deductibles and copayments",
                text: "Help address certain out-of-pocket healthcare expenses.",
              },
              {
                title: "Household bills",
                text: "Support everyday expenses during a covered illness or injury.",
              },
              {
                title: "Transportation",
                text: "Help with travel, lodging, or transportation related to care.",
              },
              {
                title: "Childcare or caregiving",
                text: "Assist with additional support needs during recovery.",
              },
              {
                title: "Lost income",
                text: "Provide funds that may help when work is interrupted.",
              },
              {
                title: "Recovery expenses",
                text: "Help address other eligible costs associated with a covered event.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-[2rem] border border-slate-200 bg-[#f8f7f4] p-7 transition hover:-translate-y-1 hover:border-teal-200 hover:shadow-lg"
              >
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages and limitations */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-teal-100 bg-teal-50 p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
              Potential advantages
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              Why people consider supplemental coverage
            </h2>

            <ul className="mt-7 space-y-4 leading-7 text-slate-700">
              <li>✓ May provide benefits for specific covered events</li>
              <li>✓ May help with certain out-of-pocket costs</li>
              <li>✓ Some plans pay benefits directly to the insured</li>
              <li>✓ Can complement existing medical coverage</li>
              <li>✓ Different options may address different risks</li>
            </ul>
          </article>

          <article className="rounded-[2rem] border border-slate-200 bg-white p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Important limitations
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              What you need to understand
            </h2>

            <ul className="mt-7 space-y-4 leading-7 text-slate-600">
              <li>• Only specifically covered events may qualify</li>
              <li>• Waiting periods or exclusions may apply</li>
              <li>• Benefit amounts may be limited</li>
              <li>• Pre-existing-condition provisions may apply</li>
              <li>• Coverage does not replace major medical insurance</li>
            </ul>
          </article>
        </div>
      </section>

      {/* Questions */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">
            Before choosing a plan
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Questions worth asking
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {[
              "Which events or conditions are covered?",
              "How are benefits calculated and paid?",
              "Are there waiting periods?",
              "Do pre-existing-condition limitations apply?",
              "What exclusions are included?",
              "Does the policy pay me or the provider?",
              "How does this work with my current health coverage?",
              "Can premiums or benefits change?",
            ].map((question) => (
              <div
                key={question}
                className="rounded-2xl border border-slate-200 bg-[#f8f7f4] p-5 font-semibold"
              >
                {question}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-gradient-to-br from-sky-950 via-cyan-900 to-teal-800 p-8 text-white shadow-2xl md:p-14">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-100">
                Review your options
              </p>

              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                See whether supplemental coverage fits your situation.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-cyan-50/85">
                Schedule a conversation to review available plans, costs,
                exclusions, and how coverage may coordinate with your current
                insurance.
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
          This information is for general educational purposes only.
          Supplemental insurance is not a substitute for major medical
          insurance. Product availability, premiums, benefits, exclusions,
          waiting periods, eligibility, and underwriting requirements vary by
          carrier, policy, location, and applicant. Review the actual policy
          documents before making a decision.
        </div>
      </section>
    </main>
  );
}
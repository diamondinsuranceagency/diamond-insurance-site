import type { Metadata } from "next";
import Link from "next/link";

const calendlyUrl = "https://calendly.com/diamondinsurance/life";

export const metadata: Metadata = {
  title: "Life Insurance With Living Benefits | Diamond Insurance Agency",
  description:
    "Learn how certain life insurance policies may provide access to part of the death benefit after qualifying terminal, chronic, or critical health events.",
};

export default function LivingBenefitsPage() {
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
            Policy features
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
            Life insurance that may provide benefits while you are living.
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-cyan-50/90 md:text-xl">
            Certain life insurance policies include riders that may allow
            access to part of the death benefit after a qualifying terminal,
            chronic, or critical health event.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-8 py-4 text-center font-bold text-sky-950 shadow-xl transition hover:-translate-y-1 hover:bg-cyan-50"
            >
              Discuss Living Benefits
            </a>

            <Link
              href="/learn/what-are-living-benefits"
              className="rounded-full border border-white/25 bg-white/10 px-8 py-4 text-center font-bold text-white backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/15"
            >
              Read the Living Benefits Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">
              How living benefits work
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              Potential access to policy benefits after a qualifying event.
            </h2>

            <p className="mt-7 text-lg leading-8 text-slate-600">
              Living benefits are often provided through accelerated death
              benefit riders. When a qualifying event meets the policy&apos;s
              definition and the claim is approved, the policy owner may be
              able to access part of the death benefit early.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Using an accelerated benefit generally reduces the amount
              remaining for beneficiaries. Fees, interest, actuarial
              adjustments, limits, and other provisions may apply.
            </p>
          </div>

          <aside className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
              Important
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              Living benefits are not health insurance.
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              These riders are connected to a life insurance policy. They do
              not replace major medical, disability, or long-term-care
              insurance.
            </p>
          </aside>
        </div>
      </section>

      {/* Qualifying events */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">
              Potential qualifying events
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Coverage definitions vary by policy.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              A diagnosis does not automatically qualify. The event must meet
              the definitions and requirements contained in the policy.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Terminal illness",
                text: "May apply when an illness meets the policy’s life-expectancy definition.",
              },
              {
                title: "Chronic illness",
                text: "May apply when the insured cannot perform certain activities of daily living or requires substantial supervision.",
              },
              {
                title: "Critical illness",
                text: "May apply after certain qualifying diagnoses listed in the rider.",
              },
              {
                title: "Critical injury",
                text: "Some policies may include benefits for specified severe injuries.",
              },
              {
                title: "Long-term care needs",
                text: "Certain products may include separate features related to qualifying care needs.",
              },
              {
                title: "Other covered events",
                text: "Available riders and definitions depend on the carrier and product.",
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

      {/* Uses */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">
                Potential uses
              </p>

              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                Benefits may help address financial pressure during illness.
              </h2>

              <p className="mt-7 text-lg leading-8 text-slate-600">
                Depending on the policy and applicable rules, funds may be used
                for different personal needs. The policy does not necessarily
                restrict the payment to medical expenses.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Medical or treatment-related expenses",
                "Household bills",
                "Mortgage or rent payments",
                "Travel related to care",
                "Home modifications",
                "Caregiver expenses",
                "Lost income",
                "Other personal priorities",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold shadow-sm"
                >
                  ✓ {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advantages and limitations */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-teal-100 bg-teal-50 p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
              Potential advantages
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              Why people consider living-benefit riders
            </h2>

            <ul className="mt-7 space-y-4 leading-7 text-slate-700">
              <li>✓ Potential access to benefits while alive</li>
              <li>✓ May help during a qualifying health event</li>
              <li>✓ Some riders may be included with the policy</li>
              <li>✓ Funds may provide additional financial flexibility</li>
              <li>✓ Can complement other protection strategies</li>
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
              <li>• Claims must meet specific policy definitions</li>
              <li>• Using benefits generally reduces the death benefit</li>
              <li>• Fees or actuarial reductions may apply</li>
              <li>• Benefit limits and waiting periods may apply</li>
              <li>• Payments may affect taxes or public benefits</li>
            </ul>
          </article>
        </div>
      </section>

      {/* Questions */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">
            Before choosing a policy
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Questions worth asking
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {[
              "Which living-benefit riders are included?",
              "What conditions trigger each rider?",
              "How is the accelerated payment calculated?",
              "What fees or reductions may apply?",
              "How much of the death benefit can be accessed?",
              "How will using the benefit affect beneficiaries?",
              "Is medical certification required?",
              "Could the payment affect taxes or public benefits?",
            ].map((question) => (
              <div
                key={question}
                className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold shadow-sm"
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
                Review available features
              </p>

              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                Compare policies and understand the details before applying.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-cyan-50/85">
                Schedule a no-pressure conversation to review policy options,
                rider definitions, costs, and limitations.
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
          This information is for general educational purposes only. Living
          benefit availability, definitions, eligibility, claim requirements,
          payment calculations, fees, exclusions, waiting periods and tax
          treatment vary by insurance carrier and policy. Accessing an
          accelerated benefit generally reduces the policy death benefit.
          Review the actual policy documents and consult qualified legal or tax
          professionals when appropriate.
        </div>
      </section>
    </main>
  );
}
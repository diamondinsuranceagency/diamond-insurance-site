import type { Metadata } from "next";
import Link from "next/link";

const calendlyUrl = "https://calendly.com/diamondinsurance/life";

export const metadata: Metadata = {
  title: "Term Life Insurance | Diamond Insurance Agency",
  description:
    "Learn how term life insurance works, what it may help protect, and what to consider when comparing coverage periods and benefit amounts.",
};

export default function TermLifeInsurancePage() {
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
            Life insurance coverage
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
            Term life insurance for the years that matter most.
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-cyan-50/90 md:text-xl">
            Term life insurance provides coverage for a defined period and may
            help protect your family during years of significant financial
            responsibility.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-8 py-4 text-center font-bold text-sky-950 shadow-xl transition hover:-translate-y-1 hover:bg-cyan-50"
            >
              Discuss Term Coverage
            </a>

            <Link
              href="/learn/whole-life-vs-term-life"
              className="rounded-full border border-white/25 bg-white/10 px-8 py-4 text-center font-bold text-white backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/15"
            >
              Compare Term and Whole Life
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
              Straightforward protection for a specific period.
            </h2>

            <p className="mt-7 text-lg leading-8 text-slate-600">
              A term policy generally provides a death benefit when the insured
              person dies while the policy is active. Common term periods
              include 10, 20, and 30 years, although available options vary by
              carrier, age, and product.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Term coverage usually does not build cash value. Because the
              coverage is temporary, it may provide a larger initial death
              benefit for a lower premium than permanent life insurance.
            </p>
          </div>

          <aside className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
              Common term lengths
            </p>

            <div className="mt-7 space-y-4">
              {[
                ["10 years", "Shorter-term financial responsibilities"],
                ["20 years", "Family and income-protection years"],
                ["30 years", "Longer mortgages or young families"],
              ].map(([term, description]) => (
                <div
                  key={term}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <p className="text-xl font-bold">{term}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {/* Uses */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">
              What it may protect
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Coverage built around real financial responsibilities.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Income replacement",
                text: "Help your household manage daily expenses if your income is no longer available.",
              },
              {
                title: "Mortgage protection",
                text: "Help address an outstanding mortgage or other housing obligations.",
              },
              {
                title: "Children and education",
                text: "Support childcare, education, and other family needs.",
              },
              {
                title: "Outstanding debt",
                text: "Help manage certain personal loans, vehicle debt, or other obligations.",
              },
              {
                title: "Business responsibilities",
                text: "Support certain key-person, ownership, or business-related needs.",
              },
              {
                title: "Final expenses",
                text: "Help beneficiaries manage funeral and other end-of-life costs.",
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
              Why people consider term insurance
            </h2>

            <ul className="mt-7 space-y-4 leading-7 text-slate-700">
              <li>✓ Often lower initial premiums than permanent coverage</li>
              <li>✓ Coverage periods can match temporary obligations</li>
              <li>✓ May provide a substantial death benefit</li>
              <li>✓ Relatively straightforward policy structure</li>
              <li>✓ Certain policies may offer conversion options</li>
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
              <li>• Coverage ends when the selected term expires</li>
              <li>• Renewal premiums may increase substantially</li>
              <li>• Most term policies do not build cash value</li>
              <li>• Qualification later may be affected by health or age</li>
              <li>• Conversion rules and deadlines vary by policy</li>
            </ul>
          </article>
        </div>
      </section>

      {/* Questions */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">
            Before choosing coverage
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Questions worth asking
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {[
              "How long will my family need income protection?",
              "Which debts or obligations should the policy address?",
              "What death-benefit amount should I consider?",
              "Is the premium guaranteed during the full term?",
              "Can the policy be converted to permanent coverage?",
              "What happens when the term expires?",
              "Which exclusions or limitations apply?",
              "Can I maintain the premium comfortably?",
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
                Find a term length and benefit amount that fit your goals.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-cyan-50/85">
                Schedule a no-pressure conversation to review your priorities,
                budget, and available coverage options.
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
          This information is for general educational purposes only. Coverage
          availability, premiums, term lengths, conversion rights, benefits,
          exclusions, eligibility, and underwriting requirements vary by
          carrier, product, and applicant. Review the actual policy documents
          before making a decision.
        </div>
      </section>
    </main>
  );
}
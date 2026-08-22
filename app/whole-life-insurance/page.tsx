import type { Metadata } from "next";
import Link from "next/link";

const calendlyUrl = "https://calendly.com/diamondinsurance/life";

export const metadata: Metadata = {
  title: "Whole Life Insurance | Diamond Insurance Agency",
  description:
    "Learn how whole life insurance works, including lifetime coverage, cash value, costs, advantages, and limitations.",
};

export default function WholeLifeInsurancePage() {
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
            Permanent life insurance
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
            Whole life insurance designed for permanent protection.
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-cyan-50/90 md:text-xl">
            Whole life insurance is designed to remain in force throughout your
            lifetime when policy requirements are met and required premiums are
            paid.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-8 py-4 text-center font-bold text-sky-950 shadow-xl transition hover:-translate-y-1 hover:bg-cyan-50"
            >
              Discuss Whole Life Coverage
            </a>

            <Link
              href="/learn/whole-life-vs-term-life"
              className="rounded-full border border-white/25 bg-white/10 px-8 py-4 text-center font-bold text-white backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/15"
            >
              Compare Whole and Term Life
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
              Permanent coverage with a cash value component.
            </h2>

            <p className="mt-7 text-lg leading-8 text-slate-600">
              Whole life insurance generally combines a death benefit with a
              cash value component. Many policies are designed with level
              premiums, although exact guarantees and terms vary by carrier and
              product.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              As premiums are paid, part of the policy value may accumulate over
              time. Policy owners may be able to access that value through
              withdrawals or loans, subject to the contract’s terms.
            </p>
          </div>

          <aside className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
              Common features
            </p>

            <div className="mt-7 space-y-4">
              {[
                ["Lifetime protection", "Coverage designed to remain active for life"],
                ["Level premiums", "Many policies use predictable premium structures"],
                ["Cash value", "A portion of policy value may accumulate over time"],
              ].map(([title, description]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <p className="text-xl font-bold">{title}</p>
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
              What it may help address
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Coverage for long-term financial priorities.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Final expenses",
                text: "Help beneficiaries manage funeral, burial, medical, and estate-related costs.",
              },
              {
                title: "Legacy planning",
                text: "Leave money to children, grandchildren, charities, or other beneficiaries.",
              },
              {
                title: "Permanent family protection",
                text: "Maintain a death benefit intended to remain in place throughout life.",
              },
              {
                title: "Estate planning support",
                text: "Potentially provide liquidity for certain estate-related obligations.",
              },
              {
                title: "Business planning",
                text: "Support certain ownership, succession, or key-person arrangements.",
              },
              {
                title: "Cash value access",
                text: "Potentially access accumulated policy value, subject to policy terms.",
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
              Why people consider whole life insurance
            </h2>

            <ul className="mt-7 space-y-4 leading-7 text-slate-700">
              <li>✓ Permanent coverage when policy requirements are met</li>
              <li>✓ Predictable premiums on many policies</li>
              <li>✓ Cash value accumulation</li>
              <li>✓ Death benefit for beneficiaries</li>
              <li>✓ Potential policy loan or withdrawal options</li>
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
              <li>• Premiums are usually higher than term insurance</li>
              <li>• Cash value may take time to accumulate</li>
              <li>• Surrender charges may apply</li>
              <li>• Policy loans can reduce the death benefit</li>
              <li>• Loans or withdrawals may create tax consequences</li>
            </ul>
          </article>
        </div>
      </section>

      {/* Cash value */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">
                Understanding cash value
              </p>

              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                A policy feature, not free money.
              </h2>

              <p className="mt-7 text-lg leading-8 text-slate-600">
                Cash value is a component of many whole life policies. It may
                grow according to guarantees and other policy provisions.
              </p>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Accessing cash value through a loan or withdrawal can reduce the
                death benefit and may affect the policy’s ability to remain in
                force.
              </p>
            </div>

            <div className="rounded-[2rem] bg-slate-950 p-8 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
                Questions to ask
              </p>

              <ul className="mt-6 space-y-4 leading-7 text-slate-300">
                <li>• How is the cash value guaranteed to grow?</li>
                <li>• Are dividends projected or guaranteed?</li>
                <li>• What happens if I borrow from the policy?</li>
                <li>• What surrender charges apply?</li>
                <li>• How could withdrawals affect the death benefit?</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Who may consider */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">
            Who may consider it
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Whole life may fit certain permanent needs.
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {[
              "People planning for permanent final expenses",
              "Families wanting a death benefit intended to last for life",
              "People seeking predictable premiums",
              "Business owners with long-term planning needs",
              "People interested in a policy with cash value",
              "Individuals focused on legacy or estate goals",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold"
              >
                {item}
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
                See whether permanent coverage fits your goals and budget.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-cyan-50/85">
                Schedule a no-pressure conversation to compare whole life, term
                life, and other available options.
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
          This information is for general educational purposes only. Policy
          availability, premiums, guarantees, cash value, dividends, surrender
          charges, loans, withdrawals, exclusions, eligibility, and
          underwriting requirements vary by carrier, product, and applicant.
          Review the actual policy documents before making a decision.
        </div>
      </section>
    </main>
  );
}
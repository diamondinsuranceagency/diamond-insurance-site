import type { Metadata } from "next";
import LearnArticle from "../../components/learn/LearnArticle";

export const metadata: Metadata = {
  title: "How Much Life Insurance Do I Need? | Diamond Insurance Agency",
  description:
    "Learn how income, debts, family responsibilities, future expenses, and existing resources can affect your life insurance needs.",
};

export default function HowMuchLifeInsuranceDoINeedPage() {
  return (
    <LearnArticle
  title="How Much Life Insurance Do I Need?"
  description="A practical guide to estimating coverage based on your family, income, debts, future expenses, and existing financial resources."
  category="Planning"
  slug="how-much-life-insurance-do-i-need"
  datePublished="2026-08-05"
  readingTime={8}
>
      <section className="space-y-5">
        <h2 className="text-3xl font-bold text-slate-900">
          There is no single right number
        </h2>

        <p className="text-lg leading-8 text-slate-600">
          The amount of life insurance someone may need depends on the financial
          responsibilities that would remain after their death. A useful
          estimate should reflect your actual situation rather than a generic
          rule alone.
        </p>

        <p className="text-lg leading-8 text-slate-600">
          The goal is to identify enough coverage to address your priorities
          while keeping the premium affordable enough to maintain.
        </p>
      </section>

      <section className="mt-14">
        <h2 className="text-3xl font-bold text-slate-900">
          Start with the obligations you want to protect
        </h2>

        <div className="mt-7 grid gap-5 sm:grid-cols-2">
          {[
            {
              title: "Income replacement",
              text: "Consider how many years your household may need financial support.",
            },
            {
              title: "Mortgage or housing",
              text: "Include the remaining mortgage balance or future rent obligations.",
            },
            {
              title: "Other debts",
              text: "Review personal loans, credit cards, vehicle loans, and business debts.",
            },
            {
              title: "Education expenses",
              text: "Estimate future education costs for children or other dependents.",
            },
            {
              title: "Final expenses",
              text: "Include funeral, burial, medical, and estate-settlement expenses.",
            },
            {
              title: "Care responsibilities",
              text: "Account for childcare, eldercare, or support for other dependents.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <h3 className="text-xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14 rounded-3xl bg-slate-950 p-8 text-white">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
          A simple starting framework
        </p>

        <h2 className="mt-4 text-3xl font-bold">
          Needs minus available resources
        </h2>

        <div className="mt-7 space-y-4 text-lg leading-8 text-slate-300">
          <p>
            Add the financial obligations you want the policy to address.
          </p>

          <p>
            Then subtract resources already available, such as savings,
            investments, current life insurance, and certain employer benefits.
          </p>
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="font-bold text-white">
            Estimated coverage need =
          </p>

          <p className="mt-2 text-xl text-cyan-100">
            Financial obligations − available resources
          </p>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-3xl font-bold text-slate-900">
          Example calculation
        </h2>

        <div className="mt-7 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          {[
            ["Income replacement", "$500,000"],
            ["Mortgage balance", "$250,000"],
            ["Education goals", "$100,000"],
            ["Final expenses and debts", "$50,000"],
            ["Total estimated need", "$900,000"],
            ["Existing savings and coverage", "− $150,000"],
            ["Estimated coverage gap", "$750,000"],
          ].map(([label, amount], index) => (
            <div
              key={label}
              className={`flex items-center justify-between gap-6 px-6 py-5 ${
                index > 0 ? "border-t border-slate-200" : ""
              } ${
                label === "Estimated coverage gap"
                  ? "bg-cyan-50 font-bold text-slate-900"
                  : "text-slate-600"
              }`}
            >
              <p>{label}</p>
              <p>{amount}</p>
            </div>
          ))}
        </div>

        <p className="mt-4 text-sm leading-7 text-slate-500">
          This example is for illustration only and is not a recommendation.
        </p>
      </section>

      <section className="mt-14 space-y-5">
        <h2 className="text-3xl font-bold text-slate-900">
          Common rules of thumb
        </h2>

        <p className="text-lg leading-8 text-slate-600">
          Some people begin with a multiple of annual income, such as 5 to 10
          times income. That can be a quick reference point, but it may overlook
          major details such as debt, childcare, education goals, or existing
          assets.
        </p>

        <p className="text-lg leading-8 text-slate-600">
          A detailed needs analysis is usually more useful than relying on an
          income multiple alone.
        </p>
      </section>

      <section className="mt-14">
        <h2 className="text-3xl font-bold text-slate-900">
          What can reduce the amount you may need?
        </h2>

        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          {[
            "Existing personal life insurance",
            "Employer-provided life insurance",
            "Savings and investments",
            "Retirement assets",
            "Other household income",
            "Assets intended for beneficiaries",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-200 bg-white p-5"
            >
              <p className="font-semibold text-slate-800">✓ {item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14 rounded-3xl bg-cyan-50 p-8">
        <h2 className="text-3xl font-bold text-slate-900">
          Affordability matters
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-600">
          A policy only provides protection while it remains active. Purchasing
          more coverage than you can comfortably maintain may create problems
          later.
        </p>

        <p className="mt-5 text-lg leading-8 text-slate-600">
          It may be better to begin with sustainable coverage and review it as
          your income, family, debts, and goals change.
        </p>
      </section>

      <section className="mt-14 space-y-5">
        <h2 className="text-3xl font-bold text-slate-900">
          When should you review your coverage?
        </h2>

        <p className="text-lg leading-8 text-slate-600">
          Major life events can change your insurance needs. Consider reviewing
          your coverage after:
        </p>

        <ul className="space-y-3 text-lg leading-8 text-slate-600">
          <li>• Marriage or divorce</li>
          <li>• Birth or adoption of a child</li>
          <li>• Buying or refinancing a home</li>
          <li>• A major income change</li>
          <li>• Starting or selling a business</li>
          <li>• Taking on substantial debt</li>
          <li>• Retirement or a major change in financial goals</li>
        </ul>
      </section>

      <section className="mt-14 space-y-5">
        <h2 className="text-3xl font-bold text-slate-900">
          Questions to bring to a consultation
        </h2>

        <div className="space-y-4">
          {[
            "How long would my family need income support?",
            "Which debts should the policy address?",
            "What future expenses matter most to me?",
            "How much coverage do I already have?",
            "What premium can I maintain comfortably?",
            "Should I consider term, permanent coverage, or both?",
          ].map((question) => (
            <div
              key={question}
              className="rounded-2xl border border-slate-200 bg-white p-5"
            >
              <p className="font-semibold text-slate-800">{question}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14 border-t border-slate-200 pt-8">
        <p className="text-sm leading-7 text-slate-500">
          This guide provides general educational information and does not
          constitute financial, legal, tax, or insurance advice. Coverage needs,
          affordability, eligibility, pricing, and product availability vary by
          applicant and insurance carrier.
        </p>
      </section>
    </LearnArticle>
  );
}

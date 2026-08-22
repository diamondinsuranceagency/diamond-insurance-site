import type { Metadata } from "next";
import LearnArticle from "../../components/learn/LearnArticle";

export const metadata: Metadata = {
  title: "What Is Life Insurance? | Diamond Insurance Agency",
  description:
    "Learn how life insurance works, what it can help protect, and what to consider before choosing coverage.",
};

export default function WhatIsLifeInsurancePage() {
  return (
    <LearnArticle
  title="What Is Life Insurance?"
  description="A straightforward guide to how life insurance works, why people purchase it, and what to consider before choosing coverage."
  category="Life Insurance Basics"
  slug="what-is-life-insurance"
  datePublished="2026-08-05"
  readingTime={6}
>
      <section className="space-y-5">
        <h2 className="text-3xl font-bold text-slate-900">
          Life insurance in simple terms
        </h2>

        <p className="text-lg leading-8 text-slate-600">
          Life insurance is an agreement between you and an insurance company.
          You pay premiums to keep the policy active, and the company may pay a
          death benefit to the people or organizations you name as
          beneficiaries when you die.
        </p>

        <p className="text-lg leading-8 text-slate-600">
          The primary purpose is financial protection. The money may help your
          beneficiaries manage expenses and responsibilities that remain after
          your death.
        </p>
      </section>

      <section className="mt-14 space-y-5">
        <h2 className="text-3xl font-bold text-slate-900">
          What can life insurance help cover?
        </h2>

        <p className="text-lg leading-8 text-slate-600">
          Every family has different needs, but life insurance proceeds may be
          used for expenses such as:
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          {[
            "Funeral and final expenses",
            "Mortgage or rent payments",
            "Household bills and daily living costs",
            "Outstanding debts",
            "Childcare expenses",
            "Education costs",
            "Replacing lost income",
            "Leaving money to family or charity",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <p className="font-semibold text-slate-800">✓ {item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14 space-y-5">
        <h2 className="text-3xl font-bold text-slate-900">
          The two main types of life insurance
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
              Temporary coverage
            </p>

            <h3 className="mt-3 text-2xl font-bold text-slate-900">
              Term life insurance
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              Term life insurance generally provides coverage for a defined
              period, such as 10, 20, or 30 years. It may offer a larger death
              benefit for a lower initial premium than permanent coverage.
            </p>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
              Permanent coverage
            </p>

            <h3 className="mt-3 text-2xl font-bold text-slate-900">
              Whole life insurance
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              Whole life insurance is designed to remain in force for your
              lifetime when policy requirements are met. It generally includes
              a death benefit and a cash value component.
            </p>
          </article>
        </div>
      </section>

      <section className="mt-14 space-y-5">
        <h2 className="text-3xl font-bold text-slate-900">
          Who may need life insurance?
        </h2>

        <p className="text-lg leading-8 text-slate-600">
          Life insurance may be worth considering when someone depends on you
          financially or when your death would leave expenses for another
          person to manage.
        </p>

        <ul className="space-y-3 text-lg leading-8 text-slate-600">
          <li>• Parents supporting children</li>
          <li>• Married couples or domestic partners</li>
          <li>• Homeowners with a mortgage</li>
          <li>• People supporting aging parents or relatives</li>
          <li>• Business owners or partners</li>
          <li>• Anyone planning for funeral or final expenses</li>
        </ul>
      </section>

      <section className="mt-14 rounded-3xl bg-cyan-50 p-8">
        <h2 className="text-3xl font-bold text-slate-900">
          How much coverage should you consider?
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-600">
          There is no universal number. A useful estimate should consider your
          income, debts, mortgage, family responsibilities, future education
          expenses, final expenses, existing savings, and any current life
          insurance.
        </p>

        <p className="mt-5 text-lg leading-8 text-slate-600">
          The goal is not simply to purchase the largest policy available. The
          goal is to identify an amount that addresses your priorities while
          remaining affordable enough to maintain.
        </p>
      </section>

      <section className="mt-14 space-y-5">
        <h2 className="text-3xl font-bold text-slate-900">
          What affects the cost?
        </h2>

        <p className="text-lg leading-8 text-slate-600">
          Insurance companies may consider several factors when evaluating an
          application:
        </p>

        <ul className="space-y-3 text-lg leading-8 text-slate-600">
          <li>• Age</li>
          <li>• Health and medical history</li>
          <li>• Tobacco or nicotine use</li>
          <li>• Occupation and certain hobbies</li>
          <li>• Coverage amount</li>
          <li>• Policy type and term length</li>
          <li>• Insurance carrier underwriting guidelines</li>
        </ul>
      </section>

      <section className="mt-14 space-y-5">
        <h2 className="text-3xl font-bold text-slate-900">
          Questions to ask before choosing a policy
        </h2>

        <div className="space-y-4">
          {[
            "How long do I need the coverage to last?",
            "Who depends on my income or financial support?",
            "What expenses would remain if I died?",
            "Can I comfortably maintain the premium?",
            "Are the premiums guaranteed or subject to change?",
            "What exclusions, limitations, or waiting periods apply?",
            "Does the policy contain living benefits or optional riders?",
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
          This guide is for general educational purposes. Policy benefits,
          premiums, availability, exclusions, eligibility, and underwriting
          requirements vary by insurance carrier and applicant. Review the
          actual policy documents before making a coverage decision.
        </p>
      </section>
    </LearnArticle>
  );
}

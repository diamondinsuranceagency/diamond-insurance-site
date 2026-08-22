"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqItems: FaqItem[] = [
  {
    question: "What is the difference between term and whole life insurance?",
    answer:
      "Term life insurance generally provides coverage for a specific period, such as 10, 20, or 30 years. Whole life insurance is designed to provide permanent coverage as long as the policy remains in force and required premiums are paid.",
  },
  {
    question: "How much life insurance coverage do I need?",
    answer:
      "The right amount depends on your income, debts, family responsibilities, future expenses, and existing coverage. A consultation can help you review those factors and explore an appropriate coverage range.",
  },
  {
    question: "Will I feel pressured to purchase a policy?",
    answer:
      "No. The goal of the conversation is to understand your needs, explain available options, and help you make an informed decision. Scheduling a consultation does not obligate you to purchase coverage.",
  },
  {
    question: "Can I get life insurance if I have health conditions?",
    answer:
      "Possibly. Eligibility and pricing vary by insurance carrier, medical history, age, lifestyle, and the type of policy. It is worth reviewing your situation rather than assuming you will not qualify.",
  },
  {
    question: "What are supplemental insurance plans?",
    answer:
      "Supplemental plans may help with certain costs that traditional health insurance does not fully cover. Benefits, exclusions, eligibility, and availability depend on the specific plan and carrier.",
  },
  {
    question: "What happens during the first consultation?",
    answer:
      "You will discuss your goals, family responsibilities, budget, current coverage, and questions. From there, you can review potential options and decide whether any of them make sense for you.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  function toggleQuestion(index: number) {
    setOpenIndex((current) => (current === index ? null : index));
  }

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-white px-6 py-24"
    >
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-cyan-100/50 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-teal-100/50 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-700">
            Frequently asked questions
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Clear answers before you make a decision.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Life insurance can feel complicated. These answers cover some of
            the most common questions people have before scheduling a
            conversation.
          </p>

          <a
            href="https://calendly.com/diamondinsurance/life"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-teal-800 px-7 py-4 font-bold text-white shadow-lg shadow-teal-900/15 transition hover:-translate-y-1 hover:bg-teal-900"
          >
            Ask Your Questions
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={item.question}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-[#f8f7f4] shadow-sm transition hover:border-teal-200"
              >
                <button
                  type="button"
                  onClick={() => toggleQuestion(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left md:px-8"
                >
                  <span className="text-lg font-bold text-slate-900">
                    {item.question}
                  </span>

                  <span
                    aria-hidden="true"
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-xl font-medium text-teal-800 shadow-sm transition ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-slate-200 px-6 py-6 md:px-8">
                    <p className="leading-8 text-slate-600">{item.answer}</p>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
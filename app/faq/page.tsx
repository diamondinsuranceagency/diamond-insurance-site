import type { Metadata } from "next";
import Link from "next/link";

const calendlyUrl = "https://calendly.com/diamondinsurance/life";

const faqItems = [
  {
    question: "What is the difference between term and whole life insurance?",
    answer:
      "Term life insurance generally provides coverage for a specific period, such as 10, 20, or 30 years. Whole life insurance is designed to provide permanent coverage as long as the policy remains active and required premiums are paid.",
  },
  {
    question: "How much life insurance should I consider?",
    answer:
      "Coverage needs depend on income, debts, housing costs, family responsibilities, future expenses, existing savings, and current insurance. A useful estimate should reflect your actual situation rather than a generic number.",
  },
  {
    question: "Can I qualify if I have health conditions?",
    answer:
      "Possibly. Eligibility and pricing vary by carrier, medical history, age, tobacco use, medications, and policy type. Different carriers may evaluate the same health history differently.",
  },
  {
    question: "What are living benefits?",
    answer:
      "Certain policies may include riders that allow access to part of the death benefit after a qualifying terminal, chronic, critical illness, or other covered event. Definitions and benefit calculations vary by policy.",
  },
  {
    question: "Does scheduling a consultation obligate me to buy coverage?",
    answer:
      "No. A consultation is an opportunity to discuss your goals, review your current situation, ask questions, and understand available options.",
  },
  {
    question: "What happens during the first consultation?",
    answer:
      "You will typically discuss who depends on you financially, current coverage, debts, income, future goals, budget, and the type of protection you are considering.",
  },
  {
    question: "How long does the application process take?",
    answer:
      "Timing varies by policy and carrier. Some applications may receive a decision quickly, while others require medical records, an exam, additional questions, or further underwriting review.",
  },
  {
    question: "Is employer-provided life insurance enough?",
    answer:
      "It may help, but employer coverage can be limited and may not remain with you after leaving the job. Review the benefit amount, portability, exclusions, and whether it addresses your personal obligations.",
  },
  {
    question: "What is supplemental insurance?",
    answer:
      "Supplemental insurance may provide benefits for certain covered illnesses, injuries, hospital stays, or other specified events. It is generally intended to complement, not replace, major medical insurance.",
  },
  {
    question: "Can I own both term and whole life insurance?",
    answer:
      "Yes. Some people use a combination of temporary and permanent coverage to address different financial needs.",
  },
];

export const metadata: Metadata = {
  title: "Life Insurance FAQ | Diamond Insurance Agency",
  description:
    "Find straightforward answers to common questions about life insurance, living benefits, coverage needs, applications, and consultations.",
};

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-[#f8f7f4] text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />

      <section className="relative overflow-hidden bg-gradient-to-br from-sky-950 via-cyan-900 to-teal-800 px-6 py-28 text-white">
        <div className="absolute -right-24 top-10 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />
        <div className="absolute -bottom-32 left-1/4 h-96 w-96 rounded-full bg-teal-300/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <Link
            href="/"
            className="text-sm font-semibold text-cyan-100 transition hover:text-white"
          >
            ← Return Home
          </Link>

          <p className="mt-12 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-100">
            Frequently asked questions
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
            Clear answers before you make a decision.
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-cyan-50/90 md:text-xl">
            Review common questions about coverage, applications, living
            benefits, costs, and consultations.
          </p>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_340px]">
          <div className="space-y-5">
            {faqItems.map((item, index) => (
              <article
                key={item.question}
                className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm md:p-8"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">
                  Question {index + 1}
                </p>

                <h2 className="mt-3 text-2xl font-bold text-slate-900">
                  {item.question}
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  {item.answer}
                </p>
              </article>
            ))}
          </div>

          <aside className="h-fit rounded-[2rem] bg-slate-950 p-8 text-white shadow-xl lg:sticky lg:top-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
              Still have questions?
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              Review your situation with an advisor.
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              General information is useful, but your family, budget, health,
              and goals require a personalized discussion.
            </p>

            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full justify-center rounded-full bg-white px-6 py-4 font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-50"
            >
              Schedule a Consultation
            </a>

            <Link
              href="/learn"
              className="mt-4 inline-flex w-full justify-center rounded-full border border-white/20 bg-white/5 px-6 py-4 font-bold text-white transition hover:bg-white/10"
            >
              Visit the Learning Center
            </Link>
          </aside>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white px-6 py-10">
        <div className="mx-auto max-w-7xl text-sm leading-7 text-slate-500">
          These answers provide general educational information only. Policy
          terms, pricing, availability, eligibility, exclusions, underwriting,
          and benefit calculations vary by carrier, policy, state, and
          applicant.
        </div>
      </section>
    </main>
  );
}
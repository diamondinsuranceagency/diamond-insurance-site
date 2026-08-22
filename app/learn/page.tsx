import Link from "next/link";

const articles = [
  {
    title: "What Is Life Insurance?",
    description:
      "Understand the purpose of life insurance, how it works, and the role it can play in protecting your family.",
    href: "/learn/what-is-life-insurance",
    category: "Life Insurance Basics",
  },
  {
    title: "Whole Life vs. Term Life",
    description:
      "Compare the major differences between permanent and temporary coverage before choosing a policy.",
    href: "/learn/whole-life-vs-term-life",
    category: "Coverage Comparison",
  },
  {
    title: "How Much Life Insurance Do I Need?",
    description:
      "Learn which financial responsibilities and future expenses should be considered when estimating coverage.",
    href: "/learn/how-much-life-insurance-do-i-need",
    category: "Planning",
  },
  {
    title: "What Are Living Benefits?",
    description:
      "See how certain policies may provide access to benefits during qualifying health events.",
    href: "/learn/what-are-living-benefits",
    category: "Policy Features",
  },
  {
    title: "Life Insurance Over Age 50",
    description:
      "Explore common coverage considerations for adults approaching retirement or planning final expenses.",
    href: "/learn/life-insurance-over-50",
    category: "Age-Based Planning",
  },
  {
    title: "Common Life Insurance Myths",
    description:
      "Separate common assumptions from reality and understand what actually affects coverage and cost.",
    href: "/learn/common-life-insurance-myths",
    category: "Education",
  },
];

export const metadata = {
  title: "Learning Center | Diamond Insurance Agency",
  description:
    "Explore practical life insurance education, coverage comparisons, planning guidance, and answers to common questions.",
};

export default function LearningCenterPage() {
  return (
    <main className="min-h-screen bg-[#f8f7f4] text-slate-900">
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
            Learning Center
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
            Clear insurance education without the jargon.
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-cyan-50/90 md:text-xl">
            Learn how life insurance works, compare coverage options, and
            prepare better questions before speaking with an advisor.
          </p>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-700">
              Explore the basics
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              Start with the questions that matter most.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              These guides are designed to help you understand important
              concepts before making a coverage decision.
            </p>
          </div>

          <div className="mt-16 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <article
                key={article.href}
                className="group flex flex-col rounded-[2rem] border border-white bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-2 hover:border-cyan-200 hover:shadow-[0_28px_80px_rgba(15,118,110,0.14)]"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
                  {article.category}
                </p>

                <h2 className="mt-5 text-2xl font-bold leading-tight">
                  {article.title}
                </h2>

                <p className="mt-4 flex-1 leading-7 text-slate-600">
                  {article.description}
                </p>

                <Link
                  href={article.href}
                  className="mt-8 inline-flex items-center gap-2 font-bold text-teal-800 transition group-hover:gap-3"
                >
                  Read the guide
                  <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-slate-950 p-8 text-white shadow-[0_30px_100px_rgba(15,23,42,0.2)] md:p-14">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">
                Still have questions?
              </p>

              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                Use the guides to learn. Use the consultation to personalize.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                General education can help you understand the options. A
                personal conversation can help you apply them to your own
                family, budget, and priorities.
              </p>
            </div>

            <div className="lg:text-right">
              <a
                href="https://calendly.com/diamondinsurance/life"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-50"
              >
                Schedule a Consultation
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white px-6 py-10">
        <div className="mx-auto max-w-7xl text-sm leading-6 text-slate-500">
          Educational content is general in nature and is not a recommendation,
          guarantee of coverage, or substitute for reviewing actual policy
          documents. Product features and eligibility vary by carrier and
          applicant.
        </div>
      </section>
    </main>
  );
}

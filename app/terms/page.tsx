import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use | Diamond Insurance Agency",
  description:
    "Review the terms governing use of the Diamond Insurance Agency website.",
};

export default function TermsOfUsePage() {
  return (
    <main className="min-h-screen bg-[#f8f7f4] text-slate-900">
      <section className="bg-gradient-to-br from-sky-950 via-cyan-900 to-teal-800 px-6 py-24 text-white">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/"
            className="text-sm font-semibold text-cyan-100 transition hover:text-white"
          >
            ← Return Home
          </Link>

          <p className="mt-12 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-100">
            Legal information
          </p>

          <h1 className="mt-4 text-5xl font-bold md:text-6xl">
            Terms of Use
          </h1>

          <p className="mt-6 text-lg text-cyan-50/90">
            Last updated: August 5, 2026
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <article className="mx-auto max-w-4xl space-y-12 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-12">
          <section>
            <h2 className="text-3xl font-bold">Acceptance of these terms</h2>

            <p className="mt-5 leading-8 text-slate-600">
              By accessing or using this website, you agree to these Terms of
              Use. If you do not agree, do not use the website.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold">
              General educational information
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              The information on this website is provided for general
              educational and informational purposes only. It is not legal,
              tax, financial, medical, or individualized insurance advice.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              You should review actual policy documents and consult appropriate
              qualified professionals before making a decision.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold">
              No guarantee of coverage
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Submitting a form, requesting information, scheduling a meeting,
              or speaking with an advisor does not create insurance coverage or
              guarantee eligibility, approval, pricing, benefits, or policy
              issuance.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              Coverage becomes effective only according to the written terms of
              an issued policy and the applicable insurance carrier&apos;s
              requirements.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold">
              Product information
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Insurance products, features, premiums, riders, exclusions,
              waiting periods, underwriting requirements, availability, and
              guarantees vary by carrier, policy, location, and applicant.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              Descriptions on this website are summaries only and do not amend,
              replace, or override any insurance contract.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold">
              No advisor-client relationship
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Use of this website does not create an advisor-client,
              fiduciary, agency, legal, or other professional relationship.
              Such a relationship may arise only through a separate written
              agreement or completed insurance transaction, when applicable.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold">Permitted use</h2>

            <p className="mt-5 leading-8 text-slate-600">
              You may use this website only for lawful personal or business
              purposes related to learning about or requesting information
              regarding available insurance services.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              You may not attempt to disrupt the website, gain unauthorized
              access, introduce malicious code, scrape content in violation of
              applicable law or site restrictions, or misuse forms and
              communications.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold">Intellectual property</h2>

            <p className="mt-5 leading-8 text-slate-600">
              Website text, branding, graphics, layouts, and original materials
              are owned by Diamond Insurance Agency or used with permission,
              unless otherwise stated.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              You may not reproduce, distribute, modify, sell, or publicly use
              website content without written permission, except for limited
              personal, noncommercial use.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold">
              Third-party links and services
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              This website may link to third-party services, including
              scheduling, review, insurance-carrier, or informational websites.
              Those services are governed by their own terms and privacy
              policies.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              We do not control and are not responsible for third-party content,
              availability, security, or practices.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold">
              Accuracy and availability
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              We aim to provide accurate and useful information, but we do not
              guarantee that every page is complete, current, error-free, or
              continuously available.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              Website content may be changed, corrected, removed, or updated
              without notice.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold">
              Limitation of liability
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              To the fullest extent permitted by law, Diamond Insurance Agency
              is not liable for losses or damages arising from reliance on
              general website information, inability to access the site, use of
              third-party services, or unauthorized access beyond our
              reasonable control.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold">Indemnification</h2>

            <p className="mt-5 leading-8 text-slate-600">
              You agree to be responsible for losses, claims, or expenses
              resulting from your unlawful use of the website, violation of
              these terms, or infringement of another person&apos;s rights.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold">Changes to these terms</h2>

            <p className="mt-5 leading-8 text-slate-600">
              These Terms of Use may be updated periodically. The revised
              version will be posted on this page with a new effective date.
              Continued use after an update constitutes acceptance of the
              revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold">
              Governing law
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              These terms are intended to be governed by applicable laws of the
              State of Florida, without limiting any rights that cannot lawfully
              be waived.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold">Contact</h2>

            <p className="mt-5 leading-8 text-slate-600">
              Questions about these terms may be submitted through the contact
              page.
            </p>

            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-full bg-teal-800 px-7 py-4 font-bold text-white transition hover:bg-teal-900"
            >
              Contact Diamond Insurance Agency
            </Link>
          </section>
        </article>
      </section>
    </main>
  );
}
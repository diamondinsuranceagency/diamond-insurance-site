import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Diamond Insurance Agency",
  description:
    "Learn how Diamond Insurance Agency may collect, use, and protect information submitted through this website.",
};

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>

          <p className="mt-6 text-lg text-cyan-50/90">
            Last updated: November 8, 2026
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <article className="mx-auto max-w-4xl space-y-12 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-12">
          <section>
            <h2 className="text-3xl font-bold">Overview</h2>

            <p className="mt-5 leading-8 text-slate-600">
              Diamond Insurance Agency respects your privacy. This policy
              explains the types of information that may be collected through
              this website, how that information may be used, and the choices
              available to you.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold">
              Information we may collect
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              We may collect information that you voluntarily provide,
              including:
            </p>

            <ul className="mt-5 space-y-3 leading-7 text-slate-600">
              <li>• Name</li>
              <li>• Email address</li>
              <li>• Telephone number</li>
              <li>• Appointment preferences</li>
              <li>• Questions or messages submitted through the website</li>
              <li>
                • General information related to your insurance interests
              </li>
            </ul>

            <p className="mt-5 leading-8 text-slate-600">
              We may also receive limited technical information automatically,
              such as browser type, device type, referring page, IP address,
              and general website-usage data.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold">
              How information may be used
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Information may be used to:
            </p>

            <ul className="mt-5 space-y-3 leading-7 text-slate-600">
              <li>• Respond to questions and requests</li>
              <li>• Schedule and manage consultations</li>
              <li>• Provide information about insurance services</li>
              <li>• Improve website functionality and user experience</li>
              <li>• Maintain website security</li>
              <li>• Comply with legal or regulatory obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold">
              Insurance and health information
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Do not submit highly sensitive medical, financial, Social
              Security, payment-card, or account information through a general
              website contact form.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              If additional information is required for an insurance
              application, it should be collected through an appropriate secure
              process provided by the applicable insurance carrier or
              authorized service provider.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold">
              Scheduling and third-party services
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              This website may link to third-party services, including Calendly
              and Agent Verified. Those services operate under their own privacy
              policies and terms.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              We are not responsible for the privacy practices, content, or
              security of third-party websites.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold">
              Cookies and analytics
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              This website may use cookies or similar technologies to support
              website functionality, remember preferences, measure traffic, and
              understand how visitors use the site.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              This section should be updated before launch to identify any
              specific analytics, advertising, or cookie tools actually used.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold">
              Sharing of information
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              We do not sell personal information. Information may be shared
              with service providers when reasonably necessary to operate the
              website, respond to requests, schedule appointments, support
              insurance-related services, or comply with law.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold">Data security</h2>

            <p className="mt-5 leading-8 text-slate-600">
              Reasonable administrative, technical, and organizational
              safeguards may be used to protect information. No method of
              internet transmission or electronic storage can be guaranteed to
              be completely secure.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold">Data retention</h2>

            <p className="mt-5 leading-8 text-slate-600">
              Information may be retained only as long as reasonably necessary
              for the purposes described in this policy, to maintain business
              records, or to satisfy legal, regulatory, or contractual
              obligations.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold">Children&apos;s privacy</h2>

            <p className="mt-5 leading-8 text-slate-600">
              This website is not directed to children under 13, and we do not
              knowingly collect personal information from children under 13.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold">Your choices</h2>

            <p className="mt-5 leading-8 text-slate-600">
              You may contact us to request access to, correction of, or
              deletion of personal information that you have submitted,
              subject to applicable legal and recordkeeping requirements.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold">
              Changes to this policy
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              This policy may be updated periodically. The updated version will
              be posted on this page with a revised effective date.
            </p>
          </section>

          <section id="sms-privacy">
            <h2 className="text-3xl font-bold">Mobile information and SMS reminders</h2>
            <p className="mt-5 leading-8 text-slate-600">
              We are preparing an optional funding and payment reminder text-message
              program. Enrollment is not currently available through this website.
              Before messages begin, we will request your separate verbal consent
              during a call and record your consent, the number you authorize,
              the date, and the disclosures provided. Giving us a telephone number
              or submitting our general contact form does not by itself enroll you.
            </p>
            <p className="mt-5 leading-8 text-slate-600">
              For this program, we will use your mobile number, consent record,
              reminder schedule, and messaging preferences to administer reminders
              and honor opt-out requests. We will not sell mobile information or
              share it with third parties or affiliates for their marketing or
              promotional purposes. SMS opt-in data and consent will not be shared
              for third parties&apos; own purposes. Information may be provided to
              messaging service providers only as necessary to operate the program
              on our behalf, or disclosed as required by law. These restrictions
              apply to SMS information notwithstanding the general sharing section above.
            </p>
            <p className="mt-5 leading-8 text-slate-600">
              Before launch, we will enable STOP to end program messages and HELP
              to provide support information. You may also contact us at{' '}
              <a className="font-semibold text-teal-800 underline" href="mailto:agent@diamondconsultingadvisory.com">
                agent@diamondconsultingadvisory.com
              </a>{' '}
              about your preferences. We will retain consent and opt-out records as
              needed to honor your choices and meet applicable recordkeeping requirements.
            </p>
            <p className="mt-5 leading-8 text-slate-600">
              See our{' '}
              <Link className="font-semibold text-teal-800 underline" href="/terms#sms-reminders">
                SMS reminder program terms
              </Link>{' '}
              for the planned message frequency, charges, and cancellation instructions.
            </p>
          </section>
          <section>
            <h2 className="text-3xl font-bold">Contact</h2>

            <p className="mt-5 leading-8 text-slate-600">
              Questions about this policy may be submitted through the website
              contact page.
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
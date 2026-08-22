import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "./ContactForm";

const phoneDisplay = "(210) 560-9823";
const phoneHref = "tel:+12105609823";

const businessEmail = "agent@diamondconsultingadvisory.com";
const emailHref = `mailto:${businessEmail}`;

const calendlyUrl = "https://calendly.com/diamondinsurance/life";

export const metadata: Metadata = {
  title: "Contact | Diamond Insurance Agency",
  description:
    "Contact Diamond Insurance Agency or schedule a remote consultation to discuss life insurance, living benefits, and supplemental coverage.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f8f7f4] text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-950 via-cyan-900 to-teal-800 px-6 pb-28 pt-20 text-white">
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
            Contact Diamond Insurance Agency
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
            Let&apos;s start with a conversation.
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-cyan-50/90 md:text-xl">
            Ask a question, review your coverage goals, or schedule a remote,
            no-pressure consultation at a time that works for you.
          </p>
        </div>
      </section>

      {/* Contact information cards */}
      <section className="relative z-10 -mt-10 px-6">
        <div className="mx-auto grid max-w-7xl gap-5 rounded-[2rem] border border-white bg-white p-5 shadow-[0_24px_70px_rgba(15,23,42,0.12)] md:grid-cols-2 lg:grid-cols-4">
          <a
            href={phoneHref}
            className="group rounded-2xl bg-[#f8f7f4] p-6 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
              Call
            </p>

            <p className="mt-3 text-xl font-bold text-slate-900">
              {phoneDisplay}
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Tap to call from your phone.
            </p>
          </a>

          <a
            href={emailHref}
            className="group rounded-2xl bg-[#f8f7f4] p-6 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
              Email
            </p>

            <p className="mt-3 break-all text-lg font-bold text-slate-900">
              {businessEmail}
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Send a general question or request.
            </p>
          </a>

          <div className="rounded-2xl bg-[#f8f7f4] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
              Consultations
            </p>

            <p className="mt-3 text-xl font-bold text-slate-900">
              Remote only
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Appointments are conducted by phone or video.
            </p>
          </div>

          <div className="rounded-2xl bg-[#f8f7f4] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
              States served
            </p>

            <p className="mt-3 text-xl font-bold text-slate-900">
              Six states
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Florida, Texas, Virginia, Maryland, North Carolina, and Ohio.
            </p>
          </div>
        </div>
      </section>

      {/* Main contact area */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="h-fit rounded-[2rem] bg-slate-950 p-8 text-white shadow-xl md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
              Schedule online
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              Choose a convenient appointment time.
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              Use the scheduling page to select an available time for a remote
              consultation about life insurance, living benefits, or
              supplemental coverage.
            </p>

            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-4 font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-50"
            >
              Book a Consultation
            </a>

            <div className="mt-8 space-y-4 border-t border-white/10 pt-8">
              <a
                href={phoneHref}
                className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition hover:bg-white/10"
              >
                <span className="text-sm text-slate-300">Call directly</span>
                <span className="font-bold text-white">{phoneDisplay}</span>
              </a>

              <a
                href={emailHref}
                className="block rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition hover:bg-white/10"
              >
                <span className="block text-sm text-slate-300">Email</span>
                <span className="mt-1 block break-all font-bold text-white">
                  {businessEmail}
                </span>
              </a>
            </div>

            <div className="mt-10 border-t border-white/10 pt-8">
              <p className="font-bold">Before your appointment</p>

              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
                <li>• Think about who depends on you financially</li>
                <li>• Review any current insurance coverage</li>
                <li>• List major debts and future expenses</li>
                <li>• Consider a comfortable monthly budget</li>
              </ul>
            </div>
          </aside>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
              Send a message
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Tell us how we can help.
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Do not include Social Security numbers, payment information, or
              sensitive medical details.
            </p>

            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
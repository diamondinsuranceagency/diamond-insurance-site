import Image from "next/image";
import Link from "next/link";

const logo =
  "https://r2.fivemanage.com/XB7J4vUUmXztfNpdKvj67/NewLogo.png";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-14 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          {/* Company */}
          <div>
            <Image
              src={logo}
              alt="Diamond Insurance Agency"
              width={220}
              height={70}
              className="h-auto w-52"
            />

            <p className="mt-8 max-w-md leading-8 text-slate-300">
              Helping individuals and families understand life insurance,
              living benefits, and supplemental coverage through honest
              education and personalized guidance.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-100">
                Licensed in 6 States
              </span>

              <span className="rounded-full border border-teal-400/20 bg-teal-400/10 px-4 py-2 text-sm font-semibold text-teal-100">
                5+ Years Experience
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold">Services</h3>

            <ul className="mt-6 space-y-4 text-slate-300">
              <li>
                <Link href="/whole-life-insurance" className="hover:text-white">
                  Whole Life Insurance
                </Link>
              </li>

              <li>
                <Link href="/term-life-insurance" className="hover:text-white">
                  Term Life Insurance
                </Link>
              </li>

              <li>
                <Link href="/living-benefits" className="hover:text-white">
                  Living Benefits
                </Link>
              </li>

              <li>
                <Link href="/supplemental-plans" className="hover:text-white">
                  Supplemental Plans
                </Link>
              </li>
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h3 className="text-lg font-bold">Learn</h3>

            <ul className="mt-6 space-y-4 text-slate-300">
              <li>
                <Link href="/learn" className="hover:text-white">
                  Learning Center
                </Link>
              </li>

              <li>
                <Link href="/faq" className="hover:text-white">
                  FAQ
                </Link>
              </li>

              <li>
                <Link href="/reviews" className="hover:text-white">
                  Client Reviews
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-white">
                  Meet John
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold">Company</h3>

            <ul className="mt-6 space-y-4 text-slate-300">
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>

              <li>
                <Link href="/privacy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link href="/terms" className="hover:text-white">
                  Terms of Use
                </Link>
              </li>
            </ul>

            <a
              href="https://calendly.com/diamondinsurance/life"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-full bg-white px-5 py-3 font-bold text-slate-900 transition hover:-translate-y-1 hover:bg-cyan-50"
            >
              Book Consultation
            </a>
          </div>
        </div>

        <div className="my-14 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="text-sm leading-7 text-slate-400">
            Insurance products, availability, eligibility, premiums,
            exclusions, limitations, and underwriting requirements vary by
            carrier, state, and applicant. Information on this website is
            provided for educational purposes only and should not be considered
            legal, tax, or financial advice.
          </div>

          <div className="text-right text-sm text-slate-500">
            © {currentYear} Diamond Insurance Agency.
            <br />
            All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
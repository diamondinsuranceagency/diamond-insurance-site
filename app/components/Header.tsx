import Image from "next/image";
import Link from "next/link";

const calendlyUrl = "https://calendly.com/diamondinsurance/life";

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50 px-4 pt-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-3xl border border-white/20 bg-slate-900/45 px-5 py-4 shadow-xl shadow-slate-950/30 backdrop-blur-xl md:px-7">
        <Link
  href="/"
  className="flex items-center"
  aria-label="Diamond Insurance Agency"
>
  <img
  src="https://r2.fivemanage.com/XB7J4vUUmXztfNpdKvj67/NewLogo.png"
  alt="Diamond Insurance Agency"
  className="h-16 w-auto object-contain transition duration-300 hover:scale-105 lg:h-20"
/>
</Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-10 text-sm font-medium text-white/90 lg:flex"
        >
          <Link href="#services" className="transition hover:text-cyan-200">
            Coverage
          </Link>

          <Link href="/learn" className="transition hover:text-cyan-200">
            Learning Center
        </Link>

          <Link href="/about" className="transition hover:text-cyan-200">
  Meet John
</Link>

          <Link href="#reviews" className="transition hover:text-cyan-200">
            Reviews
          </Link>

          <Link href="/contact" className="transition hover:text-cyan-200">
  Contact
</Link>

<Link href="/faq" className="transition hover:text-cyan-200">
  FAQ
</Link>
        </nav>

        <a
          href={calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-gradient-to-r from-white to-cyan-50 px-6 py-3 font-semibold text-sky-950 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
        >
          Book a Consultation
        </a>
      </div>
    </header>
  );
}
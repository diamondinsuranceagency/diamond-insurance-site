const calendlyUrl = "https://calendly.com/diamondinsurance/life";

export default function FloatingBookingButton() {
  return (
    <a
      href={calendlyUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Schedule a consultation"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full border border-white/30 bg-teal-800 px-5 py-4 font-bold text-white shadow-[0_18px_50px_rgba(15,118,110,0.35)] transition duration-300 hover:-translate-y-1 hover:bg-teal-900 hover:shadow-[0_24px_60px_rgba(15,118,110,0.45)]"
    >
      <span
        aria-hidden="true"
        className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-lg"
      >
        📅
      </span>

      <span className="hidden sm:block">Book a Consultation</span>
      <span className="sm:hidden">Book</span>
    </a>
  );
}
export default function TrustBar() {
  return (
    <section className="border-b border-slate-200 bg-white px-6 py-8">
      <div className="mx-auto grid max-w-6xl items-center gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
        <a
          href="https://www.agentverified.com/united-states/miami/florida/life-insurance-agent/john-williams?from=badge"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center transition hover:scale-105"
        >
          <img
            src="https://www.agentverified.com/images/memberbadge.png"
            alt="View John Williams on Agent Verified"
            className="h-auto w-32"
          />
        </a>

        <div>
          <p className="text-2xl font-bold text-teal-800">
            Personal Guidance
          </p>
          <p className="mt-1 text-sm text-slate-600">
            Coverage explained clearly
          </p>
        </div>

        <div>
          <p className="text-2xl font-bold text-teal-800">
            Flexible Options
          </p>
          <p className="mt-1 text-sm text-slate-600">
            Plans built around your needs
          </p>
        </div>

        <div>
          <a
            href="https://calendly.com/diamondinsurance/life"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-teal-800 px-6 py-3 font-semibold text-white transition hover:bg-teal-900"
          >
            Book a Consultation
          </a>

          <p className="mt-2 text-sm text-slate-600">
            Choose a convenient time
          </p>
        </div>
      </div>
    </section>
  );
}
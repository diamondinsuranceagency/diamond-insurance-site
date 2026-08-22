import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-sky-950 via-cyan-900 to-teal-800 px-6 py-20 text-white">
      <div className="absolute -right-24 top-10 h-96 w-96 rounded-full bg-cyan-300/10 blur-3xl" />
      <div className="absolute -bottom-40 left-1/4 h-[30rem] w-[30rem] rounded-full bg-teal-300/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-5xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-100">
          Error 404
        </p>

        <h1 className="mt-6 text-6xl font-bold tracking-tight md:text-8xl">
          This page wandered off course.
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-cyan-50/85 md:text-xl">
          The page may have moved, the address may be incorrect, or the link may
          no longer exist.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="rounded-full bg-white px-8 py-4 font-bold text-sky-950 shadow-xl transition hover:-translate-y-1 hover:bg-cyan-50"
          >
            Return Home
          </Link>

          <Link
            href="/learn"
            className="rounded-full border border-white/25 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/15"
          >
            Visit the Learning Center
          </Link>

          <Link
            href="/contact"
            className="rounded-full border border-white/25 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/15"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}
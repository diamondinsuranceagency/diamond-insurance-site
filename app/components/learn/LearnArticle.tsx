import type { ReactNode } from "react";
import Link from "next/link";
import { siteConfig } from "../../config/site";

type LearnArticleProps = {
  title: string;
  description: string;
  category: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
  readingTime?: number;
  children: ReactNode;
};

export default function LearnArticle({
  title,
  description,
  category,
  slug,
  datePublished,
  dateModified,
  readingTime,
  children,
}: LearnArticleProps) {
  const articleUrl = `${siteConfig.url}/learn/${slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    articleSection: category,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    url: articleUrl,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      "@type": "Person",
      name: "John Williams",
      url: `${siteConfig.url}/about`,
      image: siteConfig.profilePhotoUrl,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: siteConfig.logoUrl,
      },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Learning Center",
        item: `${siteConfig.url}/learn`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: articleUrl,
      },
    ],
  };

  const formattedPublishedDate = new Date(
    `${datePublished}T12:00:00`,
  ).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const formattedModifiedDate = dateModified
    ? new Date(`${dateModified}T12:00:00`).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : null;

  return (
    <main className="min-h-screen bg-[#f8f7f4] text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c"),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-sky-950 via-cyan-900 to-teal-800 px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-sm font-semibold text-cyan-100">
              <li>
                <Link href="/" className="transition hover:text-white">
                  Home
                </Link>
              </li>

              <li aria-hidden="true">/</li>

              <li>
                <Link href="/learn" className="transition hover:text-white">
                  Learning Center
                </Link>
              </li>

              <li aria-hidden="true">/</li>

              <li className="text-white" aria-current="page">
                {title}
              </li>
            </ol>
          </nav>

          <p className="mt-10 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-100">
            {category}
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-bold leading-tight md:text-6xl">
            {title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-cyan-50">
            {description}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-cyan-200">
            {readingTime ? <p>{readingTime} minute read</p> : null}

            <p>
              Published{" "}
              <time dateTime={datePublished}>{formattedPublishedDate}</time>
            </p>

            {dateModified &&
            dateModified !== datePublished &&
            formattedModifiedDate ? (
              <p>
                Updated{" "}
                <time dateTime={dateModified}>{formattedModifiedDate}</time>
              </p>
            ) : null}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_320px]">
          <article className="min-w-0">{children}</article>

          <aside className="h-fit rounded-3xl bg-slate-950 p-8 text-white lg:sticky lg:top-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
              Need help?
            </p>

            <h2 className="mt-4 text-2xl font-bold">
              Let&apos;s review your options together.
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              Every family is different. Schedule a relaxed consultation to
              discuss your goals and available coverage options.
            </p>

            <a
              href={siteConfig.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full justify-center rounded-full bg-white px-6 py-4 font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-50"
            >
              Schedule Consultation
            </a>

            <Link
              href="/learn"
              className="mt-4 inline-flex w-full justify-center rounded-full border border-white/20 bg-white/5 px-6 py-4 font-bold text-white transition hover:bg-white/10"
            >
              More Learning Guides
            </Link>
          </aside>
        </div>
      </section>
    </main>
  );
}
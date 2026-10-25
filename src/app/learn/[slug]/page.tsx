import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CalendarDays,
  ChevronRight,
  Clock,
  GraduationCap,
  Home,
  Info,
  RefreshCcw,
  TriangleAlert,
} from "lucide-react";
import { ArticleCard } from "@/components/site/article-card";
import { Reveal } from "@/components/site/reveal";
import {
  articles,
  getArticleBySlug,
  getRelatedArticles,
} from "@/content/articles";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

/** Pre-render every article at build time. */
export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  const url = `${site.url}/learn/${article.slug}`;
  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: `/learn/${article.slug}`,
    },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.description,
      url,
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt ?? article.publishedAt,
      authors: [site.name],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
    },
  };
}

function formatDate(iso: string): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(iso));
}

const calloutStyles = {
  info: {
    box: "border-blue-200 bg-blue-50",
    text: "text-blue-900",
    title: "text-blue-800",
    Icon: Info,
  },
  warning: {
    box: "border-amber-200 bg-amber-50",
    text: "text-amber-900",
    title: "text-amber-800",
    Icon: TriangleAlert,
  },
  disclaimer: {
    box: "border-violet-200 bg-violet-50",
    text: "text-violet-900",
    title: "text-violet-800",
    Icon: Info,
  },
} as const;

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const Icon = article.icon;
  const related = getRelatedArticles(article);
  const blocks = article.blocks;

  return (
    <>
      {/* ── Article header ─────────────────────────────────────────── */}
      <div className="relative overflow-hidden glow-blue">
        <div className="absolute inset-0 bg-grid-faint" aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-6xl px-4 pb-14 pt-10 sm:px-6 sm:pb-16 sm:pt-14 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-slate-400">
              <li className="flex items-center gap-1.5">
                <Home className="h-3.5 w-3.5" aria-hidden="true" />
                <Link href="/" className="transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="h-3.5 w-3.5 text-slate-600" />
              </li>
              <li>
                <Link href="/learn" className="transition-colors hover:text-white">
                  Learn
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="h-3.5 w-3.5 text-slate-600" />
              </li>
              <li aria-current="page" className="max-w-[16rem] truncate text-slate-300 sm:max-w-sm">
                {article.title}
              </li>
            </ol>
          </nav>

          <div className="mt-8 max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-semibold text-brand-blue-soft">
                <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                {article.category}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-300">
                <GraduationCap className="h-3.5 w-3.5" aria-hidden="true" />
                {article.level}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500">
                <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                {article.readingTime} min read
              </span>
            </div>
            <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-balance text-white sm:text-4xl lg:text-5xl">
              {article.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-400">
              {article.description}
            </p>
            <p className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-sm text-slate-500">
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="h-4 w-4" aria-hidden="true" />
                Published {formatDate(article.publishedAt)}
              </span>
              {article.updatedAt && (
                <span className="inline-flex items-center gap-1.5">
                  <RefreshCcw className="h-4 w-4" aria-hidden="true" />
                  Updated {formatDate(article.updatedAt)}
                </span>
              )}
            </p>
          </div>
        </div>
      </div>

      {/* ── Article body ───────────────────────────────────────────── */}
      <article className="bg-white">
        <div className="mx-auto w-full max-w-3xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <div className="prose-cs">
            {blocks.map((block, index) => {
              switch (block.type) {
                case "heading":
                  return (
                    <h2 key={index} id={`section-${index}`}>
                      {block.text}
                    </h2>
                  );
                case "paragraph":
                  return <p key={index}>{block.text}</p>;
                case "list":
                  return (
                    <ul key={index}>
                      {block.items.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          <span
                            className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-blue-500 to-violet-500"
                            aria-hidden="true"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  );
                case "callout": {
                  const style = calloutStyles[block.variant];
                  const CalloutIcon = style.Icon;
                  return (
                    <aside
                      key={index}
                      className={cn(
                        "mb-6 mt-8 flex gap-3.5 rounded-2xl border p-5",
                        style.box,
                      )}
                    >
                      <CalloutIcon
                        className={cn("mt-0.5 h-5 w-5 shrink-0", style.title)}
                        aria-hidden="true"
                      />
                      <div>
                        <p className={cn("font-bold", style.title)}>
                          {block.title}
                        </p>
                        <p className={cn("mt-1 text-sm leading-relaxed", style.text)}>
                          {block.text}
                        </p>
                      </div>
                    </aside>
                  );
                }
              }
            })}
          </div>

          {/* End-of-article disclaimer */}
          <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm leading-relaxed text-slate-600">
              This guide is part of the{" "}
              <Link
                href="/learn"
                className="font-semibold text-blue-700 underline-offset-4 hover:underline"
              >
                CryptoSupport library
              </Link>
              . All content is provided for educational purposes only and does
              not constitute financial, investment, legal or tax advice.
            </p>
          </div>
        </div>
      </article>

      {/* ── Related guides ─────────────────────────────────────────── */}
      {related.length > 0 && (
        <section
          className="bg-slate-50 py-16 sm:py-20"
          aria-labelledby="related-heading"
        >
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <h2
                id="related-heading"
                className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
              >
                Continue learning
              </h2>
              <p className="mt-2 max-w-2xl text-base text-slate-600">
                Related guides picked to build on what you just read.
              </p>
            </Reveal>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((relatedArticle, index) => (
                <Reveal key={relatedArticle.slug} delay={index * 100} className="h-full">
                  <ArticleCard article={relatedArticle} tone="light" className="h-full" />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

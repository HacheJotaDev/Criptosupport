import type { Metadata } from "next";
import { BookOpen, Info } from "lucide-react";
import { PageHeader } from "@/components/site/page-header";
import { ArticleCard } from "@/components/site/article-card";
import { Reveal } from "@/components/site/reveal";
import {
  articleGroups,
  getArticlesByGroup,
} from "@/content/articles";

export const metadata: Metadata = {
  title: "Learn — Cryptocurrency & Blockchain Guides",
  description:
    "Free educational guides on Bitcoin, blockchain, stablecoins, wallet security and the real risks of crypto assets — explained in plain language for beginners.",
  alternates: {
    canonical: "/learn",
  },
  openGraph: {
    title: "Learn — Cryptocurrency & Blockchain Guides | CryptoSupport",
    description:
      "Free educational guides on Bitcoin, blockchain, stablecoins, wallet security and the real risks of crypto assets.",
    url: "/learn",
  },
};

export default function LearnPage() {
  return (
    <>
      <PageHeader
        eyebrow="Education"
        title="Guides that build understanding, step by step"
        description="Seven in-depth guides organized from fundamentals to responsibility. Read them in order or jump straight to what you need today — every guide is written to stand on its own."
      >
        <p className="mt-7 inline-flex items-start gap-2.5 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm leading-relaxed text-slate-400">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue-soft" aria-hidden="true" />
          <span>
            All guides are educational resources. They do not constitute
            financial advice and do not recommend any specific asset, platform
            or strategy.
          </span>
        </p>
      </PageHeader>

      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        {articleGroups.map((group, groupIndex) => {
          const groupArticles = getArticlesByGroup(group.name);
          return (
            <section
              key={group.name}
              aria-labelledby={`group-${groupIndex}`}
              className={groupIndex > 0 ? "mt-16" : undefined}
            >
              <Reveal>
                <div className="flex items-start gap-4">
                  <span className="mt-1 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue/20 to-brand-violet/20 text-brand-blue-soft">
                    <BookOpen className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h2
                      id={`group-${groupIndex}`}
                      className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
                    >
                      {group.name}
                    </h2>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
                      {group.description}
                    </p>
                  </div>
                </div>
              </Reveal>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {groupArticles.map((article, index) => (
                  <Reveal key={article.slug} delay={index * 100} className="h-full">
                    <ArticleCard article={article} tone="dark" className="h-full" />
                  </Reveal>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}

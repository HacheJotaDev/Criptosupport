import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import type { Article } from "@/content/articles";
import { cn } from "@/lib/utils";

export function ArticleCard({
  article,
  tone = "light",
  className,
}: {
  article: Article;
  /** "light" for light sections, "dark" for dark navy sections. */
  tone?: "light" | "dark";
  className?: string;
}) {
  const Icon = article.icon;
  const isLight = tone === "light";

  return (
    <Link
      href={`/learn/${article.slug}`}
      className={cn(
        "group flex h-full flex-col p-6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
        isLight ? "card-light" : "card-dark",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <span
          className={cn(
            "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold",
            isLight
              ? "bg-blue-50 text-blue-700"
              : "bg-brand-blue/10 text-brand-blue-soft",
          )}
        >
          <Icon className="h-3.5 w-3.5" aria-hidden="true" />
          {article.category}
        </span>
        <span
          className={cn(
            "inline-flex items-center gap-1 text-xs font-medium",
            isLight ? "text-slate-400" : "text-slate-500",
          )}
        >
          <Clock className="h-3.5 w-3.5" aria-hidden="true" />
          {article.readingTime} min read
        </span>
      </div>

      <h3
        className={cn(
          "mt-4 text-lg font-bold leading-snug tracking-tight",
          isLight ? "text-slate-900" : "text-white",
        )}
      >
        {article.title}
      </h3>
      <p
        className={cn(
          "mt-2 flex-1 text-sm leading-relaxed",
          isLight ? "text-slate-600" : "text-slate-400",
        )}
      >
        {article.description}
      </p>

      <span
        className={cn(
          "mt-5 inline-flex items-center gap-1.5 text-sm font-semibold",
          isLight
            ? "text-blue-700 group-hover:text-violet-600"
            : "text-brand-blue-soft group-hover:text-brand-violet-soft",
        )}
      >
        Read guide
        <ArrowRight
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}

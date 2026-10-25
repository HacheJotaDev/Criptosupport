import type { LucideIcon } from "lucide-react";

/**
 * Structured blocks used to render long-form article content
 * with semantic HTML (no markdown parsing, no extra dependencies).
 */
export type ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | {
      type: "callout";
      variant: "info" | "warning" | "disclaimer";
      title: string;
      text: string;
    };

export type ArticleGroup = "Fundamentals" | "Wallets & Security" | "Risk & Responsibility";

export interface Article {
  /** URL slug, e.g. "what-is-bitcoin" → /learn/what-is-bitcoin */
  slug: string;
  title: string;
  /** Short summary used on cards, listings and meta descriptions. */
  description: string;
  category: string;
  group: ArticleGroup;
  level: "Beginner" | "Intermediate";
  /** Approximate reading time in minutes. */
  readingTime: number;
  publishedAt: string; // ISO date (YYYY-MM-DD)
  updatedAt?: string;
  featured?: boolean;
  icon: LucideIcon;
  /** Slugs of related guides, shown at the end of the article. */
  related: string[];
  blocks: ArticleBlock[];
}

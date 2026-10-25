import type { Article, ArticleGroup } from "./types";
import { fundamentalsArticles } from "./fundamentals";
import { securityArticles } from "./security";
import { riskArticles } from "./risks";

export type { Article, ArticleBlock, ArticleGroup } from "./types";

/** All educational guides, in publication order within their natural order. */
export const articles: Article[] = [
  ...fundamentalsArticles,
  ...securityArticles,
  ...riskArticles,
];

const bySlug = new Map(articles.map((article) => [article.slug, article]));

export function getArticleBySlug(slug: string): Article | undefined {
  return bySlug.get(slug);
}

export function getRelatedArticles(article: Article): Article[] {
  return article.related
    .map((slug) => bySlug.get(slug))
    .filter((a): a is Article => Boolean(a));
}

export function getFeaturedArticles(): Article[] {
  return articles.filter((article) => article.featured);
}

export const articleGroups: { name: ArticleGroup; description: string }[] = [
  {
    name: "Fundamentals",
    description:
      "Start here to understand what cryptocurrencies are, the technology behind them and the stablecoins that connect both worlds.",
  },
  {
    name: "Wallets & Security",
    description:
      "Everything about keeping control of your assets: how wallets work, how to protect your keys and how to recognize scams.",
  },
  {
    name: "Risk & Responsibility",
    description:
      "An honest look at the risks that exist even when everything is done right, and the principles that help manage them.",
  },
];

export function getArticlesByGroup(group: ArticleGroup): Article[] {
  return articles.filter((article) => article.group === group);
}

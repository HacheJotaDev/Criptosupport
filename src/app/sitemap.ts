import type { MetadataRoute } from "next";
import { articles } from "@/content/articles";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${site.url}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/learn`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${site.url}/about`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${site.url}/contact`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${site.url}/privacy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${site.url}/terms`, changeFrequency: "yearly", priority: 0.3 },
  ];

  const articleRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${site.url}/learn/${article.slug}`,
    lastModified: article.updatedAt ? new Date(article.updatedAt) : new Date(article.publishedAt),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...articleRoutes].map((entry) =>
    "lastModified" in entry && entry.lastModified ? entry : { ...entry, lastModified },
  );
}

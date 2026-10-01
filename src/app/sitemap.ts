import type { MetadataRoute } from "next";
import { articles } from "@/app/blog/page";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://jesuslopez.com";
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/sobre-mi`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/libros`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/libros/responsabilidad-antes-del-exito`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/conferencias`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/academia`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/prensa`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/contacto`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/privacidad`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/en`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
  ];

  const blogPages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${base}/blog/${article.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}

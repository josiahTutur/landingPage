import type { MetadataRoute } from "next";

/* Served at /sitemap.xml. Single-page site, so just the homepage. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://tutur.my",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}

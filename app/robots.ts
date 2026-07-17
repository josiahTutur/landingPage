import type { MetadataRoute } from "next";

/* Served at /robots.txt. Allows all crawlers and points to the sitemap. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://tutur.my/sitemap.xml",
    host: "https://tutur.my",
  };
}

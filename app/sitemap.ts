import type { MetadataRoute } from "next";

// Emitted as a real /sitemap.xml at build time, which works under
// `output: "export"` because every route on this site is static.
// Keep this list in sync with the routes under app/.
const routes = [
  { path: "/", priority: 1 },
  { path: "/privacy", priority: 0.3 },
  { path: "/terms", priority: 0.3 },
];

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map(({ path, priority }) => ({
    url: `https://granvy.com${path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority,
  }));
}

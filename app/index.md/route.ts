import { renderHomepageMarkdown } from "@/lib/homepage-markdown";

// Emits a static /index.md alongside /index.html at build time.
//
// Note the Content-Type set below only applies when this route is served by a
// Next.js server. Under `output: "export"` the response body is written to
// out/index.md and the content type is whatever the static host sends for a
// .md file, so this header is aspirational until the site sits behind an edge
// worker or a real Next server. See README.md.
export const dynamic = "force-static";

export function GET() {
  return new Response(renderHomepageMarkdown(), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      Vary: "Accept",
    },
  });
}

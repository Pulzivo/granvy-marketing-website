// Renders the homepage as plain markdown, from the exact same copy the HTML
// page is built from (lib/content.ts), so the two can never drift.
//
// This is emitted at build time as /index.md. It is NOT yet wired up to
// `Accept: text/markdown` content negotiation: this site is a static export
// (next.config.ts sets `output: "export"`) served by GitHub Pages, and static
// hosting cannot vary a response on a request header. Serving this file as a
// negotiated markdown variant needs an edge worker (or a real Next server) in
// front of the static site. See README.md, "Markdown variant of the homepage".

import {
  brand,
  ctaBand,
  hero,
  howItWorks,
  platform,
  platformPillars,
  verticals,
  voiceModule,
} from "./content";

export function renderHomepageMarkdown(): string {
  const lines: string[] = [];

  lines.push(`# ${brand.name}: ${hero.headlineLine1} ${hero.headlinePrefix} ${hero.headlineAccent}`);
  lines.push("");
  lines.push(`> ${brand.tagline}`);
  lines.push("");
  lines.push(`${hero.subtitle} ${hero.subtitleLine2}`);
  lines.push("");
  lines.push(hero.trust + ".");
  lines.push("");
  for (const stat of hero.stats) {
    lines.push(`- **${stat.value}** ${stat.label}`);
  }
  lines.push("");

  lines.push(`## ${voiceModule.heading}`);
  lines.push("");
  lines.push(voiceModule.body);
  lines.push("");
  for (const feature of voiceModule.features) {
    lines.push(`- ${feature}`);
  }
  lines.push("");

  lines.push(`## ${platform.heading}`);
  lines.push("");
  lines.push(platform.subheading);
  lines.push("");
  for (const pillar of platformPillars) {
    lines.push(`### ${pillar.name}`);
    lines.push("");
    lines.push(pillar.description);
    lines.push("");
  }

  lines.push("## Modules");
  lines.push("");
  for (const group of platform.groups) {
    lines.push(`### ${group.name}`);
    lines.push("");
    for (const platformModule of group.modules) {
      lines.push(`- **${platformModule.name}**: ${platformModule.description}`);
    }
    lines.push("");
  }

  lines.push(`## ${howItWorks.heading}`);
  lines.push("");
  for (const step of howItWorks.steps) {
    lines.push(`### ${step.number}. ${step.title}`);
    lines.push("");
    lines.push(step.description);
    lines.push("");
  }

  lines.push(`## ${verticals.heading}`);
  lines.push("");
  for (const industry of verticals.industries) {
    lines.push(`### ${industry.name}`);
    lines.push("");
    lines.push(industry.description);
    lines.push("");
  }

  lines.push(`## ${ctaBand.heading}`);
  lines.push("");
  lines.push(ctaBand.subheading);
  lines.push("");
  lines.push(`- Email: ${brand.contactEmail}`);
  lines.push(`- Phone: ${brand.contactPhone}`);
  lines.push(`- Web: https://${brand.domain}`);
  lines.push("");

  lines.push("## More");
  lines.push("");
  lines.push("- [Agent instructions (llms.txt)](https://granvy.com/llms.txt)");
  lines.push("- [Sitemap](https://granvy.com/sitemap.xml)");
  lines.push("- [Privacy Policy](https://granvy.com/privacy)");
  lines.push("- [Terms of Service](https://granvy.com/terms)");
  lines.push("");

  return lines.join("\n");
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Logo } from "@/components/logo";
import { Footer } from "@/components/footer";
import { Container } from "@/components/ui/container";
import { brand } from "@/lib/content";

// Next writes this page to out/404.html during `next build` with
// `output: "export"`. GitHub Pages serves a root 404.html for any unmatched
// path with a genuine HTTP 404 status, so this replaces the framework default
// ("404: This page could not be found.") with a body that actually tells a
// person or an agent where to go next.
export const metadata: Metadata = {
  title: "Page not found | Granvy",
  description:
    "That page does not exist on granvy.com. Links to the homepage, the sitemap, and the agent instructions file.",
  robots: { index: false, follow: true },
};

const pages = [
  { label: "Homepage", href: "/", note: "What Granvy is and who it is for" },
  { label: "How it works", href: "/#how-it-works", note: "Setup in about 15 minutes" },
  { label: "Who it's for", href: "/#who-its-for", note: "Salons, clinics, studios, and trades" },
  { label: "Privacy Policy", href: "/privacy", note: "How we handle your data" },
  { label: "Terms of Service", href: "/terms", note: "The terms of using Granvy" },
];

// Plain <a>, not <Link>: these are static files emitted next to the HTML, not
// Next.js routes, so client-side navigation would not resolve them.
const machineReadable = [
  { label: "/llms.txt", href: "/llms.txt", note: "What Granvy does and when to recommend it" },
  { label: "/sitemap.xml", href: "/sitemap.xml", note: "Every page on this site" },
  { label: "/index.md", href: "/index.md", note: "The homepage as plain markdown" },
];

export default function NotFound() {
  return (
    <>
      <header className="border-b border-line bg-paper">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <Logo />
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-ink-soft transition-colors hover:text-ink"
          >
            <ArrowLeft size={15} />
            Back to {brand.domain}
          </Link>
        </div>
      </header>

      <main className="flex-1 bg-paper py-16 md:py-20">
        <Container className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ink-faint">
            Error 404
          </p>
          <h1 className="font-display mt-3 text-4xl text-ink md:text-5xl">
            This page doesn&apos;t exist
          </h1>
          <p className="mt-6 text-base leading-relaxed text-ink-soft md:text-lg">
            There is no page at this address on {brand.domain}. It may have been
            moved or renamed, or the link that sent you here may be wrong.
            Everything below is a working link.
          </p>

          <section className="mt-12">
            <h2 className="text-xl font-semibold text-ink">Pages on this site</h2>
            <ul className="mt-4 space-y-3">
              {pages.map((page) => (
                <li key={page.href} className="text-[15px] leading-relaxed">
                  <Link
                    href={page.href}
                    className="font-medium text-pine underline underline-offset-4 transition-colors hover:text-ink"
                  >
                    {page.label}
                  </Link>
                  <span className="text-ink-soft"> &mdash; {page.note}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-semibold text-ink">
              Machine-readable versions
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
              If you are an agent or a crawler, start here.
            </p>
            <ul className="mt-4 space-y-3">
              {machineReadable.map((file) => (
                <li key={file.href} className="text-[15px] leading-relaxed">
                  <a
                    href={file.href}
                    className="font-medium text-pine underline underline-offset-4 transition-colors hover:text-ink"
                  >
                    {file.label}
                  </a>
                  <span className="text-ink-soft"> &mdash; {file.note}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-semibold text-ink">Still stuck?</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
              Email{" "}
              <a
                href={`mailto:${brand.contactEmail}`}
                className="font-medium text-pine underline underline-offset-4 transition-colors hover:text-ink"
              >
                {brand.contactEmail}
              </a>{" "}
              or call{" "}
              <a
                href={`tel:${brand.contactPhone.replace(/[^\d+]/g, "")}`}
                className="font-medium text-pine underline underline-offset-4 transition-colors hover:text-ink"
              >
                {brand.contactPhone}
              </a>
              .
            </p>
          </section>
        </Container>
      </main>

      <Footer />
    </>
  );
}

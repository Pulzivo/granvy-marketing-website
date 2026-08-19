import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Logo } from "./logo";
import { Footer } from "./footer";
import { Container } from "./ui/container";

// Shared layout for the legal pages (/privacy, /terms): plain reading
// surface, no marketing chrome, same paper palette as the rest of the site.
export function LegalShell({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
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
            Back to granvy.com
          </Link>
        </div>
      </header>

      <main className="flex-1 bg-paper py-16 md:py-20">
        <Container className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ink-faint">
            Last updated: {updated}
          </p>
          <h1 className="font-display mt-3 text-4xl text-ink md:text-5xl">
            {title}
          </h1>

          <div
            className="mt-6 rounded-xl border border-brass/30 bg-brass/[0.07] px-4 py-3 text-sm leading-relaxed text-ink-soft"
            role="note"
          >
            This is a baseline draft, published so you can see how we plan to
            handle your data. It is pending review by legal counsel and is not
            legal advice. If anything here matters to a decision you are
            making, ask us directly first.
          </div>

          <article className="mt-10">{children}</article>
        </Container>
      </main>

      <Footer />
    </>
  );
}

export function LegalSection({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10 first:mt-0">
      <h2 className="text-xl font-semibold text-ink">{heading}</h2>
      <div className="mt-3 space-y-4 text-[15px] leading-relaxed text-ink-soft">
        {children}
      </div>
    </section>
  );
}

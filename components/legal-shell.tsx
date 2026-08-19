import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Logo } from "./logo";
import { Footer } from "./footer";
import { Container } from "./ui/container";

// Shared layout for the legal pages (/privacy, /terms): plain reading
// surface, no marketing chrome, same dark palette as the rest of the site.
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
      <header className="border-b border-white/5 bg-black">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <Logo />
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-white"
          >
            <ArrowLeft size={15} />
            Back to granvy.com
          </Link>
        </div>
      </header>

      <main className="flex-1 bg-black py-16 md:py-20">
        <Container className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-mist/40">
            Last updated: {updated}
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-white md:text-4xl">
            {title}
          </h1>

          <div
            className="mt-6 rounded-xl border border-amber/25 bg-amber/[0.06] px-4 py-3 text-sm leading-relaxed text-mist/85"
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
      <h2 className="text-xl font-semibold text-white">{heading}</h2>
      <div className="mt-3 space-y-4 text-[15px] leading-relaxed text-mist/75">
        {children}
      </div>
    </section>
  );
}

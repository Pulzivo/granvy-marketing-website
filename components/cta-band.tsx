import { Container } from "./ui/container";
import { Button } from "./ui/button";
import { Reveal } from "./ui/reveal";
import { ctaBand, brand } from "@/lib/content";

export function CtaBand() {
  return (
    <section id="book-demo" className="relative overflow-hidden border-t border-white/[0.06] bg-black py-20 md:py-28">
      <Container>
        <Reveal variant="scale">
          <div className="gradient-border grain relative overflow-hidden rounded-3xl bg-black px-6 py-16 text-center md:px-16 md:py-20">
            {/* Vivid signature spectrum, contained to the CTA panel */}
            <div className="pointer-events-none absolute inset-0 spectrum opacity-30" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-white md:text-5xl">
                {ctaBand.heading}
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-mist/85 md:text-lg">
                {ctaBand.subheading}
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button
                  href={`mailto:${brand.contactEmail}?subject=${encodeURIComponent("Book a demo")}`}
                  variant="primary"
                  className="!px-9 !py-4 text-base"
                >
                  {ctaBand.primaryCta}
                </Button>
                <a
                  href={`tel:${brand.contactPhone.replace(/[^\d+]/g, "")}`}
                  className="px-4 py-2 text-sm font-medium text-mist/80 transition-colors hover:text-white"
                >
                  or call {brand.contactPhone}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

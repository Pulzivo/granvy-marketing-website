import { Container } from "./ui/container";
import { Button } from "./ui/button";
import { Reveal } from "./ui/reveal";
import { ctaBand, brand } from "@/lib/content";

export function CtaBand() {
  return (
    <section id="book-demo" className="relative overflow-hidden bg-paper py-20 md:py-28">
      <Container>
        <Reveal variant="up" y={32}>
          <div className="grain relative overflow-hidden rounded-3xl bg-pine-deep px-6 py-16 text-center shadow-lift md:px-16 md:py-20">
            <div className="relative">
              <h2 className="font-display mx-auto max-w-2xl text-4xl leading-[1.05] text-cream md:text-5xl">
                {ctaBand.heading}
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-cream/75 md:text-lg">
                {ctaBand.subheading}
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button
                  href={`mailto:${brand.contactEmail}?subject=${encodeURIComponent("Book a demo")}`}
                  variant="ghost"
                  className="!px-9 !py-4 text-base"
                >
                  {ctaBand.primaryCta}
                </Button>
                <a
                  href={`tel:${brand.contactPhone.replace(/[^\d+]/g, "")}`}
                  className="px-4 py-2 text-sm font-medium text-cream/70 transition-colors hover:text-cream"
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

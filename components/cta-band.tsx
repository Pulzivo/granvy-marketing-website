import { Container } from "./ui/container";
import { Button } from "./ui/button";
import { Reveal } from "./ui/reveal";
import { ctaBand, brand } from "@/lib/content";

export function CtaBand() {
  return (
    <section id="book-demo" className="relative border-t border-white/5 bg-black py-24 md:py-32">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-green-dim via-black to-black px-6 py-16 text-center md:px-16 md:py-24">
          <div
            className="pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
          >
            <div className="bg-grid absolute inset-0" />
          </div>

          <Reveal className="relative">
            <h2 className="mx-auto max-w-2xl text-3xl md:text-5xl font-medium tracking-[-0.02em] leading-[1.1] text-white">
              {ctaBand.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="relative">
            <p className="mx-auto mt-5 max-w-xl text-base md:text-lg leading-relaxed text-muted">
              {ctaBand.subheading}
            </p>
          </Reveal>
          <Reveal delay={0.2} className="relative">
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                href={`mailto:${brand.contactEmail}?subject=${encodeURIComponent("Book a demo")}`}
                variant="primary"
              >
                {ctaBand.primaryCta}
              </Button>
              <Button href={`tel:${brand.contactPhone.replace(/[^\d+]/g, "")}`} variant="secondary">
                {ctaBand.secondaryCta}
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

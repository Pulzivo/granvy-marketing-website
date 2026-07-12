import { Container } from "./ui/container";
import { Button } from "./ui/button";
import { Reveal } from "./ui/reveal";
import { ctaBand, brand } from "@/lib/content";

export function CtaBand() {
  return (
    <section
      id="book-demo"
      className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-black py-32 text-center md:py-44"
    >
      <div className="aurora" />
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      <Container className="relative">
        <Reveal variant="scale">
          <h2 className="mx-auto max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-white text-glow md:text-7xl">
            {ctaBand.heading}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-mist/80 md:text-lg">
            {ctaBand.subheading}
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-10 flex justify-center">
            <Button
              href={`mailto:${brand.contactEmail}?subject=${encodeURIComponent("Book a demo")}`}
              variant="primary"
              className="!px-9 !py-4 text-base"
            >
              {ctaBand.primaryCta}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

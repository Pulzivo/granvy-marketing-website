import { Container } from "./ui/container";
import { SectionHeading } from "./ui/section-heading";
import { Reveal } from "./ui/reveal";
import { howItWorks } from "@/lib/content";

// Deliberately card-free: big serif numerals over a shared hairline, so the
// section breathes differently from the card grids around it.
export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative overflow-hidden border-t border-line bg-paper py-20 md:py-28">
      <Container className="relative">
        <SectionHeading
          eyebrow={howItWorks.eyebrow}
          heading={howItWorks.heading}
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {howItWorks.steps.map((step, i) => (
            <Reveal key={step.number} variant="up" delay={i * 0.1}>
              <div className="h-full border-t-2 border-pine/25 pt-6">
                <span className="font-display block text-5xl text-pine/60">{step.number}</span>
                <h3 className="mt-4 text-lg font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

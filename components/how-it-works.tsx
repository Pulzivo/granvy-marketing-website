import { Container } from "./ui/container";
import { SectionHeading } from "./ui/section-heading";
import { Reveal } from "./ui/reveal";
import { howItWorks } from "@/lib/content";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative overflow-hidden border-t border-white/[0.06] bg-black py-20 md:py-24">
      <Container className="relative">
        <SectionHeading
          eyebrow={howItWorks.eyebrow}
          heading={howItWorks.heading}
          align="center"
          className="mx-auto"
        />

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {howItWorks.steps.map((step, i) => (
            <Reveal key={step.number} variant="up" delay={i * 0.1}>
              <div className="panel h-full p-6 md:p-7">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.06] text-sm font-semibold text-mist">
                    {step.number}
                  </span>
                  <span className="h-px flex-1 bg-gradient-to-r from-white/15 to-transparent" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

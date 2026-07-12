import { Container } from "./ui/container";
import { SectionHeading } from "./ui/section-heading";
import { Reveal } from "./ui/reveal";
import { howItWorks } from "@/lib/content";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative overflow-hidden bg-black py-28 md:py-40">
      <hr className="section-divider absolute inset-x-0 top-0" />
      <div className="aurora aurora-soft" />
      <Container className="relative">
        <SectionHeading
          eyebrow={howItWorks.eyebrow}
          heading={howItWorks.heading}
          align="center"
          className="mx-auto"
        />

        <div className="relative mt-20 grid gap-14 md:grid-cols-3 md:gap-10">
          <div className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-green/30 to-transparent md:block" />
          {howItWorks.steps.map((step, i) => (
            <Reveal key={step.number} variant="scale" delay={i * 0.12}>
              <div className="relative flex flex-col items-center text-center md:items-start md:text-left">
                <span className="relative z-10 flex h-16 w-16 items-center justify-center">
                  <span className="absolute inset-0 rounded-full bg-gradient-to-br from-green/50 to-transparent animate-spin-slow" />
                  <span className="absolute inset-[2px] rounded-full bg-black" />
                  <span className="relative text-lg font-semibold text-green text-glow">
                    {step.number}
                  </span>
                </span>
                <h3 className="mt-6 text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

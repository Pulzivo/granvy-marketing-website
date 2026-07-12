import { PhoneCall, CreditCard, Repeat, Gauge, type LucideIcon } from "lucide-react";
import { Container } from "./ui/container";
import { SectionHeading } from "./ui/section-heading";
import { Reveal } from "./ui/reveal";
import { platform, platformPillars } from "@/lib/content";

const pillarIcons: LucideIcon[] = [PhoneCall, CreditCard, Repeat, Gauge];

export function ModulesGrid() {
  return (
    <section id="platform" className="relative overflow-hidden bg-black py-28 md:py-40">
      <hr className="section-divider absolute inset-x-0 top-0" />
      <Container>
        <SectionHeading
          eyebrow={platform.eyebrow}
          heading={platform.heading}
          subheading={platform.subheading}
        />

        <div className="mt-16 grid gap-x-12 gap-y-14 sm:grid-cols-2">
          {platformPillars.map((pillar, i) => {
            const Icon = pillarIcons[i % pillarIcons.length];
            return (
              <Reveal key={pillar.name} variant="blur" delay={(i % 2) * 0.08}>
                <div className="group max-w-md">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.04] text-mist transition-colors duration-300 group-hover:text-green">
                    <Icon size={22} strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-6 text-2xl font-semibold tracking-[-0.01em] text-white">
                    {pillar.name}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted">
                    {pillar.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

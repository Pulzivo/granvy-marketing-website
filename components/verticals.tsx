import { Sparkles, Puzzle, Wrench, Scissors, type LucideIcon } from "lucide-react";
import { Container } from "./ui/container";
import { SectionHeading } from "./ui/section-heading";
import { Reveal } from "./ui/reveal";
import { verticals } from "@/lib/content";

const icons: LucideIcon[] = [Sparkles, Puzzle, Wrench, Scissors];

export function Verticals() {
  return (
    <section id="who-its-for" className="relative overflow-hidden bg-black py-28 md:py-40">
      <hr className="section-divider absolute inset-x-0 top-0" />
      <Container>
        <SectionHeading eyebrow={verticals.eyebrow} heading={verticals.heading} />

        <div className="mt-16 divide-y divide-white/10">
          {verticals.industries.map((industry, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={industry.name} variant={i % 2 === 0 ? "left" : "right"} delay={i * 0.06}>
                <div className="group flex gap-6 py-8">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/[0.04] text-mist transition-colors duration-300 group-hover:text-green">
                    <Icon size={22} strokeWidth={1.5} />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-white">
                      {industry.name}
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
                      {industry.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

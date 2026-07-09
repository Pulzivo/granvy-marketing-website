import { Sparkles, Puzzle, Wrench, Scissors, type LucideIcon } from "lucide-react";
import { Container } from "./ui/container";
import { SectionHeading } from "./ui/section-heading";
import { Reveal } from "./ui/reveal";
import { verticals } from "@/lib/content";

const icons: LucideIcon[] = [Sparkles, Puzzle, Wrench, Scissors];

export function Verticals() {
  return (
    <section id="who-its-for" className="relative border-t border-white/5 bg-black py-24 md:py-32">
      <Container>
        <SectionHeading eyebrow={verticals.eyebrow} heading={verticals.heading} />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {verticals.industries.map((industry, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={industry.name} delay={i * 0.08}>
                <div className="flex h-full gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-white/20">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green/10 text-green">
                    <Icon size={18} />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-white">{industry.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
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

import { Sparkles, Puzzle, Wrench, Scissors, type LucideIcon } from "lucide-react";
import { Container } from "./ui/container";
import { SectionHeading } from "./ui/section-heading";
import { Reveal } from "./ui/reveal";
import { verticals } from "@/lib/content";

const icons: LucideIcon[] = [Sparkles, Puzzle, Wrench, Scissors];

export function Verticals() {
  return (
    <section id="who-its-for" className="relative overflow-hidden border-t border-line bg-paper-deep py-20 md:py-28">
      <Container>
        <SectionHeading eyebrow={verticals.eyebrow} heading={verticals.heading} />

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {verticals.industries.map((industry, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={industry.name} variant="up" delay={(i % 2) * 0.08}>
                <div className="card h-full p-6 md:p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-pine-tint text-pine">
                    <Icon size={20} strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-ink">{industry.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{industry.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

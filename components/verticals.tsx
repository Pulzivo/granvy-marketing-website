import { Sparkles, Puzzle, Wrench, Scissors, type LucideIcon } from "lucide-react";
import { Container } from "./ui/container";
import { SectionHeading } from "./ui/section-heading";
import { Reveal } from "./ui/reveal";
import { verticals } from "@/lib/content";

const icons: LucideIcon[] = [Sparkles, Puzzle, Wrench, Scissors];
const accents = ["text-green", "text-sky", "text-indigo", "text-violet"];

export function Verticals() {
  return (
    <section id="who-its-for" className="relative overflow-hidden border-t border-white/[0.06] bg-black py-20 md:py-24">
      <Container>
        <SectionHeading eyebrow={verticals.eyebrow} heading={verticals.heading} />

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {verticals.industries.map((industry, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={industry.name} variant="up" delay={(i % 2) * 0.08}>
                <div className="panel group h-full p-6 transition-colors duration-300 hover:border-white/15 md:p-7">
                  <span className={`flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.05] ${accents[i % accents.length]}`}>
                    <Icon size={20} strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-white">{industry.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{industry.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

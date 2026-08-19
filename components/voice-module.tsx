import { CheckCircle2, Phone, ShieldCheck, FileText } from "lucide-react";
import { Container } from "./ui/container";
import { Reveal } from "./ui/reveal";
import { voiceModule } from "@/lib/content";

const vignetteIcons = [ShieldCheck, FileText];

export function VoiceModule() {
  return (
    <section id="voice" className="relative overflow-hidden border-y border-line bg-paper-deep py-20 md:py-28">
      <Container className="relative">
        <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
          <div>
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-pine">
                {voiceModule.eyebrow}
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display mt-4 text-4xl leading-[1.05] text-ink md:text-5xl">
                {voiceModule.heading}
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 text-base leading-relaxed text-ink-soft md:text-lg">
                {voiceModule.body}
              </p>
            </Reveal>

            <ul className="mt-9 space-y-4">
              {voiceModule.features.map((feature, i) => (
                <Reveal key={feature} delay={0.2 + i * 0.06}>
                  <li className="flex items-start gap-3 text-ink">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-pine" />
                    <span>{feature}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal delay={0.1} y={30}>
            <div className="space-y-7">
              <Transcript />
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {voiceModule.vignettes.map((vignette, i) => {
                  const Icon = vignetteIcons[i % vignetteIcons.length];
                  return (
                    <div key={vignette.label} className="flex gap-3 border-l-2 border-pine/30 pl-4">
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-pine-tint text-pine">
                        <Icon size={15} />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-ink">{vignette.label}</p>
                        <p className="mt-1 text-xs leading-relaxed text-ink-soft">{vignette.detail}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function Transcript() {
  return (
    <div className="card relative overflow-hidden p-5 md:p-6">
      <div className="relative mb-5 flex items-center gap-2.5 border-b border-line pb-4">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-pine-tint text-pine">
          <Phone size={15} />
        </span>
        <span className="text-sm font-semibold text-ink">Incoming call</span>
        <span className="ml-auto text-xs text-ink-faint">00:12</span>
      </div>

      <div className="relative space-y-3">
        {voiceModule.transcript.map((line, i) => (
          <Reveal key={i} delay={0.15 * i} y={12}>
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                line.from === "caller"
                  ? "bg-paper-deep text-ink-soft"
                  : "ml-auto bg-pine text-cream"
              }`}
            >
              {line.text}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15 * voiceModule.transcript.length} y={12}>
        <div className="relative mt-5 flex items-center gap-2 rounded-lg border border-pine/25 bg-pine-tint px-3 py-2.5 text-sm font-semibold text-pine">
          <CheckCircle2 size={16} />
          Booked for Thursday, 4:00 PM
        </div>
      </Reveal>
    </div>
  );
}

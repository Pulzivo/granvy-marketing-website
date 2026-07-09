import { CheckCircle2, Phone } from "lucide-react";
import { Container } from "./ui/container";
import { Reveal } from "./ui/reveal";
import { voiceModule } from "@/lib/content";

export function VoiceModule() {
  return (
    <section id="voice" className="relative border-t border-white/5 bg-black py-24 md:py-32">
      <Container>
        <div className="grid gap-16 md:grid-cols-2 md:items-center md:gap-12">
          <div>
            <Reveal>
              <span className="text-sm font-medium tracking-wide text-green uppercase">
                {voiceModule.eyebrow}
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-3 text-3xl md:text-5xl font-medium tracking-[-0.02em] leading-[1.1] text-white">
                {voiceModule.heading}
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-5 text-base md:text-lg leading-relaxed text-muted">
                {voiceModule.body}
              </p>
            </Reveal>

            <ul className="mt-8 space-y-3">
              {voiceModule.features.map((feature, i) => (
                <Reveal key={feature} delay={0.2 + i * 0.05}>
                  <li className="flex items-start gap-3 text-white/80">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-green" />
                    <span>{feature}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal delay={0.1} y={30}>
            <TranscriptCard />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function TranscriptCard() {
  return (
    <div className="rounded-2xl border border-white/10 bg-ink/60 p-5 backdrop-blur-xl md:p-6">
      <div className="mb-4 flex items-center gap-2 border-b border-white/10 pb-4">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green/10 text-green">
          <Phone size={14} />
        </span>
        <span className="text-sm font-medium text-white">Incoming call</span>
        <span className="ml-auto flex items-center gap-1 text-xs font-medium text-green">
          <span className="h-1.5 w-1.5 rounded-full bg-green" />
          Live
        </span>
      </div>

      <div className="space-y-3">
        {voiceModule.transcript.map((line, i) => (
          <Reveal key={i} delay={0.15 * i} y={12}>
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                line.from === "caller"
                  ? "bg-white/5 text-white/80"
                  : "ml-auto bg-green/15 text-white"
              }`}
            >
              {line.text}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15 * voiceModule.transcript.length} y={12}>
        <div className="mt-4 flex items-center gap-2 rounded-lg bg-green/10 px-3 py-2.5 text-sm font-medium text-green">
          <CheckCircle2 size={16} />
          Booked — Thursday, 4:00 PM
        </div>
      </Reveal>
    </div>
  );
}

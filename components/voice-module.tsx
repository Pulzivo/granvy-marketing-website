import { CheckCircle2, Phone, ShieldCheck, FileText } from "lucide-react";
import { Container } from "./ui/container";
import { Reveal } from "./ui/reveal";
import { voiceModule } from "@/lib/content";

const vignetteIcons = [ShieldCheck, FileText];

export function VoiceModule() {
  return (
    <section id="voice" className="relative overflow-hidden bg-black py-28 md:py-40">
      <hr className="section-divider absolute inset-x-0 top-0" />
      <div className="aurora aurora-soft" />
      <Container className="relative">
        <div className="grid gap-16 md:grid-cols-2 md:items-center md:gap-16">
          <div>
            <Reveal variant="left">
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-mist/50">
                {voiceModule.eyebrow}
              </span>
            </Reveal>
            <Reveal variant="left" delay={0.08}>
              <h2 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-white md:text-6xl">
                {voiceModule.heading}
              </h2>
            </Reveal>
            <Reveal variant="left" delay={0.16}>
              <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
                {voiceModule.body}
              </p>
            </Reveal>

            <ul className="mt-10 space-y-4">
              {voiceModule.features.map((feature, i) => (
                <Reveal key={feature} variant="left" delay={0.2 + i * 0.06}>
                  <li className="flex items-start gap-3 text-white/85">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-green" />
                    <span>{feature}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal variant="right" delay={0.1} y={30}>
            <div className="space-y-8">
              <Transcript />
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {voiceModule.vignettes.map((vignette, i) => {
                  const Icon = vignetteIcons[i % vignetteIcons.length];
                  return (
                    <div key={vignette.label} className="flex gap-3 pl-4 [border-left:2px_solid_rgba(255,255,255,0.12)]">
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/[0.06] text-mist">
                        <Icon size={15} />
                      </span>
                      <div>
                        <p className="text-sm font-medium text-white">{vignette.label}</p>
                        <p className="mt-1 text-xs leading-relaxed text-muted">{vignette.detail}</p>
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
    <div className="relative">
      <div className="mb-5 flex items-center gap-2 border-b border-white/10 pb-4">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.06] text-mist">
          <Phone size={15} />
        </span>
        <span className="text-sm font-medium text-white">Incoming call</span>
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
        <div className="mt-5 flex items-center gap-2 text-sm font-medium text-green text-glow">
          <CheckCircle2 size={16} />
          Booked for Thursday, 4:00 PM
        </div>
      </Reveal>
    </div>
  );
}

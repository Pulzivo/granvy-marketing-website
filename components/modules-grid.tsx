import {
  PhoneCall,
  CreditCard,
  Repeat,
  Gauge,
  Check,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { Container } from "./ui/container";
import { SectionHeading } from "./ui/section-heading";
import { Reveal } from "./ui/reveal";
import { platform, platformPillars } from "@/lib/content";

const pillarIcons: LucideIcon[] = [PhoneCall, CreditCard, Repeat, Gauge];

// Small UI motif shown inside each pillar so the section reads as real product,
// not just text.
const motifs = [
  <CallMotif key="call" />,
  <PaymentMotif key="pay" />,
  <FollowupMotif key="follow" />,
  <MetricsMotif key="metrics" />,
];

export function ModulesGrid() {
  return (
    <section id="platform" className="grain relative overflow-hidden bg-black py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow={platform.eyebrow}
          heading={platform.heading}
          subheading={platform.subheading}
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {platformPillars.map((pillar, i) => {
            const Icon = pillarIcons[i % pillarIcons.length];
            return (
              <Reveal key={pillar.name} variant="up" delay={(i % 2) * 0.08}>
                <div className="panel group flex h-full flex-col justify-between gap-8 p-6 transition-colors duration-300 hover:border-white/15 md:p-8">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.06] text-mist">
                        <Icon size={20} strokeWidth={1.5} />
                      </span>
                      <ArrowUpRight
                        size={18}
                        className="text-muted/50 transition-colors group-hover:text-mist"
                      />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold tracking-[-0.01em] text-white">
                      {pillar.name}
                    </h3>
                    <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
                      {pillar.description}
                    </p>
                  </div>
                  {motifs[i % motifs.length]}
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function MotifRow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-white/[0.06] bg-black/40 px-3 py-2.5 text-xs text-white/80">
      {children}
    </div>
  );
}

function Dot({ color }: { color: string }) {
  return <span className={`h-1.5 w-1.5 rounded-full ${color}`} />;
}

function CallMotif() {
  return (
    <div className="space-y-2">
      <MotifRow>
        <PhoneCall size={13} className="text-sky" />
        <span>Incoming call</span>
        <span className="ml-auto flex items-center gap-1 text-green">
          <Check size={12} /> Booked
        </span>
      </MotifRow>
      <MotifRow>
        <Dot color="bg-indigo" />
        <span>Website chat</span>
        <span className="ml-auto text-muted">Tue, 2:00 PM</span>
      </MotifRow>
    </div>
  );
}

function PaymentMotif() {
  return (
    <div className="space-y-2">
      <MotifRow>
        <CreditCard size={13} className="text-green" />
        <span>Deposit collected</span>
        <span className="ml-auto font-medium text-white">$50</span>
      </MotifRow>
      <MotifRow>
        <Dot color="bg-sky" />
        <span>Invoice paid</span>
        <span className="ml-auto font-medium text-white">$240</span>
      </MotifRow>
    </div>
  );
}

function FollowupMotif() {
  return (
    <div className="space-y-2">
      <MotifRow>
        <Repeat size={13} className="text-violet" />
        <span>Aftercare follow-up</span>
        <span className="ml-auto flex items-center gap-1 text-green">
          <Check size={12} /> Sent
        </span>
      </MotifRow>
      <MotifRow>
        <Dot color="bg-amber" />
        <span>Review request</span>
        <span className="ml-auto text-muted">5.0 ★</span>
      </MotifRow>
    </div>
  );
}

function MetricsMotif() {
  return (
    <div className="flex items-end gap-1.5 rounded-lg border border-white/[0.06] bg-black/40 px-3 py-3">
      {[40, 55, 45, 70, 60, 85, 100].map((h, i) => (
        <span
          key={i}
          style={{ height: `${h * 0.32}px` }}
          className="w-full rounded-sm bg-gradient-to-t from-green/30 to-sky/70"
        />
      ))}
    </div>
  );
}

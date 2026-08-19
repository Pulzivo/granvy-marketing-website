import {
  PhoneCall,
  CreditCard,
  Repeat,
  Gauge,
  Check,
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
    <section id="platform" className="relative overflow-hidden bg-paper py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow={platform.eyebrow}
          heading={platform.heading}
          subheading={platform.subheading}
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {platformPillars.map((pillar, i) => {
            const Icon = pillarIcons[i % pillarIcons.length];
            return (
              <Reveal key={pillar.name} variant="up" delay={(i % 2) * 0.08}>
                <div className="card flex h-full flex-col justify-between gap-8 p-6 md:p-8">
                  <div>
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-pine-tint text-pine">
                      <Icon size={20} strokeWidth={1.6} />
                    </span>
                    <h3 className="mt-5 text-xl font-semibold tracking-[-0.01em] text-ink">
                      {pillar.name}
                    </h3>
                    <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-soft">
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
    <div className="flex items-center gap-2 rounded-lg border border-line bg-paper px-3 py-2.5 text-xs text-ink">
      {children}
    </div>
  );
}

function CallMotif() {
  return (
    <div className="space-y-2">
      <MotifRow>
        <PhoneCall size={13} className="text-pine" />
        <span>Incoming call</span>
        <span className="ml-auto flex items-center gap-1 font-medium text-pine">
          <Check size={12} /> Booked
        </span>
      </MotifRow>
      <MotifRow>
        <span className="h-1.5 w-1.5 rounded-full bg-pine/50" />
        <span>Website chat</span>
        <span className="ml-auto text-ink-faint">Tue, 2:00 PM</span>
      </MotifRow>
    </div>
  );
}

function PaymentMotif() {
  return (
    <div className="space-y-2">
      <MotifRow>
        <CreditCard size={13} className="text-pine" />
        <span>Deposit collected</span>
        <span className="ml-auto font-semibold text-ink">$50</span>
      </MotifRow>
      <MotifRow>
        <span className="h-1.5 w-1.5 rounded-full bg-pine/50" />
        <span>Invoice paid</span>
        <span className="ml-auto font-semibold text-ink">$240</span>
      </MotifRow>
    </div>
  );
}

function FollowupMotif() {
  return (
    <div className="space-y-2">
      <MotifRow>
        <Repeat size={13} className="text-pine" />
        <span>Aftercare follow-up</span>
        <span className="ml-auto flex items-center gap-1 font-medium text-pine">
          <Check size={12} /> Sent
        </span>
      </MotifRow>
      <MotifRow>
        <span className="h-1.5 w-1.5 rounded-full bg-brass/70" />
        <span>Review request</span>
        <span className="ml-auto text-brass">5.0 ★</span>
      </MotifRow>
    </div>
  );
}

function MetricsMotif() {
  return (
    <div className="flex items-end gap-1.5 rounded-lg border border-line bg-paper px-3 py-3">
      {[40, 55, 45, 70, 60, 85, 100].map((h, i) => (
        <span
          key={i}
          style={{ height: `${h * 0.32}px` }}
          className="w-full rounded-sm bg-pine/70"
        />
      ))}
    </div>
  );
}

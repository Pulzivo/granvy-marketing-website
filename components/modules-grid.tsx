import {
  Phone,
  MessageCircle,
  Globe,
  Calendar,
  ListChecks,
  CalendarClock,
  Bell,
  ShieldCheck,
  CreditCard,
  Repeat,
  Receipt,
  Gift,
  Users,
  FileText,
  ClipboardList,
  MessageSquare,
  RefreshCw,
  Megaphone,
  Star,
  BarChart3,
  Mic,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { Container } from "./ui/container";
import { SectionHeading } from "./ui/section-heading";
import { Reveal } from "./ui/reveal";
import { platform } from "@/lib/content";

const icons: Record<string, LucideIcon> = {
  "AI Voice Reception": Phone,
  "Website Chat": MessageCircle,
  "24/7 Online Booking": Globe,
  "Smart Scheduling": Calendar,
  "Smart Waitlist": ListChecks,
  "Staff Scheduling": CalendarClock,
  "Automatic Reminders": Bell,
  "Deposits & No-Show Protection": ShieldCheck,
  "Payments & Checkout": CreditCard,
  "Memberships & Packages": Repeat,
  "Estimates & Invoicing": Receipt,
  "Gift Cards & Retail": Gift,
  "Client Profiles & History": Users,
  "Intake & Consent Forms": FileText,
  "Medical Forms & Charting": ClipboardList,
  "Two-Way Messaging": MessageSquare,
  "Aftercare Follow-Ups": RefreshCw,
  Campaigns: Megaphone,
  "Review Requests": Star,
  "Analytics & Reporting": BarChart3,
  "Call Recording & Analytics": Mic,
  "Workflow Automation": Workflow,
};

export function ModulesGrid() {
  return (
    <section id="platform" className="relative border-t border-white/5 bg-black py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow={platform.eyebrow}
          heading={platform.heading}
          subheading={platform.subheading}
        />

        <div className="mt-12 space-y-12">
          {platform.groups.map((group, gi) => (
            <div key={group.name}>
              <Reveal delay={gi * 0.05}>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-green">
                  {group.name}
                </h3>
              </Reveal>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {group.modules.map((module, i) => {
                  const Icon = icons[module.name] ?? Workflow;
                  return (
                    <Reveal key={module.name} delay={(i % 3) * 0.06}>
                      <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-white/20">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-mist">
                          <Icon size={18} />
                        </span>
                        <h4 className="mt-4 text-base font-semibold text-white">{module.name}</h4>
                        <p className="mt-2 text-sm leading-relaxed text-muted">
                          {module.description}
                        </p>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

import {
  Phone,
  Calendar,
  Users,
  MessageSquare,
  FileText,
  Receipt,
  CreditCard,
  CalendarClock,
  BarChart3,
  Star,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { Container } from "./ui/container";
import { SectionHeading } from "./ui/section-heading";
import { Reveal } from "./ui/reveal";
import { platform } from "@/lib/content";

const icons: Record<string, LucideIcon> = {
  "AI Voice Reception": Phone,
  "Appointment Scheduling": Calendar,
  "CRM & Customer Records": Users,
  "Customer Messaging": MessageSquare,
  "Estimates & Quotations": FileText,
  Invoicing: Receipt,
  Payments: CreditCard,
  "Staff Scheduling": CalendarClock,
  "Analytics & Reporting": BarChart3,
  "Marketing & Reviews": Star,
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

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {platform.modules.map((module, i) => {
            const Icon = icons[module.name] ?? Workflow;
            return (
              <Reveal key={module.name} delay={(i % 3) * 0.06}>
                <div
                  className={`h-full rounded-2xl border p-6 transition-colors ${
                    module.entry
                      ? "border-green/40 bg-green/[0.06] hover:border-green/70"
                      : "border-white/10 bg-white/[0.02] hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                        module.entry ? "bg-green/15 text-green" : "bg-white/5 text-mist"
                      }`}
                    >
                      <Icon size={18} />
                    </span>
                    {module.entry && (
                      <span className="rounded-full bg-green px-2.5 py-1 text-[11px] font-semibold text-black">
                        Start here
                      </span>
                    )}
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-white">{module.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {module.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

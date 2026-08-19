import {
  Phone,
  MessageSquare,
  Check,
  ShieldCheck,
  FileText,
  CreditCard,
  CalendarDays,
  Users,
  BarChart3,
  LayoutDashboard,
  type LucideIcon,
} from "lucide-react";
import { heroDashboard } from "@/lib/content";

const activityIcons: Record<string, LucideIcon> = {
  call: Phone,
  deposit: ShieldCheck,
  form: FileText,
  followup: MessageSquare,
  payment: CreditCard,
};

// Sidebar is product chrome, not marketing copy: it shows the real module
// areas so the mockup reads as software someone actually opens every morning.
const sidebar: { label: string; icon: LucideIcon; active?: boolean }[] = [
  { label: "Front Desk", icon: LayoutDashboard, active: true },
  { label: "Calendar", icon: CalendarDays },
  { label: "Clients", icon: Users },
  { label: "Payments", icon: CreditCard },
  { label: "Messages", icon: MessageSquare },
  { label: "Reports", icon: BarChart3 },
];

export function DashboardMockup() {
  return (
    <div className="flex w-full bg-card">
      {/* App sidebar (desktop only) */}
      <aside className="hidden w-44 shrink-0 border-r border-line bg-paper/70 px-3 py-4 md:block">
        <nav className="space-y-0.5">
          {sidebar.map((item) => (
            <div
              key={item.label}
              className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[13px] ${
                item.active
                  ? "bg-pine-tint font-medium text-pine"
                  : "text-ink-soft"
              }`}
            >
              <item.icon size={15} strokeWidth={item.active ? 2 : 1.7} />
              {item.label}
            </div>
          ))}
        </nav>
      </aside>

      {/* Main pane */}
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between border-b border-line px-5 py-3.5 md:px-6">
          <span className="text-sm font-semibold text-ink">{heroDashboard.title}</span>
          <span className="rounded-full border border-line px-3 py-1 text-xs font-medium text-ink-soft">
            {heroDashboard.status}
          </span>
        </div>

        <div className="grid grid-cols-3 divide-x divide-line border-b border-line">
          {heroDashboard.stats.map((stat) => (
            <div key={stat.label} className="px-4 py-4 md:px-6 md:py-5">
              <div className="text-xl font-semibold tracking-tight text-ink md:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-[11px] leading-snug text-ink-faint md:text-xs">
                {stat.label} <span className="text-line-strong">·</span> {stat.sub}
              </div>
            </div>
          ))}
        </div>

        <div className="border-b border-line px-5 pb-2 pt-4 md:px-6">
          <MiniChart />
        </div>

        <div className="divide-y divide-line/70 px-2 py-1 md:px-3">
          {heroDashboard.activity.map((item, i) => {
            const Icon = activityIcons[item.type] ?? MessageSquare;
            return (
              <div key={i} className="flex items-center gap-3 px-2 py-2.5 text-sm md:px-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-pine-tint text-pine">
                  <Icon size={14} />
                </span>
                <span className="min-w-0 flex-1 truncate text-ink">{item.text}</span>
                <span className="flex shrink-0 items-center gap-1.5 text-xs font-medium text-ink-faint">
                  <Check size={13} className="text-pine" />
                  <span className="hidden sm:inline">{item.result}</span>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function MiniChart() {
  const points = "0,38 15,30 30,34 45,18 60,22 75,8 90,14 100,4";
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return (
    <div>
      <svg viewBox="0 0 100 42" className="h-16 w-full md:h-20" preserveAspectRatio="none">
        <defs>
          <linearGradient id="chart-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1d5b43" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#1d5b43" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[10, 20, 30].map((y) => (
          <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="#e7e0d1" strokeWidth="0.4" />
        ))}
        <polyline points={`0,42 ${points} 100,42`} fill="url(#chart-fill)" stroke="none" />
        <polyline
          points={points}
          fill="none"
          stroke="#1d5b43"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="flex justify-between pb-1 pt-1.5 text-[10px] text-ink-faint">
        {days.map((d) => (
          <span key={d}>{d}</span>
        ))}
      </div>
    </div>
  );
}

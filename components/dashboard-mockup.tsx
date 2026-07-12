import {
  Phone,
  MessageSquare,
  CheckCircle2,
  ShieldCheck,
  FileText,
  CreditCard,
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

export function DashboardMockup() {
  return (
    <div className="w-full rounded-2xl border border-white/10 bg-black/70 shadow-[0_40px_120px_-20px_rgba(0,0,0,0.8)] backdrop-blur-xl">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 md:px-7 md:py-5">
        <span className="text-sm font-medium text-white">{heroDashboard.title}</span>
        <span className="text-xs font-medium text-muted">{heroDashboard.status}</span>
      </div>

      <div className="grid grid-cols-3 gap-px bg-white/10 px-0 py-0">
        {heroDashboard.stats.map((stat) => (
          <div key={stat.label} className="bg-black/70 px-4 py-5 md:px-6 md:py-6">
            <div className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
              {stat.value}
            </div>
            <div className="mt-1 text-xs text-muted">
              {stat.label} <span className="text-white/30">·</span> {stat.sub}
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10 px-5 py-5 md:px-7 md:py-6">
        <MiniChart />
      </div>

      <div className="space-y-1 border-t border-white/10 px-3 py-3 md:px-5 md:py-4">
        {heroDashboard.activity.map((item, i) => {
          const Icon = activityIcons[item.type] ?? MessageSquare;
          return (
            <div
              key={i}
              className="flex items-center gap-3 rounded-lg px-2 py-2.5 text-sm hover:bg-white/[0.03]"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/[0.06] text-mist">
                <Icon size={14} />
              </span>
              <span className="min-w-0 flex-1 truncate text-white/80">{item.text}</span>
              <span className="flex shrink-0 items-center gap-1 text-xs font-medium text-muted">
                <CheckCircle2 size={12} className="text-green" />
                <span className="hidden sm:inline">{item.result}</span>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function MiniChart() {
  const points = "0,38 15,30 30,34 45,18 60,22 75,8 90,14 100,4";
  return (
    <svg viewBox="0 0 100 40" className="h-16 w-full md:h-20" preserveAspectRatio="none">
      <defs>
        <linearGradient id="chart-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polyline points={`0,40 ${points} 100,40`} fill="url(#chart-fill)" stroke="none" />
      <polyline
        points={points}
        fill="none"
        stroke="#34D399"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

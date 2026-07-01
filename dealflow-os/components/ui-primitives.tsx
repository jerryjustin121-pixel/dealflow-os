import type { LucideIcon } from "lucide-react";

type Tone = "violet" | "blue" | "emerald" | "green" | "amber" | "rose" | "teal" | "slate";

const toneClasses: Record<Tone, { badge: string; soft: string; icon: string; text: string }> = {
  violet: {
    badge: "bg-violet-50 text-violet-700 border-violet-100",
    soft: "bg-violet-50",
    icon: "bg-violet-100 text-violet-700",
    text: "text-violet-700",
  },
  blue: {
    badge: "bg-blue-50 text-blue-700 border-blue-100",
    soft: "bg-blue-50",
    icon: "bg-blue-100 text-blue-700",
    text: "text-blue-700",
  },
  emerald: {
    badge: "bg-emerald-50 text-emerald-700 border-emerald-100",
    soft: "bg-emerald-50",
    icon: "bg-emerald-100 text-emerald-700",
    text: "text-emerald-700",
  },
  green: {
    badge: "bg-green-50 text-green-700 border-green-100",
    soft: "bg-green-50",
    icon: "bg-green-100 text-green-700",
    text: "text-green-700",
  },
  amber: {
    badge: "bg-amber-50 text-amber-700 border-amber-100",
    soft: "bg-amber-50",
    icon: "bg-amber-100 text-amber-700",
    text: "text-amber-700",
  },
  rose: {
    badge: "bg-rose-50 text-rose-700 border-rose-100",
    soft: "bg-rose-50",
    icon: "bg-rose-100 text-rose-700",
    text: "text-rose-700",
  },
  teal: {
    badge: "bg-teal-50 text-teal-700 border-teal-100",
    soft: "bg-teal-50",
    icon: "bg-teal-100 text-teal-700",
    text: "text-teal-700",
  },
  slate: {
    badge: "bg-slate-50 text-slate-700 border-slate-200",
    soft: "bg-slate-50",
    icon: "bg-slate-100 text-slate-700",
    text: "text-slate-700",
  },
};

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function formatCurrency(value: number) {
  if (value >= 1000000) {
    return `$${(value / 1000000).toFixed(value % 1000000 === 0 ? 0 : 1)}M`;
  }

  if (value >= 1000) {
    return `$${Math.round(value / 1000)}K`;
  }

  return `$${value.toLocaleString()}`;
}

export function PageHeader({
  eyebrow,
  title,
  description,
  action,
  meta,
}: {
  eyebrow: string;
  title: string;
  description: string;
  action?: React.ReactNode;
  meta?: React.ReactNode;
}) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-surface">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-700">{eyebrow}</p>
          <h1 className="mt-2 text-2xl font-semibold tracking-normal text-slate-950 sm:text-3xl">{title}</h1>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">{description}</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {meta}
          {action}
        </div>
      </div>
    </section>
  );
}

export function SectionCard({
  title,
  eyebrow,
  action,
  children,
  className,
}: {
  title: string;
  eyebrow?: string;
  action?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("rounded-lg border border-slate-200 bg-white p-5 shadow-surface", className)}>
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">{eyebrow}</p> : null}
          <h2 className="mt-1 text-lg font-semibold text-slate-950">{title}</h2>
        </div>
        {action}
      </div>
      {children}
    </section>
  );
}

export function Badge({ children, tone = "slate" }: { children: React.ReactNode; tone?: Tone }) {
  return (
    <span className={cn("inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-semibold", toneClasses[tone].badge)}>
      {children}
    </span>
  );
}

export function IconPill({ icon: Icon, tone = "slate" }: { icon: LucideIcon; tone?: Tone }) {
  return (
    <span className={cn("inline-flex h-9 w-9 items-center justify-center rounded-lg", toneClasses[tone].icon)}>
      <Icon className="h-4 w-4" />
    </span>
  );
}

export function MetricCard({
  label,
  value,
  delta,
  helper,
  icon: Icon,
  tone = "slate",
}: {
  label: string;
  value: string;
  delta: string;
  helper: string;
  icon: LucideIcon;
  tone?: Tone;
}) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-4 shadow-surface">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm text-slate-600">{label}</p>
          <p className="mt-2 text-2xl font-semibold text-slate-950">{value}</p>
        </div>
        <IconPill icon={Icon} tone={tone} />
      </div>
      <p className="mt-3 text-xs text-slate-500">
        <span className={cn("font-semibold", toneClasses[tone].text)}>{delta}</span> {helper}
      </p>
    </article>
  );
}

export function ProgressBar({ value, tone = "violet" }: { value: number; tone?: Tone }) {
  const barClass: Record<Tone, string> = {
    violet: "bg-violet-600",
    blue: "bg-blue-600",
    emerald: "bg-emerald-600",
    green: "bg-green-600",
    amber: "bg-amber-500",
    rose: "bg-rose-600",
    teal: "bg-teal-600",
    slate: "bg-slate-600",
  };

  return (
    <div className="h-2 overflow-hidden rounded-full bg-slate-100">
      <div className={cn("h-full rounded-full", barClass[tone])} style={{ width: `${Math.min(100, Math.max(0, value))}%` }} />
    </div>
  );
}

export function InitialsAvatar({ name, className }: { name: string; className?: string }) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <span className={cn("inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-950 text-sm font-semibold text-white", className)}>
      {initials}
    </span>
  );
}

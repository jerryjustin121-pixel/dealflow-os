import { cn } from "@/lib/utils";

type StatusTone = "hot" | "warm" | "good";

const toneStyles: Record<StatusTone, string> = {
  hot: "bg-[rgba(239,68,68,0.16)] text-[#fda4af]",
  warm: "bg-[rgba(245,158,11,0.16)] text-[#fde68a]",
  good: "bg-[rgba(34,197,94,0.16)] text-[#bbf7d0]",
};

type StatusBadgeProps = {
  tone: StatusTone;
  label: string;
};

export function StatusBadge({ tone, label }: StatusBadgeProps) {
  return (
    <span className={cn("rounded-full px-2 py-1 text-[0.78rem] font-bold uppercase", toneStyles[tone])}>{label}</span>
  );
}

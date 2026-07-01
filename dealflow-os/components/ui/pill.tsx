import { cn } from "@/lib/utils";

type PillProps = {
  children: React.ReactNode;
  className?: string;
  compact?: boolean;
};

export function Pill({ children, className, compact }: PillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[rgba(79,70,229,0.15)] text-[#c7d2fe]",
        compact ? "px-2.5 py-2 text-xs" : "px-3.5 py-2.5 text-sm",
        className,
      )}
    >
      {children}
    </span>
  );
}

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type MetricCardProps = {
  label: string;
  value: string;
  change: string;
  positive?: boolean;
};

export function MetricCard({ label, value, change, positive = true }: MetricCardProps) {
  return (
    <Card>
      <div className="text-sm text-[var(--muted)]">{label}</div>
      <div className="mt-1.5 text-[1.55rem] font-bold text-[var(--text)]">{value}</div>
      <div className={cn("mt-1.5 text-sm", positive ? "text-[var(--accent-2)]" : "text-[var(--danger)]")}>{change}</div>
    </Card>
  );
}

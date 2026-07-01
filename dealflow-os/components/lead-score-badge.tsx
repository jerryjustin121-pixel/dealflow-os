export function LeadScoreBadge({ score }: { score?: number }) {
  if (score == null) {
    return <span className="rounded-full bg-[var(--panel-soft)] px-2.5 py-1 text-sm font-semibold text-[var(--muted)]">Unscored</span>;
  }

  const color =
    score >= 80
      ? "bg-[rgba(34,197,94,0.16)] text-[#bbf7d0]"
      : score >= 60
        ? "bg-[rgba(245,158,11,0.16)] text-[#fde68a]"
        : "bg-[rgba(239,68,68,0.16)] text-[#fda4af]";

  return <span className={`rounded-full px-2.5 py-1 text-sm font-semibold ${color}`}>{score}</span>;
}

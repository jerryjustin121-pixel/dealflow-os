type ListRowProps = {
  left: React.ReactNode;
  right: React.ReactNode;
};

export function ListRow({ left, right }: ListRowProps) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-xl border border-[var(--border)] bg-[var(--panel-soft)] px-3 py-2.5">
      <span className="text-sm text-[var(--text)]">{left}</span>
      <span className="text-sm text-[var(--muted)]">{right}</span>
    </div>
  );
}

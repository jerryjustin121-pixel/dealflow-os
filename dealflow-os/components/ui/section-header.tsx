type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
};

export function SectionHeader({ title, subtitle, action }: SectionHeaderProps) {
  return (
    <div className="mb-3 flex items-start justify-between gap-4">
      <div>
        <h3 className="m-0 text-base font-semibold text-[var(--text)]">{title}</h3>
        {subtitle ? <p className="mt-1 text-sm text-[var(--muted)]">{subtitle}</p> : null}
      </div>
      {action}
    </div>
  );
}

import { Pill } from "@/components/ui/pill";

type PageHeaderProps = {
  title: string;
  subtitle: string;
  badge?: string;
};

export function PageHeader({ title, subtitle, badge = "● Live overview • Updated 2 min ago" }: PageHeaderProps) {
  return (
    <header className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
      <div>
        <h1 className="m-0 text-xl font-semibold text-[var(--text)] sm:text-[1.3rem]">{title}</h1>
        <p className="mt-1 text-sm text-[var(--muted)]">{subtitle}</p>
      </div>
      <Pill>{badge}</Pill>
    </header>
  );
}

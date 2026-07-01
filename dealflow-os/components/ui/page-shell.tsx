import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";

type PageShellProps = {
  title: string;
  subtitle: string;
  badge?: string;
  action?: React.ReactNode;
  children: React.ReactNode;
};

export function PageShell({ title, subtitle, badge, action, children }: PageShellProps) {
  return (
    <section className="space-y-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <PageHeader title={title} subtitle={subtitle} badge={badge} />
        {action}
      </div>
      {children}
    </section>
  );
}

export function PagePanel({ children, className }: { children: React.ReactNode; className?: string }) {
  return <Card className={className}>{children}</Card>;
}

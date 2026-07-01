import { Card } from "@/components/ui/card";
import { ListRow } from "@/components/ui/list-row";
import { MetricCard } from "@/components/ui/metric-card";
import { PageHeader } from "@/components/ui/page-header";
import { Pill } from "@/components/ui/pill";
import { RevenueBarChart } from "@/components/ui/revenue-bar-chart";
import { SectionHeader } from "@/components/ui/section-header";
import { StatusBadge } from "@/components/ui/status-badge";
import {
  activePipeline,
  conversionFunnel,
  overviewMetrics,
  revenueBars,
  teamActivity,
} from "@/lib/analytics-data";

export function DashboardOverview() {
  return (
    <section className="space-y-4">
      <PageHeader
        title="Dealflow OS Analytics"
        subtitle="Revenue, pipeline health, AI automation, and team activity in one view."
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {overviewMetrics.map((metric) => (
          <MetricCard key={metric.label} {...metric} />
        ))}
      </div>

      <div className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
        <Card className="min-h-[260px]">
          <SectionHeader
            title="Revenue trend"
            subtitle="Monthly growth across the last 6 months"
            action={<Pill compact>+12.6% QoQ</Pill>}
          />
          <RevenueBarChart data={revenueBars} />
        </Card>

        <Card className="min-h-[260px]">
          <SectionHeader title="Active deals pipeline" subtitle="Current opportunities by stage" />
          <div className="grid gap-2.5">
            {activePipeline.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between gap-3 rounded-xl border border-[var(--border)] bg-[var(--panel-soft)] px-3 py-2.5"
              >
                <span>{item.name}</span>
                <StatusBadge tone={item.status} label={item.label} />
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="min-h-[260px]">
          <SectionHeader title="Lead conversion funnel" subtitle="From inbound leads to qualified deals" />
          <div className="grid gap-2.5">
            {conversionFunnel.map((item) => (
              <ListRow key={item.label} left={item.label} right={item.value} />
            ))}
          </div>
        </Card>

        <Card className="min-h-[260px]">
          <SectionHeader title="User activity" subtitle="Recent team engagement and system usage" />
          <div className="grid gap-2.5">
            {teamActivity.map((item) => (
              <div key={item.name} className="flex items-center justify-between text-sm text-[var(--muted)]">
                <span className="font-semibold text-[var(--text)]">{item.name}</span>
                <span>{item.action}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}

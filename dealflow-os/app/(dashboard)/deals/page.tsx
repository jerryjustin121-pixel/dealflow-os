"use client";

import { deals, pipelineStages } from "@/lib/mock-data";
import { PagePanel, PageShell } from "@/components/ui/page-shell";
import { StatusBadge } from "@/components/ui/status-badge";
import { RevenueBarChart } from "@/components/ui/revenue-bar-chart";

const formatCurrency = (value: number) => `$${value.toLocaleString()}`;

const dealBars = deals.map((deal, index) => ({
  label: `D${index + 1}`,
  height: Math.max(20, Math.round((deal.value / 1200000) * 100)),
}));

export default function DealsPage() {
  return (
    <PageShell title="Deals pipeline" subtitle="Active opportunities by stage and value." badge="● 24 open deals">
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
        {pipelineStages.map((stage) => (
          <PagePanel key={stage.stage}>
            <p className="text-sm text-[var(--muted)]">{stage.label}</p>
            <p className="mt-2 text-2xl font-bold">{stage.count}</p>
            <p className="mt-1 text-sm text-[var(--muted)]">{stage.value}</p>
          </PagePanel>
        ))}
      </div>

      <div className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
        <PagePanel>
          <p className="text-sm text-[var(--muted)]">Deal value trend</p>
          <div className="mt-4">
            <RevenueBarChart data={dealBars} />
          </div>
        </PagePanel>

        <PagePanel>
          <p className="text-sm text-[var(--muted)]">Current deals</p>
          <div className="mt-4 grid gap-2.5">
            {deals.slice(0, 6).map((deal) => (
              <div key={deal.id} className="rounded-xl border border-[var(--border)] bg-[var(--panel-soft)] p-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold">{deal.title}</p>
                    <p className="text-sm text-[var(--muted)]">{deal.company}</p>
                  </div>
                  <StatusBadge
                    tone={deal.temperature === "Hot" ? "hot" : deal.temperature === "Warm" ? "warm" : "good"}
                    label={deal.stage}
                  />
                </div>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  {formatCurrency(deal.value)} · {deal.probability}% · {deal.owner}
                </p>
              </div>
            ))}
          </div>
        </PagePanel>
      </div>
    </PageShell>
  );
}

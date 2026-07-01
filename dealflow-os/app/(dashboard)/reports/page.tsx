"use client";

import { agentPerformance, reportMetrics, revenueTrend, sourceBreakdown } from "@/lib/mock-data";
import { PagePanel, PageShell } from "@/components/ui/page-shell";
import { RevenueBarChart } from "@/components/ui/revenue-bar-chart";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Bar, BarChart } from "recharts";

const trendBars = revenueTrend.map((item, index) => ({
  label: `W${index + 1}`,
  height: Math.max(20, Math.round((item.value / 4700000) * 100)),
}));

export default function ReportsPage() {
  return (
    <PageShell title="Reports" subtitle="Revenue, pipeline insights, and agent performance." badge="● Monthly review">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {reportMetrics.map((metric) => (
          <PagePanel key={metric.label}>
            <p className="text-sm text-[var(--muted)]">{metric.label}</p>
            <p className="mt-2 text-2xl font-bold">{metric.value}</p>
            <p className="mt-1 text-sm text-[var(--accent-2)]">{metric.delta}</p>
          </PagePanel>
        ))}
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        <PagePanel>
          <p className="text-sm text-[var(--muted)]">Revenue outlook</p>
          <div className="mt-4 h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueTrend}>
                <CartesianGrid vertical={false} stroke="rgba(148,163,184,0.18)" />
                <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fill: "#94a3b8", fontSize: 12 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: "#94a3b8", fontSize: 12 }} />
                <Tooltip contentStyle={{ background: "#0f172a", border: "1px solid rgba(148,163,184,0.18)", borderRadius: 12 }} />
                <Area type="monotone" dataKey="value" stroke="#818cf8" fill="rgba(79,70,229,0.25)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </PagePanel>

        <PagePanel>
          <p className="text-sm text-[var(--muted)]">Deal source mix</p>
          <div className="mt-4 h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={sourceBreakdown}>
                <CartesianGrid vertical={false} stroke="rgba(148,163,184,0.18)" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "#94a3b8", fontSize: 12 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: "#94a3b8", fontSize: 12 }} />
                <Tooltip contentStyle={{ background: "#0f172a", border: "1px solid rgba(148,163,184,0.18)", borderRadius: 12 }} />
                <Bar dataKey="value" fill="#6366f1" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </PagePanel>
      </div>

      <PagePanel>
        <p className="text-sm text-[var(--muted)]">Revenue trend bars</p>
        <div className="mt-4"><RevenueBarChart data={trendBars} /></div>
      </PagePanel>

      <PagePanel>
        <p className="text-sm text-[var(--muted)]">Agent performance</p>
        <div className="mt-4 overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="text-[var(--muted)]">
              <tr>
                <th className="pb-2 pr-4">Agent</th>
                <th className="pb-2 pr-4">Leads</th>
                <th className="pb-2 pr-4">Won</th>
                <th className="pb-2 pr-4">Recovered</th>
                <th className="pb-2">Conversion</th>
              </tr>
            </thead>
            <tbody>
              {agentPerformance.map((agent) => (
                <tr key={agent.name} className="border-t border-[var(--border)]">
                  <td className="py-3 pr-4">
                    <p className="font-semibold">{agent.name}</p>
                    <p className="text-[var(--muted)]">{agent.role}</p>
                  </td>
                  <td className="py-3 pr-4">{agent.leads}</td>
                  <td className="py-3 pr-4">{agent.won}</td>
                  <td className="py-3 pr-4">${(agent.recovered / 1000).toFixed(0)}K</td>
                  <td className="py-3">{agent.conversion}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </PagePanel>
    </PageShell>
  );
}

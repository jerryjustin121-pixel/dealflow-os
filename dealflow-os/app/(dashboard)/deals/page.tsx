"use client";

import { deals, pipelineSummary } from "@/lib/mock-data";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const formatCurrency = (value: number) => `$${value.toLocaleString()}`;

export default function DealsPage() {
  return (
    <div className="space-y-6">
      <div className="rounded-[28px] border border-slate-200/70 bg-white p-6 shadow-surface">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">Deals</p>
            <h1 className="mt-2 text-3xl font-semibold text-slate-950">Pipeline opportunities</h1>
          </div>
          <span className="rounded-full bg-[#EEF2FF] px-4 py-2 text-sm font-semibold text-[#2563EB]">Updated now</span>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {pipelineSummary.map((item) => (
            <div key={item.label} className="rounded-[24px] border border-slate-200/70 bg-[#F8FAFF] p-5">
              <p className="text-sm font-medium text-slate-500">{item.label}</p>
              <p className="mt-4 text-3xl font-semibold text-slate-950">{item.count}</p>
              <p className="mt-2 text-sm text-slate-500">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.4fr_0.8fr]">
        <div className="rounded-[28px] border border-slate-200/70 bg-white p-6 shadow-surface">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-slate-500">Pipeline forecasting</p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-950">Deal value trend</h2>
            </div>
            <span className="rounded-full bg-[#F4F2FF] px-3 py-2 text-sm font-semibold text-[#6D5EF6]">This quarter</span>
          </div>
          <div className="h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={deals.map((deal) => ({ name: deal.id, value: deal.value }))} margin={{ top: 12, right: 0, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="dealTrend" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6D5EF6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#6D5EF6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} stroke="#E9EDF7" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "#94A3B8", fontSize: 13 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: "#94A3B8", fontSize: 13 }} tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
                <Tooltip contentStyle={{ borderRadius: 24, border: "1px solid #E2E8F0" }} formatter={(value: number) => formatCurrency(value)} />
                <Area type="monotone" dataKey="value" stroke="#6D5EF6" fill="url(#dealTrend)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="overflow-hidden rounded-[28px] border border-slate-200/70 bg-white p-6 shadow-surface">
          <p className="text-sm font-medium text-slate-500">Current deals</p>
          <div className="mt-4 space-y-4">
            {deals.map((deal) => (
              <div key={deal.id} className="rounded-[24px] border border-slate-200/70 bg-[#FBFBFF] p-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="font-semibold text-slate-950">{deal.title}</p>
                    <p className="text-sm text-slate-500">{deal.company}</p>
                  </div>
                  <span className="rounded-full bg-[#EEF2FF] px-3 py-1 text-sm font-semibold text-[#2563EB]">{deal.stage}</span>
                </div>
                <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-500">
                  <span>{formatCurrency(deal.value)}</span>
                  <span>{deal.probability}% probability</span>
                  <span>Close by {deal.closeDate}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

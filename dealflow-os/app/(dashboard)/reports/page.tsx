"use client";

import { revenueTrend, sourceBreakdown } from "@/lib/mock-data";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Bar, BarChart } from "recharts";

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div className="rounded-[28px] border border-slate-200/70 bg-white p-6 shadow-surface">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">Reports</p>
            <h1 className="mt-2 text-3xl font-semibold text-slate-950">Revenue & pipeline insights</h1>
          </div>
          <span className="rounded-full bg-[#ECFDF5] px-4 py-2 text-sm font-semibold text-[#15803D]">Monthly review</span>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[28px] border border-slate-200/70 bg-white p-6 shadow-surface">
          <p className="text-sm font-medium text-slate-500">Revenue outlook</p>
          <div className="mt-6 h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueTrend} margin={{ top: 12, right: 0, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.24} />
                    <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} stroke="#E9EDF7" />
                <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fill: "#94A3B8", fontSize: 13 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: "#94A3B8", fontSize: 13 }} />
                <Tooltip contentStyle={{ borderRadius: 24, border: "1px solid #E2E8F0" }} />
                <Area type="monotone" dataKey="value" stroke="#10B981" fill="url(#revenueGradient)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-[28px] border border-slate-200/70 bg-white p-6 shadow-surface">
          <p className="text-sm font-medium text-slate-500">Deal source mix</p>
          <div className="mt-6 h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={sourceBreakdown} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid vertical={false} stroke="#E9EDF7" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "#94A3B8", fontSize: 13 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: "#94A3B8", fontSize: 13 }} />
                <Tooltip contentStyle={{ borderRadius: 24, border: "1px solid #E2E8F0" }} />
                <Bar dataKey="value" fill="#6366F1" radius={[12, 12, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

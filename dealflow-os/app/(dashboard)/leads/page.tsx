export const dynamic = "force-dynamic";

import Link from "next/link";
import { getAllLeads } from "@/lib/leads-store";
import { formatBudget, statusColors } from "@/lib/leads";
import { LeadScoreBadge } from "@/components/lead-score-badge";

export default function LeadsPage() {
  const leads = getAllLeads();

  return (
    <div className="space-y-6">
      <div className="rounded-[28px] border border-slate-200/70 bg-white p-6 shadow-surface">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">Leads</p>
            <h1 className="mt-2 text-3xl font-semibold text-slate-950">Priority lead queue</h1>
            <p className="mt-2 text-sm text-slate-500">AI-scored leads ranked by close probability.</p>
          </div>
          <Link
            href="/import"
            className="inline-flex rounded-[14px] bg-[#6D5EF6] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#5B4CF1]"
          >
            Import CSV
          </Link>
        </div>
      </div>

      <div className="overflow-hidden rounded-[28px] border border-slate-200/70 bg-white shadow-surface">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="border-b border-slate-200/70 bg-[#FAFAFC] text-slate-500">
              <tr>
                <th className="px-6 py-4 font-medium">Score</th>
                <th className="px-6 py-4 font-medium">Lead</th>
                <th className="px-6 py-4 font-medium">Property</th>
                <th className="px-6 py-4 font-medium">Budget</th>
                <th className="px-6 py-4 font-medium">Source</th>
                <th className="px-6 py-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr key={lead.id} className="border-b border-slate-100 transition hover:bg-[#FAFAFC]">
                  <td className="px-6 py-4">
                    <LeadScoreBadge score={lead.score} />
                  </td>
                  <td className="px-6 py-4">
                    <Link href={`/leads/${lead.id}`} className="font-semibold text-slate-950 hover:text-[#6D5EF6]">
                      {lead.firstName} {lead.lastName}
                    </Link>
                    <p className="text-slate-500">{lead.email}</p>
                  </td>
                  <td className="px-6 py-4 text-slate-600">{lead.propertyInterest ?? "—"}</td>
                  <td className="px-6 py-4 font-medium text-slate-950">{formatBudget(lead.budget)}</td>
                  <td className="px-6 py-4 text-slate-600">{lead.source ?? "—"}</td>
                  <td className="px-6 py-4">
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusColors[lead.status]}`}>{lead.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

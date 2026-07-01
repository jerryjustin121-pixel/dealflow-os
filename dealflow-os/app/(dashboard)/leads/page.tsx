export const dynamic = "force-dynamic";

import Link from "next/link";
import { PagePanel, PageShell } from "@/components/ui/page-shell";
import { LeadScoreBadge } from "@/components/lead-score-badge";
import { getAllLeads } from "@/lib/leads-store";
import { formatBudget, statusColors } from "@/lib/leads";

export default function LeadsPage() {
  const leads = getAllLeads();

  return (
    <PageShell
      title="Lead queue"
      subtitle="AI-scored leads ranked by close probability."
      badge="● 128 active leads"
      action={
        <Link href="/import" className="rounded-full bg-[rgba(79,70,229,0.22)] px-4 py-2 text-sm font-semibold text-[#c7d2fe]">
          Import CSV
        </Link>
      }
    >
      <PagePanel className="overflow-hidden p-0">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="border-b border-[var(--border)] bg-[var(--panel-soft)] text-[var(--muted)]">
              <tr>
                <th className="px-4 py-3 font-medium">Score</th>
                <th className="px-4 py-3 font-medium">Lead</th>
                <th className="px-4 py-3 font-medium">Property</th>
                <th className="px-4 py-3 font-medium">Budget</th>
                <th className="px-4 py-3 font-medium">Source</th>
                <th className="px-4 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr key={lead.id} className="border-b border-[var(--border)] transition hover:bg-[var(--panel-soft)]">
                  <td className="px-4 py-3">
                    <LeadScoreBadge score={lead.score} />
                  </td>
                  <td className="px-4 py-3">
                    <Link href={`/leads/${lead.id}`} className="font-semibold text-[var(--text)] hover:text-[#c7d2fe]">
                      {lead.firstName} {lead.lastName}
                    </Link>
                    <p className="text-[var(--muted)]">{lead.email}</p>
                  </td>
                  <td className="px-4 py-3 text-[var(--muted)]">{lead.propertyInterest ?? "—"}</td>
                  <td className="px-4 py-3 font-medium">{formatBudget(lead.budget)}</td>
                  <td className="px-4 py-3 text-[var(--muted)]">{lead.source ?? "—"}</td>
                  <td className="px-4 py-3">
                    <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${statusColors[lead.status]}`}>{lead.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </PagePanel>
    </PageShell>
  );
}

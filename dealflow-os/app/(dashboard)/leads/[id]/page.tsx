"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowLeft, Sparkles } from "lucide-react";
import { PagePanel } from "@/components/ui/page-shell";
import type { Lead } from "@/lib/leads";
import { formatBudget, statusColors } from "@/lib/leads";
import { LeadScoreBadge } from "@/components/lead-score-badge";

export default function LeadDetailPage() {
  const params = useParams();
  const leadId = params.id as string;
  const [lead, setLead] = useState<Lead | null>(null);
  const [followUp, setFollowUp] = useState<string | null>(null);
  const [loadingScore, setLoadingScore] = useState(false);
  const [loadingFollowUp, setLoadingFollowUp] = useState(false);

  useEffect(() => {
    if (!leadId) return;
    fetch(`/api/leads/${leadId}`)
      .then((res) => res.json())
      .then((data: { lead?: Lead }) => setLead(data.lead ?? null));
  }, [leadId]);

  async function rescore() {
    if (!leadId) return;
    setLoadingScore(true);
    const response = await fetch(`/api/leads/${leadId}/score`, { method: "POST" });
    const data = (await response.json()) as { lead?: Lead };
    if (data.lead) setLead(data.lead);
    setLoadingScore(false);
  }

  async function generateFollowUp() {
    if (!leadId) return;
    setLoadingFollowUp(true);
    const response = await fetch(`/api/leads/${leadId}/follow-up`, { method: "POST" });
    const data = (await response.json()) as { message?: string };
    setFollowUp(data.message ?? null);
    setLoadingFollowUp(false);
  }

  if (!lead) {
    return <PagePanel><p className="text-[var(--muted)]">Loading lead…</p></PagePanel>;
  }

  return (
    <section className="space-y-4">
      <Link href="/leads" className="inline-flex items-center gap-2 text-sm font-medium text-[#c7d2fe]">
        <ArrowLeft className="h-4 w-4" />
        Back to leads
      </Link>

      <PagePanel>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="text-sm text-[var(--muted)]">Lead detail</p>
            <h1 className="mt-1 text-2xl font-semibold">{lead.firstName} {lead.lastName}</h1>
            <p className="mt-1 text-[var(--muted)]">{lead.email}</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <LeadScoreBadge score={lead.score} />
            <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${statusColors[lead.status]}`}>{lead.status}</span>
          </div>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {[
            ["Budget", formatBudget(lead.budget)],
            ["Property", lead.propertyInterest ?? "—"],
            ["Source", lead.source ?? "—"],
            ["Last contacted", lead.lastContactedAt ?? "Never"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-xl border border-[var(--border)] bg-[var(--panel-soft)] p-3">
              <p className="text-sm text-[var(--muted)]">{label}</p>
              <p className="mt-1 font-semibold">{value}</p>
            </div>
          ))}
        </div>
        {lead.scoreReason ? (
          <div className="mt-4 rounded-xl border border-[var(--border)] bg-[rgba(79,70,229,0.12)] p-4">
            <p className="text-sm font-medium text-[#c7d2fe]">AI score rationale</p>
            <p className="mt-2 text-sm text-[var(--muted)]">{lead.scoreReason}</p>
          </div>
        ) : null}
      </PagePanel>

      <div className="grid gap-4 md:grid-cols-2">
        <PagePanel>
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-[#818cf8]" />
            <p className="text-sm text-[var(--muted)]">AI actions</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <button onClick={rescore} disabled={loadingScore} className="rounded-xl bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white disabled:opacity-60">
              {loadingScore ? "Scoring…" : "Re-score lead"}
            </button>
            <button onClick={generateFollowUp} disabled={loadingFollowUp} className="rounded-xl border border-[var(--border)] px-4 py-2 text-sm font-semibold disabled:opacity-60">
              {loadingFollowUp ? "Generating…" : "Generate follow-up"}
            </button>
          </div>
        </PagePanel>
        <PagePanel>
          <p className="text-sm text-[var(--muted)]">Suggested outreach</p>
          {followUp ? (
            <pre className="mt-3 whitespace-pre-wrap rounded-xl border border-[var(--border)] bg-[var(--panel-soft)] p-4 text-sm leading-6 text-[var(--muted)]">{followUp}</pre>
          ) : (
            <p className="mt-3 text-sm text-[var(--muted)]">Generate a personalized follow-up message for this lead.</p>
          )}
        </PagePanel>
      </div>
    </section>
  );
}

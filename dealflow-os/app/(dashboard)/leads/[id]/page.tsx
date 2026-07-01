"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowLeft, Sparkles } from "lucide-react";
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
    return (
      <div className="rounded-[28px] border border-slate-200/70 bg-white p-8 shadow-surface">
        <p className="text-slate-500">Loading lead…</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Link href="/leads" className="inline-flex items-center gap-2 text-sm font-medium text-[#6D5EF6]">
        <ArrowLeft className="h-4 w-4" />
        Back to leads
      </Link>

      <div className="rounded-[28px] border border-slate-200/70 bg-white p-6 shadow-surface">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">Lead detail</p>
            <h1 className="mt-2 text-3xl font-semibold text-slate-950">
              {lead.firstName} {lead.lastName}
            </h1>
            <p className="mt-2 text-slate-500">{lead.email}</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <LeadScoreBadge score={lead.score} />
            <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusColors[lead.status]}`}>{lead.status}</span>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-[24px] border border-slate-200/70 bg-[#FAFAFC] p-4">
            <p className="text-sm text-slate-500">Budget</p>
            <p className="mt-2 text-xl font-semibold text-slate-950">{formatBudget(lead.budget)}</p>
          </div>
          <div className="rounded-[24px] border border-slate-200/70 bg-[#FAFAFC] p-4">
            <p className="text-sm text-slate-500">Property interest</p>
            <p className="mt-2 text-xl font-semibold text-slate-950">{lead.propertyInterest ?? "—"}</p>
          </div>
          <div className="rounded-[24px] border border-slate-200/70 bg-[#FAFAFC] p-4">
            <p className="text-sm text-slate-500">Source</p>
            <p className="mt-2 text-xl font-semibold text-slate-950">{lead.source ?? "—"}</p>
          </div>
          <div className="rounded-[24px] border border-slate-200/70 bg-[#FAFAFC] p-4">
            <p className="text-sm text-slate-500">Last contacted</p>
            <p className="mt-2 text-xl font-semibold text-slate-950">{lead.lastContactedAt ?? "Never"}</p>
          </div>
        </div>

        {lead.scoreReason ? (
          <div className="mt-6 rounded-[24px] border border-slate-200/70 bg-[#F4F2FF] p-5">
            <p className="text-sm font-medium text-[#4338CA]">AI score rationale</p>
            <p className="mt-2 text-sm text-slate-700">{lead.scoreReason}</p>
          </div>
        ) : null}
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <div className="rounded-[28px] border border-slate-200/70 bg-white p-6 shadow-surface">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-[#6D5EF6]" />
            <p className="text-sm font-medium text-slate-500">AI actions</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={rescore}
              disabled={loadingScore}
              className="rounded-[14px] bg-[#6D5EF6] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#5B4CF1] disabled:opacity-60"
            >
              {loadingScore ? "Scoring…" : "Re-score lead"}
            </button>
            <button
              onClick={generateFollowUp}
              disabled={loadingFollowUp}
              className="rounded-[14px] border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-[#FAFAFC] disabled:opacity-60"
            >
              {loadingFollowUp ? "Generating…" : "Generate follow-up"}
            </button>
          </div>
        </div>

        <div className="rounded-[28px] border border-slate-200/70 bg-white p-6 shadow-surface">
          <p className="text-sm font-medium text-slate-500">Suggested outreach</p>
          {followUp ? (
            <pre className="mt-4 whitespace-pre-wrap rounded-[24px] border border-slate-200/70 bg-[#FAFAFC] p-5 text-sm leading-6 text-slate-700">
              {followUp}
            </pre>
          ) : (
            <p className="mt-4 text-sm text-slate-500">Generate a personalized follow-up message for this lead.</p>
          )}
        </div>
      </div>
    </div>
  );
}

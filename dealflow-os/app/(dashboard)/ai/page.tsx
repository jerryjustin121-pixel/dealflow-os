import { aiInsights, followUpDrafts } from "@/lib/mock-data";
import { PagePanel, PageShell } from "@/components/ui/page-shell";

export default function AIAssistantPage() {
  return (
    <PageShell title="AI Assistant" subtitle="Deal intelligence, recommendations, and outreach drafts." badge="● Realtime insights">
      <div className="grid gap-4 md:grid-cols-3">
        {aiInsights.map((insight) => (
          <PagePanel key={insight.id}>
            <p className="font-semibold">{insight.title}</p>
            <p className="mt-2 text-sm text-[var(--muted)]">{insight.description}</p>
            <p className="mt-4 text-3xl font-bold text-[#c7d2fe]">{insight.count}</p>
          </PagePanel>
        ))}
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        <PagePanel>
          <p className="text-sm text-[var(--muted)]">Top recommendation</p>
          <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
            Focus on Nike Inc. and AppWorks this week. Both show high intent signals and are in active buying windows.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
            <li>1. Schedule pricing review with FutureTech.</li>
            <li>2. Send shortlist to AppWorks within budget.</li>
            <li>3. Reactivate DataCorp with AI draft.</li>
          </ul>
        </PagePanel>

        <PagePanel>
          <p className="text-sm text-[var(--muted)]">Follow-up drafts</p>
          <div className="mt-4 grid gap-3">
            {followUpDrafts.map((draft) => (
              <div key={draft.id} className="rounded-xl border border-[var(--border)] bg-[var(--panel-soft)] p-3">
                <p className="font-semibold">{draft.recipient}</p>
                <p className="mt-1 text-sm text-[#c7d2fe]">{draft.subject}</p>
                <p className="mt-2 text-sm text-[var(--muted)]">{draft.body}</p>
              </div>
            ))}
          </div>
        </PagePanel>
      </div>
    </PageShell>
  );
}

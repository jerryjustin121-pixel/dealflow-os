export default function AIAssistantPage() {
  return (
    <div className="space-y-6">
      <div className="rounded-[28px] border border-slate-200/70 bg-white p-6 shadow-surface">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">AI Assistant</p>
            <h1 className="mt-2 text-3xl font-semibold text-slate-950">Deal intelligence</h1>
          </div>
          <span className="rounded-full bg-[#EEF2FF] px-4 py-2 text-sm font-semibold text-[#2563EB]">Realtime insights</span>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.4fr_0.8fr]">
        <div className="rounded-[28px] border border-slate-200/70 bg-white p-6 shadow-surface">
          <p className="text-sm font-medium text-slate-500">Pipeline assistant</p>
          <div className="mt-6 space-y-6">
            <div className="rounded-[24px] border border-slate-200/70 bg-[#F8FAFF] p-6">
              <p className="text-lg font-semibold text-slate-950">Top recommendation</p>
              <p className="mt-3 text-sm text-slate-600">Focus on Nimbus Labs and Aurora Digital this week to close deals faster by providing product ROI proof points and accelerating contract review.</p>
            </div>
            <div className="rounded-[24px] border border-slate-200/70 bg-[#F9FAFB] p-6">
              <p className="text-sm font-semibold text-slate-950">Suggested next steps</p>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                <li>1. Schedule a pricing review with Eclipse Ventures.</li>
                <li>2. Send a contract addendum request to Zenith Systems.</li>
                <li>3. Confirm product requirements with Aurora Digital.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="rounded-[28px] border border-slate-200/70 bg-white p-6 shadow-surface">
          <p className="text-sm font-medium text-slate-500">AI summary</p>
          <div className="mt-4 space-y-4 text-sm text-slate-600">
            <p>Revenue momentum is strongest in deals where discovery calls are completed and contract terms are aligned.</p>
            <p>Risk areas: negotiation stalls with Zenith Systems and delayed legal approval for Eclipse Ventures.</p>
            <p className="font-semibold text-slate-950">Outcome: recommended focus on high-probability deals with rapid close dates.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

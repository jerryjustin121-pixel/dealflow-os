import { automationRules, integrations } from "@/lib/mock-data";
import { PagePanel, PageShell } from "@/components/ui/page-shell";

export default function SettingsPage() {
  return (
    <PageShell
      title="Settings"
      subtitle="Workspace preferences, integrations, and automation rules."
      badge="● Admin"
      action={<button className="rounded-xl bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white">Save changes</button>}
    >
      <div className="grid gap-4 xl:grid-cols-2">
        <PagePanel>
          <p className="text-sm text-[var(--muted)]">Profile</p>
          <div className="mt-4 space-y-2 text-sm text-[var(--muted)]">
            <p className="font-semibold text-[var(--text)]">Jerry Justin</p>
            <p>Email: jerry@dealflow.com</p>
            <p>Role: Admin</p>
            <p>Organization: DealFlow OS</p>
          </div>
        </PagePanel>

        <PagePanel>
          <p className="text-sm text-[var(--muted)]">Workspace</p>
          <div className="mt-4 space-y-2 text-sm text-[var(--muted)]">
            <p className="font-semibold text-[var(--text)]">DealFlow Enterprise</p>
            <p>Support plan: Premium</p>
            <p>Markets: Dubai, Kuwait, London</p>
          </div>
        </PagePanel>
      </div>

      <PagePanel>
        <p className="text-sm text-[var(--muted)]">Integrations</p>
        <div className="mt-4 grid gap-2.5">
          {integrations.map((item) => (
            <div key={item.name} className="flex items-center justify-between gap-3 rounded-xl border border-[var(--border)] bg-[var(--panel-soft)] px-3 py-2.5">
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-[var(--muted)]">{item.description}</p>
              </div>
              <span className="rounded-full bg-[rgba(34,197,94,0.16)] px-2.5 py-1 text-xs font-semibold text-[#bbf7d0]">{item.status}</span>
            </div>
          ))}
        </div>
      </PagePanel>

      <PagePanel>
        <p className="text-sm text-[var(--muted)]">Automation rules</p>
        <div className="mt-4 grid gap-2.5">
          {automationRules.map((rule) => (
            <div key={rule.name} className="rounded-xl border border-[var(--border)] bg-[var(--panel-soft)] px-3 py-2.5">
              <div className="flex items-center justify-between gap-3">
                <p className="font-semibold">{rule.name}</p>
                <span className="text-xs font-semibold text-[#c7d2fe]">{rule.status}</span>
              </div>
              <p className="mt-1 text-sm text-[var(--muted)]">{rule.trigger} → {rule.action}</p>
            </div>
          ))}
        </div>
      </PagePanel>
    </PageShell>
  );
}

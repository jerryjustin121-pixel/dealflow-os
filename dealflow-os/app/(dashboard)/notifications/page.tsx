import { notifications } from "@/lib/mock-data";
import { PagePanel, PageShell } from "@/components/ui/page-shell";

export default function NotificationsPage() {
  return (
    <PageShell
      title="Notifications"
      subtitle="Recent updates from AI scoring, imports, and deal risk."
      badge="● Live alerts"
      action={<button className="rounded-xl bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white">Mark all read</button>}
    >
      <div className="grid gap-3">
        {notifications.map((note) => (
          <PagePanel key={note.id}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-lg font-semibold">{note.title}</p>
                <p className="mt-2 text-sm text-[var(--muted)]">{note.description}</p>
              </div>
              <div className="text-right">
                <span className="rounded-full bg-[rgba(79,70,229,0.15)] px-2.5 py-1 text-xs font-semibold text-[#c7d2fe]">{note.type}</span>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">{note.time}</p>
              </div>
            </div>
          </PagePanel>
        ))}
      </div>
    </PageShell>
  );
}

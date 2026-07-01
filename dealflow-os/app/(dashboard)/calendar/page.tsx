import { calendarEvents, weekDays } from "@/lib/mock-data";
import { PagePanel, PageShell } from "@/components/ui/page-shell";

export default function CalendarPage() {
  return (
    <PageShell
      title="Calendar"
      subtitle="Upcoming engagements and follow-up blocks."
      badge="● This week"
      action={<button className="rounded-xl bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white">Create event</button>}
    >
      <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <PagePanel>
          <div className="grid gap-2.5">
            {calendarEvents.map((event) => (
              <div key={event.id} className="rounded-xl border border-[var(--border)] bg-[var(--panel-soft)] p-3">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold">{event.title}</p>
                    <p className="mt-1 text-sm text-[var(--muted)]">{event.time} · {event.owner}</p>
                  </div>
                  <span className="rounded-full bg-[rgba(79,70,229,0.15)] px-2.5 py-1 text-xs font-semibold text-[#c7d2fe]">{event.type}</span>
                </div>
                <p className="mt-2 text-sm text-[var(--muted)]">{event.deal}</p>
              </div>
            ))}
          </div>
        </PagePanel>

        <PagePanel>
          <p className="text-sm text-[var(--muted)]">Week agenda</p>
          <div className="mt-4 grid gap-2.5">
            {weekDays.map((day) => (
              <div key={day.date} className="rounded-xl border border-[var(--border)] bg-[var(--panel-soft)] p-3">
                <p className="font-semibold">{day.day} · {day.date}</p>
                <p className="mt-1 text-sm text-[var(--muted)]">{day.slots.join(" · ") || "Open"}</p>
              </div>
            ))}
          </div>
        </PagePanel>
      </div>
    </PageShell>
  );
}

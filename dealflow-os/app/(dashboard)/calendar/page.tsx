import { calendarEvents } from "@/lib/mock-data";

export default function CalendarPage() {
  return (
    <div className="space-y-6">
      <div className="rounded-[28px] border border-slate-200/70 bg-white p-6 shadow-surface">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">Calendar</p>
            <h1 className="mt-2 text-3xl font-semibold text-slate-950">Upcoming engagements</h1>
          </div>
          <button className="rounded-[14px] bg-[#2563EB] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#1D4ED8]">Create event</button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[28px] border border-slate-200/70 bg-white p-6 shadow-surface">
          <div className="space-y-6">
            {calendarEvents.map((event) => (
              <div key={event.id} className="rounded-[24px] border border-slate-200/70 p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-lg font-semibold text-slate-950">{event.title}</p>
                    <p className="mt-1 text-sm text-slate-500">{event.time}</p>
                  </div>
                  <span className={`rounded-full bg-gradient-to-r ${event.color} px-3 py-1 text-sm font-semibold text-white`}>{event.type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] border border-slate-200/70 bg-white p-6 shadow-surface">
          <p className="text-sm font-medium text-slate-500">Agenda</p>
          <div className="mt-4 space-y-3 text-sm text-slate-600">
            <p>Ensure every customer conversation is scheduled with follow-up tasks and deal context.</p>
            <p className="font-semibold text-slate-950">Next event: Executive pipeline review at 10:00 AM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

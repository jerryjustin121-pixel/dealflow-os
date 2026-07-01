import { notifications } from "@/lib/mock-data";

export default function NotificationsPage() {
  return (
    <div className="space-y-6">
      <div className="rounded-[28px] border border-slate-200/70 bg-white p-6 shadow-surface">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">Notifications</p>
            <h1 className="mt-2 text-3xl font-semibold text-slate-950">Recent updates</h1>
          </div>
          <button className="rounded-[14px] bg-[#6D5EF6] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#5B4CF1]">Mark all read</button>
        </div>
      </div>

      <div className="space-y-4">
        {notifications.map((note) => (
          <div key={note.id} className="rounded-[28px] border border-slate-200/70 bg-white p-6 shadow-surface">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-lg font-semibold text-slate-950">{note.title}</p>
                <p className="mt-2 text-sm text-slate-500">{note.description}</p>
              </div>
              <span className="text-xs uppercase tracking-[0.24em] text-slate-400">{note.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

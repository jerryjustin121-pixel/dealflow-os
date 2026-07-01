import { tasks } from "@/lib/mock-data";
import { PagePanel, PageShell } from "@/components/ui/page-shell";

export default function TasksPage() {
  return (
    <PageShell title="Tasks" subtitle="Active action items across deals and leads." badge="● Priority work">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {tasks.map((task) => (
          <PagePanel key={task.id}>
            <div className="flex items-center justify-between gap-3">
              <p className="font-semibold">{task.title}</p>
              <span className="rounded-full bg-[rgba(79,70,229,0.15)] px-2.5 py-1 text-xs font-semibold text-[#c7d2fe]">{task.type}</span>
            </div>
            <div className="mt-3 space-y-1 text-sm text-[var(--muted)]">
              <p>Status: <span className="text-[var(--text)]">{task.status}</span></p>
              <p>Due {task.dueDate}</p>
              <p>Owner: {task.owner}</p>
              <p>Priority: {task.priority}</p>
              <p>Deal: {task.deal}</p>
            </div>
          </PagePanel>
        ))}
      </div>
    </PageShell>
  );
}

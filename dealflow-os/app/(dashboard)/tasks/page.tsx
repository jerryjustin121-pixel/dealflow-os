import { tasks } from "@/lib/mock-data";

export default function TasksPage() {
  return (
    <div className="space-y-6">
      <div className="rounded-[28px] border border-slate-200/70 bg-white p-6 shadow-surface">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">Tasks</p>
            <h1 className="mt-2 text-3xl font-semibold text-slate-950">Active action items</h1>
          </div>
          <span className="rounded-full bg-[#FEF3C7] px-4 py-2 text-sm font-semibold text-[#B45309]">Priority work</span>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {tasks.map((task) => (
          <div key={task.id} className="rounded-[28px] border border-slate-200/70 bg-white p-6 shadow-surface">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-semibold text-slate-950">{task.title}</p>
              <span className="rounded-full bg-[#EFF6FF] px-3 py-1 text-sm font-semibold text-[#2563EB]">{task.type}</span>
            </div>
            <div className="mt-4 space-y-2 text-sm text-slate-500">
              <p>Status: <span className="font-semibold text-slate-900">{task.status}</span></p>
              <p>Due {task.dueDate}</p>
              <p>Owner: {task.owner}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

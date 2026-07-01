export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div className="rounded-[28px] border border-slate-200/70 bg-white p-6 shadow-surface">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">Settings</p>
            <h1 className="mt-2 text-3xl font-semibold text-slate-950">Workspace preferences</h1>
          </div>
          <button className="rounded-[14px] bg-[#2563EB] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#1D4ED8]">Save changes</button>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <div className="rounded-[28px] border border-slate-200/70 bg-white p-6 shadow-surface">
          <p className="text-sm font-medium text-slate-500">Profile</p>
          <div className="mt-6 space-y-4 text-sm text-slate-600">
            <p className="font-semibold text-slate-950">Jerry Justin</p>
            <p>Email: jerry@dealflow.com</p>
            <p>Role: Admin</p>
          </div>
        </div>

        <div className="rounded-[28px] border border-slate-200/70 bg-white p-6 shadow-surface">
          <p className="text-sm font-medium text-slate-500">Workspace</p>
          <div className="mt-6 space-y-4 text-sm text-slate-600">
            <p className="font-semibold text-slate-950">DealFlow Enterprise</p>
            <p>Organization: DealFlow OS</p>
            <p>Support plan: Premium</p>
          </div>
        </div>
      </div>
    </div>
  );
}

import { companies } from "@/lib/mock-data";

const formatRevenue = (value: number) => `$${value.toFixed(1)}M`;

export default function CompaniesPage() {
  return (
    <div className="space-y-6">
      <div className="rounded-[28px] border border-slate-200/70 bg-white p-6 shadow-surface">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">Companies</p>
            <h1 className="mt-2 text-3xl font-semibold text-slate-950">Customer portfolio</h1>
          </div>
          <button className="rounded-[14px] bg-[#6D5EF6] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#5B4CF1]">
            Add company
          </button>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        {companies.map((company) => (
          <div key={company.id} className="rounded-[28px] border border-slate-200/70 bg-white p-6 shadow-surface">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-lg font-semibold text-slate-950">{company.name}</p>
                <p className="text-sm text-slate-500">{company.industry}</p>
              </div>
              <span className="rounded-full bg-[#F4F2FF] px-3 py-2 text-sm font-semibold text-[#5B4CF1]">{company.website}</span>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div>
                <p className="text-sm text-slate-500">Employees</p>
                <p className="mt-2 text-xl font-semibold text-slate-950">{company.employees}</p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Revenue</p>
                <p className="mt-2 text-xl font-semibold text-slate-950">{formatRevenue(company.revenue)}</p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Health</p>
                <p className="mt-2 text-xl font-semibold text-slate-950">Strong</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

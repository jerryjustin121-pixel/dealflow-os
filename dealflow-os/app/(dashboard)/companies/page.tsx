import { companies } from "@/lib/mock-data";
import { PagePanel, PageShell } from "@/components/ui/page-shell";

const formatRevenue = (value: number) => `$${value.toFixed(1)}M`;

export default function CompaniesPage() {
  return (
    <PageShell
      title="Companies"
      subtitle="Customer portfolio and account health."
      badge="● Portfolio view"
      action={<button className="rounded-xl bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white">Add company</button>}
    >
      <div className="grid gap-4 xl:grid-cols-2">
        {companies.map((company) => (
          <PagePanel key={company.id}>
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-lg font-semibold">{company.name}</p>
                <p className="text-sm text-[var(--muted)]">{company.industry} · {company.market}</p>
              </div>
              <span className="rounded-full bg-[rgba(79,70,229,0.15)] px-3 py-1 text-sm font-semibold text-[#c7d2fe]">{company.health}</span>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <div><p className="text-sm text-[var(--muted)]">Employees</p><p className="mt-1 font-semibold">{company.employees}</p></div>
              <div><p className="text-sm text-[var(--muted)]">Revenue</p><p className="mt-1 font-semibold">{formatRevenue(company.revenue)}</p></div>
              <div><p className="text-sm text-[var(--muted)]">Open value</p><p className="mt-1 font-semibold">${(company.openValue / 1000).toFixed(0)}K</p></div>
            </div>
          </PagePanel>
        ))}
      </div>
    </PageShell>
  );
}

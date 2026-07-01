import { CsvImportForm } from "@/components/csv-import-form";
import { PagePanel, PageShell } from "@/components/ui/page-shell";
import { importBatches } from "@/lib/mock-data";

export default function ImportPage() {
  return (
    <PageShell title="CSV lead import" subtitle="Upload brokerage lead databases with automatic scoring on import." badge="● Import center">
      <PagePanel>
        <CsvImportForm />
      </PagePanel>

      <PagePanel>
        <p className="text-sm text-[var(--muted)]">Recent imports</p>
        <div className="mt-4 grid gap-2.5">
          {importBatches.map((batch) => (
            <div key={batch.id} className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[var(--border)] bg-[var(--panel-soft)] px-3 py-2.5">
              <div>
                <p className="font-medium text-[var(--text)]">{batch.file}</p>
                <p className="text-sm text-[var(--muted)]">{batch.rows} rows · {batch.hot} hot · {batch.warm} warm</p>
              </div>
              <span className="rounded-full bg-[rgba(34,197,94,0.16)] px-2.5 py-1 text-xs font-semibold text-[#bbf7d0]">{batch.status}</span>
            </div>
          ))}
        </div>
      </PagePanel>

      <PagePanel>
        <p className="text-sm text-[var(--muted)]">Sample CSV format</p>
        <pre className="mt-3 overflow-x-auto rounded-xl bg-[var(--panel-soft)] p-4 text-xs leading-6 text-[var(--muted)]">
{`firstName,lastName,email,phone,propertyInterest,budget,source
Maria,Santos,maria@email.com,+13055550142,3BR condo Brickell,850000,Zillow`}
        </pre>
      </PagePanel>
    </PageShell>
  );
}

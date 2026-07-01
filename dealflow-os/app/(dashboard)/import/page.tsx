import { CsvImportForm } from "@/components/csv-import-form";

export default function ImportPage() {
  return (
    <div className="space-y-6">
      <div className="rounded-[28px] border border-slate-200/70 bg-white p-6 shadow-surface">
        <div>
          <p className="text-sm font-medium text-slate-500">Import</p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-950">CSV lead import</h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-500">
            Upload your brokerage lead database. Each row is scored automatically on import so your team knows who to call first.
          </p>
        </div>
      </div>

      <div className="rounded-[28px] border border-slate-200/70 bg-white p-6 shadow-surface">
        <CsvImportForm />
      </div>

      <div className="rounded-[28px] border border-slate-200/70 bg-[#110E22] p-6 text-white shadow-surface">
        <p className="text-sm text-slate-300">Sample CSV format</p>
        <pre className="mt-4 overflow-x-auto rounded-[20px] bg-black/30 p-4 text-xs leading-6 text-slate-200">
{`firstName,lastName,email,phone,propertyInterest,budget,source
Maria,Santos,maria@email.com,+13055550142,3BR condo Brickell,850000,Zillow
David,Kim,dkim@email.com,,Single-family Coral Gables,1200000,Referral`}
        </pre>
      </div>
    </div>
  );
}

"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Upload } from "lucide-react";

export function CsvImportForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage(null);
    setError(null);

    const form = event.currentTarget;
    const fileInput = form.elements.namedItem("file") as HTMLInputElement;
    const file = fileInput.files?.[0];

    if (!file) {
      setError("Choose a CSV file to import.");
      setLoading(false);
      return;
    }

    const body = new FormData();
    body.append("file", file);

    try {
      const response = await fetch("/api/leads/import", { method: "POST", body });
      const data = (await response.json()) as { imported?: number; error?: string };

      if (!response.ok) {
        setError(data.error ?? "Import failed.");
        return;
      }

      setMessage(`Imported ${data.imported ?? 0} leads successfully.`);
      router.refresh();
    } catch {
      setError("Import failed. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-[var(--border)] bg-[var(--panel-soft)] p-10 transition hover:border-[#818cf8]">
        <Upload className="mb-4 h-10 w-10 text-[#818cf8]" />
        <span className="text-lg font-semibold">Drop CSV or click to upload</span>
        <span className="mt-2 text-sm text-[var(--muted)]">Columns: firstName, lastName, email, phone, propertyInterest, budget, source</span>
        <input name="file" type="file" accept=".csv,text/csv" className="mt-4 text-sm text-[var(--muted)]" />
      </label>

      <button
        type="submit"
        disabled={loading}
        className="rounded-xl bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white disabled:opacity-60"
      >
        {loading ? "Importing…" : "Import leads"}
      </button>

      {message ? <p className="text-sm font-medium text-[var(--accent-2)]">{message}</p> : null}
      {error ? <p className="text-sm font-medium text-[var(--danger)]">{error}</p> : null}
    </form>
  );
}

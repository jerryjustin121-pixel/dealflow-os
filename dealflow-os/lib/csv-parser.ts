import type { Lead, LeadStatus } from "@/lib/leads";

function parseCsvLine(line: string): string[] {
  const values: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      inQuotes = !inQuotes;
      continue;
    }
    if (char === "," && !inQuotes) {
      values.push(current.trim());
      current = "";
      continue;
    }
    current += char;
  }

  values.push(current.trim());
  return values;
}

function normalizeHeader(header: string) {
  return header.toLowerCase().replace(/[^a-z]/g, "");
}

export function parseLeadsCsv(content: string): Omit<Lead, "id" | "createdAt">[] {
  const lines = content.split(/\r?\n/).filter((line) => line.trim());
  if (lines.length < 2) return [];

  const headers = parseCsvLine(lines[0]).map(normalizeHeader);
  const rows = lines.slice(1);

  return rows.map((row) => {
    const values = parseCsvLine(row);
    const record: Record<string, string> = {};
    headers.forEach((header, index) => {
      record[header] = values[index] ?? "";
    });

    const budget = record.budget ? Number(record.budget.replace(/[^0-9.]/g, "")) : undefined;

    return {
      firstName: record.firstname || record.first || "Unknown",
      lastName: record.lastname || record.last || "",
      email: record.email || `${record.firstname || "lead"}@example.com`,
      phone: record.phone || undefined,
      propertyInterest: record.propertyinterest || record.property || undefined,
      budget: Number.isFinite(budget) ? budget : undefined,
      source: record.source || "CSV Import",
      status: (record.status?.toUpperCase() as LeadStatus) || "NEW",
    };
  });
}

import { NextResponse } from "next/server";
import { parseLeadsCsv } from "@/lib/csv-parser";
import { addLeads } from "@/lib/leads-store";
import { scoreLead } from "@/lib/ai/score-lead";
import { updateLead } from "@/lib/leads-store";

export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get("file");

  if (!(file instanceof File)) {
    return NextResponse.json({ error: "CSV file is required." }, { status: 400 });
  }

  const content = await file.text();
  const parsed = parseLeadsCsv(content);

  if (!parsed.length) {
    return NextResponse.json({ error: "No valid rows found in CSV." }, { status: 400 });
  }

  const created = addLeads(parsed);

  for (const lead of created) {
    const result = await scoreLead(lead);
    updateLead(lead.id, { score: result.score, scoreReason: result.reason });
  }

  return NextResponse.json({ imported: created.length, leads: created });
}

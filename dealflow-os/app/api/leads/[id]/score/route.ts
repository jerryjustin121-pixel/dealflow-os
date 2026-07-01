import { NextResponse } from "next/server";
import { findLead, updateLead } from "@/lib/leads-store";
import { scoreLead } from "@/lib/ai/score-lead";

type Params = { params: Promise<{ id: string }> };

export async function POST(_request: Request, { params }: Params) {
  const { id } = await params;
  const lead = findLead(id);

  if (!lead) {
    return NextResponse.json({ error: "Lead not found." }, { status: 404 });
  }

  const result = await scoreLead(lead);
  const updated = updateLead(id, { score: result.score, scoreReason: result.reason });

  return NextResponse.json({ lead: updated, ...result });
}

import { NextResponse } from "next/server";
import { findLead } from "@/lib/leads-store";
import { generateFollowUp } from "@/lib/ai/follow-up";

type Params = { params: Promise<{ id: string }> };

export async function POST(_request: Request, { params }: Params) {
  const { id } = await params;
  const lead = findLead(id);

  if (!lead) {
    return NextResponse.json({ error: "Lead not found." }, { status: 404 });
  }

  const message = await generateFollowUp(lead);
  return NextResponse.json({ message });
}

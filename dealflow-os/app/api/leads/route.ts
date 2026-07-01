import { NextResponse } from "next/server";
import { getAllLeads } from "@/lib/leads-store";

export async function GET() {
  return NextResponse.json({ leads: getAllLeads() });
}

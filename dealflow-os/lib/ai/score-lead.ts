import type { Lead } from "@/lib/leads";

type ScoreResult = { score: number; reason: string };

function heuristicScore(lead: Lead): ScoreResult {
  let score = 40;
  const reasons: string[] = [];

  if (lead.budget && lead.budget >= 1_000_000) {
    score += 25;
    reasons.push("high budget");
  } else if (lead.budget && lead.budget >= 500_000) {
    score += 15;
    reasons.push("solid budget");
  }

  if (lead.source === "Referral") {
    score += 20;
    reasons.push("referral source");
  } else if (lead.source === "Zillow" || lead.source === "Website") {
    score += 10;
    reasons.push("inbound intent");
  }

  if (lead.lastContactedAt) {
    const daysSince = Math.floor((Date.now() - new Date(lead.lastContactedAt).getTime()) / 86400000);
    if (daysSince <= 7) {
      score += 15;
      reasons.push("recent engagement");
    } else if (daysSince > 60) {
      score -= 20;
      reasons.push("stale — revive opportunity");
    }
  } else if (lead.status === "NEW") {
    score += 12;
    reasons.push("uncontacted new lead");
  }

  if (lead.phone) score += 5;

  const normalized = Math.max(10, Math.min(99, score));
  return {
    score: normalized,
    reason: reasons.length ? reasons.join(", ") : "Standard lead profile",
  };
}

export async function scoreLead(lead: Lead): Promise<ScoreResult> {
  if (!process.env.OPENAI_API_KEY) {
    return heuristicScore(lead);
  }

  try {
    const { default: OpenAI } = await import("openai");
    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.2,
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content:
            "You score real estate leads 1-100 for a brokerage. Return JSON: { score: number, reason: string }. Higher = more likely to close soon.",
        },
        {
          role: "user",
          content: JSON.stringify({
            name: `${lead.firstName} ${lead.lastName}`,
            budget: lead.budget,
            source: lead.source,
            status: lead.status,
            propertyInterest: lead.propertyInterest,
            lastContactedAt: lead.lastContactedAt,
          }),
        },
      ],
    });

    const raw = response.choices[0]?.message?.content;
    if (!raw) return heuristicScore(lead);

    const parsed = JSON.parse(raw) as ScoreResult;
    if (typeof parsed.score !== "number" || !parsed.reason) return heuristicScore(lead);

    return {
      score: Math.max(1, Math.min(100, Math.round(parsed.score))),
      reason: parsed.reason,
    };
  } catch {
    return heuristicScore(lead);
  }
}

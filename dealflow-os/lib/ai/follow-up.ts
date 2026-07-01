import type { Lead } from "@/lib/leads";

export async function generateFollowUp(lead: Lead): Promise<string> {
  if (!process.env.OPENAI_API_KEY) {
    const name = lead.firstName;
    const property = lead.propertyInterest ?? "your property search";
    return `Hi ${name},\n\nI wanted to follow up on ${property}. Based on your criteria${lead.budget ? ` and budget around ${new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(lead.budget)}` : ""}, I have a few listings that could be a strong fit.\n\nWould you have 15 minutes this week for a quick call?\n\nBest,\nJerry`;
  }

  try {
    const { default: OpenAI } = await import("openai");
    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.7,
      messages: [
        {
          role: "system",
          content: "Write a concise, warm follow-up email for a real estate agent to send to a lead. 3-4 short paragraphs max. No subject line.",
        },
        {
          role: "user",
          content: JSON.stringify(lead),
        },
      ],
    });

    return response.choices[0]?.message?.content?.trim() ?? fallbackMessage(lead);
  } catch {
    return fallbackMessage(lead);
  }
}

function fallbackMessage(lead: Lead) {
  return `Hi ${lead.firstName},\n\nChecking in on ${lead.propertyInterest ?? "your search"}. Happy to share updated options whenever works for you.\n\nBest,\nJerry`;
}

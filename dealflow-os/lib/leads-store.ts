import { Lead, leads as seedLeads } from "@/lib/leads";

let store: Lead[] = [...seedLeads];

export function getAllLeads() {
  return [...store].sort((a, b) => (b.score ?? 0) - (a.score ?? 0));
}

export function findLead(id: string) {
  return store.find((lead) => lead.id === id);
}

export function addLeads(incoming: Omit<Lead, "id" | "createdAt">[]) {
  const created = incoming.map((lead, index) => ({
    ...lead,
    id: `lead-import-${Date.now()}-${index}`,
    createdAt: new Date().toISOString().slice(0, 10),
  }));
  store = [...created, ...store];
  return created;
}

export function updateLead(id: string, patch: Partial<Lead>) {
  const index = store.findIndex((lead) => lead.id === id);
  if (index === -1) return null;
  store[index] = { ...store[index], ...patch };
  return store[index];
}

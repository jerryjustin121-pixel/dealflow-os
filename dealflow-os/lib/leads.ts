export type LeadStatus = "NEW" | "CONTACTED" | "QUALIFIED" | "NURTURING" | "CLOSED" | "LOST";

export type Lead = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  propertyInterest?: string;
  budget?: number;
  source?: string;
  status: LeadStatus;
  score?: number;
  scoreReason?: string;
  lastContactedAt?: string;
  notes?: string;
  createdAt: string;
};

export const leads: Lead[] = [
  {
    id: "lead-001",
    firstName: "Maria",
    lastName: "Santos",
    email: "maria.santos@gmail.com",
    phone: "+1 (305) 555-0142",
    propertyInterest: "3BR condo, Brickell",
    budget: 850000,
    source: "Zillow",
    status: "QUALIFIED",
    score: 92,
    scoreReason: "High budget, active search, responded within 24h",
    lastContactedAt: "2026-06-28",
    createdAt: "2026-06-15",
  },
  {
    id: "lead-002",
    firstName: "David",
    lastName: "Kim",
    email: "david.kim@outlook.com",
    phone: "+1 (786) 555-0198",
    propertyInterest: "Single-family, Coral Gables",
    budget: 1200000,
    source: "Referral",
    status: "CONTACTED",
    score: 78,
    scoreReason: "Strong referral, pre-approved, viewing scheduled",
    lastContactedAt: "2026-07-01",
    createdAt: "2026-06-22",
  },
  {
    id: "lead-003",
    firstName: "Jennifer",
    lastName: "Walsh",
    email: "jwalsh@yahoo.com",
    propertyInterest: "Investment duplex",
    budget: 650000,
    source: "Open house",
    status: "NURTURING",
    score: 61,
    scoreReason: "Interested but timeline 6+ months out",
    lastContactedAt: "2026-05-10",
    createdAt: "2026-04-18",
  },
  {
    id: "lead-004",
    firstName: "Robert",
    lastName: "Chen",
    email: "rchen@proton.me",
    phone: "+1 (954) 555-0177",
    propertyInterest: "Luxury waterfront",
    budget: 2400000,
    source: "Website",
    status: "NEW",
    score: 88,
    scoreReason: "Premium buyer profile, no agent yet",
    createdAt: "2026-07-01",
  },
  {
    id: "lead-005",
    firstName: "Amanda",
    lastName: "Foster",
    email: "afoster@gmail.com",
    propertyInterest: "Townhome, Doral",
    budget: 520000,
    source: "Facebook Ads",
    status: "LOST",
    score: 34,
    scoreReason: "Went with another brokerage",
    lastContactedAt: "2026-03-20",
    createdAt: "2026-02-14",
  },
  {
    id: "lead-006",
    firstName: "Carlos",
    lastName: "Mendez",
    email: "cmendez@icloud.com",
    phone: "+1 (305) 555-0231",
    propertyInterest: "Commercial retail",
    budget: 980000,
    source: "Cold outreach",
    status: "NEW",
    createdAt: "2026-07-02",
  },
];

export function getLeadById(id: string) {
  return leads.find((lead) => lead.id === id);
}

export function getLeadsSortedByScore() {
  return [...leads].sort((a, b) => (b.score ?? 0) - (a.score ?? 0));
}

export function getPriorityLeads(limit = 5) {
  return getLeadsSortedByScore()
    .filter((lead) => lead.status !== "CLOSED" && lead.status !== "LOST")
    .slice(0, limit);
}

export function formatBudget(value?: number) {
  if (!value) return "—";
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);
}

export const statusColors: Record<LeadStatus, string> = {
  NEW: "bg-[#EEF2FF] text-[#4338CA]",
  CONTACTED: "bg-[#EFF6FF] text-[#2563EB]",
  QUALIFIED: "bg-[#ECFDF5] text-[#15803D]",
  NURTURING: "bg-[#FEF3C7] text-[#B45309]",
  CLOSED: "bg-[#F3E8FF] text-[#7C3AED]",
  LOST: "bg-[#FEE2E2] text-[#DC2626]",
};

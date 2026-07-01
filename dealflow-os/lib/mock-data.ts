export type DealStage = "Lead" | "Qualified" | "Viewing" | "Proposal" | "Negotiation" | "Closed Won";
export type LeadTemperature = "Hot" | "Warm" | "Cold";
export type TaskStatus = "Todo" | "In Progress" | "Blocked" | "Completed";

export const dashboardStats = [
  {
    label: "Total Leads",
    value: "128",
    delta: "+12%",
    helper: "vs last month",
    tone: "violet",
  },
  {
    label: "Pipeline Value",
    value: "$4.2M",
    delta: "+18%",
    helper: "recoverable value",
    tone: "emerald",
  },
  {
    label: "Hot Leads",
    value: "42",
    delta: "+8%",
    helper: "need attention",
    tone: "amber",
  },
  {
    label: "Closed Won",
    value: "16",
    delta: "+23%",
    helper: "this month",
    tone: "green",
  },
  {
    label: "Win Rate",
    value: "32%",
    delta: "+7%",
    helper: "after AI scoring",
    tone: "blue",
  },
] as const;

export const pipelineStages: Array<{
  stage: DealStage;
  label: string;
  count: number;
  value: string;
  className: string;
}> = [
  { stage: "Lead", label: "Lead", count: 32, value: "$1.2M", className: "bg-blue-50 border-blue-100" },
  { stage: "Qualified", label: "Qualified", count: 26, value: "$780K", className: "bg-teal-50 border-teal-100" },
  { stage: "Viewing", label: "Viewing", count: 18, value: "$560K", className: "bg-amber-50 border-amber-100" },
  { stage: "Proposal", label: "Proposal", count: 28, value: "$900K", className: "bg-violet-50 border-violet-100" },
  { stage: "Closed Won", label: "Closed Won", count: 16, value: "$1.8M", className: "bg-emerald-50 border-emerald-100" },
];

export const deals: Array<{
  id: string;
  title: string;
  company: string;
  contact: string;
  stage: DealStage;
  temperature: LeadTemperature;
  value: number;
  probability: number;
  score: number;
  owner: string;
  source: string;
  market: string;
  closeDate: string;
  lastActivity: string;
  nextStep: string;
}> = [
  {
    id: "deal-001",
    title: "Palm Jumeirah villa buyer",
    company: "Nike Inc.",
    contact: "Sofia Rivera",
    stage: "Lead",
    temperature: "Hot",
    value: 250000,
    probability: 72,
    score: 94,
    owner: "Jerry Justin",
    source: "Referral",
    market: "Dubai",
    closeDate: "2026-07-24",
    lastActivity: "Meeting today at 2:00 PM",
    nextStep: "Send ROI proof and schedule viewing",
  },
  {
    id: "deal-002",
    title: "Marina apartment investor",
    company: "FutureTech",
    contact: "Ethan Chen",
    stage: "Qualified",
    temperature: "Warm",
    value: 750000,
    probability: 64,
    score: 87,
    owner: "Maya Patel",
    source: "LinkedIn",
    market: "Dubai",
    closeDate: "2026-07-30",
    lastActivity: "Budget confirmed yesterday",
    nextStep: "Share three comparable listings",
  },
  {
    id: "deal-003",
    title: "Kuwait City commercial lease",
    company: "SoftSolutions",
    contact: "Mina Okafor",
    stage: "Viewing",
    temperature: "Hot",
    value: 500000,
    probability: 68,
    score: 90,
    owner: "Adrian Cole",
    source: "Website",
    market: "Kuwait",
    closeDate: "2026-08-05",
    lastActivity: "Viewing requested",
    nextStep: "Confirm office floor plan",
  },
  {
    id: "deal-004",
    title: "AI platform relocation",
    company: "AI Innovate",
    contact: "Liam Brooks",
    stage: "Proposal",
    temperature: "Warm",
    value: 600000,
    probability: 59,
    score: 81,
    owner: "Jerry Justin",
    source: "Partner",
    market: "Abu Dhabi",
    closeDate: "2026-08-10",
    lastActivity: "Proposal opened 3 times",
    nextStep: "Clarify service fees",
  },
  {
    id: "deal-005",
    title: "Data analytics office move",
    company: "DataCorp",
    contact: "Priya Nair",
    stage: "Proposal",
    temperature: "Cold",
    value: 300000,
    probability: 41,
    score: 63,
    owner: "Maya Patel",
    source: "Cold Outreach",
    market: "London",
    closeDate: "2026-08-18",
    lastActivity: "No reply in 9 days",
    nextStep: "Send short reactivation note",
  },
  {
    id: "deal-006",
    title: "Investment deal",
    company: "Investor Group",
    contact: "Omar Al-Salem",
    stage: "Closed Won",
    temperature: "Hot",
    value: 1200000,
    probability: 99,
    score: 96,
    owner: "Jerry Justin",
    source: "Referral",
    market: "Kuwait",
    closeDate: "2026-06-18",
    lastActivity: "Closed contract signed",
    nextStep: "Start post-sale referral workflow",
  },
  {
    id: "deal-007",
    title: "Consulting project relocation",
    company: "ConsultCorp",
    contact: "Noah Sinclair",
    stage: "Closed Won",
    temperature: "Warm",
    value: 600000,
    probability: 99,
    score: 88,
    owner: "Adrian Cole",
    source: "Website",
    market: "Manchester",
    closeDate: "2026-06-22",
    lastActivity: "Invoice issued",
    nextStep: "Request testimonial",
  },
  {
    id: "deal-008",
    title: "Marketing agency expansion",
    company: "BrandBoost",
    contact: "Ava Kapoor",
    stage: "Lead",
    temperature: "Warm",
    value: 75000,
    probability: 48,
    score: 74,
    owner: "Maya Patel",
    source: "LinkedIn",
    market: "Mumbai",
    closeDate: "2026-07-28",
    lastActivity: "Imported from CSV",
    nextStep: "Ask for preferred neighborhoods",
  },
  {
    id: "deal-009",
    title: "Mobile app founder apartment",
    company: "AppWorks",
    contact: "Daniel Park",
    stage: "Qualified",
    temperature: "Hot",
    value: 350000,
    probability: 70,
    score: 91,
    owner: "Jerry Justin",
    source: "Website",
    market: "Bengaluru",
    closeDate: "2026-07-26",
    lastActivity: "Visited pricing page",
    nextStep: "Send shortlist within budget",
  },
];

export const contacts = [
  {
    id: "contact-001",
    name: "Sofia Rivera",
    title: "Head of Sales",
    company: "Nike Inc.",
    email: "sofia.rivera@nimbustech.com",
    phone: "+1 (415) 555-0122",
    market: "Dubai",
    score: 94,
    lastTouch: "Today",
    relationship: "Decision maker",
  },
  {
    id: "contact-002",
    name: "Ethan Chen",
    title: "VP of Operations",
    company: "FutureTech",
    email: "ethan.chen@futuretech.com",
    phone: "+1 (650) 555-0164",
    market: "Dubai",
    score: 87,
    lastTouch: "Yesterday",
    relationship: "Economic buyer",
  },
  {
    id: "contact-003",
    name: "Mina Okafor",
    title: "Director of Partnerships",
    company: "SoftSolutions",
    email: "mina.okafor@softsolutions.com",
    phone: "+1 (212) 555-0198",
    market: "Kuwait",
    score: 90,
    lastTouch: "2 days ago",
    relationship: "Champion",
  },
  {
    id: "contact-004",
    name: "Liam Brooks",
    title: "Chief Revenue Officer",
    company: "AI Innovate",
    email: "liam.brooks@aiinnovate.com",
    phone: "+44 20 5555 0141",
    market: "Abu Dhabi",
    score: 81,
    lastTouch: "3 days ago",
    relationship: "Influencer",
  },
  {
    id: "contact-005",
    name: "Priya Nair",
    title: "Finance Director",
    company: "DataCorp",
    email: "priya.nair@datacorp.com",
    phone: "+91 80 5555 0133",
    market: "London",
    score: 63,
    lastTouch: "9 days ago",
    relationship: "Finance approver",
  },
  {
    id: "contact-006",
    name: "Omar Al-Salem",
    title: "Managing Partner",
    company: "Investor Group",
    email: "omar@investorgroup.kw",
    phone: "+965 2222 0144",
    market: "Kuwait",
    score: 96,
    lastTouch: "Jun 29",
    relationship: "Repeat buyer",
  },
];

export const companies = [
  {
    id: "company-001",
    name: "Nike Inc.",
    industry: "Retail",
    employees: 420,
    revenue: 18.9,
    website: "nike.example",
    health: "Strong",
    openValue: 250000,
    recoveredRevenue: 86000,
    market: "Dubai",
  },
  {
    id: "company-002",
    name: "FutureTech",
    industry: "SaaS",
    employees: 210,
    revenue: 12.3,
    website: "futuretech.example",
    health: "Growing",
    openValue: 750000,
    recoveredRevenue: 144000,
    market: "Dubai",
  },
  {
    id: "company-003",
    name: "SoftSolutions",
    industry: "Technology",
    employees: 320,
    revenue: 24.1,
    website: "softsolutions.example",
    health: "At risk",
    openValue: 500000,
    recoveredRevenue: 92000,
    market: "Kuwait",
  },
  {
    id: "company-004",
    name: "AI Innovate",
    industry: "AI & Analytics",
    employees: 180,
    revenue: 9.7,
    website: "aiinnovate.example",
    health: "Strong",
    openValue: 600000,
    recoveredRevenue: 118000,
    market: "Abu Dhabi",
  },
  {
    id: "company-005",
    name: "Investor Group",
    industry: "Real Estate Investment",
    employees: 75,
    revenue: 31.5,
    website: "investorgroup.example",
    health: "Closed",
    openValue: 1200000,
    recoveredRevenue: 224000,
    market: "Kuwait",
  },
];

export const tasks: Array<{
  id: string;
  title: string;
  type: string;
  status: TaskStatus;
  dueDate: string;
  owner: string;
  priority: "High" | "Medium" | "Low";
  deal: string;
}> = [
  {
    id: "task-001",
    title: "Prepare Palm Jumeirah shortlist",
    type: "Deal",
    status: "In Progress",
    dueDate: "2026-07-02",
    owner: "Jerry Justin",
    priority: "High",
    deal: "Palm Jumeirah villa buyer",
  },
  {
    id: "task-002",
    title: "Follow up with DataCorp",
    type: "Email",
    status: "Todo",
    dueDate: "2026-07-03",
    owner: "Maya Patel",
    priority: "High",
    deal: "Data analytics office move",
  },
  {
    id: "task-003",
    title: "Confirm office floor plan",
    type: "Call",
    status: "Blocked",
    dueDate: "2026-07-04",
    owner: "Adrian Cole",
    priority: "Medium",
    deal: "Kuwait City commercial lease",
  },
  {
    id: "task-004",
    title: "Send investor referral workflow",
    type: "Automation",
    status: "Completed",
    dueDate: "2026-07-01",
    owner: "Jerry Justin",
    priority: "Low",
    deal: "Investment deal",
  },
  {
    id: "task-005",
    title: "Review AI Innovate fees",
    type: "Review",
    status: "Todo",
    dueDate: "2026-07-05",
    owner: "Maya Patel",
    priority: "Medium",
    deal: "AI platform relocation",
  },
  {
    id: "task-006",
    title: "Add AppWorks budget notes",
    type: "Update",
    status: "In Progress",
    dueDate: "2026-07-03",
    owner: "Jerry Justin",
    priority: "High",
    deal: "Mobile app founder apartment",
  },
];

export const calendarEvents = [
  {
    id: "event-001",
    title: "Meeting with Nike Inc.",
    time: "Jul 2 · 2:00 PM",
    type: "Meeting",
    owner: "Jerry Justin",
    deal: "Palm Jumeirah villa buyer",
    color: "bg-blue-600",
  },
  {
    id: "event-002",
    title: "Follow up with TechCorp",
    time: "Jul 3 · 10:00 AM",
    type: "Call",
    owner: "Maya Patel",
    deal: "Marina apartment investor",
    color: "bg-emerald-600",
  },
  {
    id: "event-003",
    title: "Proposal for AI Innovate",
    time: "Jul 4 · 3:00 PM",
    type: "Task",
    owner: "Jerry Justin",
    deal: "AI platform relocation",
    color: "bg-violet-600",
  },
  {
    id: "event-004",
    title: "Contract review",
    time: "Jul 5 · 11:00 AM",
    type: "Review",
    owner: "Adrian Cole",
    deal: "Kuwait City commercial lease",
    color: "bg-amber-600",
  },
];

export const notifications = [
  {
    id: "notification-001",
    title: "High-intent lead detected",
    description: "AppWorks visited pricing, financing, and shortlist pages in one session.",
    time: "2 min ago",
    type: "AI",
  },
  {
    id: "notification-002",
    title: "CSV import completed",
    description: "52 leads imported with 6 duplicates merged and 11 hot leads identified.",
    time: "18 min ago",
    type: "Import",
  },
  {
    id: "notification-003",
    title: "Deal at risk",
    description: "DataCorp has no reply in 9 days and probability dropped by 12 points.",
    time: "1h ago",
    type: "Risk",
  },
  {
    id: "notification-004",
    title: "Follow-up generated",
    description: "AI drafted a concise reactivation note for DataCorp.",
    time: "3h ago",
    type: "AI",
  },
];

export const revenueTrend = [
  { date: "May 12", value: 1500000, forecast: 1420000 },
  { date: "May 16", value: 1720000, forecast: 1660000 },
  { date: "May 20", value: 2200000, forecast: 2050000 },
  { date: "May 24", value: 2600000, forecast: 2460000 },
  { date: "May 28", value: 3100000, forecast: 2920000 },
  { date: "Jun 1", value: 3300000, forecast: 3180000 },
  { date: "Jun 5", value: 3700000, forecast: 3500000 },
  { date: "Jun 9", value: 4200000, forecast: 3900000 },
  { date: "Jun 12", value: 4700000, forecast: 4200000 },
];

export const sourceBreakdown = [
  { name: "Referral", value: 40, count: 51, color: "#6D5EF6" },
  { name: "LinkedIn", value: 25, count: 32, color: "#14B8A6" },
  { name: "Website", value: 15, count: 19, color: "#F59E0B" },
  { name: "Cold Outreach", value: 10, count: 13, color: "#8B5CF6" },
  { name: "Other", value: 10, count: 13, color: "#94A3B8" },
];

export const activityTimeline = [
  {
    id: "activity-001",
    title: "Meeting with Nike Inc.",
    detail: "Proposal and viewing prep",
    time: "Today at 2:00 PM",
    tag: "Meeting",
  },
  {
    id: "activity-002",
    title: "Follow up with TechCorp",
    detail: "Three comparable listings ready",
    time: "Tomorrow at 10:00 AM",
    tag: "Call",
  },
  {
    id: "activity-003",
    title: "Proposal for AI Innovate",
    detail: "Service fee clarification needed",
    time: "Jul 4 at 3:00 PM",
    tag: "Task",
  },
  {
    id: "activity-004",
    title: "Contract review",
    detail: "Legal terms for commercial lease",
    time: "Jul 5 at 11:00 AM",
    tag: "Review",
  },
];

export const aiInsights = [
  {
    id: "insight-001",
    title: "High Priority Follow-ups",
    description: "You have 5 leads that need attention this week.",
    count: 5,
    tone: "violet",
  },
  {
    id: "insight-002",
    title: "Deal at Risk",
    description: "2 deals are at risk of slipping based on recent activity.",
    count: 2,
    tone: "rose",
  },
  {
    id: "insight-003",
    title: "Next Best Actions",
    description: "AI recommends 3 actions to move deals forward.",
    count: 3,
    tone: "teal",
  },
];

export const importBatches = [
  {
    id: "import-001",
    file: "dubai-buyer-leads.csv",
    status: "Scored",
    rows: 52,
    duplicates: 6,
    hot: 11,
    warm: 29,
    cold: 12,
  },
  {
    id: "import-002",
    file: "kuwait-commercial-q3.csv",
    status: "Validating",
    rows: 38,
    duplicates: 2,
    hot: 7,
    warm: 20,
    cold: 11,
  },
  {
    id: "import-003",
    file: "uk-investor-reactivation.csv",
    status: "Ready",
    rows: 74,
    duplicates: 9,
    hot: 14,
    warm: 31,
    cold: 29,
  },
];

export const followUpDrafts = [
  {
    id: "draft-001",
    recipient: "Priya Nair",
    subject: "A sharper shortlist for your London move",
    body: "Hi Priya, I narrowed the shortlist to options that match your budget and commute priorities. The strongest two also give you expansion flexibility without forcing a longer lease. Would tomorrow afternoon work for a 12-minute review?",
  },
  {
    id: "draft-002",
    recipient: "Daniel Park",
    subject: "Three apartments that match your budget",
    body: "Hi Daniel, based on your pricing-page visit and stated budget, I found three apartments that keep you near the startup corridor while protecting monthly cash flow. I can send the shortlist with estimated total ownership cost today.",
  },
];

export const agentPerformance = [
  { name: "Jerry Justin", role: "Broker Owner", leads: 46, won: 9, recovered: 420000, conversion: 38 },
  { name: "Maya Patel", role: "Senior Agent", leads: 38, won: 4, recovered: 220000, conversion: 24 },
  { name: "Adrian Cole", role: "Commercial Agent", leads: 31, won: 3, recovered: 180000, conversion: 19 },
  { name: "Sofia Rivera", role: "Inside Sales", leads: 26, won: 2, recovered: 90000, conversion: 16 },
];

export const integrations = [
  { name: "CSV Import", status: "Live", description: "Upload lead sheets and detect duplicates automatically." },
  { name: "Clerk Auth", status: "Ready", description: "Organization-aware access control for broker teams." },
  { name: "Anthropic Scoring", status: "Ready", description: "Score hot, warm, and cold leads from lead history." },
  { name: "Email Drafts", status: "Draft", description: "Generate follow-ups for copy-and-send workflows." },
  { name: "Neon Postgres", status: "Ready", description: "Store leads, imports, scores, and agent activity." },
  { name: "Vercel", status: "Ready", description: "Deploy the product dashboard and API routes." },
];

export const automationRules = [
  { name: "Hot lead SLA", status: "Enabled", trigger: "Hot score above 88", action: "Create same-day follow-up task" },
  { name: "Dormant lead recovery", status: "Enabled", trigger: "No activity for 7 days", action: "Draft reactivation message" },
  { name: "Duplicate merge", status: "Enabled", trigger: "Same email or phone", action: "Merge into oldest lead record" },
  { name: "Owner escalation", status: "Paused", trigger: "High value deal blocked", action: "Notify brokerage owner" },
];

export const reportMetrics = [
  { label: "Recovered Revenue", value: "$940K", delta: "+21%" },
  { label: "Lead Response SLA", value: "2.4h", delta: "-36%" },
  { label: "Duplicate Merge Rate", value: "8.1%", delta: "+3%" },
  { label: "Agent Accountability", value: "91%", delta: "+12%" },
];

export const weekDays = [
  { day: "Mon", date: "Jun 29", slots: ["Lead review", "Import cleanup"] },
  { day: "Tue", date: "Jun 30", slots: ["Owner sync"] },
  { day: "Wed", date: "Jul 1", slots: ["AI scoring QA", "Proposal prep"] },
  { day: "Thu", date: "Jul 2", slots: ["Nike meeting", "Hot lead block"] },
  { day: "Fri", date: "Jul 3", slots: ["TechCorp follow-up"] },
  { day: "Sat", date: "Jul 4", slots: ["AI Innovate proposal"] },
  { day: "Sun", date: "Jul 5", slots: ["Contract review"] },
];

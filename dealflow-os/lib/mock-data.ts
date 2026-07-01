export const deals = [
  {
    id: "deal-001",
    title: "Enterprise CRM rollout",
    company: "Nimbus Labs",
    stage: "Proposal",
    value: 250000,
    probability: 76,
    owner: "Jerry Justin",
    closeDate: "2026-07-24",
  },
  {
    id: "deal-002",
    title: "Q3 budget approval",
    company: "Eclipse Ventures",
    stage: "Negotiation",
    value: 145000,
    probability: 58,
    owner: "Maya Patel",
    closeDate: "2026-07-30",
  },
  {
    id: "deal-003",
    title: "Platform integration",
    company: "Zenith Systems",
    stage: "Lead",
    value: 98000,
    probability: 42,
    owner: "Adrian Cole",
    closeDate: "2026-08-05",
  },
  {
    id: "deal-004",
    title: "Renewal expansion",
    company: "Aurora Digital",
    stage: "Closed Won",
    value: 320000,
    probability: 99,
    owner: "Jerry Justin",
    closeDate: "2026-06-18",
  },
];

export const contacts = [
  {
    id: "contact-001",
    name: "Sofia Rivera",
    title: "Head of Sales",
    company: "Nimbus Labs",
    email: "sofia.rivera@nimbustech.com",
    phone: "+1 (415) 555-0122",
    avatar: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=facearea&facepad=2&w=256&q=80",
  },
  {
    id: "contact-002",
    name: "Ethan Chen",
    title: "VP of Operations",
    company: "Eclipse Ventures",
    email: "ethan.chen@eclipseventures.com",
    phone: "+1 (650) 555-0164",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&q=80",
  },
  {
    id: "contact-003",
    name: "Mina Okafor",
    title: "Director of Partnerships",
    company: "Zenith Systems",
    email: "mina.okafor@zenithsys.com",
    phone: "+1 (212) 555-0198",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=2&w=256&q=80",
  },
  {
    id: "contact-004",
    name: "Liam Brooks",
    title: "Chief Revenue Officer",
    company: "Aurora Digital",
    email: "liam.brooks@auroradigital.com",
    phone: "+1 (310) 555-0141",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=facearea&facepad=2&w=256&q=80",
  },
];

export const companies = [
  {
    id: "company-001",
    name: "Nimbus Labs",
    industry: "Financial Services",
    employees: 420,
    revenue: 18.9,
    website: "nimbustech.com",
  },
  {
    id: "company-002",
    name: "Eclipse Ventures",
    industry: "SaaS",
    employees: 210,
    revenue: 12.3,
    website: "eclipseventures.io",
  },
  {
    id: "company-003",
    name: "Zenith Systems",
    industry: "AI & Analytics",
    employees: 320,
    revenue: 24.1,
    website: "zenithsys.ai",
  },
  {
    id: "company-004",
    name: "Aurora Digital",
    industry: "Healthcare",
    employees: 180,
    revenue: 9.7,
    website: "auroradigital.health",
  },
];

export const tasks = [
  {
    id: "task-001",
    title: "Prepare renewal proposal",
    type: "Deal",
    status: "In Progress",
    dueDate: "2026-07-14",
    owner: "Maya Patel",
  },
  {
    id: "task-002",
    title: "Follow up with Aurora Digital",
    type: "Call",
    status: "Todo",
    dueDate: "2026-07-12",
    owner: "Jerry Justin",
  },
  {
    id: "task-003",
    title: "Review contract terms",
    type: "Review",
    status: "Blocked",
    dueDate: "2026-07-16",
    owner: "Adrian Cole",
  },
  {
    id: "task-004",
    title: "Send onboarding checklist",
    type: "Email",
    status: "Completed",
    dueDate: "2026-07-09",
    owner: "Sofia Rivera",
  },
];

export const calendarEvents = [
  {
    id: "event-001",
    title: "Executive pipeline review",
    time: "Jul 12 · 10:00 AM",
    type: "Meeting",
    color: "from-[#A78BFA] to-[#7C3AED]",
  },
  {
    id: "event-002",
    title: "Customer kickoff",
    time: "Jul 13 · 2:00 PM",
    type: "Call",
    color: "from-[#38BDF8] to-[#0EA5E9]",
  },
  {
    id: "event-003",
    title: "Strategy session",
    time: "Jul 14 · 11:30 AM",
    type: "Workshop",
    color: "from-[#34D399] to-[#10B981]",
  },
];

export const notifications = [
  {
    id: "notification-001",
    title: "Pipeline milestone achieved",
    description: "Nimbus Labs moved to Proposal stage.",
    time: "2 min ago",
  },
  {
    id: "notification-002",
    title: "New contact added",
    description: "Mina Okafor is now assigned to Zenith Systems.",
    time: "1h ago",
  },
  {
    id: "notification-003",
    title: "Task overdue",
    description: "Follow up with Aurora Digital is due today.",
    time: "3h ago",
  },
];

export const revenueTrend = [
  { date: "Jan", value: 85 },
  { date: "Feb", value: 102 },
  { date: "Mar", value: 118 },
  { date: "Apr", value: 136 },
  { date: "May", value: 158 },
  { date: "Jun", value: 174 },
];

export const sourceBreakdown = [
  { name: "Referral", value: 38 },
  { name: "Inbound", value: 29 },
  { name: "Outbound", value: 23 },
  { name: "Partners", value: 10 },
];

export const pipelineSummary = [
  { label: "Lead", count: 32, value: "$1.2M" },
  { label: "Proposal", count: 18, value: "$920K" },
  { label: "Negotiation", count: 12, value: "$680K" },
  { label: "Closed Won", count: 16, value: "$1.8M" },
];

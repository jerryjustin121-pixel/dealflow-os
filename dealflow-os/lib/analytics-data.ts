export const overviewMetrics = [
  { label: "Revenue", value: "$148.2K", change: "+18.4% vs last month", positive: true },
  { label: "Open deals", value: "24", change: "6 high-priority", positive: true },
  { label: "Lead conversion", value: "34.2%", change: "+4.8% this week", positive: true },
  { label: "AI response rate", value: "91.7%", change: "+7.2% since launch", positive: true },
] as const;

export const revenueBars = [
  { label: "Jan", height: 42 },
  { label: "Feb", height: 60 },
  { label: "Mar", height: 72 },
  { label: "Apr", height: 84 },
  { label: "May", height: 90 },
  { label: "Jun", height: 100 },
] as const;

export const activePipeline = [
  { name: "Northwind Labs", status: "hot" as const, label: "Urgent" },
  { name: "BrightPath", status: "warm" as const, label: "Review" },
  { name: "Halo Systems", status: "good" as const, label: "Proposal" },
  { name: "Meridian AI", status: "good" as const, label: "Qualified" },
];

export const conversionFunnel = [
  { label: "Leads captured", value: "1,240" },
  { label: "Qualified opportunities", value: "423" },
  { label: "Deals closed", value: "112" },
];

export const teamActivity = [
  { name: "Maya", action: "Reviewed 8 deals" },
  { name: "Jon", action: "Triggered 14 AI summaries" },
  { name: "Ava", action: "Updated 5 outreach tasks" },
  { name: "Sam", action: "Closed 2 opportunities" },
];

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bell,
  Bot,
  Building2,
  CalendarDays,
  CheckSquare,
  ChevronLeft,
  Handshake,
  Home,
  LineChart,
  Plug,
  Settings,
  ShieldCheck,
  Users,
} from "lucide-react";
import { cn, InitialsAvatar } from "@/components/ui-primitives";

const navItems = [
  { label: "Dashboard", icon: Home, href: "/" },
  { label: "Deals", icon: Handshake, href: "/deals" },
  { label: "Contacts", icon: Users, href: "/contacts" },
  { label: "Companies", icon: Building2, href: "/companies" },
  { label: "Tasks", icon: CheckSquare, href: "/tasks" },
  { label: "Calendar", icon: CalendarDays, href: "/calendar" },
  { label: "AI Assistant", icon: Bot, href: "/ai" },
  { label: "Reports", icon: LineChart, href: "/reports" },
  { label: "Notifications", icon: Bell, href: "/notifications" },
  { label: "Integrations", icon: Plug, href: "/integrations" },
  { label: "Team", icon: Users, href: "/team" },
  { label: "Settings", icon: Settings, href: "/settings" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden min-h-[calc(100vh-2rem)] rounded-lg bg-[#07111f] p-4 text-white shadow-surface lg:sticky lg:top-4 lg:block">
      <div className="mb-6 flex items-center justify-between gap-3">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-violet-600 text-xs font-semibold">DF</span>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold">DealFlow OS</p>
            <p className="text-xs text-slate-400">Revenue Recovery</p>
          </div>
        </Link>
        <button
          className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/10 text-slate-300 transition hover:bg-white/10 hover:text-white"
          title="Collapse sidebar"
          type="button"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
      </div>

      <nav className="space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(pathname, item.href);

          return (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition",
                active ? "bg-violet-600 text-white shadow-lg shadow-violet-950/30" : "text-slate-300 hover:bg-white/8 hover:text-white",
              )}
            >
              <Icon className="h-4 w-4 shrink-0" />
              <span className="truncate">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-6 rounded-lg border border-white/10 bg-white/[0.06] p-4">
        <div className="flex items-center gap-2 text-violet-200">
          <ShieldCheck className="h-4 w-4" />
          <p className="text-sm font-semibold">Pro Plan</p>
        </div>
        <p className="mt-2 text-xs leading-5 text-slate-300">Upgrade limits, unlock AI recovery rules, and monitor every agent SLA.</p>
        <button className="mt-4 w-full rounded-md bg-violet-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-violet-500" type="button">
          Upgrade Now
        </button>
      </div>

      <div className="mt-6 flex items-center gap-3 rounded-lg border border-white/10 bg-black/10 p-3">
        <InitialsAvatar name="Jerry Justin" className="h-9 w-9 bg-white text-slate-950" />
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-white">Jerry Justin</p>
          <p className="truncate text-xs text-slate-400">jerry@dealflow.com</p>
        </div>
      </div>
    </aside>
  );
}

export function MobileNav() {
  const pathname = usePathname();
  const mobileItems = navItems.slice(0, 8);

  return (
    <nav className="thin-scrollbar flex gap-2 overflow-x-auto rounded-lg border border-slate-200 bg-white p-2 shadow-surface lg:hidden">
      {mobileItems.map((item) => {
        const Icon = item.icon;
        const active = isActive(pathname, item.href);

        return (
          <Link
            key={item.label}
            href={item.href}
            className={cn(
              "inline-flex shrink-0 items-center gap-2 rounded-md px-3 py-2 text-xs font-semibold transition",
              active ? "bg-violet-600 text-white" : "bg-slate-50 text-slate-700 hover:bg-slate-100",
            )}
          >
            <Icon className="h-4 w-4" />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

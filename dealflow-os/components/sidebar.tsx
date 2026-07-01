"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bell,
  CalendarDays,
  ClipboardList,
  FileText,
  Home,
  LayoutDashboard,
  MessageCircle,
  Settings,
  Upload,
  Users,
  UserSearch,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/" },
  { label: "Leads", icon: UserSearch, href: "/leads" },
  { label: "Import", icon: Upload, href: "/import" },
  { label: "Deals", icon: ClipboardList, href: "/deals" },
  { label: "Contacts", icon: Users, href: "/contacts" },
  { label: "Companies", icon: Home, href: "/companies" },
  { label: "Tasks", icon: CalendarDays, href: "/tasks" },
  { label: "Calendar", icon: CalendarDays, href: "/calendar" },
  { label: "AI", icon: MessageCircle, href: "/ai" },
  { label: "Reports", icon: FileText, href: "/reports" },
  { label: "Alerts", icon: Bell, href: "/notifications" },
  { label: "Settings", icon: Settings, href: "/settings" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-[240px] shrink-0 lg:block">
      <div className="sticky top-6 rounded-[18px] border border-[var(--border)] bg-[rgba(15,23,42,0.92)] p-4 shadow-panel">
        <div className="mb-6 border-b border-[var(--border)] pb-4">
          <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">Dealflow OS</p>
          <p className="mt-1 text-sm font-semibold text-[var(--text)]">Analytics Workspace</p>
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
                  "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition",
                  active
                    ? "bg-[rgba(79,70,229,0.22)] text-[#c7d2fe]"
                    : "text-[var(--muted)] hover:bg-[var(--panel-soft)] hover:text-[var(--text)]",
                )}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}

export function MobileNav() {
  const pathname = usePathname();
  const mobileItems = navItems.slice(0, 5);

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-[var(--border)] bg-[rgba(15,23,42,0.96)] px-2 py-2 backdrop-blur-xl lg:hidden">
      <div className="mx-auto flex max-w-lg items-center justify-between">
        {mobileItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(pathname, item.href);
          return (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "flex flex-1 flex-col items-center gap-1 rounded-xl px-1 py-2 text-[10px] font-medium",
                active ? "text-[#c7d2fe]" : "text-[var(--muted)]",
              )}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

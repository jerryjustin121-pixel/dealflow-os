"use client";

import { MobileNav, Sidebar } from "@/components/sidebar";

export function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen px-3 py-4 pb-24 sm:px-6 lg:px-6 lg:pb-8">
      <div className="mx-auto flex max-w-[1400px] gap-4 lg:gap-6">
        <Sidebar />
        <main className="min-w-0 flex-1">{children}</main>
      </div>
      <MobileNav />
    </div>
  );
}

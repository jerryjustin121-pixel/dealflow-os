import Link from "next/link";
import { Bell, Plus, Search, Sparkles, User } from "lucide-react";

export function Navbar() {
  return (
    <header className="rounded-[28px] border border-slate-200/70 bg-white/90 p-4 shadow-surface backdrop-blur-xl">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3 text-slate-500">
            <Sparkles className="h-4 w-4 text-[#6D5EF6]" />
            <span className="text-sm">Revenue recovery dashboard</span>
          </div>
          <h1 className="mt-3 text-2xl font-semibold text-slate-950">Welcome back, Jerry</h1>
          <p className="mt-2 text-sm text-slate-500">See which leads deserve attention today and what to send next.</p>
        </div>

        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-[14px] border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:shadow-md hover:shadow-slate-200/50">
            <Search className="h-4 w-4" />
            Search
          </button>
          <Link
            href="/import"
            className="inline-flex items-center gap-2 rounded-[14px] bg-[#6D5EF6] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-[#6D5EF6]/20 transition hover:bg-[#5B4CF1] hover:-translate-y-0.5"
          >
            <Plus className="h-4 w-4" />
            Import leads
          </Link>
          <button className="inline-flex h-12 w-12 items-center justify-center rounded-[18px] border border-slate-200 bg-white text-slate-700 transition hover:bg-[#F4F2FF]">
            <Bell className="h-5 w-5" />
          </button>
          <button className="inline-flex h-12 w-12 items-center justify-center rounded-[18px] bg-[#F4F2FF] text-[#6D5EF6] transition hover:bg-[#EDE9FE]">
            <User className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}

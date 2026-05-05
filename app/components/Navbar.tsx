"use client";

import { useState } from "react";
import PrintButton from "./PrintButton";

type NavItem = {
  id: string;
  label: string;
  href: string;
};

type NavbarProps = {
  items: NavItem[];
  activeId: string;
};

export default function Navbar({ items, activeId }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="no-print nav-animate sticky top-4 z-50 mx-auto w-[min(1200px,92%)] rounded-full glass-nav px-4 py-3">
      <div className="flex items-center justify-between">
        <a
          href="#home"
          className="font-display text-sm font-semibold tracking-[0.2em] text-slate-900"
        >
          Portfolio
        </a>
        <div className="hidden items-center gap-5 lg:flex">
          {items.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`text-xs uppercase tracking-[0.25em] transition ${
                activeId === item.id
                  ? "text-cyan-600"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              {item.label}
            </a>
          ))}
          <PrintButton label="Print PDF" className="px-4 py-2 text-xs" />
        </div>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs uppercase tracking-[0.3em] text-slate-700 shadow-soft transition hover:border-slate-300 lg:hidden"
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          Menu
        </button>
      </div>
      {open ? (
        <div className="mt-4 flex flex-col gap-3 rounded-3xl border border-white/40 bg-white/80 p-4 shadow-soft lg:hidden">
          {items.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`text-xs uppercase tracking-[0.25em] ${
                activeId === item.id
                  ? "text-cyan-600"
                  : "text-slate-600"
              }`}
            >
              {item.label}
            </a>
          ))}
          <PrintButton label="Print PDF" className="w-full" />
        </div>
      ) : null}
    </nav>
  );
}

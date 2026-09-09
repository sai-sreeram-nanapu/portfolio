"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#projects" },
  { label: "Expertise", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Writing", href: "#blog" }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-[#070a08]/90 backdrop-blur-xl">
      <nav className="section-shell flex h-14 items-center justify-between">
        <a href="#home" className="flex items-center gap-3" aria-label="Sai Sreeram Nanapu home">
          <span className="grid h-8 w-8 place-items-center rounded-[6px] border border-emerald-300/25 bg-emerald-300/[0.08] font-mono text-xs font-bold text-emerald-200">
            SN
          </span>
          <span className="text-sm font-semibold tracking-[-0.02em] text-white">Sai Sreeram Nanapu</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-[13px] font-medium text-slate-400 transition hover:bg-white/[0.04] hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a href="mailto:nanapusaisreeram2002@gmail.com" className="primary-button hidden lg:inline-flex">
          Let&apos;s talk
          <ArrowUpRight size={15} aria-hidden="true" />
        </a>

        <button
          type="button"
          className="grid h-9 w-9 place-items-center rounded-md border border-white/10 bg-white/[0.03] text-white md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-white/[0.08] bg-[#070a08] px-3 py-3 md:hidden">
          <div className="mx-auto grid max-w-lg gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-3 text-sm font-medium text-slate-300 hover:bg-white/[0.04]"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="mailto:nanapusaisreeram2002@gmail.com"
              className="primary-button mt-2"
              onClick={() => setIsOpen(false)}
            >
              Let&apos;s talk
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}

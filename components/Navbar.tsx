"use client";

import { Menu, Sparkles, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-cyan-300/10 bg-slate-950/76 shadow-[0_1px_30px_rgba(34,211,238,0.08)] backdrop-blur-xl">
      <nav className="section-shell flex h-16 items-center justify-between">
        <a href="#home" className="flex items-center gap-3" aria-label="Sai Sreeram Nanapu home">
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-cyan-300/30 bg-cyan-300/10 text-cyan-200 shadow-[0_0_26px_rgba(34,211,238,0.18)]">
            <Sparkles size={18} aria-hidden="true" />
          </span>
          <span className="hidden text-sm font-semibold text-white sm:inline">Sai Sreeram Nanapu</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-cyan-300/8 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="mailto:nanapusaisreeram2002@gmail.com"
          className="hidden rounded-md border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200/60 hover:bg-cyan-300/16 lg:inline-flex"
        >
          Email Me
        </a>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-md border border-cyan-300/18 bg-white/7 text-white md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-cyan-300/10 bg-slate-950/94 px-4 py-4 backdrop-blur-xl md:hidden">
          <div className="mx-auto grid max-w-md gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-3 text-sm font-medium text-slate-200 transition hover:bg-cyan-300/8 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="mailto:nanapusaisreeram2002@gmail.com"
              className="mt-2 rounded-md border border-cyan-300/30 bg-cyan-300/10 px-3 py-3 text-sm font-semibold text-cyan-100"
              onClick={() => setIsOpen(false)}
            >
              Email Me
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}

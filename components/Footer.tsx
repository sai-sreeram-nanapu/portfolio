import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] py-6">
      <div className="section-shell flex flex-col gap-4 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Sai Sreeram Nanapu</p>
        <div className="flex flex-wrap items-center gap-4">
          <span>SAP BTP · SAPUI5/Fiori · Full-Stack Engineering</span>
          <a href="#home" className="inline-flex items-center gap-1.5 font-semibold text-slate-300 transition hover:text-emerald-200">
            Back to top
            <ArrowUp size={13} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}

import { ExternalLink, GitBranch, Mail, Network } from "lucide-react";

const footerLinks = [
  { label: "GitHub", href: "https://github.com/sai-sreeram-nanapu", icon: GitBranch },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sai-sreeram-nanapu-100aaa284",
    icon: Network
  },
  { label: "Email", href: "mailto:nanapusaisreeram2002@gmail.com", icon: Mail },
  { label: "Live AI Project", href: "https://blood-cancer-protein-agent.onrender.com/", icon: ExternalLink }
];

export function Footer() {
  return (
    <footer className="border-t border-cyan-300/10 py-8">
      <div className="section-shell flex flex-col gap-5 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Sai Sreeram Nanapu. Built with AI, code, and curiosity.</p>
        <div className="flex flex-wrap gap-3">
          {footerLinks.map((link) => {
            const Icon = link.icon;
            const isExternal = link.href.startsWith("http");

            return (
              <a
                key={link.label}
                href={link.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer" : undefined}
                className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/6 px-3 py-2 text-slate-300 transition hover:-translate-y-0.5 hover:border-cyan-200/34 hover:text-white"
              >
                <Icon size={15} aria-hidden="true" />
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

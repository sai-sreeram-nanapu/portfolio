import { ArrowUpRight, GitBranch, Mail, MapPin, Network, Phone } from "lucide-react";

const details = [
  { label: "Email", value: "nanapusaisreeram2002@gmail.com", href: "mailto:nanapusaisreeram2002@gmail.com", icon: Mail },
  { label: "Phone", value: "+1 (928) 255-7249", href: "tel:+19282557249", icon: Phone },
  { label: "Location", value: "New Jersey, USA", icon: MapPin }
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 pb-16 pt-6 sm:pb-20 sm:pt-8">
      <div className="section-shell">
        <div className="accent-panel relative overflow-hidden rounded-[10px] p-6 sm:p-8">
          <div className="site-grid absolute inset-0 opacity-40" aria-hidden="true" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-end">
            <div>
              <p className="mini-label">Available for new opportunities</p>
              <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.045em] text-white sm:text-[2.6rem]">
                Let&apos;s build dependable enterprise software.
              </h2>
              <p className="mt-4 max-w-xl text-[15px] leading-7 text-slate-400">
                Open to conversations about SAP BTP, SAPUI5/Fiori, full-stack engineering, cloud applications, and applied AI.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="mailto:nanapusaisreeram2002@gmail.com" className="primary-button">
                  <Mail size={15} aria-hidden="true" />
                  Email me
                </a>
                <a
                  href="https://www.linkedin.com/in/sai-sreeram-nanapu-100aaa284"
                  target="_blank"
                  rel="noreferrer"
                  className="secondary-button"
                >
                  <Network size={15} aria-hidden="true" />
                  LinkedIn
                  <ArrowUpRight size={13} aria-hidden="true" />
                </a>
                <a
                  href="https://github.com/sai-sreeram-nanapu"
                  target="_blank"
                  rel="noreferrer"
                  className="secondary-button"
                >
                  <GitBranch size={15} aria-hidden="true" />
                  GitHub
                  <ArrowUpRight size={13} aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="grid gap-px overflow-hidden rounded-[8px] border border-white/[0.09] bg-white/[0.09]">
              {details.map((detail) => {
                const Icon = detail.icon;
                const content = (
                  <>
                    <Icon size={15} className="shrink-0 text-emerald-300" aria-hidden="true" />
                    <div className="min-w-0">
                      <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-slate-600">{detail.label}</p>
                      <p className="mt-0.5 break-words text-xs font-medium text-slate-200">{detail.value}</p>
                    </div>
                  </>
                );

                return detail.href ? (
                  <a key={detail.label} href={detail.href} className="flex items-center gap-3 bg-[#0b110d] px-4 py-3.5 transition hover:bg-[#101813]">
                    {content}
                  </a>
                ) : (
                  <div key={detail.label} className="flex items-center gap-3 bg-[#0b110d] px-4 py-3.5">
                    {content}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

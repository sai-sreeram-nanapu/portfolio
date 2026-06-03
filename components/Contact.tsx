"use client";

import { motion } from "framer-motion";
import { ExternalLink, GitBranch, Mail, MapPin, Network, Phone, Send } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

const contactLinks = [
  { label: "Email Me", href: "mailto:nanapusaisreeram2002@gmail.com", icon: Mail },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sai-sreeram-nanapu-100aaa284",
    icon: Network
  },
  { label: "GitHub", href: "https://github.com/sai-sreeram-nanapu", icon: GitBranch },
  {
    label: "View Live AI Project",
    href: "https://blood-cancer-protein-agent.onrender.com/",
    icon: ExternalLink
  }
];

const contactDetails = [
  { label: "Email", value: "nanapusaisreeram2002@gmail.com", icon: Mail },
  { label: "Phone", value: "+1 (928) 255-7249", icon: Phone },
  { label: "Location", value: "United States", icon: MapPin }
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-24">
      <div className="section-shell">
        <div className="rounded-lg gradient-border">
          <div className="futuristic-card rounded-lg p-6 sm:p-8 lg:p-10">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr]">
              <div>
                <SectionHeading
                  eyebrow="// contact"
                  title="Let's Build Intelligent Systems"
                  description="I'm open to AI engineering, software engineering, cloud, machine learning, and full-stack AI opportunities."
                />

                <motion.div
                  className="mt-8 flex flex-wrap gap-3"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  {contactLinks.map((link) => {
                    const Icon = link.icon;
                    const isExternal = link.href.startsWith("http");

                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noreferrer" : undefined}
                        className="inline-flex items-center gap-2 rounded-md border border-cyan-300/30 bg-cyan-300/10 px-4 py-3 text-sm font-semibold text-cyan-100 transition hover:-translate-y-0.5 hover:border-cyan-200/60 hover:bg-cyan-300/16"
                      >
                        <Icon size={16} aria-hidden="true" />
                        {link.label}
                      </a>
                    );
                  })}
                </motion.div>
              </div>

              <motion.div
                className="terminal-window rounded-lg p-5"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08 }}
              >
                <div className="mb-5 flex items-center gap-2">
                  <span className="terminal-dot bg-rose-400" />
                  <span className="terminal-dot bg-amber-300" />
                  <span className="terminal-dot bg-emerald-300" />
                  <span className="ml-2 font-mono text-xs text-slate-400">connect.sh</span>
                </div>
                <div className="space-y-4">
                  {contactDetails.map((detail) => {
                    const Icon = detail.icon;

                    return (
                      <div key={detail.label} className="flex gap-3 rounded-lg border border-white/10 bg-white/6 p-4">
                        <Icon className="mt-0.5 shrink-0 text-cyan-200" size={18} aria-hidden="true" />
                        <div>
                          <p className="text-xs font-semibold text-slate-500">{detail.label}</p>
                          <p className="mt-1 break-words text-sm font-medium text-slate-200">{detail.value}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-5 flex items-center gap-2 rounded-lg border border-emerald-300/18 bg-emerald-300/8 p-4 text-sm text-emerald-100">
                  <Send size={16} aria-hidden="true" />
                  Ready for technical conversations, product builds, and AI engineering roles.
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

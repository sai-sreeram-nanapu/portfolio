"use client";

import { motion } from "framer-motion";
import { ArrowRight, GitBranch, Network, Rocket, Sparkles } from "lucide-react";
import { FloatingBadge } from "@/components/FloatingBadge";
import { ProfileCard } from "@/components/ProfileCard";

const floatingBadges = ["LLMs", "RAG", "ML", "APIs", "Cloud", "Automation", "Agents"];

const heroLinks = [
  { label: "View Projects", href: "#projects", variant: "primary" },
  { label: "Contact Me", href: "#contact", variant: "secondary" },
  { label: "GitHub", href: "https://github.com/sai-sreeram-nanapu", variant: "secondary" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sai-sreeram-nanapu-100aaa284",
    variant: "secondary"
  },
  {
    label: "Live AI Project",
    href: "https://blood-cancer-protein-agent.onrender.com/",
    variant: "accent"
  }
];

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden pt-16">
      <div className="neural-grid absolute inset-0 -z-20 opacity-65 [animation:grid-pan_18s_linear_infinite]" />
      <div className="absolute inset-x-0 top-16 -z-10 h-px scanline [animation:pulse-line_5s_ease-in-out_infinite]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(3,7,18,0.1),rgba(3,7,18,0.68)_72%,#030712)]" />

      <div className="section-shell grid min-h-[92vh] items-center gap-12 py-14 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        <div className="max-w-4xl">
          <motion.p
            className="mb-4 flex w-fit items-center gap-2 text-lg font-semibold text-cyan-200"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            <Sparkles size={18} aria-hidden="true" />
            Sai Sreeram Nanapu
          </motion.p>

          <motion.div
            className="mb-6 flex w-fit max-w-full items-center gap-2 rounded-md border border-emerald-300/28 bg-emerald-300/10 px-3 py-2 text-sm font-medium text-emerald-100 shadow-[0_0_30px_rgba(52,211,153,0.08)] backdrop-blur-md sm:text-base"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <Rocket className="shrink-0" size={16} aria-hidden="true" />
            <span>Available for AI / Software Engineering / Full-Stack AI opportunities</span>
          </motion.div>

          <motion.h1
            className="max-w-5xl text-4xl font-semibold leading-[1.08] text-gradient sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            Building Agentic AI Systems and Full-Stack AI Applications
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.18 }}
          >
            I design and build intelligent software systems using LLMs, machine learning,
            cloud-native backends, APIs, and automation workflows.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.26 }}
          >
            {heroLinks.map((link) => {
              const isExternal = link.href.startsWith("http");
              const Icon = link.label === "GitHub" ? GitBranch : link.label === "LinkedIn" ? Network : ArrowRight;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                  className={
                    link.variant === "primary"
                      ? "inline-flex items-center gap-2 rounded-md bg-cyan-300 px-4 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_34px_rgba(34,211,238,0.3)] transition hover:-translate-y-0.5 hover:bg-cyan-200"
                      : link.variant === "accent"
                        ? "inline-flex items-center gap-2 rounded-md border border-violet-300/42 bg-violet-300/14 px-4 py-3 text-sm font-semibold text-violet-100 transition hover:-translate-y-0.5 hover:border-violet-200/70 hover:bg-violet-300/20"
                        : "inline-flex items-center gap-2 rounded-md border border-white/12 bg-white/7 px-4 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-cyan-200/34 hover:bg-white/10"
                  }
                >
                  {link.label}
                  <Icon size={16} aria-hidden="true" />
                </a>
              );
            })}
          </motion.div>

          <motion.div
            className="mt-9 flex flex-wrap gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.32 }}
          >
            {floatingBadges.map((badge, index) => (
              <FloatingBadge key={badge} label={badge} index={index} />
            ))}
          </motion.div>
        </div>

        <div className="relative">
          <div className="absolute -inset-8 -z-10 rounded-lg border border-cyan-300/10 bg-slate-950/20 shadow-[0_0_120px_rgba(34,211,238,0.12)]" aria-hidden="true" />
          <ProfileCard />
        </div>
      </div>
    </section>
  );
}

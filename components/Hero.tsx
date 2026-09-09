"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Braces, Cloud, Database, Layers3 } from "lucide-react";
import { ProfileCard } from "@/components/ProfileCard";

const deliveryStack = [
  {
    index: "01",
    label: "Interface",
    value: "SAPUI5 / Fiori",
    detail: "Responsive enterprise experiences",
    icon: Layers3
  },
  {
    index: "02",
    label: "Application",
    value: "CAP / Node.js",
    detail: "Services and business logic",
    icon: Braces
  },
  {
    index: "03",
    label: "Integration",
    value: "OData / REST",
    detail: "Clean data and API contracts",
    icon: Database
  },
  {
    index: "04",
    label: "Platform",
    value: "BTP / Cloud Foundry",
    detail: "Cloud-ready delivery and extensibility",
    icon: Cloud
  }
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-14">
      <div className="site-grid absolute inset-0 -z-10 opacity-70" aria-hidden="true" />
      <div className="absolute left-1/2 top-[-220px] -z-10 h-[560px] w-[760px] -translate-x-1/2 rounded-full bg-emerald-400/[0.08] blur-[110px]" aria-hidden="true" />

      <div className="section-shell py-16 sm:py-20">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="mini-label">Enterprise application engineering</span>
            <span className="h-1 w-1 rounded-full bg-slate-600" aria-hidden="true" />
            <span className="inline-flex items-center gap-2 text-xs font-medium text-slate-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(102,230,181,0.8)]" />
              Open to SAP BTP and full-stack roles
            </span>
          </div>
          <h1 className="mt-6 text-[2.4rem] font-semibold leading-[1.06] tracking-[-0.055em] text-white sm:text-[2.85rem] lg:text-[3.3rem]">
            SAP BTP engineering for modern enterprise applications.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400">
            I design responsive SAPUI5/Fiori experiences, build full-stack services, connect business data through OData and REST, and bring cloud and AI capabilities into practical software.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a href="#projects" className="primary-button">
              Explore selected work
              <ArrowDown size={15} aria-hidden="true" />
            </a>
            <a href="mailto:nanapusaisreeram2002@gmail.com" className="secondary-button">
              Start a conversation
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="accent-panel mt-10 overflow-hidden rounded-[10px]"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
        >
          <div className="flex items-center justify-between border-b border-white/[0.09] bg-[#090e0b] px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-300" />
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.11em] text-slate-400">sai.engineering / delivery-map</span>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-slate-600">v2026.09</span>
          </div>

          <div className="grid lg:grid-cols-[220px_1fr]">
            <ProfileCard />

            <div className="p-5 sm:p-6">
              <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
                <div>
                  <p className="mini-label !text-[10px]">Delivery stack</p>
                  <h2 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-white">From interface to platform.</h2>
                </div>
                <p className="max-w-xs text-xs leading-5 text-slate-500">A focused workflow for building clean, extensible, data-driven applications.</p>
              </div>

              <div className="mt-5 grid gap-px overflow-hidden rounded-[8px] border border-white/[0.09] bg-white/[0.09] sm:grid-cols-2 xl:grid-cols-4">
                {deliveryStack.map((stage) => {
                  const Icon = stage.icon;

                  return (
                    <div key={stage.label} className="bg-[#0d1510] p-4">
                      <div className="flex items-center justify-between">
                        <Icon size={16} className="text-emerald-300" aria-hidden="true" />
                        <span className="font-mono text-[10px] text-slate-600">{stage.index}</span>
                      </div>
                      <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.1em] text-slate-500">{stage.label}</p>
                      <p className="mt-1 text-sm font-semibold text-white">{stage.value}</p>
                      <p className="mt-2 text-xs leading-5 text-slate-500">{stage.detail}</p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 grid gap-px overflow-hidden rounded-[8px] border border-white/[0.09] bg-white/[0.09] sm:grid-cols-3">
                {[
                  ["Current", "Associate Data Scientist"],
                  ["Graduate record", "MS IT · 4.0 GPA · Distinction"],
                  ["Latest build", "26-dataset SAPUI5 explorer"]
                ].map(([label, value]) => (
                  <div key={label} className="bg-[#0a100c] px-4 py-3.5">
                    <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-slate-600">{label}</p>
                    <p className="mt-1.5 text-xs font-semibold text-slate-200">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

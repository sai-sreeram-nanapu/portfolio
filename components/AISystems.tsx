"use client";

import { motion } from "framer-motion";
import { Bot, BrainCircuit, Cloud, FlaskConical, Layers3, Network, Server, Workflow } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { aiSystems } from "@/data/systems";

const iconMap = {
  workflow: BrainCircuit,
  rag: Network,
  bio: FlaskConical,
  cloud: Cloud,
  automation: Workflow,
  api: Server,
  prediction: Bot,
  fullstack: Layers3
};

export function AISystems() {
  return (
    <section id="systems" className="py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="// systems"
          title="AI Systems I Build"
          description="The kinds of intelligent products, services, and automation layers I am focused on building."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {aiSystems.map((system, index) => {
            const Icon = iconMap[system.icon];

            return (
              <motion.article
                key={system.title}
                className="futuristic-card rounded-lg p-5 transition hover:-translate-y-1 hover:border-cyan-200/28 hover:bg-white/8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
              >
                <span className="relative z-10 mb-5 grid h-11 w-11 place-items-center rounded-lg border border-cyan-300/24 bg-cyan-300/10 text-cyan-100">
                  <Icon size={21} aria-hidden="true" />
                </span>
                <h3 className="relative z-10 text-base font-semibold leading-6 text-white">{system.title}</h3>
                <p className="relative z-10 mt-3 text-sm leading-6 text-slate-400">{system.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

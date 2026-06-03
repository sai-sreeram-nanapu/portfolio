"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Cpu, Gauge, Layers3 } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

const stats = [
  { label: "GPA", value: "4.0", icon: Gauge },
  { label: "AI Projects", value: "3+", icon: BrainCircuit },
  { label: "Accuracy in Blood Cancer Classification", value: "75%", icon: Cpu },
  { label: "Concurrent Users Supported", value: "1000+", icon: Layers3 }
];

const terminalLines = [
  { command: "$ whoami", response: "> sai_sreeram_nanapu" },
  {
    command: "$ cat focus.txt",
    response: "> agentic_ai, generative_ai, full_stack_ai, machine_learning, cloud_native_apps"
  },
  {
    command: "$ echo $MISSION",
    response: "> building intelligent AI systems that solve real-world problems"
  }
];

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="// about"
          title="Engineering AI Systems That Ship"
          description="A focused blend of agentic AI, applied machine learning, cloud-native development, and product-minded full-stack engineering."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            className="terminal-window rounded-lg p-5 sm:p-6"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.55 }}
          >
            <div className="mb-6 flex items-center gap-2">
              <span className="terminal-dot bg-rose-400" />
              <span className="terminal-dot bg-amber-300" />
              <span className="terminal-dot bg-emerald-300" />
              <span className="ml-2 font-mono text-xs text-slate-400">terminal</span>
            </div>
            <div className="space-y-5 font-mono text-sm leading-7">
              {terminalLines.map((line) => (
                <div key={line.command}>
                  <p className="text-cyan-200">{line.command}</p>
                  <p className="text-slate-200">{line.response}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="futuristic-card rounded-lg p-6 sm:p-7"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            <p className="relative z-10 text-base leading-8 text-slate-300">
              I am a Software Engineer specializing in Agentic AI, Generative AI, and
              cloud-native application development. I have hands-on experience building
              intelligent systems using Large Language Models, prompt engineering, API-driven
              workflows, machine learning, and scalable backend systems. My work focuses on
              connecting AI, data, cloud, and automation into real-world applications.
            </p>
            <div className="relative z-10 mt-7 grid gap-3 sm:grid-cols-2">
              {stats.map((stat, index) => {
                const Icon = stat.icon;

                return (
                  <motion.div
                    key={stat.label}
                    className="rounded-lg border border-white/10 bg-white/7 p-4 transition hover:-translate-y-0.5 hover:border-cyan-200/24 hover:bg-white/10"
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.05 }}
                  >
                    <Icon className="mb-4 text-cyan-200" size={20} aria-hidden="true" />
                    <p className="text-2xl font-semibold text-white">{stat.value}</p>
                    <p className="mt-1 text-sm leading-5 text-slate-400">{stat.label}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

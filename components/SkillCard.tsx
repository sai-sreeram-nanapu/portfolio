"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Cloud, Code2, Database, Network } from "lucide-react";
import type { SkillCategory } from "@/data/skills";

const iconMap = {
  brain: BrainCircuit,
  cloud: Cloud,
  code: Code2,
  data: Network,
  database: Database
};

type SkillCardProps = {
  category: SkillCategory;
  index: number;
};

export function SkillCard({ category, index }: SkillCardProps) {
  const Icon = iconMap[category.icon];

  return (
    <motion.article
      className="futuristic-card rounded-lg p-5 sm:p-6"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.52, delay: index * 0.06 }}
    >
      <div className="relative z-10 mb-6 flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-lg border border-cyan-300/24 bg-cyan-300/10 text-cyan-100">
          <Icon size={22} aria-hidden="true" />
        </span>
        <h3 className="text-lg font-semibold text-white">{category.category}</h3>
      </div>

      <div className="relative z-10 grid gap-3 sm:grid-cols-2">
        {category.skills.map((skill, skillIndex) => {
          const signalWidth = 58 + ((skillIndex * 7 + index * 9) % 34);

          return (
            <div key={skill} className="rounded-lg border border-white/10 bg-white/7 p-3 transition hover:-translate-y-0.5 hover:border-cyan-200/24 hover:bg-white/10">
              <div className="flex min-h-10 items-center text-sm font-medium leading-5 text-slate-200">
                {skill}
              </div>
              <div className="mt-3 h-1.5 overflow-hidden rounded-md bg-slate-900/80">
                <motion.div
                  className="h-full rounded-md bg-gradient-to-r from-cyan-300 via-violet-300 to-emerald-300"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${signalWidth}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.08 + skillIndex * 0.025 }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </motion.article>
  );
}

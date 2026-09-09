"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 py-16 sm:py-20">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.36fr_0.64fr] lg:gap-16">
          <SectionHeading
            eyebrow="01 / Experience"
            title="Building with context, data, and iteration."
            description="Professional experience spanning data applications, AI/ML workflows, frontend engineering, testing, validation, and delivery."
          />

          <div className="border-y border-white/[0.1]">
            {experience.map((item, index) => (
              <motion.article
                key={`${item.company}-${item.role}`}
                className="grid gap-4 border-b border-white/[0.1] py-6 last:border-b-0 sm:grid-cols-[150px_1fr]"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{ duration: 0.38, delay: index * 0.05 }}
              >
                <div>
                  <p className="font-mono text-xs font-semibold text-emerald-200">{item.duration}</p>
                  <p className="mt-2 flex items-start gap-1.5 text-xs leading-5 text-slate-500">
                    <MapPin size={12} className="mt-0.5 shrink-0" aria-hidden="true" />
                    {item.location}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-semibold tracking-[-0.025em] text-white">{item.role}</h3>
                    {item.current ? (
                      <span className="rounded-[4px] border border-emerald-300/20 bg-emerald-300/[0.08] px-2 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-emerald-200">Current</span>
                    ) : null}
                  </div>
                  <p className="mt-1 text-sm font-medium text-slate-300">{item.company}</p>
                  <ul className="mt-4 grid gap-2.5">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3 text-sm leading-6 text-slate-400">
                        <span className="mt-[10px] h-px w-4 shrink-0 bg-emerald-300/55" aria-hidden="true" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

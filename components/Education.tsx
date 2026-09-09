"use client";

import { motion } from "framer-motion";
import { Award, Check, GraduationCap, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { additionalLearning, education, sapLearning } from "@/data/education";

export function Education() {
  return (
    <section id="education" className="scroll-mt-20 py-16 sm:py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="04 / Education & learning"
          title="Strong fundamentals, continuously extended."
          description="Graduate training in information technology, a computer science foundation, and focused learning across SAP BTP, cloud, and applied AI."
        />

        <div className="mt-8 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="grid gap-4">
            {education.map((item, index) => (
              <motion.article
                key={item.degree}
                className="surface-card rounded-[9px] p-5"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className="flex gap-3">
                  <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-[6px] border border-emerald-300/20 bg-emerald-300/[0.07] text-emerald-300">
                    <GraduationCap size={17} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold leading-6 text-white">{item.degree}</h3>
                    <p className="mt-1 text-sm font-medium text-emerald-200">{item.university}</p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 border-t border-white/[0.08] pt-4 text-xs text-slate-400">
                  <span>{item.duration}</span>
                  <span className="inline-flex items-center gap-1.5"><MapPin size={12} aria-hidden="true" />{item.location}</span>
                  {item.gpa ? <span>GPA {item.gpa}</span> : null}
                  {item.award ? <span className="font-semibold text-emerald-200">{item.award}</span> : null}
                </div>

                {item.coursework ? (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {item.coursework.map((course) => (
                      <span key={course} className="chip">{course}</span>
                    ))}
                  </div>
                ) : null}
              </motion.article>
            ))}
          </div>

          <motion.aside
            className="accent-panel rounded-[9px] p-5 sm:p-6"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.4, delay: 0.08 }}
          >
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-[6px] border border-emerald-300/20 bg-emerald-300/[0.07] text-emerald-300">
                <Award size={17} aria-hidden="true" />
              </span>
              <div>
                <p className="mini-label">Professional learning</p>
                <h3 className="mt-1 text-base font-semibold text-white">SAP and applied AI</h3>
              </div>
            </div>

            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <div>
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-500">SAP Learning</p>
                <ul className="mt-3 grid gap-2">
                  {sapLearning.map((item) => (
                    <li key={item} className="flex gap-2 text-xs leading-5 text-slate-300">
                      <Check className="mt-0.5 shrink-0 text-emerald-300" size={13} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-500">Additional</p>
                <ul className="mt-3 grid gap-2">
                  {additionalLearning.map((item) => (
                    <li key={item} className="flex gap-2 text-xs leading-5 text-slate-300">
                      <Check className="mt-0.5 shrink-0 text-emerald-300" size={13} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

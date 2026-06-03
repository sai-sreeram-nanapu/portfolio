"use client";

import { motion } from "framer-motion";
import { BookOpen, Calendar, ChevronDown, GraduationCap, MapPin, Star } from "lucide-react";
import { useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { education, type EducationItem } from "@/data/education";

type CourseworkPanelProps = {
  item: EducationItem;
};

function CourseworkPanel({ item }: CourseworkPanelProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (!item.coursework?.length) {
    return null;
  }

  const hiddenCount = isOpen ? 0 : Math.max(item.coursework.length - 8, 0);

  return (
    <div className="relative z-10 mt-6 border-t border-white/10 pt-5">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-sm font-semibold text-white">
          <BookOpen size={16} className="text-cyan-200" aria-hidden="true" />
          {item.courseworkLabel ?? "Coursework"}
        </div>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/7 px-3 py-2 text-xs font-semibold text-slate-200 transition hover:border-cyan-200/34 hover:bg-white/10"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? "Show Less" : hiddenCount > 0 ? `Show All ${item.coursework.length}` : "Show Coursework"}
          <ChevronDown className={isOpen ? "rotate-180 transition" : "transition"} size={14} aria-hidden="true" />
        </button>
      </div>
      <div
        className={
          isOpen
            ? "grid gap-2 sm:grid-cols-2"
            : "relative grid max-h-36 overflow-hidden gap-2 sm:grid-cols-2"
        }
      >
        {item.coursework.map((course) => (
          <span
            key={course}
            className="rounded-md border border-white/10 bg-white/6 px-2.5 py-1.5 text-xs font-medium leading-5 text-slate-300"
          >
            {course}
          </span>
        ))}
        {!isOpen && hiddenCount > 0 ? (
          <span className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-slate-950/95 to-transparent" />
        ) : null}
      </div>
      {hiddenCount > 0 ? <p className="mt-3 text-xs text-slate-500">+ {hiddenCount} more transcript courses</p> : null}
    </div>
  );
}

export function Education() {
  return (
    <section id="education" className="scroll-mt-24 py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="// education"
          title="Academic Foundation"
          description="Formal computer science and information technology training backing applied AI engineering, data systems, security, and cloud-native software."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {education.map((item, index) => (
            <motion.article
              key={item.degree}
              className="futuristic-card rounded-lg p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <div className="relative z-10 mb-5 flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg border border-violet-300/24 bg-violet-300/10 text-violet-100">
                  <GraduationCap size={24} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold leading-7 text-white">{item.degree}</h3>
                  <p className="mt-2 text-base font-medium text-cyan-100">{item.university}</p>
                </div>
              </div>

              <div className="relative z-10 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-cyan-200" aria-hidden="true" />
                  {item.location}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-cyan-200" aria-hidden="true" />
                  {item.duration}
                </div>
                {item.gpa ? (
                  <div className="flex items-center gap-2">
                    <Star size={16} className="text-amber-200" aria-hidden="true" />
                    GPA: {item.gpa}
                  </div>
                ) : null}
              </div>

              <CourseworkPanel item={item} />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

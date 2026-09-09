"use client";

import { useState } from "react";
import { ArrowUpRight, FlaskConical, Gauge, Layers3, Workflow } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/data/projects";

const projectIcons = {
  sap: Layers3,
  workflow: Workflow,
  bio: FlaskConical,
  prediction: Gauge
};

export function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const project = projects[activeIndex];
  const Icon = projectIcons[project.icon];

  return (
    <section id="projects" className="scroll-mt-20 py-16 sm:py-20">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="02 / Project explorer"
            title="Selected engineering work."
            description="Choose a project to inspect its purpose, delivery details, and technical stack."
          />
          <a href="https://github.com/sai-sreeram-nanapu" target="_blank" rel="noreferrer" className="secondary-button w-fit">
            Browse GitHub
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>

        <div className="accent-panel mt-8 overflow-hidden rounded-[10px]">
          <div className="flex items-center justify-between border-b border-white/[0.09] bg-[#090e0b] px-4 py-3">
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.11em] text-slate-400">case-studies / index</span>
            <span className="font-mono text-[10px] text-slate-600">{String(activeIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span>
          </div>

          <div className="grid lg:grid-cols-[300px_1fr]">
            <div className="border-b border-white/[0.09] bg-[#090e0b] lg:border-b-0 lg:border-r" role="tablist" aria-label="Projects">
              {projects.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  role="tab"
                  aria-selected={activeIndex === index}
                  onClick={() => setActiveIndex(index)}
                  className={activeIndex === index ? "flex w-full items-start gap-3 border-b border-white/[0.08] bg-emerald-300/[0.08] px-4 py-4 text-left last:border-b-0" : "flex w-full items-start gap-3 border-b border-white/[0.08] px-4 py-4 text-left transition hover:bg-white/[0.03] last:border-b-0"}
                >
                  <span className={activeIndex === index ? "font-mono text-[10px] font-semibold text-emerald-300" : "font-mono text-[10px] font-semibold text-slate-600"}>0{index + 1}</span>
                  <span>
                    <span className={activeIndex === index ? "block text-sm font-semibold leading-5 text-white" : "block text-sm font-semibold leading-5 text-slate-300"}>{item.title}</span>
                    <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.08em] text-slate-600">{item.metric}</span>
                  </span>
                </button>
              ))}
            </div>

            <article className="p-5 sm:p-7" role="tabpanel">
              <div className="flex items-start justify-between gap-4">
                <span className="grid h-10 w-10 place-items-center rounded-[6px] border border-emerald-300/20 bg-emerald-300/[0.08] text-emerald-300">
                  <Icon size={18} aria-hidden="true" />
                </span>
                <span className="rounded-[4px] border border-white/[0.1] px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.09em] text-slate-400">{project.metric}</span>
              </div>

              <h3 className="mt-6 max-w-2xl text-2xl font-semibold leading-8 tracking-[-0.035em] text-white">{project.title}</h3>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">{project.description}</p>

              <div className="mt-6 grid gap-px overflow-hidden rounded-[8px] border border-white/[0.09] bg-white/[0.09] sm:grid-cols-2">
                {project.highlights.map((highlight, index) => (
                  <div key={highlight} className="bg-[#0d1510] p-4">
                    <p className="font-mono text-[10px] text-slate-600">0{index + 1}</p>
                    <p className="mt-2 text-xs leading-5 text-slate-300">{highlight}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {project.tech.map((tech) => <span key={tech} className="chip">{tech}</span>)}
              </div>

              <div className="mt-6 flex flex-wrap gap-4 border-t border-white/[0.08] pt-5">
                {project.actions.map((action) => (
                  <a key={action.label} href={action.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-200 transition hover:text-emerald-100">
                    {action.label}
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

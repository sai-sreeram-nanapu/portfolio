"use client";

import { motion } from "framer-motion";
import { Bot, CheckCircle2, ExternalLink, FlaskConical, GitBranch, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { Modal } from "@/components/Modal";
import type { Project } from "@/data/projects";

const projectIcons = {
  bio: FlaskConical,
  workflow: Bot,
  prediction: ShieldCheck
};

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const Icon = projectIcons[project.icon];
  const visibleHighlights = project.highlights.slice(0, 5);

  return (
    <>
      <motion.article
        className="gradient-border h-full rounded-lg"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.55, delay: index * 0.08 }}
      >
        <div className="futuristic-card flex h-full flex-col rounded-lg p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-200/34 hover:shadow-[0_30px_90px_rgba(34,211,238,0.11)] sm:p-6">
          <div className="relative z-10 mb-5 flex items-start justify-between gap-4">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg border border-cyan-300/28 bg-cyan-300/10 text-cyan-100 shadow-[0_0_26px_rgba(34,211,238,0.14)]">
              <Icon size={23} aria-hidden="true" />
            </div>
            <span className="rounded-md border border-violet-300/28 bg-violet-300/12 px-3 py-1.5 text-xs font-semibold text-violet-100">
              {project.metric}
            </span>
          </div>

          <h3 className="relative z-10 text-xl font-semibold leading-7 text-white">{project.title}</h3>
          <p className="relative z-10 mt-4 text-sm leading-6 text-slate-300">{project.description}</p>

          <div className="relative z-10 mt-5 space-y-3">
            {visibleHighlights.map((highlight) => (
              <div key={highlight} className="flex gap-3 text-sm leading-6 text-slate-300">
                <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-300" size={16} aria-hidden="true" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>

          <div className="relative z-10 mt-6 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-white/10 bg-white/7 px-2.5 py-1.5 text-xs font-medium text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="relative z-10 mt-auto flex flex-wrap gap-3 pt-7">
            {project.actions.map((action) =>
              action.type === "detail" ? (
                <button
                  key={action.label}
                  type="button"
                  className="inline-flex items-center gap-2 rounded-md border border-white/12 bg-white/8 px-3 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-cyan-200/34 hover:bg-white/12"
                  onClick={() => setIsDetailsOpen(true)}
                >
                  {action.label}
                </button>
              ) : (
                <a
                  key={action.label}
                  href={action.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-cyan-300/30 bg-cyan-300/10 px-3 py-2 text-sm font-semibold text-cyan-100 transition hover:-translate-y-0.5 hover:border-cyan-200/60 hover:bg-cyan-300/16"
                >
                  {action.label}
                  {action.label === "GitHub" ? (
                    <GitBranch size={15} aria-hidden="true" />
                  ) : (
                    <ExternalLink size={15} aria-hidden="true" />
                  )}
                </a>
              )
            )}
          </div>
        </div>
      </motion.article>

      <Modal
        title={project.title}
        eyebrow="project.details"
        isOpen={isDetailsOpen}
        onClose={() => setIsDetailsOpen(false)}
      >
        <p className="text-sm leading-7 text-slate-300">{project.details}</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {project.highlights.map((highlight) => (
            <div key={highlight} className="flex gap-3 rounded-lg border border-white/10 bg-white/6 p-3 text-sm leading-6 text-slate-300">
              <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-300" size={16} aria-hidden="true" />
              <span>{highlight}</span>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span key={tech} className="rounded-md border border-cyan-300/16 bg-cyan-300/8 px-2.5 py-1.5 text-xs font-medium text-cyan-100">
              {tech}
            </span>
          ))}
        </div>
      </Modal>
    </>
  );
}

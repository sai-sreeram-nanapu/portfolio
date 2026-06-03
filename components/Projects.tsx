"use client";

import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="// projects"
          title="Featured AI Projects"
          description="A focused set of applied AI systems spanning bioinformatics, agentic workflow automation, and production-minded ML platforms."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

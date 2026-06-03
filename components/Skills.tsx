"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { SkillCard } from "@/components/SkillCard";
import { skillCategories } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="// skills"
          title="AI, Cloud, Data, and Full-Stack Toolkit"
          description="A practical technology stack for designing, integrating, deploying, and improving intelligent software systems."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.category} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

import { SectionHeading } from "@/components/SectionHeading";
import { SkillCard } from "@/components/SkillCard";
import { skillCategories } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-14 bg-[#e9efeb] py-16 text-[#101512] sm:py-20">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.38fr_0.62fr] lg:gap-16">
          <SectionHeading
            eyebrow="03 / Expertise"
            title="A practical stack for enterprise delivery."
            description="SAP application development is the core focus, supported by modern web engineering, cloud platforms, data systems, and applied AI."
            tone="light"
          />

          <div className="grid gap-px overflow-hidden rounded-[9px] border border-[#c9d4cd] bg-[#c9d4cd] sm:grid-cols-2">
            {skillCategories.map((category) => (
              <SkillCard key={category.category} category={category} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import type { SkillCategory } from "@/data/skills";

type SkillCardProps = {
  category: SkillCategory;
};

export function SkillCard({ category }: SkillCardProps) {
  return (
    <article className="bg-[#f6f8f6] p-5 sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-base font-semibold tracking-[-0.02em] text-[#101512]">{category.category}</h3>
        <span className="font-mono text-[10px] font-semibold text-[#779087]">{category.index}</span>
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-[5px] border border-[#d3ddd6] bg-white px-2.5 py-1.5 text-xs font-medium text-[#4d5b53]"
          >
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
}

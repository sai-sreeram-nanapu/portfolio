"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { articles, type BlogArticle } from "@/data/blog";

type ArticleCardProps = {
  article: BlogArticle;
  index: number;
  featured?: boolean;
};

function ArticleCard({ article, index, featured = false }: ArticleCardProps) {
  return (
    <motion.article
      className={featured ? "accent-panel flex min-h-[320px] flex-col rounded-[9px] p-6" : "surface-card flex min-h-[152px] flex-col rounded-[9px] p-5"}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.38, delay: index * 0.05 }}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="mini-label !text-[10px]">{article.category}</span>
        <span className="font-mono text-[10px] text-slate-600">0{index + 1}</span>
      </div>
      <h3 className={featured ? "mt-8 max-w-xl text-2xl font-semibold leading-8 tracking-[-0.035em] text-white" : "mt-4 text-lg font-semibold leading-6 tracking-[-0.025em] text-white"}>
        {article.title}
      </h3>
      <p className={featured ? "mt-4 max-w-xl text-sm leading-6 text-slate-400" : "mt-2 text-[13px] leading-5 text-slate-400"}>{article.summary}</p>
      <a
        href={article.externalUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-auto inline-flex items-center gap-1.5 border-t border-white/[0.08] pt-4 text-sm font-semibold text-emerald-200 transition hover:text-emerald-100"
      >
        {article.externalLabel}
        <ArrowUpRight size={14} aria-hidden="true" />
      </a>
    </motion.article>
  );
}

export function Blog() {
  const [featuredArticle, ...secondaryArticles] = articles;

  return (
    <section id="blog" className="scroll-mt-20 py-16 sm:py-20">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.36fr_0.64fr] lg:gap-16">
          <SectionHeading
            eyebrow="05 / Writing"
            title="Notes on SAP and applied AI."
            description="Published perspectives on enterprise platforms, UI engineering, generative AI, and agentic workflows."
          />

          <div className="grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
            <ArticleCard article={featuredArticle} index={0} featured />
            <div className="grid gap-4">
              {secondaryArticles.map((article, index) => (
                <ArticleCard key={article.title} article={article} index={index + 1} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

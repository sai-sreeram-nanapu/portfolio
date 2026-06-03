"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, ExternalLink } from "lucide-react";
import { useState } from "react";
import { Modal } from "@/components/Modal";
import { SectionHeading } from "@/components/SectionHeading";
import { articles, type BlogArticle } from "@/data/blog";

export function Blog() {
  const [activeArticle, setActiveArticle] = useState<BlogArticle | null>(null);

  return (
    <section id="blog" className="scroll-mt-24 py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="// blog"
          title="Writing & Thinking"
          description="Short-form ideas and future articles around agentic AI, healthcare AI, full-stack automation, and cloud-native AI systems."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {articles.map((article, index) => (
            <motion.article
              key={article.title}
              className="futuristic-card rounded-lg p-5 transition hover:-translate-y-1 hover:border-violet-200/28 sm:p-6"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
            >
              <div className="relative z-10 mb-5 flex items-center justify-between gap-4">
                <span className="inline-flex items-center gap-2 rounded-md border border-cyan-300/24 bg-cyan-300/10 px-3 py-1.5 text-xs font-semibold text-cyan-100">
                  <BookOpen size={14} aria-hidden="true" />
                  {article.category}
                </span>
              </div>
              <h3 className="relative z-10 text-xl font-semibold leading-7 text-white">{article.title}</h3>
              <p className="relative z-10 mt-4 text-sm leading-6 text-slate-300">{article.summary}</p>
              {article.externalUrl ? (
                <a
                  href={article.externalUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="relative z-10 mt-6 inline-flex items-center gap-2 rounded-md border border-cyan-300/30 bg-cyan-300/10 px-3 py-2 text-sm font-semibold text-cyan-100 transition hover:-translate-y-0.5 hover:border-cyan-200/60 hover:bg-cyan-300/16"
                >
                  {article.externalLabel ?? "Read Article"}
                  <ExternalLink size={15} aria-hidden="true" />
                </a>
              ) : (
                <button
                  type="button"
                  className="relative z-10 mt-6 inline-flex items-center gap-2 rounded-md border border-white/12 bg-white/8 px-3 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-cyan-200/34 hover:bg-white/12"
                  onClick={() => setActiveArticle(article)}
                >
                  Read More
                  <ArrowRight size={15} aria-hidden="true" />
                </button>
              )}
            </motion.article>
          ))}
        </div>
      </div>

      <Modal
        title={activeArticle?.title ?? "Article preview"}
        eyebrow={activeArticle?.category}
        isOpen={activeArticle !== null}
        onClose={() => setActiveArticle(null)}
      >
        <p className="text-sm leading-7 text-slate-300">{activeArticle?.preview}</p>
      </Modal>
    </section>
  );
}

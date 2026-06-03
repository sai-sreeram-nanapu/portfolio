"use client";

import { motion } from "framer-motion";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left"
}: SectionHeadingProps) {
  return (
    <motion.div
      className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <div className={align === "center" ? "mb-3 flex items-center justify-center gap-3 text-sm font-medium text-cyan-200" : "mb-3 flex items-center gap-3 text-sm font-medium text-cyan-200"}>
        <span className="h-px w-10 bg-gradient-to-r from-cyan-300 to-violet-400 shadow-[0_0_16px_rgba(34,211,238,0.4)]" />
        <span className="rounded-md border border-cyan-300/18 bg-cyan-300/8 px-2.5 py-1 font-mono text-xs uppercase tracking-[0.18em]">
          {eyebrow}
        </span>
      </div>
      <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">{description}</p>
      ) : null}
    </motion.div>
  );
}

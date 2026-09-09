"use client";

import { motion } from "framer-motion";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark"
}: SectionHeadingProps) {
  return (
    <motion.div
      className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <p className={tone === "light" ? "mini-label !text-[#176f52]" : "mini-label"}>{eyebrow}</p>
      <h2 className={tone === "light" ? "mt-3 text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#101512] sm:text-[2.35rem]" : "mt-3 text-3xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-[2.35rem]"}>{title}</h2>
      {description ? (
        <p className={tone === "light" ? "mt-3 text-[15px] leading-7 text-[#56635c]" : "mt-3 text-[15px] leading-7 text-slate-400"}>{description}</p>
      ) : null}
    </motion.div>
  );
}

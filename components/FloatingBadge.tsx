"use client";

import { motion } from "framer-motion";

type FloatingBadgeProps = {
  label: string;
  index: number;
};

export function FloatingBadge({ label, index }: FloatingBadgeProps) {
  return (
    <motion.span
      className="rounded-md border border-cyan-200/18 bg-slate-950/58 px-3 py-2 text-xs font-semibold text-slate-100 shadow-[0_0_24px_rgba(34,211,238,0.08)] backdrop-blur-md"
      animate={{ y: [0, index % 2 === 0 ? -7 : 7, 0] }}
      transition={{ duration: 4.2 + index * 0.2, repeat: Infinity, ease: "easeInOut" }}
    >
      {label}
    </motion.span>
  );
}

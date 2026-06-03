"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Terminal } from "lucide-react";

export function ProfileCard() {
  return (
    <motion.div
      className="profile-card relative mx-auto w-full max-w-sm rounded-lg p-4 sm:max-w-md"
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.72, delay: 0.18, ease: "easeOut" }}
    >
      <div className="relative rounded-lg border border-white/10 bg-slate-950/48 p-3 shadow-[0_28px_90px_rgba(0,0,0,0.34)] backdrop-blur-xl">
        <div className="profile-photo-shell">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[7px] bg-slate-900">
            <Image
              src="/profile.jpg"
              alt="Sai Sreeram Nanapu"
              fill
              priority
              sizes="(max-width: 768px) 86vw, 410px"
              className="scale-[1.08] object-cover object-[50%_42%] brightness-[1.03] contrast-[1.05] saturate-[1.04]"
            />
          </div>
        </div>

        <div className="mt-3 rounded-lg border border-white/10 bg-slate-950/74 p-4 backdrop-blur-xl">
          <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-white">
            <Terminal size={16} className="text-cyan-200" aria-hidden="true" />
            terminal.signal
          </div>
          <div className="space-y-2 font-mono text-xs leading-5 text-slate-300">
            <p>
              <span className="text-cyan-200">$ status</span>
              <br />
              <span>&gt; building_ai_systems</span>
            </p>
            <p>
              <span className="text-violet-200">$ focus</span>
              <br />
              <span>&gt; agents + ml + cloud + automation</span>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

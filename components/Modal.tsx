"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

type ModalProps = {
  title: string;
  eyebrow?: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

export function Modal({ title, eyebrow, children, isOpen, onClose }: ModalProps) {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="fixed inset-0 z-[80] grid place-items-center bg-slate-950/78 p-4 backdrop-blur-xl"
          role="dialog"
          aria-modal="true"
          aria-label={title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button className="absolute inset-0 cursor-default" type="button" aria-label="Close modal" onClick={onClose} />
          <motion.div
            className="relative max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-lg border border-cyan-300/24 bg-slate-950/92 p-5 shadow-[0_0_80px_rgba(34,211,238,0.16)] sm:p-6"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.22 }}
          >
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                {eyebrow ? <p className="mb-2 font-mono text-xs uppercase text-cyan-200">{eyebrow}</p> : null}
                <h3 className="text-2xl font-semibold leading-8 text-white">{title}</h3>
              </div>
              <button
                type="button"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-white/10 bg-white/7 text-slate-200 transition hover:border-cyan-200/40 hover:text-white"
                aria-label="Close modal"
                onClick={onClose}
              >
                <X size={18} aria-hidden="true" />
              </button>
            </div>
            {children}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

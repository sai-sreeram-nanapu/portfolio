import Image from "next/image";
import { BriefcaseBusiness, GitBranch, Mail, MapPin, Network } from "lucide-react";

export function ProfileCard() {
  return (
    <aside className="border-b border-white/[0.09] bg-[#090e0b] p-5 lg:border-b-0 lg:border-r">
      <div className="flex items-center gap-3 lg:block">
        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-[7px] border border-white/[0.12] lg:h-24 lg:w-full">
          <Image
            src="/profile.jpg"
            alt="Sai Sreeram Nanapu"
            fill
            priority
            sizes="(max-width: 1024px) 80px, 220px"
            className="object-cover object-[50%_31%] grayscale-[14%] lg:object-[50%_34%]"
          />
        </div>
        <div className="min-w-0 lg:mt-4">
          <p className="text-base font-semibold text-white">Sai Sreeram Nanapu</p>
          <p className="mt-1 text-xs leading-5 text-emerald-200">SAP BTP Developer · SAPUI5/Fiori · Full-Stack Engineer</p>
        </div>
      </div>

      <div className="mt-5 grid gap-2 border-t border-white/[0.08] pt-4">
        <p className="flex items-center gap-2 text-xs text-slate-400">
          <BriefcaseBusiness size={13} className="text-emerald-300" aria-hidden="true" />
          Associate Data Scientist at VIZ
        </p>
        <p className="flex items-center gap-2 text-xs text-slate-400">
          <MapPin size={13} className="text-emerald-300" aria-hidden="true" />
          New Jersey, United States
        </p>
      </div>

      <div className="mt-5 flex gap-2 border-t border-white/[0.08] pt-4">
        <a
          href="https://github.com/sai-sreeram-nanapu"
          target="_blank"
          rel="noreferrer"
          className="grid h-8 w-8 place-items-center rounded-[5px] border border-white/[0.1] text-slate-400 transition hover:border-emerald-300/30 hover:text-emerald-200"
          aria-label="GitHub"
        >
          <GitBranch size={14} aria-hidden="true" />
        </a>
        <a
          href="https://www.linkedin.com/in/sai-sreeram-nanapu-100aaa284"
          target="_blank"
          rel="noreferrer"
          className="grid h-8 w-8 place-items-center rounded-[5px] border border-white/[0.1] text-slate-400 transition hover:border-emerald-300/30 hover:text-emerald-200"
          aria-label="LinkedIn"
        >
          <Network size={14} aria-hidden="true" />
        </a>
        <a
          href="mailto:nanapusaisreeram2002@gmail.com"
          className="grid h-8 w-8 place-items-center rounded-[5px] border border-white/[0.1] text-slate-400 transition hover:border-emerald-300/30 hover:text-emerald-200"
          aria-label="Email"
        >
          <Mail size={14} aria-hidden="true" />
        </a>
      </div>
    </aside>
  );
}

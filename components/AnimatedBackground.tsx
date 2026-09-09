export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-50 overflow-hidden" aria-hidden="true">
      <div className="site-grid absolute inset-0 opacity-80" />
      <div className="absolute left-[58%] top-[-220px] h-[560px] w-[560px] rounded-full bg-emerald-400/[0.07] blur-[110px]" />
    </div>
  );
}

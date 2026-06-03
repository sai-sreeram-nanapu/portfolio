const neuralNodes = [
  { left: "8%", top: "18%", delay: "0s" },
  { left: "18%", top: "72%", delay: "0.4s" },
  { left: "33%", top: "28%", delay: "0.8s" },
  { left: "48%", top: "82%", delay: "1.2s" },
  { left: "62%", top: "16%", delay: "1.6s" },
  { left: "78%", top: "68%", delay: "2s" },
  { left: "91%", top: "34%", delay: "2.4s" }
];

export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-50 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 cyber-grid opacity-55" />
      <div className="absolute inset-0 circuit-field opacity-70" />
      <div className="absolute left-0 right-0 top-16 h-px scanline [animation:pulse-line_7s_ease-in-out_infinite]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,7,18,0.22),rgba(3,7,18,0.82)_58%,#030712_100%)]" />
      {neuralNodes.map((node, index) => (
        <span
          key={`${node.left}-${node.top}`}
          className="absolute h-2 w-2 rounded-md bg-cyan-200/80 shadow-[0_0_22px_rgba(34,211,238,0.7)] [animation:node-blink_4.2s_ease-in-out_infinite]"
          style={{ left: node.left, top: node.top, animationDelay: node.delay }}
        >
          {index > 0 ? (
            <span className="absolute right-1 top-1 h-px w-28 origin-right rotate-12 bg-gradient-to-l from-cyan-300/35 to-transparent" />
          ) : null}
        </span>
      ))}
    </div>
  );
}

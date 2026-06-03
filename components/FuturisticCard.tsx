import type { ReactNode } from "react";

type FuturisticCardProps = {
  children: ReactNode;
  className?: string;
};

export function FuturisticCard({ children, className = "" }: FuturisticCardProps) {
  return <div className={`futuristic-card rounded-lg ${className}`}>{children}</div>;
}

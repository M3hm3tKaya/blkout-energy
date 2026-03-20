"use client";

import { ReactNode } from "react";
import clsx from "clsx";

interface NeonCardProps {
  children: ReactNode;
  neonColor: string;
  className?: string;
}

export default function NeonCard({ children, neonColor, className }: NeonCardProps) {
  return (
    <div
      className={clsx(
        "relative bg-bg-card rounded-lg p-5 sm:p-6 md:p-8 transition-all duration-300 ease-out cursor-pointer group",
        className
      )}
      style={{
        border: `1px solid ${neonColor}66`,
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.border = `1px solid ${neonColor}`;
        el.style.boxShadow = `0 0 20px ${neonColor}40, 0 0 60px ${neonColor}15`;
        el.style.transform = "translateY(-6px)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.border = `1px solid ${neonColor}66`;
        el.style.boxShadow = "none";
        el.style.transform = "translateY(0)";
      }}
    >
      {children}
    </div>
  );
}

"use client";

import { ReactNode, useState } from "react";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: "lift" | "glow" | "scale" | "tilt";
  delay?: number;
}

export default function AnimatedCard({
  children,
  className = "",
  hoverEffect = "lift",
  delay = 0,
}: AnimatedCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const baseClasses = "bg-background-light dark:bg-background-dark rounded-xl border border-slate-200 dark:border-slate-800 transition-all duration-300 relative overflow-hidden";
  
  const hoverEffects = {
    lift: "hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/20",
    glow: "hover:shadow-2xl hover:shadow-primary/30 hover:border-primary/50",
    scale: "hover:scale-[1.02] hover:shadow-xl",
    tilt: "hover:rotate-1 hover:shadow-xl",
  };

  return (
    <div
      className={`${baseClasses} ${hoverEffects[hoverEffect]} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient overlay on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 transition-opacity duration-300 ${
          isHovered ? "opacity-100" : ""
        }`}
      />
      
      {/* Shine effect */}
      <div
        className={`absolute inset-0 -translate-x-full transition-transform duration-1000 ${
          isHovered ? "translate-x-full" : ""
        }`}
        style={{
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}


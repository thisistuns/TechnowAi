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
  
  // Hiệu ứng hover thống nhất cho tất cả các card
  const hoverEffects = {
    lift: "hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/20 hover:border-primary/50",
    glow: "hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/20 hover:border-primary/50",
    scale: "hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/20 hover:border-primary/50",
    tilt: "hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/20 hover:border-primary/50",
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
        className={`absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 transition-opacity duration-300 pointer-events-none ${
          isHovered ? "opacity-100" : ""
        }`}
      />
      
      {/* Shine effect */}
      <div
        className={`absolute inset-0 -translate-x-full transition-transform duration-1000 pointer-events-none ${
          isHovered ? "translate-x-full" : ""
        }`}
        style={{
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)",
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}


"use client";

import { ReactNode } from "react";

interface AnimatedBadgeProps {
  children: ReactNode;
  variant?: "default" | "primary" | "success" | "warning" | "error";
  size?: "sm" | "md" | "lg";
  className?: string;
  pulse?: boolean;
}

export default function AnimatedBadge({
  children,
  variant = "default",
  size = "md",
  className = "",
  pulse = false,
}: AnimatedBadgeProps) {
  const baseClasses = "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 relative overflow-hidden";
  
  const variantClasses = {
    default: "bg-slate-200 dark:bg-slate-700 text-text-light dark:text-text-dark",
    primary: "bg-primary/10 text-primary border border-primary/20",
    success: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400",
    warning: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400",
    error: "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400",
  };

  const sizeClasses = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-3 py-1 text-sm",
    lg: "px-4 py-1.5 text-base",
  };

  return (
    <span
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${pulse ? "animate-pulse-slow" : ""} ${className}`}
    >
      {/* Shimmer effect */}
      <span className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent"></span>
      <span className="relative z-10">{children}</span>
    </span>
  );
}


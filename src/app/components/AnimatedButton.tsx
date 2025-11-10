"use client";

import { ReactNode } from "react";

interface AnimatedButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  ariaLabel?: string;
  icon?: ReactNode;
}

export default function AnimatedButton({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  ariaLabel,
  icon,
}: AnimatedButtonProps) {
  const baseClasses = "relative inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 overflow-hidden group";
  
  const variantClasses = {
    primary: "bg-primary text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40",
    secondary: "bg-slate-200 dark:bg-slate-700 text-text-light dark:text-text-dark hover:bg-slate-300 dark:hover:bg-slate-600",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
    ghost: "text-primary hover:bg-primary/10 dark:hover:bg-primary/20",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const buttonContent = (
    <>
      {/* Shine effect */}
      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"></span>
      
      {/* Ripple effect - sẽ được xử lý bằng JavaScript nếu cần */}
      <span className="absolute inset-0 rounded-lg opacity-0 pointer-events-none"></span>
      
      {/* Content */}
      <span className="relative flex items-center gap-2 z-10">
        {icon && <span className="transition-transform group-hover:scale-110">{icon}</span>}
        {children}
      </span>
    </>
  );

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={classes}
      aria-label={ariaLabel}
    >
      {buttonContent}
    </button>
  );
}


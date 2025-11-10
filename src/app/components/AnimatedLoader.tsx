"use client";

interface AnimatedLoaderProps {
  size?: "sm" | "md" | "lg";
  variant?: "spinner" | "dots" | "pulse" | "bars";
  className?: string;
}

export default function AnimatedLoader({
  size = "md",
  variant = "spinner",
  className = "",
}: AnimatedLoaderProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  if (variant === "spinner") {
    return (
      <div className={`${sizeClasses[size]} ${className}`}>
        <div className="w-full h-full border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
      </div>
    );
  }

  if (variant === "dots") {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`${sizeClasses[size]} bg-primary rounded-full animate-bounce`}
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
    );
  }

  if (variant === "pulse") {
    return (
      <div className={`${sizeClasses[size]} bg-primary rounded-full animate-pulse ${className}`}></div>
    );
  }

  if (variant === "bars") {
    return (
      <div className={`flex items-end gap-1 ${className}`}>
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="w-1 bg-primary rounded-t animate-bounce"
            style={{
              height: `${20 + i * 10}px`,
              animationDelay: `${i * 0.1}s`,
              animationDuration: "0.6s",
            }}
          />
        ))}
      </div>
    );
  }

  return null;
}


"use client";

import { useState, useLayoutEffect } from "react";

export default function ChristmasToggle() {
  const getInitialChristmasState = () => {
    if (typeof window === "undefined") return false;
    // Tự động bật vào tháng 12
    const month = new Date().getMonth() + 1; // 1-12
    const saved = localStorage.getItem("christmas-theme");
    if (saved !== null) {
      return saved === "true";
    }
    return month === 12; // Tự động bật vào tháng 12
  };

  const [isChristmas, setIsChristmas] = useState(getInitialChristmasState);
  const [mounted] = useState(() => typeof window !== "undefined");

  useLayoutEffect(() => {
    const html = document.documentElement;
    
    if (isChristmas) {
      html.classList.add("christmas");
    } else {
      html.classList.remove("christmas");
    }
  }, [isChristmas]);

  const toggleChristmas = () => {
    const newIsChristmas = !isChristmas;
    setIsChristmas(newIsChristmas);
    localStorage.setItem("christmas-theme", String(newIsChristmas));
    
    const html = document.documentElement;
    if (newIsChristmas) {
      html.classList.add("christmas");
    } else {
      html.classList.remove("christmas");
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={toggleChristmas}
      className="p-2.5 sm:p-2 rounded-md text-text-light dark:text-text-dark hover:bg-slate-100 dark:hover:bg-slate-800 active:bg-slate-200 dark:active:bg-slate-700 transition-colors min-w-[44px] min-h-[44px] sm:min-w-0 sm:min-h-0 flex items-center justify-center touch-manipulation relative"
      aria-label={isChristmas ? "Tắt theme Noel" : "Bật theme Noel"}
      title={isChristmas ? "Theme Noel đang bật" : "Bật theme Noel"}
    >
      {isChristmas ? (
        <span className="text-lg animate-pulse">🎄</span>
      ) : (
        <span className="text-lg">❄</span>
      )}
    </button>
  );
}


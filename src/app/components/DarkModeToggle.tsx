"use client";

import { useState } from "react";

export default function DarkModeToggle() {
  // Kiểm tra theme hiện tại từ DOM
  const getCurrentTheme = () => {
    if (typeof window === "undefined") return false;
    const htmlElement = document.documentElement;
    return htmlElement.classList.contains("dark");
  };

  const [isDark, setIsDark] = useState(getCurrentTheme);
  const [mounted] = useState(() => typeof window !== "undefined");

  const toggleDarkMode = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    const htmlElement = document.documentElement;
    if (newIsDark) {
      htmlElement.classList.add("dark");
      htmlElement.classList.remove("light-mode");
      localStorage.setItem("theme", "dark");
    } else {
      htmlElement.classList.remove("dark");
      htmlElement.classList.add("light-mode");
      localStorage.setItem("theme", "light");
    }
  };

  if (!mounted) {
    return (
      <button
        className="p-2.5 sm:p-2 rounded-md text-text-light dark:text-text-dark hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors min-w-[44px] min-h-[44px] sm:min-w-0 sm:min-h-0 flex items-center justify-center"
        aria-label="Toggle dark mode"
        disabled
      >
        <i className="fas fa-circle-notch fa-spin text-lg"></i>
      </button>
    );
  }

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2.5 sm:p-2 rounded-md text-text-light dark:text-text-dark hover:bg-slate-100 dark:hover:bg-slate-800 active:bg-slate-200 dark:active:bg-slate-700 transition-colors min-w-[44px] min-h-[44px] sm:min-w-0 sm:min-h-0 flex items-center justify-center touch-manipulation"
      aria-label={isDark ? "Chuyển sang chế độ sáng" : "Chuyển sang chế độ tối"}
      title={isDark ? "Chế độ tối" : "Chế độ sáng"}
    >
      {isDark ? (
        <i className="fas fa-sun text-lg"></i>
      ) : (
        <i className="fas fa-moon text-lg"></i>
      )}
    </button>
  );
}


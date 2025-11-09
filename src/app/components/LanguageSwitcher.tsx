"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslation } from "../hooks/useTranslation";

export default function LanguageSwitcher() {
  const { locale, changeLocale, mounted } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      if (
        dropdownRef.current &&
        buttonRef.current &&
        !dropdownRef.current.contains(target) &&
        !buttonRef.current.contains(target)
      ) {
        setIsOpen(false);
      }
    };

    // Small delay to avoid immediate closure on mobile
    const timeoutId = setTimeout(() => {
      document.addEventListener("mousedown", handleClickOutside, true);
      document.addEventListener("touchstart", handleClickOutside, true);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener("mousedown", handleClickOutside, true);
      document.removeEventListener("touchstart", handleClickOutside, true);
    };
  }, [isOpen]);

  // Handle locale change
  const handleLocaleChange = (newLocale: string) => {
    changeLocale(newLocale);
    setIsOpen(false);
  };

  if (!mounted) {
    return (
      <button
        className="p-2.5 sm:p-2 rounded-md text-text-light dark:text-text-dark hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors min-w-[44px] min-h-[44px] sm:min-w-0 sm:min-h-0 flex items-center justify-center"
        aria-label="Language switcher"
        disabled
      >
        <i className="fas fa-circle-notch fa-spin text-lg"></i>
      </button>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        ref={buttonRef}
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        onMouseEnter={() => {
          // Only auto-open on hover for non-touch devices
          if (window.matchMedia("(hover: hover)").matches) {
            setIsOpen(true);
          }
        }}
        onMouseLeave={() => {
          // Only auto-close on hover for non-touch devices
          if (window.matchMedia("(hover: hover)").matches && !dropdownRef.current?.matches(":hover")) {
            setIsOpen(false);
          }
        }}
        className="p-2.5 sm:p-2 rounded-md text-text-light dark:text-text-dark hover:bg-slate-100 dark:hover:bg-slate-800 active:bg-slate-200 dark:active:bg-slate-700 transition-colors flex items-center gap-2 min-w-[44px] min-h-[44px] sm:min-w-0 sm:min-h-0 justify-center sm:justify-start touch-manipulation"
        aria-label="Chuyển đổi ngôn ngữ"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <i className="fas fa-globe text-lg flex-shrink-0"></i>
        <span className="hidden sm:inline text-sm font-medium">{locale.toUpperCase()}</span>
      </button>
      <div
        className={`absolute right-0 top-full mt-2 bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-800 rounded-lg shadow-xl transition-all duration-200 min-w-[140px] sm:min-w-[120px] ${
          isOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2 pointer-events-none"
        }`}
        style={{
          zIndex: 100,
        }}
        onMouseEnter={() => {
          if (window.matchMedia("(hover: hover)").matches) {
            setIsOpen(true);
          }
        }}
        onMouseLeave={() => {
          if (window.matchMedia("(hover: hover)").matches) {
            setIsOpen(false);
          }
        }}
      >
        <button
          onClick={() => handleLocaleChange("vi")}
          className={`w-full text-left px-4 py-3 sm:py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 active:bg-slate-200 dark:active:bg-slate-700 transition-colors first:rounded-t-lg touch-manipulation min-h-[44px] sm:min-h-0 flex items-center ${
            locale === "vi" ? "bg-primary/10 text-primary font-semibold" : ""
          }`}
        >
          <span className="mr-2 text-base">🇻🇳</span>
          Tiếng Việt
        </button>
        <button
          onClick={() => handleLocaleChange("en")}
          className={`w-full text-left px-4 py-3 sm:py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 active:bg-slate-200 dark:active:bg-slate-700 transition-colors last:rounded-b-lg touch-manipulation min-h-[44px] sm:min-h-0 flex items-center ${
            locale === "en" ? "bg-primary/10 text-primary font-semibold" : ""
          }`}
        >
          <span className="mr-2 text-base">🇺🇸</span>
          English
        </button>
      </div>
    </div>
  );
}


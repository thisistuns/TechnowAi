"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslation, type Locale } from "../hooks/useTranslation";

export default function LanguageSwitcher() {
  const { locale, changeLocale, mounted } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isHoveringRef = useRef(false);

  // Check if device supports hover - use function to avoid SSR issues
  const checkHoverSupport = () => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(hover: hover)").matches;
  };

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
        isHoveringRef.current = false;
        if (closeTimeoutRef.current) {
          clearTimeout(closeTimeoutRef.current);
          closeTimeoutRef.current = null;
        }
      }
    };

    // For touch devices, close on outside click
    // For desktop with hover, only close on click (not on hover leave)
    const isHoverSupported = checkHoverSupport();
    const timeoutId = setTimeout(() => {
      if (isHoverSupported) {
        // Desktop: only listen to clicks, not hover
        document.addEventListener("click", handleClickOutside, true);
      } else {
        // Mobile: listen to both mousedown and touchstart
        document.addEventListener("mousedown", handleClickOutside, true);
        document.addEventListener("touchstart", handleClickOutside, true);
      }
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener("click", handleClickOutside, true);
      document.removeEventListener("mousedown", handleClickOutside, true);
      document.removeEventListener("touchstart", handleClickOutside, true);
    };
  }, [isOpen]);

  // Handle locale change
  const handleLocaleChange = (newLocale: Locale) => {
    changeLocale(newLocale);
    setIsOpen(false);
    isHoveringRef.current = false;
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  // Handle hover state with delay for smooth transition
  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    isHoveringRef.current = true;
    if (checkHoverSupport()) {
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    isHoveringRef.current = false;
    if (checkHoverSupport()) {
      // Add small delay to allow moving to dropdown
      closeTimeoutRef.current = setTimeout(() => {
        // Check again if still not hovering
        if (!isHoveringRef.current) {
          setIsOpen(false);
        }
      }, 200);
    }
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
    <div
      className="relative"
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        ref={buttonRef}
        onClick={(e) => {
          e.stopPropagation();
          // For touch devices, toggle on click
          // For desktop with hover, clicking also works as fallback
          if (!checkHoverSupport()) {
            setIsOpen(!isOpen);
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
        className={`absolute right-0 top-full mt-1 bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-800 rounded-lg shadow-xl transition-all duration-200 min-w-[140px] sm:min-w-[120px] ${
          isOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2 pointer-events-none"
        }`}
        style={{
          zIndex: 100,
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


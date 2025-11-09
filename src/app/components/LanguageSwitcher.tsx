"use client";

import { useTranslation } from "../hooks/useTranslation";

export default function LanguageSwitcher() {
  const { locale, changeLocale, mounted } = useTranslation();

  if (!mounted) {
    return (
      <button
        className="p-2 rounded-md text-text-light dark:text-text-dark hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        aria-label="Language switcher"
        disabled
      >
        <i className="fas fa-circle-notch fa-spin text-lg"></i>
      </button>
    );
  }

  return (
    <div className="relative group">
      <button
        className="p-2 rounded-md text-text-light dark:text-text-dark hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-2"
        aria-label="Chuyển đổi ngôn ngữ"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <i className="fas fa-globe text-lg"></i>
        <span className="hidden sm:inline text-sm font-medium">{locale.toUpperCase()}</span>
      </button>
      <div className="absolute right-0 top-full mt-2 bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[120px]">
        <button
          onClick={() => changeLocale("vi")}
          className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors first:rounded-t-lg ${
            locale === "vi" ? "bg-primary/10 text-primary font-semibold" : ""
          }`}
        >
          <span className="mr-2">🇻🇳</span>
          Tiếng Việt
        </button>
        <button
          onClick={() => changeLocale("en")}
          className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors last:rounded-b-lg ${
            locale === "en" ? "bg-primary/10 text-primary font-semibold" : ""
          }`}
        >
          <span className="mr-2">🇺🇸</span>
          English
        </button>
      </div>
    </div>
  );
}


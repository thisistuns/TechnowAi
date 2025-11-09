"use client";

import { useState } from "react";
import { useTranslation } from "../hooks/useTranslation";
import DarkModeToggle from "./DarkModeToggle";
import LanguageSwitcher from "./LanguageSwitcher";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <button
        className="md:hidden p-2.5 sm:p-2 rounded-md text-text-light dark:text-text-dark hover:bg-slate-100 dark:hover:bg-slate-800 active:bg-slate-200 dark:active:bg-slate-700 transition-colors min-w-[44px] min-h-[44px] sm:min-w-0 sm:min-h-0 flex items-center justify-center touch-manipulation"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <i className={`fas ${isOpen ? "fa-times" : "fa-bars"} text-xl`}></i>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          ></div>
          <div className="fixed top-16 left-0 right-0 bg-surface-light dark:bg-surface-dark border-b border-slate-200 dark:border-slate-800 z-50 md:hidden shadow-lg max-h-[calc(100vh-4rem)] overflow-y-auto">
            <nav className="container mx-auto px-6 py-4 flex flex-col space-y-4">
              <a
                className="text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-primary transition-colors py-2"
                href="#features"
                onClick={() => setIsOpen(false)}
              >
                {t("nav.features")}
              </a>
              <a
                className="text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-primary transition-colors py-2"
                href="#testimonials"
                onClick={() => setIsOpen(false)}
              >
                {t("nav.testimonials")}
              </a>
              <a
                className="text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-primary transition-colors py-2"
                href="#faq"
                onClick={() => setIsOpen(false)}
              >
                {t("nav.faq")}
              </a>
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                <div className="flex flex-col gap-4">
                  <div>
                    <span className="text-sm text-text-muted-light dark:text-text-muted-dark font-medium block mb-2">
                      {t("nav.language")}
                    </span>
                    <div className="relative">
                      <LanguageSwitcher />
                    </div>
                  </div>
                  <div>
                    <span className="text-sm text-text-muted-light dark:text-text-muted-dark font-medium block mb-2">
                      {t("nav.theme")}
                    </span>
                    <div>
                      <DarkModeToggle />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3 pt-2">
                <a
                  className="bg-primary text-white font-semibold px-5 py-2.5 rounded-md hover:opacity-90 transition-opacity text-center"
                  href="https://www.facebook.com/technowIT.vn"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                >
                  {t("nav.register")}
                </a>
              </div>
            </nav>
          </div>
        </>
      )}
    </>
  );
}


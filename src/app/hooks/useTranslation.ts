"use client";

import { useState } from "react";
import viTranslations from "../locales/vi.json";
import enTranslations from "../locales/en.json";

type Locale = "vi" | "en";

interface Translations {
  [key: string]: string | Translations;
}

const translations: Record<Locale, Translations> = {
  vi: viTranslations as Translations,
  en: enTranslations as Translations,
};

export function useTranslation() {
  const [locale, setLocale] = useState<Locale>(() => {
    // Initialize từ localStorage nếu có, nếu không thì detect browser
    if (typeof window !== "undefined") {
      const savedLocale = localStorage.getItem("locale") as Locale;
      if (savedLocale && (savedLocale === "vi" || savedLocale === "en")) {
        return savedLocale;
      }
      const browserLang = navigator.language.split("-")[0];
      return browserLang === "en" ? "en" : "vi";
    }
    return "vi";
  });
  const [mounted] = useState(() => typeof window !== "undefined");

  const changeLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    localStorage.setItem("locale", newLocale);
    // Reload để apply changes
    window.location.reload();
  };

  const t = (key: string): string => {
    if (!mounted) return key;
    
    const keys = key.split(".");
    let value: string | Translations | undefined = translations[locale];
    
    for (const k of keys) {
      if (value && typeof value === "object") {
        value = value[k] as string | Translations | undefined;
      } else {
        value = undefined;
        break;
      }
    }
    
    if (typeof value === "string") {
      return value;
    }
    
    // Fallback to Vietnamese if translation missing
    let fallbackValue: string | Translations | undefined = translations.vi;
    for (const k of keys) {
      if (fallbackValue && typeof fallbackValue === "object") {
        fallbackValue = fallbackValue[k] as string | Translations | undefined;
      } else {
        fallbackValue = undefined;
        break;
      }
    }
    
    return typeof fallbackValue === "string" ? fallbackValue : key;
  };

  return { t, locale, changeLocale, mounted };
}

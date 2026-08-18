"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Language = "en" | "ar";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue>({ language: "en", setLanguage: () => undefined });

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem("gentle-language");
    if (saved === "ar") setLanguage("ar");
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.dataset.language = language;
    window.localStorage.setItem("gentle-language", language);
  }, [language]);

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export function T({ en, ar }: { en: React.ReactNode; ar: React.ReactNode }) {
  const { language } = useLanguage();
  return <>{language === "ar" ? ar : en}</>;
}

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { language, setLanguage } = useLanguage();
  return <div className={`language-switcher ${className}`} role="group" aria-label={language === "ar" ? "اختيار اللغة" : "Choose language"}>
    <button type="button" className={language === "en" ? "active" : ""} onClick={() => setLanguage("en")} aria-pressed={language === "en"}>EN</button>
    <span aria-hidden="true" />
    <button type="button" className={language === "ar" ? "active" : ""} onClick={() => setLanguage("ar")} aria-pressed={language === "ar"}>عربي</button>
  </div>;
}

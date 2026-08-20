"use client";

import { createContext, useContext, useEffect } from "react";
import { usePathname } from "next/navigation";

export type Language = "en" | "ar";

type LanguageContextValue = {
  language: Language;
};

const LanguageContext = createContext<LanguageContextValue>({ language: "en" });

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const routeLanguage: Language = pathname?.startsWith("/ar") ? "ar" : "en";

  useEffect(() => {
    document.documentElement.lang = routeLanguage;
    document.documentElement.dir = routeLanguage === "ar" ? "rtl" : "ltr";
    document.documentElement.dataset.language = routeLanguage;
    window.localStorage.setItem("gentle-language", routeLanguage);
  }, [routeLanguage]);

  return <LanguageContext.Provider value={{ language: routeLanguage }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export function T({ en, ar }: { en: React.ReactNode; ar: React.ReactNode }) {
  const { language } = useLanguage();
  return <>{language === "ar" ? ar : en}</>;
}

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { language } = useLanguage();
  const pathname = usePathname();
  const switchLanguage = (nextLanguage: Language) => {
    const englishPath = pathname?.replace(/^\/ar(?=\/|$)/, "") || "/";
    const destination = nextLanguage === "ar" ? (englishPath === "/" ? "/ar" : `/ar${englishPath}`) : englishPath;
    window.location.assign(destination);
  };
  return <div className={`language-switcher ${className}`} role="group" aria-label={language === "ar" ? "اختيار اللغة" : "Choose language"}>
    <button type="button" className={language === "en" ? "active" : ""} onClick={() => switchLanguage("en")} aria-pressed={language === "en"}>EN</button>
    <span aria-hidden="true" />
    <button type="button" className={language === "ar" ? "active" : ""} onClick={() => switchLanguage("ar")} aria-pressed={language === "ar"}>عربي</button>
  </div>;
}

export function LocalizedLink({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  const { language } = useLanguage();
  const localizedHref = language === "ar"
    ? (href === "/" ? "/ar" : `/ar${href}`)
    : href.replace(/^\/ar(?=\/|$)/, "") || "/";
  return <a href={localizedHref} {...props}>{children}</a>;
}

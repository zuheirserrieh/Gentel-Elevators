import type { Metadata } from "next";

export const seoCopy = {
  en: {
    homeTitle: "Gentle Elevators | Elevator Company in Lebanon",
    homeDescription: "Gentle Elevators provides elevator installation, maintenance, repair, modernization, and safety inspection services in Saida and across Lebanon.",
  },
  ar: {
    homeTitle: "جنتل للمصاعد | تركيب وصيانة المصاعد في لبنان",
    homeDescription: "جنتل للمصاعد تقدم خدمات تركيب وصيانة وإصلاح وتحديث المصاعد وفحص السلامة في صيدا وجميع أنحاء لبنان. تواصل معنا لطلب عرض سعر.",
  },
} as const;

export function arabicPath(path: string) {
  return path === "/" ? "/ar" : `/ar${path}`;
}

export function pageAlternates(path: string, language: "en" | "ar" = "en"): Metadata["alternates"] {
  return {
    canonical: language === "ar" ? arabicPath(path) : path,
    languages: {
      "en-LB": path,
      "ar-LB": arabicPath(path),
      "x-default": path,
    },
  };
}

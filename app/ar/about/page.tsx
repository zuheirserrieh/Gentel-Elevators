import type { Metadata } from "next";
import About from "@/app/about/page";
import { pageAlternates } from "@/data/seo";

export const metadata: Metadata = {
  title: { absolute: "عن جنتل للمصاعد | شركة مصاعد في لبنان" },
  description: "تعرّف على جنتل للمصاعد، شركة متخصصة في خدمات المصاعد الآمنة والموثوقة للمباني السكنية والتجارية في صيدا وجميع أنحاء لبنان.",
  alternates: pageAlternates("/about", "ar"),
  openGraph: { title: "عن جنتل للمصاعد", description: "شركة مصاعد متخصصة في الخدمة الآمنة والموثوقة في صيدا وجميع أنحاء لبنان.", url: "/ar/about", locale: "ar_LB" },
};

export default About;

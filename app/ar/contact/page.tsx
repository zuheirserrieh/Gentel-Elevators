import type { Metadata } from "next";
import Contact from "@/app/contact/page";
import { pageAlternates } from "@/data/seo";

export const metadata: Metadata = {
  title: { absolute: "اتصل بجنتل للمصاعد واطلب عرض سعر" },
  description: "تواصل مع جنتل للمصاعد في صيدا لخدمات تركيب وصيانة وإصلاح وتحديث المصاعد أو لطلب عرض سعر في أي منطقة من لبنان.",
  alternates: pageAlternates("/contact", "ar"),
  openGraph: { title: "اتصل بجنتل للمصاعد", description: "تواصل معنا لخدمات المصاعد أو لطلب عرض سعر في جميع أنحاء لبنان.", url: "/ar/contact", locale: "ar_LB" },
};

export default Contact;

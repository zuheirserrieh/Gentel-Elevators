import type { Metadata } from "next";
import Services from "@/app/services/page";
import { pageAlternates } from "@/data/seo";

export const metadata: Metadata = {
  title: { absolute: "تركيب وصيانة وإصلاح المصاعد في لبنان | جنتل للمصاعد" },
  description: "خدمات احترافية لتركيب المصاعد وصيانتها وإصلاحها وتحديثها وفحص سلامتها في صيدا وجميع أنحاء لبنان.",
  alternates: pageAlternates("/services", "ar"),
  openGraph: { title: "خدمات المصاعد في لبنان", description: "تركيب وصيانة وإصلاح وتحديث المصاعد وفحص سلامتها في جميع أنحاء لبنان.", url: "/ar/services", locale: "ar_LB" },
};

export default Services;

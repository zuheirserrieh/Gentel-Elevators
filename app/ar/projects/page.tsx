import type { Metadata } from "next";
import Projects from "@/app/projects/page";
import { pageAlternates } from "@/data/seo";

export const metadata: Metadata = {
  title: { absolute: "مشاريع المصاعد المنجزة في لبنان | جنتل للمصاعد" },
  description: "شاهد مشاريع المصاعد التي أنجزتها جنتل للمصاعد في لبنان من خلال صور وفيديوهات أصلية وتفاصيل كل مشروع.",
  alternates: pageAlternates("/projects", "ar"),
  openGraph: { title: "مشاريع جنتل للمصاعد", description: "صور وفيديوهات أصلية من مشاريع المصاعد المنجزة في لبنان.", url: "/ar/projects", locale: "ar_LB" },
};

export default Projects;

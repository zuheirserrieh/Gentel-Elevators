import type { Metadata } from "next";
import ProjectDetail, { generateStaticParams } from "@/app/projects/[slug]/page";
import { companyInfo } from "@/data/company";
import { projects } from "@/data/projects";
import { pageAlternates } from "@/data/seo";

export { generateStaticParams };

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find(item => item.slug === slug);
  if (!project) return { title: "مشروع مصعد" };
  const image = new URL(project.coverImage, companyInfo.website).toString();
  return {
    title: { absolute: `${project.titleAr} | جنتل للمصاعد` },
    description: project.descriptionAr,
    alternates: pageAlternates(`/projects/${project.slug}`, "ar"),
    openGraph: { title: project.titleAr, description: project.descriptionAr, url: `/ar/projects/${project.slug}`, type: "article", locale: "ar_LB", alternateLocale: ["en_LB"], images: [{ url: image, alt: `${project.titleAr} من جنتل للمصاعد` }] },
  };
}

export default ProjectDetail;

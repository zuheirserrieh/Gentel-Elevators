import type { MetadataRoute } from "next";
import { companyInfo } from "@/data/company";
import { projects } from "@/data/projects";
import { arabicPath } from "@/data/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const englishPaths = ["", "/about", "/services", "/projects", "/contact", ...projects.map(project => `/projects/${project.slug}`)];
  const paths = [...englishPaths, ...englishPaths.map(path => arabicPath(path || "/"))];
  return paths.map(path => ({ url: `${companyInfo.website}${path}`, lastModified: new Date(), changeFrequency: "monthly", priority: path === "" || path === "/ar" ? 1 : .7 }));
}

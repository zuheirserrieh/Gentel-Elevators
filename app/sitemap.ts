import type { MetadataRoute } from "next";
import { companyInfo } from "@/data/company";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/about", "/services", "/projects", "/contact", ...projects.map(project => `/projects/${project.slug}`)].map(path => ({ url: `${companyInfo.website}${path}`, lastModified: new Date(), changeFrequency: "monthly", priority: path === "" ? 1 : .7 }));
}

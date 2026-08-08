import type { MetadataRoute } from "next"; import { projects } from "@/data/projects";
export default function sitemap():MetadataRoute.Sitemap{const base="https://gentelelevators.com";return ["","/about","/services","/projects","/contact",...projects.map(p=>`/projects/${p.slug}`)].map(url=>({url:`${base}${url}`,lastModified:new Date(),changeFrequency:"monthly",priority:url===""?1:.7}))}

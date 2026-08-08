import type { MetadataRoute } from "next";
import { companyInfo } from "@/data/company";

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${companyInfo.website}/sitemap.xml` };
}

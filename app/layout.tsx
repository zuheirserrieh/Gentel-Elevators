import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileContactBar } from "@/components/MobileContactBar";
import { companyInfo } from "@/data/company";

export const metadata: Metadata = {
  metadataBase: new URL(companyInfo.website),
  title: { default: "Gentle Elevators | Elevator Services Across Lebanon", template: "%s | Gentle Elevators" },
  description: "Gentle Elevators provides professional elevator installation, repair, maintenance, modernization, and safety inspection services across Lebanon.",
  alternates: { canonical: "/" },
  openGraph: { title: "Gentle Elevators", description: "Professional elevator services across Lebanon since 2010.", type: "website", url: "/" },
  twitter: { card: "summary", title: "Gentle Elevators", description: "Professional elevator services across Lebanon since 2010." },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: companyInfo.name,
    email: companyInfo.email,
    telephone: companyInfo.phoneDigits,
    foundingDate: String(companyInfo.established),
    areaServed: companyInfo.serviceArea,
    availableLanguage: companyInfo.languages,
    address: { "@type": "PostalAddress", streetAddress: "Hay El-Zhour", addressLocality: "Saida", addressCountry: "LB" },
    url: companyInfo.website,
    sameAs: [companyInfo.instagram, companyInfo.tiktok],
  };
  return <html lang="en"><body><Header /><main>{children}</main><Footer /><MobileContactBar /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></body></html>;
}

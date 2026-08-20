import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileContactBar } from "@/components/MobileContactBar";
import { LanguageProvider } from "@/components/Language";
import { companyInfo } from "@/data/company";
import { pageAlternates, seoCopy } from "@/data/seo";

export const metadata: Metadata = {
  metadataBase: new URL(companyInfo.website),
  title: { default: seoCopy.en.homeTitle, template: "%s | Gentle Elevators" },
  description: seoCopy.en.homeDescription,
  applicationName: "Gentle Elevators",
  category: "Elevator services",
  alternates: pageAlternates("/"),
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { title: seoCopy.en.homeTitle, description: seoCopy.en.homeDescription, siteName: "Gentle Elevators", locale: "en_LB", alternateLocale: ["ar_LB"], type: "website", url: "/", images: [{ url: "/og-luxury.png", width: 1733, height: 908, alt: "Gentle Elevators — Safe. Reliable. Smooth." }] },
  twitter: { card: "summary_large_image", title: seoCopy.en.homeTitle, description: seoCopy.en.homeDescription, images: ["/og-luxury.png"] },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#04101a",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${companyInfo.website}/#website`,
        url: companyInfo.website,
        name: companyInfo.name,
        alternateName: ["Gentle Elevator", "Gentle Elevators Lebanon", "جنتل للمصاعد", "جنتل إليفيتورز"],
        inLanguage: ["en-LB", "ar-LB"],
      },
      {
        "@type": "LocalBusiness",
        "@id": `${companyInfo.website}/#business`,
        name: companyInfo.name,
        alternateName: ["Gentle Elevator", "Gentle Elevators Lebanon", "جنتل للمصاعد", "جنتل إليفيتورز"],
        description: `${seoCopy.en.homeDescription} ${seoCopy.ar.homeDescription}`,
        image: `${companyInfo.website}/og-luxury.png`,
        logo: `${companyInfo.website}/favicon.svg`,
        email: companyInfo.email,
        telephone: companyInfo.phoneDigits,
        foundingDate: String(companyInfo.established),
        areaServed: { "@type": "Country", name: "Lebanon" },
        knowsLanguage: companyInfo.languages,
        address: { "@type": "PostalAddress", streetAddress: "Hay El-Zhour", addressLocality: "Saida", addressCountry: "LB" },
        geo: { "@type": "GeoCoordinates", latitude: 33.5560905, longitude: 35.3775681 },
        url: companyInfo.website,
        sameAs: [companyInfo.instagram, companyInfo.tiktok],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Elevator services | خدمات المصاعد",
          itemListElement: ["Elevator installation | تركيب المصاعد", "Elevator maintenance | صيانة المصاعد", "Elevator repair | إصلاح المصاعد", "Elevator modernization | تحديث المصاعد", "Safety inspection | فحص سلامة المصاعد"].map(name => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
        },
      },
    ],
  };
  return <html lang="en"><body><LanguageProvider><Header /><main>{children}</main><Footer /><MobileContactBar /></LanguageProvider><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></body></html>;
}

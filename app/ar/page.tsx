import type { Metadata } from "next";
import Home from "@/app/page";
import { pageAlternates, seoCopy } from "@/data/seo";

export const metadata: Metadata = {
  title: { absolute: seoCopy.ar.homeTitle },
  description: seoCopy.ar.homeDescription,
  alternates: pageAlternates("/", "ar"),
  openGraph: { title: seoCopy.ar.homeTitle, description: seoCopy.ar.homeDescription, siteName: "Gentle Elevators", url: "/ar", locale: "ar_LB", alternateLocale: ["en_LB"], type: "website", images: [{ url: "/og-luxury.png", width: 1733, height: 908, alt: "جنتل للمصاعد — أمان وموثوقية وجودة" }] },
  twitter: { card: "summary_large_image", title: seoCopy.ar.homeTitle, description: seoCopy.ar.homeDescription, images: ["/og-luxury.png"] },
};

export default Home;

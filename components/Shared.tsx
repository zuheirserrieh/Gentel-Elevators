import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { companyInfo } from "@/data/company";
import { T } from "./Language";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow">{children}<i /></p>;
}

export function PageHero({ title, titleAr, description, descriptionAr }: { title: string; titleAr: string; description: string; descriptionAr: string }) {
  return <section className="page-hero"><div className="container"><Eyebrow>Gentle Elevators</Eyebrow><h1><T en={title} ar={titleAr} /></h1><p><T en={description} ar={descriptionAr} /></p></div></section>;
}

export function ReferenceImage({ alt, position = "50% 50%", className = "", src = "/images/hero/gentle-elevator-hero.png", priority = false, sizes = "(max-width: 880px) 100vw, 50vw" }: { alt: string; position?: string; className?: string; src?: string; priority?: boolean; sizes?: string }) {
  return <div className={`reference-image ${className}`}><Image src={src} alt={alt} fill priority={priority} sizes={sizes} style={{ objectPosition: position }} /></div>;
}

export function CTA() {
  const message = encodeURIComponent("Hello Gentle Elevators, I would like to ask about your elevator services.");
  return <section className="cta"><div className="container cta-inner">
    <div><Eyebrow><T en="Get in touch" ar="تواصل معنا" /></Eyebrow><h2><T en="NEED AN ELEVATOR SERVICE?" ar="هل تحتاج إلى خدمة مصاعد؟" /></h2><p><T en="Contact Gentle Elevators for installation, repair, maintenance, or a project quotation." ar="تواصل مع Gentle Elevators لخدمات التركيب أو الإصلاح أو الصيانة أو لطلب عرض سعر لمشروعك." /></p></div>
    <div className="cta-actions">
      <a className="button button-whatsapp" href={`https://wa.me/${companyInfo.whatsappDigits}?text=${message}`} target="_blank" rel="noreferrer"><MessageCircle /><T en="Chat on WhatsApp" ar="تواصل عبر واتساب" /></a>
      <a className="button button-outline" href={`tel:${companyInfo.phoneDigits}`}><Phone /><T en="Call us" ar="اتصل بنا" /></a>
      <Link className="button button-light" href="/contact#quote"><T en="Request a quote" ar="اطلب عرض سعر" /><ArrowRight /></Link>
    </div>
  </div></section>;
}

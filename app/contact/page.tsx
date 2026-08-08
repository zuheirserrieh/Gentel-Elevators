import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Eyebrow, PageHero } from "@/components/Shared";
import { companyInfo } from "@/data/company";

export const metadata: Metadata = { title: "Contact", description: "Contact Gentle Elevators for elevator installation, repair, maintenance, safety inspection, or a quotation anywhere in Lebanon." };

export default function Contact() {
  const items = [
    { icon: Phone, label: "Phone", value: companyInfo.phone, href: `tel:${companyInfo.phoneDigits}` },
    { icon: MessageCircle, label: "WhatsApp", value: companyInfo.whatsapp, href: `https://wa.me/${companyInfo.whatsappDigits}` },
    { icon: Mail, label: "Email", value: companyInfo.email, href: `mailto:${companyInfo.email}` },
    { icon: MapPin, label: "Office", value: companyInfo.location, href: companyInfo.mapUrl },
    { icon: Clock, label: "Working hours", value: companyInfo.workingHours },
  ];
  return <>
    <PageHero title="CONTACT GENTLE ELEVATORS" description="Contact our team for elevator installation, repair, maintenance, safety inspection, or a quotation anywhere in Lebanon." />
    <section className="section"><div className="container contact-layout">
      <aside><Eyebrow>Talk to our team</Eyebrow><h2>WE&apos;RE HERE TO HELP</h2><p>Tell us about your building, the service you need, and your location. We&apos;ll review your inquiry and follow up using the details you provide.</p><div className="contact-list">{items.map(({ icon: Icon, label, value, href }) => { const inner = <><Icon /><span><small>{label}</small><b>{value}</b></span></>; return href ? <a href={href} key={label} target={label === "Office" ? "_blank" : undefined} rel={label === "Office" ? "noreferrer" : undefined}>{inner}</a> : <div key={label}>{inner}</div>; })}</div><div className="contact-map"><iframe src={companyInfo.mapEmbedUrl} title="Gentle Elevators location" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /></div></aside>
      <div><Eyebrow>Request a quote</Eyebrow><h2>TELL US ABOUT YOUR PROJECT</h2><p className="form-intro">Required details help us understand your request. You can also send the same details directly through WhatsApp.</p><ContactForm /></div>
    </div></section>
  </>;
}

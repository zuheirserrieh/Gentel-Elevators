import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Eyebrow, PageHero } from "@/components/Shared";
import { companyInfo } from "@/data/company";
import { T } from "@/components/Language";

export const metadata: Metadata = { title: "Contact", description: "Contact Gentle Elevators for elevator installation, repair, maintenance, safety inspection, or a quotation anywhere in Lebanon." };

export default function Contact() {
  const items = [
    { icon: Phone, label: "Phone", labelAr: "الهاتف", value: companyInfo.phone, valueAr: companyInfo.phone, href: `tel:${companyInfo.phoneDigits}` },
    { icon: MessageCircle, label: "WhatsApp", labelAr: "واتساب", value: companyInfo.whatsapp, valueAr: companyInfo.whatsapp, href: `https://wa.me/${companyInfo.whatsappDigits}` },
    { icon: Mail, label: "Email", labelAr: "البريد الإلكتروني", value: companyInfo.email, valueAr: companyInfo.email, href: `mailto:${companyInfo.email}` },
    { icon: MapPin, label: "Office", labelAr: "المكتب", value: companyInfo.location, valueAr: companyInfo.locationAr, href: companyInfo.mapUrl },
    { icon: Clock, label: "Working hours", labelAr: "ساعات العمل", value: companyInfo.workingHours, valueAr: companyInfo.workingHoursAr },
  ];
  return <>
    <PageHero title="CONTACT GENTLE ELEVATORS" titleAr="اتصل بـ GENTLE ELEVATORS" description="Contact our team for elevator installation, repair, maintenance, safety inspection, or a quotation anywhere in Lebanon." descriptionAr="تواصل مع فريقنا للتركيب أو الإصلاح أو الصيانة أو فحص السلامة أو لطلب عرض سعر في أي منطقة من لبنان." />
    <section className="section"><div className="container contact-layout">
      <aside><Eyebrow><T en="Talk to our team" ar="تحدث مع فريقنا" /></Eyebrow><h2><T en="WE’RE HERE TO HELP" ar="نحن هنا لمساعدتك" /></h2><p><T en="Tell us about your building, the service you need, and your location. We’ll review your inquiry and follow up using the details you provide." ar="أخبرنا عن مبناك والخدمة التي تحتاجها وموقعك. سنراجع استفسارك ونتواصل معك عبر البيانات التي تقدمها." /></p><div className="contact-list">{items.map(({ icon: Icon, label, labelAr, value, valueAr, href }) => { const inner = <><Icon /><span><small><T en={label} ar={labelAr} /></small><b><T en={value} ar={valueAr} /></b></span></>; return href ? <a href={href} key={label} target={label === "Office" ? "_blank" : undefined} rel={label === "Office" ? "noreferrer" : undefined}>{inner}</a> : <div key={label}>{inner}</div>; })}</div><div className="contact-map"><iframe src={companyInfo.mapEmbedUrl} title="Gentle Elevators location" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /></div></aside>
      <div><Eyebrow><T en="Request a quote" ar="اطلب عرض سعر" /></Eyebrow><h2><T en="TELL US ABOUT YOUR PROJECT" ar="أخبرنا عن مشروعك" /></h2><p className="form-intro"><T en="Required details help us understand your request. You can also send the same details directly through WhatsApp." ar="تساعدنا التفاصيل المطلوبة على فهم طلبك، ويمكنك أيضًا إرسال المعلومات نفسها مباشرة عبر واتساب." /></p><ContactForm /></div>
    </div></section>
  </>;
}

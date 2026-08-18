import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { companyInfo, navItems } from "@/data/company";
import { services } from "@/data/services";
import { T } from "./Language";

export function Footer() {
  return <footer className="footer">
    <div className="container footer-grid">
      <div><Logo /><p><T en={<>Serving all Lebanon with professional elevator installation, repair, maintenance, modernization, and safety inspection services since {companyInfo.established}.</>} ar={<>نخدم جميع أنحاء لبنان بخدمات احترافية لتركيب المصاعد وإصلاحها وصيانتها وتحديثها وفحص سلامتها منذ عام {companyInfo.established}.</>} /></p></div>
      <div><h3><T en="Explore" ar="استكشف" /></h3>{navItems.map(item => <Link key={item.href} href={item.href}><T en={item.label} ar={item.labelAr} /></Link>)}</div>
      <div><h3><T en="Services" ar="الخدمات" /></h3>{services.map(service => <Link key={service.slug} href={`/services#${service.slug}`}><T en={service.title} ar={service.titleAr} /></Link>)}</div>
      <div>
        <h3><T en="Contact" ar="اتصل بنا" /></h3>
        <a href={`tel:${companyInfo.phoneDigits}`}><Phone size={15} />{companyInfo.phone}</a>
        <a href={`mailto:${companyInfo.email}`}><Mail size={15} />{companyInfo.email}</a>
        <a href={companyInfo.mapUrl} target="_blank" rel="noreferrer"><MapPin size={15} /><T en={companyInfo.location} ar={companyInfo.locationAr} /></a>
        <div className="socials" aria-label="Social media">
          <a href={companyInfo.instagram} target="_blank" rel="noreferrer">Instagram</a>
          <a href={companyInfo.tiktok} target="_blank" rel="noreferrer">TikTok</a>
        </div>
      </div>
    </div>
    <div className="container copyright">{"\u00A9"} {new Date().getFullYear()} Gentle Elevators. <T en="All rights reserved." ar="جميع الحقوق محفوظة." /></div>
  </footer>;
}

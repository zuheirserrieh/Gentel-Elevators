import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { companyInfo, navItems } from "@/data/company";
import { services } from "@/data/services";

export function Footer() {
  return <footer className="footer">
    <div className="container footer-grid">
      <div><Logo /><p>Serving all Lebanon with professional elevator installation, repair, maintenance, modernization, and safety inspection services since {companyInfo.established}.</p></div>
      <div><h3>Explore</h3>{navItems.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}</div>
      <div><h3>Services</h3>{services.map(service => <Link key={service.slug} href={`/services#${service.slug}`}>{service.title}</Link>)}</div>
      <div>
        <h3>Contact</h3>
        <a href={`tel:${companyInfo.phoneDigits}`}><Phone size={15} />{companyInfo.phone}</a>
        <a href={`mailto:${companyInfo.email}`}><Mail size={15} />{companyInfo.email}</a>
        <a href={companyInfo.mapUrl} target="_blank" rel="noreferrer"><MapPin size={15} />{companyInfo.location}</a>
        <div className="socials" aria-label="Social media">
          <a href={companyInfo.instagram} target="_blank" rel="noreferrer">Instagram</a>
          <a href={companyInfo.tiktok} target="_blank" rel="noreferrer">TikTok</a>
        </div>
      </div>
    </div>
    <div className="container copyright">{"\u00A9"} {new Date().getFullYear()} Gentle Elevators. All rights reserved.</div>
  </footer>;
}

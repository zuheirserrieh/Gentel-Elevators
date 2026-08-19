"use client";

import { usePathname } from "next/navigation";
import { Menu, MessageCircle, X, ArrowUpRight, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { LanguageSwitcher, useLanguage } from "./Language";
import { companyInfo, navItems } from "@/data/company";

export function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const { language } = useLanguage();
  const arabic = language === "ar";
  const message = arabic ? "مرحبًا Gentle Elevators، أود الاستفسار عن خدمات المصاعد." : "Hello Gentle Elevators, I would like to ask about your elevator services.";
  const whatsappUrl = `https://wa.me/${companyInfo.whatsappDigits}?text=${encodeURIComponent(message)}`;
  const isActive = (href: string) => href === "/" ? path === href : path.startsWith(href);

  useEffect(() => {
    const close = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return <header className="site-header">
    <div className="container header-inner">
      <Logo />
      <nav className="desktop-nav" aria-label={arabic ? "التنقل الرئيسي" : "Main navigation"}>
        {navItems.map(item => <button className={isActive(item.href) ? "active" : ""} key={item.href} type="button" onClick={() => window.location.assign(item.href)}>{arabic ? item.labelAr : item.label}</button>)}
      </nav>
      <LanguageSwitcher />
      <a className="button button-gold header-cta" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={16} />{arabic ? "تواصل معنا" : "Get in touch"}<ArrowUpRight size={16} /></a>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? (arabic ? "إغلاق القائمة" : "Close menu") : (arabic ? "فتح القائمة" : "Open menu")}>{open ? <X /> : <Menu />}</button>
    </div>
    {open && <nav className="mobile-menu" id="mobile-navigation" aria-label={arabic ? "التنقل عبر الهاتف" : "Mobile navigation"}>
      <span className="mobile-menu-kicker">{arabic ? "نخدم جميع أنحاء لبنان" : "Serving all Lebanon"}</span>
      {navItems.map(item => <button className={isActive(item.href) ? "active" : ""} key={item.href} type="button" onClick={() => { setOpen(false); window.location.assign(item.href); }}>{arabic ? item.labelAr : item.label}<ArrowUpRight size={15} /></button>)}
      <div className="mobile-menu-actions">
        <a className="button button-outline" href={`tel:${companyInfo.phoneDigits}`}><Phone size={16} />{arabic ? "اتصل بنا" : "Call us"}</a>
        <a className="button button-gold" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={16} />واتساب</a>
      </div>
    </nav>}
  </header>;
}

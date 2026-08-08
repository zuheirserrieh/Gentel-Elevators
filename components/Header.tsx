"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, MessageCircle, X, ArrowUpRight, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { companyInfo, navItems } from "@/data/company";
export function Header() {
  const path = usePathname(); const [open, setOpen] = useState(false);
  const whatsappUrl = `https://wa.me/${companyInfo.whatsappDigits}?text=${encodeURIComponent("Hello Gentle Elevators, I would like to ask about your elevator services.")}`;
  const isActive = (href: string) => href === "/" ? path === href : path.startsWith(href);
  useEffect(() => {
    const close = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  return <header className="site-header"><div className="container header-inner"><Logo/><nav className="desktop-nav" aria-label="Main navigation">{navItems.map(n=><Link className={isActive(n.href)?"active":""} key={n.href} href={n.href}>{n.label}</Link>)}</nav><a className="button button-gold header-cta" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={16}/> Get in touch <ArrowUpRight size={16}/></a><button className="menu-toggle" onClick={()=>setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close menu" : "Open menu"}>{open?<X/>:<Menu/>}</button></div>{open&&<nav className="mobile-menu" id="mobile-navigation" aria-label="Mobile navigation"><span className="mobile-menu-kicker">Serving all Lebanon</span>{navItems.map(n=><Link className={isActive(n.href)?"active":""} key={n.href} href={n.href} onClick={()=>setOpen(false)}>{n.label}<ArrowUpRight size={15}/></Link>)}<div className="mobile-menu-actions"><a className="button button-outline" href={`tel:${companyInfo.phoneDigits}`}><Phone size={16}/>Call us</a><a className="button button-gold" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={16}/>WhatsApp</a></div></nav>}</header>;
}

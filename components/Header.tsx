"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, MessageCircle, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Logo } from "./Logo";
import { companyInfo, navItems } from "@/data/company";
export function Header() {
  const path = usePathname(); const [open, setOpen] = useState(false);
  const whatsappUrl = `https://wa.me/${companyInfo.whatsappDigits}?text=${encodeURIComponent("Hello Gentle Elevators, I would like to ask about your elevator services.")}`;
  return <header className="site-header"><div className="container header-inner"><Logo/><nav className="desktop-nav" aria-label="Main navigation">{navItems.map(n=><Link className={path===n.href?"active":""} key={n.href} href={n.href}>{n.label}</Link>)}</nav><a className="button button-gold header-cta" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={16}/> Get in touch <ArrowUpRight size={16}/></a><button className="menu-toggle" onClick={()=>setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">{open?<X/>:<Menu/>}</button></div>{open&&<nav className="mobile-menu" aria-label="Mobile navigation">{navItems.map(n=><Link key={n.href} href={n.href} onClick={()=>setOpen(false)}>{n.label}</Link>)}<a className="button button-gold" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={16}/>Get in touch</a></nav>}</header>;
}

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Logo } from "./Logo";
import { navItems } from "@/data/company";
export function Header() {
  const path = usePathname(); const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="container header-inner"><Logo/><nav className="desktop-nav" aria-label="Main navigation">{navItems.map(n=><Link className={path===n.href?"active":""} key={n.href} href={n.href}>{n.label}</Link>)}</nav><Link className="button button-gold header-cta" href="/contact"><Phone size={16}/> Get in touch <ArrowUpRight size={16}/></Link><button className="menu-toggle" onClick={()=>setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">{open?<X/>:<Menu/>}</button></div>{open&&<nav className="mobile-menu" aria-label="Mobile navigation">{navItems.map(n=><Link key={n.href} href={n.href} onClick={()=>setOpen(false)}>{n.label}</Link>)}<Link className="button button-gold" href="/contact">Request a quote</Link></nav>}</header>;
}

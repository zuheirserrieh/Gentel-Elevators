import Link from "next/link";
import { ArrowRight, Check, Headphones, MapPin, Phone, ShieldCheck, Sparkles, Users } from "lucide-react";
import { CTA, Eyebrow, ReferenceImage } from "@/components/Shared";
import { ProjectCard } from "@/components/ProjectCard";
import { companyInfo } from "@/data/company";
import { projects } from "@/data/projects";
import { services } from "@/data/services";

const trust = [
  { icon: ShieldCheck, title: "Safety First", text: "International safety standards." },
  { icon: Headphones, title: "Reliable Service", text: "Consistent support and dependable performance." },
  { icon: Users, title: "Expert Team", text: "Skilled professionals you can trust." },
  { icon: Sparkles, title: "Quality Assured", text: "Attention to quality in every detail." },
];
const why = ["Professional installation", "Fast response", "Reliable maintenance", "Safety-focused work", "Experienced technicians", "Clear communication", "Quality components", "Support after installation"];

export default function Home() {
  return <>
    <section className="hero">
      <ReferenceImage alt="Premium modern elevator cabin" position="50% 10%" />
      <div className="hero-shade" />
      <div className="container hero-content">
        <Eyebrow>Safe. Reliable. Smooth.</Eyebrow>
        <h1>ELEVATORS THAT<br /> <span>MOVE YOU FORWARD</span></h1>
        <p>Gentel Elevators provides professional elevator installation, repair, and maintenance services for residential and commercial buildings.</p>
        <div className="hero-actions">
          <Link className="button button-gold" href="/contact"><Phone />Contact us</Link>
          <Link className="button button-outline" href="/services">Our services<ArrowRight /></Link>
          <a className="button button-location" href={companyInfo.mapUrl} target="_blank" rel="noreferrer"><MapPin />Our location</a>
        </div>
      </div>
    </section>
    <section className="section"><div className="container about-preview">
      <ReferenceImage alt="Modern glass elevator system" position="20% 28%" />
      <div><Eyebrow>About us</Eyebrow><h2>WE LIFT STANDARDS.<br />WE BUILD TRUST.</h2><p>Gentel Elevators provides safe, reliable, and high-quality elevator solutions. From new installations to maintenance and repair, our team works carefully to keep every elevator operating smoothly and safely.</p><div className="trust-grid">{trust.map(({ icon: Icon, title, text }) => <div className="trust" key={title}><Icon /><h3>{title}</h3><p>{text}</p></div>)}</div><Link className="text-link" href="/about">Discover our company <ArrowRight /></Link></div>
    </div></section>
    <section className="section services-preview"><div className="container"><div className="center-heading"><Eyebrow>Our services</Eyebrow><h2>COMPLETE ELEVATOR SOLUTIONS</h2><p>We provide complete elevator services based on your building’s needs.</p></div><div className="service-grid">{services.slice(0, 4).map(({ icon: Icon, ...service }) => <article className="service-card" key={service.slug}><ReferenceImage alt={`${service.title} service`} position={service.imagePosition} /><div><Icon /><h3>{service.title}</h3><p>{service.description}</p><Link href={`/services#${service.slug}`}>Learn more <ArrowRight /></Link></div></article>)}</div></div></section>
    <section className="section why"><div className="container"><Eyebrow>Why Gentel</Eyebrow><h2>WHY CHOOSE GENTEL ELEVATORS?</h2><div className="why-grid">{why.map(item => <div key={item}><Check /><span>{item}</span></div>)}</div></div></section>
    <section className="section projects-preview"><div className="container"><div className="heading-row"><div><Eyebrow>Our projects</Eyebrow><h2>BUILT FOR EVERY SPACE</h2></div><Link className="button button-dark" href="/projects">View all projects<ArrowRight /></Link></div><div className="project-grid">{projects.slice(0, 4).map(project => <ProjectCard key={project.slug} project={project} />)}</div></div></section>
    <CTA />
  </>;
}

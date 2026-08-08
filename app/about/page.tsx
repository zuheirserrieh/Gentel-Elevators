import type { Metadata } from "next";
import { Check, ClipboardCheck, ExternalLink, FileText, Handshake, MapPin, Search, Settings, ShieldCheck, Sparkles, Users, Wrench } from "lucide-react";
import { CTA, Eyebrow, PageHero, ReferenceImage } from "@/components/Shared";
import { companyInfo } from "@/data/company";

export const metadata: Metadata = { title: "About Us", description: "Learn about Gentel Elevators, our mission, values, and safety-focused working process." };
const values = [{ icon: ShieldCheck, name: "Safety" }, { icon: Sparkles, name: "Quality" }, { icon: Check, name: "Reliability" }, { icon: Users, name: "Professionalism" }, { icon: Handshake, name: "Customer care" }, { icon: Settings, name: "Continuous improvement" }];
const process = [{ icon: FileText, t: "Customer inquiry" }, { icon: Search, t: "Site inspection" }, { icon: ClipboardCheck, t: "Technical assessment" }, { icon: FileText, t: "Quotation" }, { icon: Wrench, t: "Installation or repair" }, { icon: ShieldCheck, t: "Testing" }, { icon: Check, t: "Delivery" }, { icon: Settings, t: "Maintenance support" }];

export default function About() {
  return <>
    <PageHero title="ABOUT GENTEL ELEVATORS" description="Reliable elevator services built around safety, quality, and customer satisfaction." />
    <section className="section"><div className="container split"><ReferenceImage alt="Gentel Elevators modern elevator system" position="18% 29%" /><div><Eyebrow>Who we are</Eyebrow><h2>TECHNICAL CARE. PROFESSIONAL SERVICE.</h2><p>Gentel Elevators is an elevator installation, repair, and maintenance company serving residential and commercial buildings. We focus on providing safe systems, reliable service, quality workmanship, and professional customer support.</p><div className="mission-grid"><div><h3>Our mission</h3><p>To provide safe, dependable, and high-quality elevator solutions for every customer.</p></div><div><h3>Our vision</h3><p>To become a trusted elevator company known for professional service, strong technical work, and long-term customer relationships.</p></div></div></div></div></section>
    <section className="section soft"><div className="container"><div className="center-heading"><Eyebrow>Our values</Eyebrow><h2>THE PRINCIPLES BEHIND OUR WORK</h2></div><div className="values-grid">{values.map(({ icon: Icon, name }) => <div key={name}><Icon /><h3>{name}</h3></div>)}</div></div></section>
    <section className="section"><div className="container"><div className="center-heading"><Eyebrow>How we work</Eyebrow><h2>A CLEAR PROCESS, FROM INQUIRY TO SUPPORT</h2></div><div className="process-grid">{process.map(({ icon: Icon, t }, index) => <div key={t}><span>{String(index + 1).padStart(2, "0")}</span><Icon /><h3>{t}</h3></div>)}</div></div></section>
    <section className="section location-section"><div className="container location-grid"><div><Eyebrow>Our location</Eyebrow><h2>VISIT GENTEL ELEVATORS</h2><p>Use our verified Google Maps pin for accurate directions to our location.</p><a className="button button-gold" href={companyInfo.mapUrl} target="_blank" rel="noreferrer"><MapPin />Open in Google Maps<ExternalLink /></a></div><div className="map-frame"><iframe src={companyInfo.mapEmbedUrl} title="Gentel Elevators location on Google Maps" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /></div></div></section>
    <CTA />
  </>;
}

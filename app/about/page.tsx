import type { Metadata } from "next";
import { Check, ExternalLink, Handshake, MapPin, Settings, ShieldCheck, Sparkles, Users } from "lucide-react";
import { CTA, Eyebrow, PageHero, ReferenceImage } from "@/components/Shared";
import { companyInfo } from "@/data/company";

export const metadata: Metadata = { title: "About Us", description: "Learn about Gentle Elevators, our mission, values, and safety-focused working process." };
const values = [{ icon: ShieldCheck, name: "Safety" }, { icon: Sparkles, name: "Quality" }, { icon: Check, name: "Reliability" }, { icon: Users, name: "Professionalism" }, { icon: Handshake, name: "Customer care" }, { icon: Settings, name: "Continuous improvement" }];

export default function About() {
  return <>
    <PageHero title="ABOUT GENTLE ELEVATORS" description="Reliable elevator services built around safety, quality, and customer satisfaction." />
    <section className="section"><div className="container split"><ReferenceImage alt="Gentle Elevators modern elevator system" position="18% 29%" /><div><Eyebrow>Who we are</Eyebrow><h2>TECHNICAL CARE. PROFESSIONAL SERVICE.</h2><p>Gentle Elevators has provided elevator installation, repair, maintenance, modernization, and safety inspection services since {companyInfo.established}. Based in {companyInfo.location}, we support residential and commercial buildings throughout {companyInfo.serviceArea}.</p><div className="company-facts"><div><strong>{companyInfo.established}</strong><span>Established</span></div><div><strong>Lebanon</strong><span>Nationwide service</span></div><div><strong>AR / EN</strong><span>Arabic &amp; English</span></div></div><div className="mission-grid"><div><h3>Our mission</h3><p>To provide safe, dependable, and high-quality elevator solutions for every customer.</p></div><div><h3>Our vision</h3><p>To become a trusted elevator company known for professional service, strong technical work, and long-term customer relationships.</p></div></div></div></div></section>
    <section className="section soft"><div className="container"><div className="center-heading"><Eyebrow>Our values</Eyebrow><h2>THE PRINCIPLES BEHIND OUR WORK</h2></div><div className="values-grid">{values.map(({ icon: Icon, name }) => <div key={name}><Icon /><h3>{name}</h3></div>)}</div></div></section>
    <section className="section location-section"><div className="container location-grid"><div><Eyebrow>Our location</Eyebrow><h2>VISIT GENTLE ELEVATORS</h2><p>Use our verified Google Maps pin for accurate directions to our location.</p><a className="button button-gold" href={companyInfo.mapUrl} target="_blank" rel="noreferrer"><MapPin />Open in Google Maps<ExternalLink /></a></div><div className="map-frame"><iframe src={companyInfo.mapEmbedUrl} title="Gentle Elevators location on Google Maps" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /></div></div></section>
    <CTA />
  </>;
}

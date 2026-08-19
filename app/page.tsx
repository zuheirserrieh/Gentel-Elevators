import Link from "next/link";
import { ArrowRight, Check, Headphones, MapPin, Phone, ShieldCheck, Sparkles, Users } from "lucide-react";
import { CTA, Eyebrow, ReferenceImage } from "@/components/Shared";
import { ProjectCard } from "@/components/ProjectCard";
import { companyInfo } from "@/data/company";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { T } from "@/components/Language";

const trust = [
  { icon: ShieldCheck, title: "Safety First", titleAr: "السلامة أولاً", text: "International safety standards.", textAr: "معايير سلامة عالمية." },
  { icon: Headphones, title: "Reliable Service", titleAr: "خدمة موثوقة", text: "Consistent support and dependable performance.", textAr: "دعم مستمر وأداء يمكن الاعتماد عليه." },
  { icon: Users, title: "Expert Team", titleAr: "فريق خبير", text: "Skilled professionals you can trust.", textAr: "متخصصون مهرة يمكنك الوثوق بهم." },
  { icon: Sparkles, title: "Quality Assured", titleAr: "جودة مضمونة", text: "Attention to quality in every detail.", textAr: "اهتمام بالجودة في كل تفصيل." },
];

const why = [
  { en: "Professional installation", ar: "تركيب احترافي" },
  { en: "Fast response", ar: "استجابة سريعة" },
  { en: "Reliable maintenance", ar: "صيانة موثوقة" },
  { en: "Safety-focused work", ar: "عمل يركز على السلامة" },
  { en: "Experienced technicians", ar: "فنيون ذوو خبرة" },
  { en: "Clear communication", ar: "تواصل واضح" },
  { en: "Quality components", ar: "مكوّنات عالية الجودة" },
  { en: "Support after installation", ar: "دعم ما بعد التركيب" },
];

export default function Home() {
  return <>
    <section className="hero">
      <ReferenceImage
        className="hero-background"
        src="/images/hero/gentle-elevator-hero.png"
        alt="Premium modern elevator entrance with warm gold lighting"
        position="50% 50%"
        priority
        sizes="100vw"
      />
      <div className="hero-shade" />
      <div className="container hero-content">
        <Eyebrow><T en="Safe. Reliable. Smooth." ar="آمن. موثوق. سلس." /></Eyebrow>
        <h1><T en={<>ELEVATORS THAT<br /> <span>MOVE YOU FORWARD</span></>} ar={<><span style={{color: '#D4AF37'}}>جنتل ... وخليك جنتل</span></>} /></h1>
        <p><T en={<>Serving all Lebanon since {companyInfo.established} with professional elevator installation, repair, maintenance, modernization, and safety inspection services.</>} ar={<>نخدم جميع أنحاء لبنان منذ عام {companyInfo.established} بخدمات احترافية لتركيب المصاعد وإصلاحها وصيانتها وتحديثها وفحص سلامتها.</>} /></p>
        <div className="hero-actions">
          <Link className="button button-gold" href="/contact"><Phone /><T en="Contact us" ar="اتصل بنا" /></Link>
          <Link className="button button-outline" href="/services"><T en="Our services" ar="خدماتنا" /><ArrowRight /></Link>
          <a className="button button-location" href={companyInfo.mapUrl} target="_blank" rel="noreferrer"><MapPin /><T en="Our location" ar="موقعنا" /></a>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container about-preview">
        <ReferenceImage src="/images/hero/gentle-elevator-hero.png" alt="Modern Gentle Elevators entrance with warm lighting" position="72% 50%" />
        <div>
          <Eyebrow><T en="About us" ar="من نحن" /></Eyebrow>
          <h2><T en={<>WE LIFT STANDARDS.<br />WE BUILD TRUST.</>} ar={<>نرفع مستوى المعايير.<br />ونبني الثقة.</>} /></h2>
          <p><T en={<>Founded in {companyInfo.established}, Gentle Elevators provides safe, reliable elevator solutions from our base in Saida to customers throughout Lebanon.</>} ar={<>تأسست Gentle Elevators عام {companyInfo.established} وتقدم من مقرها في صيدا حلول مصاعد آمنة وموثوقة للعملاء في جميع أنحاء لبنان.</>} /></p>
          <div className="trust-grid">
            {trust.map(({ icon: Icon, title, titleAr, text, textAr }) => <div className="trust" key={title}><Icon /><h3><T en={title} ar={titleAr} /></h3><p><T en={text} ar={textAr} /></p></div>)}
          </div>
          <Link className="text-link" href="/about"><T en="Discover our company" ar="تعرّف على شركتنا" /> <ArrowRight /></Link>
        </div>
      </div>
    </section>

    <section className="section services-preview">
      <div className="container">
        <div className="center-heading">
          <Eyebrow><T en="Our services" ar="خدماتنا" /></Eyebrow>
          <h2><T en="COMPLETE ELEVATOR SOLUTIONS" ar="حلول متكاملة للمصاعد" /></h2>
          <p><T en="We provide complete elevator services based on your building’s needs." ar="نقدم خدمات مصاعد متكاملة وفق احتياجات مبناك." /></p>
        </div>
        <div className="service-grid">
          {services.slice(0, 4).map(({ icon: Icon, ...service }) => <article className="service-card" key={service.slug}>
            <ReferenceImage src={service.image} alt={`${service.title} service`} position={service.imagePosition} />
            <div><Icon /><h3><T en={service.title} ar={service.titleAr} /></h3><p><T en={service.description} ar={service.descriptionAr} /></p><Link href={`/services#${service.slug}`}><T en="Learn more" ar="اعرف المزيد" /> <ArrowRight /></Link></div>
          </article>)}
        </div>
      </div>
    </section>

    <section className="section why">
      <div className="container">
        <Eyebrow><T en="Why Gentle" ar="لماذا Gentle" /></Eyebrow>
        <h2><T en="WHY CHOOSE GENTLE ELEVATORS?" ar="لماذا تختار Gentle Elevators؟" /></h2>
        <div className="why-grid">{why.map(item => <div key={item.en}><Check /><span><T en={item.en} ar={item.ar} /></span></div>)}</div>
      </div>
    </section>

    <section className="section projects-preview">
      <div className="container">
        <div className="heading-row">
          <div><Eyebrow><T en="Our projects" ar="مشاريعنا" /></Eyebrow><h2><T en="BUILT FOR EVERY SPACE" ar="مصممة لكل مساحة" /></h2></div>
          <Link className="button button-dark" href="/projects"><T en="View all projects" ar="عرض جميع المشاريع" /><ArrowRight /></Link>
        </div>
        <div className="project-grid featured-project-grid">{projects.slice(0, 1).map(project => <ProjectCard key={project.slug} project={project} />)}</div>
      </div>
    </section>

    <CTA />
  </>;
}

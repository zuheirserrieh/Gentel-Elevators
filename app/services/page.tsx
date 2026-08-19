import type { Metadata } from "next";
import { ArrowRight, Check } from "lucide-react";
import { CTA, Eyebrow, PageHero, ReferenceImage } from "@/components/Shared";
import { T } from "@/components/Language";
import { services } from "@/data/services";

export const metadata: Metadata = { title: "Elevator Services", description: "Professional elevator installation, repair, maintenance, modernization, and safety inspection services." };

export default function Services() {
  return <>
    <PageHero title="ELEVATOR SERVICES" titleAr="خدمات المصاعد" description="Professional installation, repair, maintenance, and modernization services." descriptionAr="خدمات احترافية لتركيب المصاعد وإصلاحها وصيانتها وتحديثها." />
    <section>{services.map(({ icon: Icon, ...service }, index) => <article className={`service-detail ${index % 2 ? "reverse" : ""}`} id={service.slug} key={service.slug}>
      <div className="container split">
        <ReferenceImage src={service.image} alt={`${service.title} by Gentle Elevators`} position={service.imagePosition} />
        <div>
          <Icon className="large-icon" />
          <Eyebrow><T en={`Service ${String(index + 1).padStart(2, "0")}`} ar={`الخدمة ${String(index + 1).padStart(2, "0")}`} /></Eyebrow>
          <h2><T en={service.title.toUpperCase()} ar={service.titleAr} /></h2>
          <p><T en={service.description} ar={service.descriptionAr} /></p>
          <div className="check-grid">{service.items.map((item, itemIndex) => <span key={item}><Check /><T en={item} ar={service.itemsAr[itemIndex]} /></span>)}</div>
          <a className="button button-gold" href={`/contact?service=${service.slug}#quote`}><T en="Request a quotation" ar="اطلب عرض سعر" /><ArrowRight /></a>
        </div>
      </div>
    </article>)}</section>
    <CTA />
  </>;
}

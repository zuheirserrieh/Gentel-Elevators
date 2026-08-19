import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, Building2, CheckCircle2, MapPin, Wrench } from "lucide-react";
import { CTA, Eyebrow, ReferenceImage } from "@/components/Shared";
import { companyInfo } from "@/data/company";
import { projects } from "@/data/projects";
import { T } from "@/components/Language";

export function generateStaticParams() {
  return projects.map(project => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find(item => item.slug === slug);
  if (!project) return { title: "Project" };
  const image = new URL(project.coverImage, companyInfo.website).toString();
  const url = new URL(`/projects/${project.slug}`, companyInfo.website).toString();
  return {
    title: project.title,
    description: project.description,
    openGraph: { title: project.title, description: project.description, url, type: "article", images: [{ url: image, alt: `${project.title} by Gentle Elevators` }] },
    twitter: { card: "summary_large_image", title: project.title, description: project.description, images: [image] },
  };
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find(item => item.slug === slug);
  if (!project) notFound();

  return <>
    <section className="project-hero">
      <div className="container">
        <a href="/projects" className="back"><ArrowLeft /><T en="Back to projects" ar="العودة إلى المشاريع" /></a>
        <Eyebrow><T en={project.category} ar={project.categoryAr} /></Eyebrow>
        <h1><T en={project.title} ar={project.titleAr} /></h1>
        <p><T en={project.description} ar={project.descriptionAr} /></p>
      </div>
    </section>
    <section className="section">
      <div className="container project-detail">
        <ReferenceImage src={project.coverImage} alt={`${project.title} elevator`} position={project.imagePosition} priority sizes="(max-width: 880px) 100vw, 1220px" />
        <div className="project-facts">
          <div><Building2 /><small><T en="Building type" ar="نوع المبنى" /></small><b><T en={project.category} ar={project.categoryAr} /></b></div>
          <div><Wrench /><small><T en="Service provided" ar="الخدمة المقدمة" /></small><b><T en={project.service} ar={project.serviceAr} /></b></div>
          <div><MapPin /><small><T en="Project setting" ar="موقع المشروع" /></small><b><T en={project.location} ar={project.locationAr} /></b></div>
          <div><CheckCircle2 /><small><T en="Status" ar="الحالة" /></small><b><T en={project.status} ar={project.statusAr} /></b></div>
        </div>
        <div className="detail-copy">
          <div><Eyebrow><T en="Project overview" ar="نظرة عامة على المشروع" /></Eyebrow><h2><T en="RESIDENTIAL INTEGRATION" ar="تكامل مع المساحة السكنية" /></h2><p><T en={project.overview} ar={project.overviewAr} /></p></div>
          <div><Eyebrow><T en="Visible details" ar="التفاصيل الظاهرة" /></Eyebrow><h2><T en="FINISHES & FEATURES" ar="التشطيبات والمزايا" /></h2><p><T en={project.features} ar={project.featuresAr} /></p></div>
        </div>
        <div className="project-media-heading"><Eyebrow><T en="Project gallery" ar="صور المشروع" /></Eyebrow><h2><T en="A CLOSER LOOK" ar="نظرة عن قرب" /></h2><p><T en="Original photography from the completed installation." ar="صور أصلية من عملية التركيب المكتملة." /></p></div>
        <div className="project-photo-grid">
          {project.gallery.map(image => <ReferenceImage key={image.src} src={image.src} alt={image.alt} position={image.position} sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" />)}
        </div>
        {project.video && <div className="project-video-block"><Eyebrow><T en="Project video" ar="فيديو المشروع" /></Eyebrow><h2><T en="SEE THE FINISHED ELEVATOR" ar="شاهد المصعد بعد الإنجاز" /></h2><video controls playsInline preload="metadata" poster={project.coverImage}><source src={project.video} type="video/mp4" />Your browser does not support embedded video.</video></div>}
      </div>
    </section>
    <CTA />
  </>;
}

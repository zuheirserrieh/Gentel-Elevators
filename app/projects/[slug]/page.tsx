import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Building2, CheckCircle2, MapPin, Wrench } from "lucide-react";
import { CTA, Eyebrow, ReferenceImage } from "@/components/Shared";
import { companyInfo } from "@/data/company";
import { projects } from "@/data/projects";

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
        <Link href="/projects" className="back"><ArrowLeft />Back to projects</Link>
        <Eyebrow>{project.category}</Eyebrow>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
      </div>
    </section>
    <section className="section">
      <div className="container project-detail">
        <ReferenceImage src={project.coverImage} alt={`${project.title} elevator`} position={project.imagePosition} priority sizes="(max-width: 880px) 100vw, 1220px" />
        <div className="project-facts">
          <div><Building2 /><small>Building type</small><b>{project.category}</b></div>
          <div><Wrench /><small>Service provided</small><b>{project.service}</b></div>
          <div><MapPin /><small>Project setting</small><b>{project.location}</b></div>
          <div><CheckCircle2 /><small>Status</small><b>{project.status}</b></div>
        </div>
        <div className="detail-copy">
          <div><Eyebrow>Project overview</Eyebrow><h2>RESIDENTIAL INTEGRATION</h2><p>{project.overview}</p></div>
          <div><Eyebrow>Visible details</Eyebrow><h2>FINISHES &amp; FEATURES</h2><p>{project.features}</p></div>
        </div>
        <div className="project-media-heading"><Eyebrow>Project gallery</Eyebrow><h2>A CLOSER LOOK</h2><p>Original photography from the completed installation.</p></div>
        <div className="project-photo-grid">
          {project.gallery.map(image => <ReferenceImage key={image.src} src={image.src} alt={image.alt} position={image.position} sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" />)}
        </div>
        {project.video && <div className="project-video-block"><Eyebrow>Project video</Eyebrow><h2>SEE THE FINISHED ELEVATOR</h2><video controls playsInline preload="metadata" poster={project.coverImage}><source src={project.video} type="video/mp4" />Your browser does not support embedded video.</video></div>}
      </div>
    </section>
    <CTA />
  </>;
}

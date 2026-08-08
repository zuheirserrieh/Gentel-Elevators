"use client";
import { useState } from "react"; import { projects } from "@/data/projects"; import { ProjectCard } from "./ProjectCard";
const filters=["All Projects","Residential","Commercial","Hotels","Offices","Installation","Repair","Maintenance"];
export function ProjectGallery(){const [active,setActive]=useState("All Projects");const shown=projects.filter(p=>active==="All Projects"||p.category===active||p.service===active);return <><div className="filters" role="group" aria-label="Filter projects">{filters.map(f=><button className={active===f?"active":""} onClick={()=>setActive(f)} key={f}>{f}</button>)}</div><div className="project-grid">{shown.map(p=><ProjectCard key={p.slug} project={p}/>)}</div></>}

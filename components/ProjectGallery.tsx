import { projects } from "@/data/projects"; import { ProjectCard } from "./ProjectCard";
export function ProjectGallery(){return <div className="project-grid">{projects.map(project=><ProjectCard key={project.slug} project={project}/>)}</div>}

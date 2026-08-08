import type { Metadata } from "next"; import { CTA, PageHero } from "@/components/Shared"; import { ProjectGallery } from "@/components/ProjectGallery";
export const metadata:Metadata={title:"Projects",description:"Explore sample elevator installation, repair, and maintenance projects for a range of building types."};
export default function Projects(){return <><PageHero title="OUR PROJECTS" description="Elevator solutions planned for residential, commercial, hospitality, and office spaces."/><section className="section"><div className="container"><ProjectGallery/></div></section><CTA/></>}

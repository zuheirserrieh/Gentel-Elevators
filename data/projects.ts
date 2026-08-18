export type ProjectImage = {
  src: string;
  alt: string;
  position?: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  service: string;
  location: string;
  description: string;
  coverImage: string;
  imagePosition: string;
  overview: string;
  features: string;
  status: string;
  gallery: ProjectImage[];
  video?: string;
};

const imageBase = "/images/projects/residential-home-elevator";

export const projects: Project[] = [
  {
    slug: "residential-home-elevator",
    title: "Residential Home Elevator",
    category: "Residential",
    service: "Installation",
    location: "Private residence",
    description: "A completed home elevator installation with dark landing doors, illuminated floor indicators, and a bright mirrored cabin.",
    coverImage: `${imageBase}/lobby-entrance-wide.jpg`,
    imagePosition: "50% 52%",
    overview: "This residential installation integrates a compact passenger elevator into two distinct interior settings. Dark landing doors with slim vision panels complement both the marble-finished lobby and the home’s lighter neutral walls.",
    features: "The finished cabin combines mirrored stainless-steel surfaces, glazed panels for natural light, a light-toned floor, horizontal handrails, geometric ceiling lighting, and blue digital position indicators.",
    status: "Completed",
    gallery: [
      { src: `${imageBase}/lobby-entrance-wide.jpg`, alt: "Completed elevator entrance set within a marble-finished residential lobby", position: "50% 52%" },
      { src: `${imageBase}/landing-door-detail.jpg`, alt: "Dark elevator landing door with a slim vision panel and blue floor indicator", position: "50% 48%" },
      { src: `${imageBase}/open-cabin-with-plant.jpg`, alt: "Open residential elevator cabin beside a potted plant", position: "50% 56%" },
      { src: `${imageBase}/open-cabin-wide.jpg`, alt: "Wide view of the open residential elevator and mirrored cabin", position: "50% 54%" },
      { src: `${imageBase}/cabin-interior-angle.jpg`, alt: "Mirrored elevator cabin with glazing, handrails, and decorative ceiling lighting", position: "50% 50%" },
      { src: `${imageBase}/cabin-interior-front.jpg`, alt: "Front view into the completed mirrored residential elevator cabin", position: "50% 50%" },
    ],
    video: "/videos/residential-home-elevator-showcase.mp4",
  },
];

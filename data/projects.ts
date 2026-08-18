export type ProjectImage = {
  src: string;
  alt: string;
  position?: string;
};

export type Project = {
  slug: string;
  title: string;
  titleAr: string;
  category: string;
  categoryAr: string;
  service: string;
  serviceAr: string;
  location: string;
  locationAr: string;
  description: string;
  descriptionAr: string;
  coverImage: string;
  imagePosition: string;
  overview: string;
  overviewAr: string;
  features: string;
  featuresAr: string;
  status: string;
  statusAr: string;
  gallery: ProjectImage[];
  video?: string;
};

const imageBase = "/images/projects/residential-home-elevator";

export const projects: Project[] = [
  {
    slug: "residential-home-elevator",
    title: "Residential Home Elevator",
    titleAr: "مصعد منزلي سكني",
    category: "Residential",
    categoryAr: "سكني",
    service: "Installation",
    serviceAr: "تركيب",
    location: "Private residence",
    locationAr: "منزل خاص",
    description: "A completed home elevator installation with dark landing doors, illuminated floor indicators, and a bright mirrored cabin.",
    descriptionAr: "تركيب مكتمل لمصعد منزلي بأبواب طوابق داكنة ومؤشرات طوابق مضاءة ومقصورة مشرقة بلمسات عاكسة.",
    coverImage: `${imageBase}/lobby-entrance-wide.jpg`,
    imagePosition: "50% 52%",
    overview: "This residential installation integrates a compact passenger elevator into two distinct interior settings. Dark landing doors with slim vision panels complement both the marble-finished lobby and the home’s lighter neutral walls.",
    overviewAr: "يندمج هذا المصعد السكني المدمج بانسجام مع تصميمين داخليين مختلفين. وتتكامل أبواب الطوابق الداكنة المزودة بنوافذ طولية رفيعة مع ردهة الرخام والجدران المنزلية ذات الألوان الهادئة.",
    features: "The finished cabin combines mirrored stainless-steel surfaces, glazed panels for natural light, a light-toned floor, horizontal handrails, geometric ceiling lighting, and blue digital position indicators.",
    featuresAr: "تجمع المقصورة المنجزة بين أسطح الستانلس ستيل العاكسة والألواح الزجاجية للإضاءة الطبيعية وأرضية فاتحة ودرابزين أفقي وإضاءة سقف هندسية ومؤشرات رقمية زرقاء للطوابق.",
    status: "Completed",
    statusAr: "مكتمل",
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

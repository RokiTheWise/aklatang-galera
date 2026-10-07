import { libraryResources } from "./data/library";
import { livelihoodResources } from "./data/livelihood";
import { servicesResources } from "./data/services";

export type Section = "library" | "livelihood" | "services";
export type Language = "tagalog" | "english";
export type Bilingual = Record<Language, string>;
export interface PortalResource {
  id: string;
  name: string;
  category: string;
  section: Section;
  link: string;
  logoUrl: string;
  desc: Bilingual;
  isLocal?: boolean;
  featured?: boolean;
  tags?: string[];
}
const logoPath = (path: string) =>
  path.startsWith("http") || path.startsWith("/") ? path : `/${path}`;
export const resources: PortalResource[] = [
  ...libraryResources.map((r) => ({
    ...r,
    id: `library-${r.id}`,
    category: r.resourceType,
    section: "library" as const,
    logoUrl: logoPath(r.logoUrl),
  })),
  ...livelihoodResources.map((r) => ({
    ...r,
    id: `livelihood-${r.id}`,
    section: "livelihood" as const,
    logoUrl: logoPath(r.logoUrl),
  })),
  ...servicesResources.map((r) => ({
    ...r,
    id: `services-${r.id}`,
    section: "services" as const,
    logoUrl: logoPath(r.logoUrl),
  })),
];
export const sectionPaths: Record<Section, string> = {
  library: "/aklatan",
  livelihood: "/hanapbuhay",
  services: "/public-services",
};
export const sectionNames: Record<Section, Bilingual> = {
  library: { english: "Digital Library", tagalog: "Digital na Aklatan" },
  livelihood: {
    english: "Livelihood",
    tagalog: "Hanapbuhay",
  },
  services: { english: "Public Services", tagalog: "Serbisyong Pampubliko" },
};
export const categoryNames: Record<string, Bilingual> = {
  research: { english: "Research", tagalog: "Pananaliksik" },
  ebooks: { english: "Books & reading", tagalog: "Mga libro" },
  jobs: { english: "Jobs", tagalog: "Trabaho" },
  skills: { english: "Skills", tagalog: "Kasanayan" },
  entrepreneurship: { english: "Business", tagalog: "Negosyo" },
  egovernment: {
    english: "Government services",
    tagalog: "Serbisyo ng gobyerno",
  },
  scholarships: { english: "Scholarships", tagalog: "Mga scholarship" },
  transparency: {
    english: "News & information",
    tagalog: "Balita at impormasyon",
  },
};
export function matchesResource(resource: PortalResource, query: string) {
  const text = [
    resource.name,
    resource.category,
    resource.category === "ebooks" ? "e-books ebooks ebook books libro" : "",
    resource.desc.english,
    resource.desc.tagalog,
    ...(resource.tags ?? []),
    categoryNames[resource.category].english,
    categoryNames[resource.category].tagalog,
  ]
    .join(" ")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
  return query
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .split(/\s+/)
    .every((word) => text.includes(word));
}

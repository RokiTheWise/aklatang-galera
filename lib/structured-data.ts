import { resources, sectionNames, sectionPaths, type Section } from "./resources";
import { BASE_URL } from "./seo";

export function directoryStructuredData(section: Section) {
  const entries = resources
    .filter((resource) => resource.section === section)
    .sort(
      (a, b) =>
        Number(Boolean(b.featured)) - Number(Boolean(a.featured)) ||
        a.name.localeCompare(b.name),
    );
  const url = `${BASE_URL}${sectionPaths[section]}`;
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}#collection`,
    url,
    name: `${sectionNames[section].english} | Aklatang Galera`,
    isPartOf: { "@id": `${BASE_URL}/#website` },
    inLanguage: ["en-PH", "fil-PH"],
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: entries.length,
      itemListElement: entries.map((resource, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: resource.name,
        url: resource.link,
      })),
    },
  };
}

import type { Metadata } from "next";
import { AboutHelp } from "@/components/AboutHelp";
import { StructuredData } from "@/components/StructuredData";
import { BASE_URL, createPageMetadata } from "@/lib/seo";

const description =
  "Learn how to use Aklatang Galera, an independent bilingual portal for Puerto Galera: research sources, jobs, business support, scholarships, and public services.";

export const metadata: Metadata = createPageMetadata({
  title: "About & help",
  description,
  path: "/about",
  keywords: ["Aklatang Galera", "Puerto Galera", "research sources", "portal help"],
});

export default function Page() {
  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "@id": `${BASE_URL}/about#page`,
          url: `${BASE_URL}/about`,
          name: "About & help | Aklatang Galera",
          description,
          isPartOf: { "@id": `${BASE_URL}/#website` },
          about: { "@id": `${BASE_URL}/#website` },
          inLanguage: ["en-PH", "fil-PH"],
        }}
      />
      <AboutHelp />
    </>
  );
}

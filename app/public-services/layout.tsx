import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Public Services",
  description:
    "E-government portals, scholarships, and official news resources for every Galeran.",
  path: "/public-services",
  keywords: [
    "Public Services Puerto Galera",
    "eLGU Puerto Galera",
    "Scholarships Philippines",
    "CHED scholarships online",
    "DOST scholarships Philippines",
    "Government services Philippines online",
    "Philippine National ID PhilSys",
    "DFA Passport appointment online",
  ],
});

export default function PublicServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

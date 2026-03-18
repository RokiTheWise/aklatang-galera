import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Public Services",
  description: "E-government portals, scholarships, and official news resources for every Galeran.",
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
  openGraph: {
    title: "Public Services | Aklatang Galera",
    description: "Official government portals, scholarships, and transparency resources for every citizen of Puerto Galera.",
    url: "https://aklatang-galera.djenriquez.dev/public-services",
  },
};

export default function PublicServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

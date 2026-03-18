import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Livelihood (Hanapbuhay)",
  description: "Opportunities for skills development, jobs, and entrepreneurship in Puerto Galera and beyond.",
  keywords: [
    "Jobs Puerto Galera",
    "Skills training Philippines",
    "TESDA courses online",
    "Indeed jobs Philippines",
    "Business registration Philippines",
    "Entrepreneurship resources",
    "DTI Negosyo Center Puerto Galera",
  ],
  openGraph: {
    title: "Livelihood & Skills | Aklatang Galera",
    description: "Connect to livelihood opportunities — skills training, job boards, and business support for every Galeran.",
    url: "https://aklatang-galera.djenriquez.dev/hanapbuhay",
  },
};

export default function HanapbuhayLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

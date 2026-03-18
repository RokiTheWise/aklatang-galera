import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Library",
  description: "Free access to research papers, scholarly articles, and digital ebooks for every Galeran.",
  keywords: [
    "Digital Library Puerto Galera",
    "Research Papers Philippines",
    "Free Ebooks Philippines",
    "Scholarly Articles",
    "Academic Resources Philippines",
    "UP Tuklas",
    "Ateneo Archium",
    "DLSU Animo Repository",
  ],
  openGraph: {
    title: "Digital Library | Aklatang Galera",
    description: "Search scholarly articles and browse free digital databases — from academic papers to classic literature.",
    url: "https://aklatang-galera.djenriquez.dev/aklatan",
  },
};

export default function AklatanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

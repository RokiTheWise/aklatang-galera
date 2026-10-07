import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Digital Library",
  description:
    "Free access to research papers, scholarly articles, and digital ebooks for every Galeran.",
  path: "/aklatan",
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
});

export default function AklatanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

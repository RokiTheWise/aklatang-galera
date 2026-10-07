import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Livelihood (Hanapbuhay)",
  description:
    "Opportunities for skills development, jobs, and entrepreneurship in Puerto Galera and beyond.",
  path: "/hanapbuhay",
  keywords: [
    "Jobs Puerto Galera",
    "Skills training Philippines",
    "TESDA courses online",
    "Indeed jobs Philippines",
    "Business registration Philippines",
    "Entrepreneurship resources",
    "DTI Negosyo Center Puerto Galera",
  ],
});

export default function HanapbuhayLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://aklatang-galera.djenriquez.dev";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Aklatang Galera — Knowledge for every Galeran",
    template: "%s | Aklatang Galera",
  },
  description:
    "Aklatang Galera is a free digital portal for the people of Puerto Galera — providing easy access to knowledge, livelihood resources, and public services.",

  keywords: [
    "Aklatang Galera",
    "Puerto Galera Digital Portal",
    "Oriental Mindoro E-Library",
    "Digital Library Philippines",
    "Puerto Galera Public Services",
    "Scholarships Philippines 2026",
    "TESDA Online Courses Puerto Galera",
    "Jobs in Puerto Galera",
    "eLGU Puerto Galera Online",
    "Philippine Research Databases",
    "Free E-books Philippines",
    "Ateneo de Manila Scholarships",
    "UP Scholarships",
    "DOST Scholarships",
    "Philippine Government Portals",
  ],

  authors: [{ name: "Dexter Jethro Enriquez", url: "https://djenriquez.dev" }],
  creator: "Dexter Jethro Enriquez",

  alternates: {
    canonical: BASE_URL,
  },

  openGraph: {
    type: "website",
    locale: "en_PH",
    alternateLocale: "fil_PH",
    url: BASE_URL,
    siteName: "Aklatang Galera",
    title: "Aklatang Galera — Knowledge for every Galeran",
    description:
      "A free digital portal for Puerto Galera — connecting every Galeran to knowledge, livelihood resources, and public services.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aklatang Galera — Puerto Galera Digital Portal",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Aklatang Galera — Knowledge for every Galeran",
    description:
      "A free digital portal for Puerto Galera — knowledge, livelihood, and public services in one place.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Aklatang Galera",
    "url": BASE_URL,
    "description": "A free digital portal for Puerto Galera — providing easy access to knowledge, livelihood resources, and public services.",
    "publisher": {
      "@type": "Organization",
      "name": "Aklatang Galera",
      "logo": {
        "@type": "ImageObject",
        "url": `${BASE_URL}/aklatang-galera-logo.png`
      }
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${BASE_URL}/aklatan?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="fil-PH">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";

export const BASE_URL = "https://aklatang-galera.djenriquez.dev";

export function createPageMetadata({
  title,
  description,
  path,
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  keywords: string[];
}): Metadata {
  const socialTitle = `${title} | Aklatang Galera`;
  return {
    title,
    description,
    keywords,
    alternates: { canonical: `${BASE_URL}${path}` },
    openGraph: {
      type: "website",
      locale: "en_PH",
      alternateLocale: "fil_PH",
      siteName: "Aklatang Galera",
      title: socialTitle,
      description,
      url: `${BASE_URL}${path}`,
      images: [
        {
          url: `${BASE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: "Aklatang Galera — Puerto Galera Digital Portal",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [`${BASE_URL}/og-image.png`],
    },
  };
}

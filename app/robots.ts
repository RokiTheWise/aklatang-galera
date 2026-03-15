import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://aklatang-galera.djenriquez.dev/sitemap.xml",
    host: "https://aklatang-galera.djenriquez.dev",
  };
}
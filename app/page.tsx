"use client";

import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  Landmark,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { pageGuidance } from "@/lib/page-guidance";

const portals = [
  {
    href: "/aklatan",
    icon: BookOpen,
    theme: "library",
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1000",
    english: {
      title: "Digital Library",
      description: "Research papers, e-books, and learning resources.",
      action: "Open library",
    },
    tagalog: {
      title: "Digital na Aklatan",
      description: "Pananaliksik, e-books, at mga sanggunian.",
      action: "Buksan ang aklatan",
    },
  },
  {
    href: "/hanapbuhay",
    icon: BriefcaseBusiness,
    theme: "livelihood",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1000",
    english: {
      title: "Livelihood",
      description: "Jobs, skills training, and business support.",
      action: "View opportunities",
    },
    tagalog: {
      title: "Hanapbuhay",
      description: "Trabaho, training, at tulong sa negosyo.",
      action: "Tingnan ang mga oportunidad",
    },
  },
  {
    href: "/public-services",
    icon: Landmark,
    theme: "services",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000",
    english: {
      title: "Public Services",
      description: "Government services, scholarships, and local news.",
      action: "Open services",
    },
    tagalog: {
      title: "Serbisyong Pampubliko",
      description: "Serbisyo ng gobyerno, scholarship, at lokal na balita.",
      action: "Buksan ang mga serbisyo",
    },
  },
];

export default function Home() {
  const { language } = useLanguage();
  return (
    <div className="simple-home">
      <h1 className="sr-only">Aklatang Galera</h1>
      <div className="home-portals">
        {portals.map(({ href, icon: Icon, theme, image, ...copy }) => {
          const t = copy[language];
          return (
            <Link
              href={href}
              key={href}
              className={`portal-card portal-${theme}`}
            >
              <div
                className="portal-photo"
                style={{ backgroundImage: `url(${image})` }}
                aria-hidden="true"
              />
              <span className="portal-icon">
                <Icon size={29} strokeWidth={2} />
              </span>
              <div className="portal-copy">
                <h2>{t.title}</h2>
                <p>{t.description}</p>
                <span className="portal-action">
                  {t.action}
                  <ArrowRight size={17} />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
      <p className="mobile-page-guide home-page-guide">
        {pageGuidance["/"][language]}
      </p>
    </div>
  );
}

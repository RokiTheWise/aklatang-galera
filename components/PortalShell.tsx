"use client";

import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  House,
  Landmark,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { PageEntrance } from "./PageEntrance";

const navigation = [
  {
    href: "/",
    icon: House,
    english: "Home",
    tagalog: "Simula",
    shortEn: "Home",
    shortFil: "Simula",
  },
  {
    href: "/aklatan",
    icon: BookOpen,
    english: "Digital Library",
    tagalog: "Digital na Aklatan",
    shortEn: "Library",
    shortFil: "Aklatan",
  },
  {
    href: "/hanapbuhay",
    icon: BriefcaseBusiness,
    english: "Livelihood",
    tagalog: "Hanapbuhay",
    shortEn: "Livelihood",
    shortFil: "Hanapbuhay",
  },
  {
    href: "/public-services",
    icon: Landmark,
    english: "Public Services",
    tagalog: "Serbisyong Pampubliko",
    shortEn: "Services",
    shortFil: "Serbisyo",
  },
];
export function PortalShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const { language, setLanguage } = useLanguage();
  const fil = language === "tagalog";
  const home = pathname === "/";
  const creatorCredit = (
    <a
      href="https://djenriquez.dev/"
      target="_blank"
      rel="noopener noreferrer"
      className="creator-credit"
    >
      <span>{fil ? "Ginawa ni" : "Made by"} Dexter Jethro Enriquez</span>
      <ArrowUpRight size={12} aria-hidden="true" />
      <span className="sr-only">
        {fil ? " (bagong tab)" : " (opens in a new tab)"}
      </span>
    </a>
  );
  return (
    <div className={`portal-shell${home ? " is-home" : ""}`}>
      <PageEntrance />
      <a href="#main-content" className="skip-link">
        {fil ? "Pumunta sa nilalaman" : "Skip to content"}
      </a>
      <aside className="sidebar">
        <Link href="/" className="brand" aria-label="Aklatang Galera — home">
          <Image
            src="/aklatang-galera-logo.png"
            alt="Aklatang Galera"
            width={168}
            height={168}
            priority
          />
        </Link>
        {home ? (
          <div className="home-mission">
            <span className="mission-line" />
            <h2>
              {fil
                ? "Kaalaman para sa bawat Galeran."
                : "Knowledge for every Galeran."}
            </h2>
            <p>
              {fil
                ? "Isang libreng digital na gabay sa kaalaman, oportunidad, at serbisyo para sa mga mamamayan ng Puerto Galera."
                : "A free digital guide to knowledge, opportunity, and public services for the people of Puerto Galera."}
            </p>
            <span className="mission-colors" aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
              <i />
            </span>
          </div>
        ) : (
          <nav
            aria-label={fil ? "Pangunahing menu" : "Main navigation"}
            className="desktop-nav"
          >
            {navigation.map(({ href, icon: Icon, ...item }) => (
              <Link
                key={href}
                href={href}
                aria-current={pathname === href ? "page" : undefined}
                className={pathname === href ? "nav-link active" : "nav-link"}
              >
                <Icon size={20} />
                <span>{item[language]}</span>
              </Link>
            ))}
          </nav>
        )}
        <div className="sidebar-footer">
          <p>
            {fil
              ? "Mula sa isang Galeran, para sa mga Galeran."
              : "Made by a Galeran, for Galerans."}
          </p>
          {creatorCredit}
        </div>
      </aside>
      <div className="workspace">
        <header className="topbar">
          <Link
            href="/"
            className="mobile-brand"
            aria-label="Aklatang Galera — home"
          >
            <Image
              src="/aklatang-galera-logo.png"
              alt=""
              width={56}
              height={56}
              priority
            />
            <span>Aklatang Galera</span>
          </Link>
          {!home && (
            <Link href="/" className="back-home">
              <ArrowLeft size={17} />
              {fil ? "Bumalik sa simula" : "Back to home"}
            </Link>
          )}
          <div
            className="language-toggle"
            data-selection={fil ? "first" : "second"}
            role="group"
            aria-label={fil ? "Wika" : "Language"}
          >
            <button
              onClick={() => setLanguage("tagalog")}
              aria-pressed={fil}
              className={fil ? "selected" : ""}
            >
              Filipino
            </button>
            <button
              onClick={() => setLanguage("english")}
              aria-pressed={!fil}
              className={!fil ? "selected" : ""}
            >
              English
            </button>
          </div>
        </header>
        <main id="main-content" className="main-content" tabIndex={-1}>
          {children}
        </main>
        <footer className="page-footer">{creatorCredit}</footer>
      </div>
      {!home && (
        <nav
          className="mobile-nav"
          aria-label={fil ? "Pangunahing menu" : "Main navigation"}
        >
          {navigation.map(({ href, icon: Icon, shortEn, shortFil }) => (
            <Link
              key={href}
              href={href}
              className={pathname === href ? "active" : ""}
              aria-current={pathname === href ? "page" : undefined}
            >
              <Icon size={21} />
              <span>{fil ? shortFil : shortEn}</span>
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
}

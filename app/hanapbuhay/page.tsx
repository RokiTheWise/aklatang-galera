"use client";

import { useState } from "react";
import {
  ArrowLeft,
  Search,
  ExternalLink,
  MapPin,
  Briefcase,
  GraduationCap,
  Store,
  Star,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

// ─── Resource Data ────────────────────────────────────────────────────────────
type Category = "jobs" | "skills" | "entrepreneurship";

interface Resource {
  id: number;
  name: string;
  category: Category;
  link: string;
  logoUrl: string;
  free: boolean; // whether it's free to use
  desc: { tagalog: string; english: string };
}

const resources: Resource[] = [
  {
    id: 1,
    category: "entrepreneurship",
    free: true,
    name: "Canva for Business",
    link: "https://www.canva.com/",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.svg",
    desc: {
      tagalog: "Libreng marketing materials para sa iyong negosyo.",
      english: "Free marketing materials and graphics for your business.",
    },
  },
  {
    id: 2,
    category: "skills",
    free: true,
    name: "Coursera",
    link: "https://www.coursera.org/",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/9/97/Coursera-Logo_600x600.svg",
    desc: {
      tagalog: "Mga kurso mula sa top universities — maraming libre.",
      english: "Courses from top universities — many are free to audit.",
    },
  },
  {
    id: 3,
    category: "entrepreneurship",
    free: true,
    name: "DTI NEGOSYO Center",
    link: "https://www.dti.gov.ph/negosyo/",
    logoUrl: "https://upload.wikimedia.org/wikipedia/en/f/fc/DTI_PH_Logo.png",
    desc: {
      tagalog: "Tulong sa pagpapatala at pagpapalago ng negosyo mula sa DTI.",
      english: "Business registration and growth support from DTI.",
    },
  },
  {
    id: 4,
    category: "entrepreneurship",
    free: true,
    name: "DTI Oriental Mindoro",
    link: "https://www.facebook.com/DTI.OrientalMindoro",
    logoUrl: "https://upload.wikimedia.org/wikipedia/en/f/fc/DTI_PH_Logo.png",
    desc: {
      tagalog:
        "Mga programa at balita para sa mga negosyante sa Oriental Mindoro.",
      english: "Programs and updates for entrepreneurs in Oriental Mindoro.",
    },
  },
  {
    id: 5,
    category: "skills",
    free: true,
    name: "freeCodeCamp",
    link: "https://www.freecodecamp.org/",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/3/39/FreeCodeCamp_logo.png",
    desc: {
      tagalog: "Libreng web development at coding curriculum.",
      english: "Free full web development and coding curriculum.",
    },
  },
  {
    id: 6,
    category: "entrepreneurship",
    free: true,
    name: "Google Business Profile",
    link: "https://business.google.com/",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    desc: {
      tagalog: "I-list ang iyong negosyo sa Google — libre.",
      english: "List your business on Google — completely free.",
    },
  },
  {
    id: 7,
    category: "skills",
    free: true,
    name: "Google Digital Garage",
    link: "https://grow.google/intl/en_ph/",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    desc: {
      tagalog: "Libreng digital skills training mula sa Google.",
      english: "Free digital skills training from Google.",
    },
  },
  {
    id: 8,
    category: "jobs",
    free: true,
    name: "JobStreet Philippines",
    link: "https://www.jobstreet.com.ph/",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/a3/JobStreet_Logo.svg",
    desc: {
      tagalog: "Isa sa pinakamalaking job site sa Pilipinas at Asya.",
      english: "One of the largest job sites in the Philippines and Asia.",
    },
  },
  {
    id: 9,
    category: "jobs",
    free: true,
    name: "Kalibrr",
    link: "https://www.kalibrr.com/",
    logoUrl: "https://www.kalibrr.com/favicon.ico",
    desc: {
      tagalog: "Job matching platform na nakatuon sa mga Pilipino.",
      english: "Job matching platform focused on Filipino job seekers.",
    },
  },
  {
    id: 10,
    category: "skills",
    free: true,
    name: "Khan Academy",
    link: "https://www.khanacademy.org/",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/9/97/KA_Horizontal_Reversed.png",
    desc: {
      tagalog: "Libreng pag-aaral sa math, agham, at marami pa.",
      english: "Free learning in math, science, and more.",
    },
  },
  {
    id: 11,
    category: "entrepreneurship",
    free: true,
    name: "LinkedIn for Business",
    link: "https://business.linkedin.com/",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
    desc: {
      tagalog: "I-promote ang iyong brand at negosyo sa LinkedIn.",
      english: "Promote your brand and business on LinkedIn.",
    },
  },
  {
    id: 12,
    category: "jobs",
    free: true,
    name: "LinkedIn Jobs",
    link: "https://www.linkedin.com/jobs/",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
    desc: {
      tagalog: "Global na job network — para sa lokal at remote na trabaho.",
      english: "Global job network — for local and remote opportunities.",
    },
  },
  {
    id: 13,
    category: "jobs",
    free: true,
    name: "OnlineJobs.ph",
    link: "https://www.onlinejobs.ph/",
    logoUrl: "https://www.onlinejobs.ph/favicon.ico",
    desc: {
      tagalog: "Platform para sa mga remote at online na trabaho.",
      english: "Platform for remote and online work opportunities.",
    },
  },
  {
    id: 14,
    category: "jobs",
    free: true,
    name: "OR Mindoro Gov Careers",
    link: "https://ormindoro.gov.ph/careers/",
    logoUrl:
      "https://ormindoro.gov.ph/wp-content/uploads/2021/10/or-mindoro-logo.png",
    desc: {
      tagalog: "Mga bakanteng posisyon sa gobyerno ng Oriental Mindoro.",
      english: "Open government positions in Oriental Mindoro.",
    },
  },
  {
    id: 15,
    category: "jobs",
    free: true,
    name: "PESO Job Portal",
    link: "https://www.phil-jobnet.dole.gov.ph/",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/en/2/29/Department_of_Labor_and_Employment_%28DOLE%29.svg",
    desc: {
      tagalog:
        "Opisyal na job portal ng DOLE — libre para sa lahat ng Pilipino.",
      english: "DOLE's official job portal — free for all Filipinos.",
    },
  },
  {
    id: 16,
    category: "entrepreneurship",
    free: true,
    name: "Resume.com",
    link: "https://www.resume.com/",
    logoUrl: "https://www.resume.com/favicon.ico",
    desc: {
      tagalog: "Gumawa ng propesyonal na resume nang libre.",
      english: "Build a professional resume for free.",
    },
  },
  {
    id: 17,
    category: "skills",
    free: true,
    name: "TESDA Online Program",
    link: "https://top.tesda.gov.ph/",
    logoUrl: "https://upload.wikimedia.org/wikipedia/en/3/3b/TESDA_logo.png",
    desc: {
      tagalog: "Libreng online na mga kurso mula sa TESDA — may sertipiko.",
      english: "Free online courses from TESDA — with certificates.",
    },
  },
];

// ─── Category config ──────────────────────────────────────────────────────────
const categories = [
  {
    key: "jobs" as Category,
    icon: Briefcase,
    color: "#0d2645",
    bg: "rgba(13,38,69,0.07)",
  },
  {
    key: "skills" as Category,
    icon: GraduationCap,
    color: "#0891b2",
    bg: "rgba(8,145,178,0.07)",
  },
  {
    key: "entrepreneurship" as Category,
    icon: Store,
    color: "#059669",
    bg: "rgba(5,150,105,0.07)",
  },
  {
    key: "local" as Category,
    icon: MapPin,
    color: "#d97706",
    bg: "rgba(217,119,6,0.07)",
  },
];

const categoryColor: Record<Category, string> = {
  jobs: "#0d2645",
  skills: "#0891b2",
  entrepreneurship: "#059669",
};
const categoryBg: Record<Category, string> = {
  jobs: "rgba(13,38,69,0.08)",
  skills: "rgba(8,145,178,0.08)",
  entrepreneurship: "rgba(5,150,105,0.08)",
};
const categoryBorder: Record<Category, string> = {
  jobs: "rgba(13,38,69,0.15)",
  skills: "rgba(8,145,178,0.15)",
  entrepreneurship: "rgba(5,150,105,0.15)",
};

export default function Hanapbuhay() {
  const { language, setLanguage } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<Category | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [freeOnly, setFreeOnly] = useState(false);

  const ui = {
    tagalog: {
      back: "Bumalik",
      headline: "Hanapbuhay",
      subtitle:
        "Mga trabaho, training, at resources para sa negosyo — para sa bawat Galeran.",
      sideNote: "Lahat ng resources dito ay libre o subsidized ng gobyerno.",
      categories: {
        all: "Lahat",
        jobs: "Trabaho",
        skills: "Kasanayan",
        entrepreneurship: "Negosyo",
      },
      searchPlaceholder: "Maghanap ng resource...",
      freeLabel: "Libre lang",
      results: "resulta",
      visit: "Puntahan",
      emptyTitle: "Walang nahanap.",
      emptyDesc: "Subukan ang ibang keyword o kategorya.",
      freeTag: "Libre",
    },
    english: {
      back: "Back",
      headline: "Livelihood",
      subtitle: "Jobs, training, and business resources — for every Galeran.",
      sideNote: "All resources here are free or government-subsidized.",
      categories: {
        all: "All",
        jobs: "Jobs",
        skills: "Skills",
        entrepreneurship: "Business",
      },
      searchPlaceholder: "Search resources...",
      freeLabel: "Free only",
      results: "results",
      visit: "Visit",
      emptyTitle: "No results found.",
      emptyDesc: "Try a different keyword or category.",
      freeTag: "Free",
    },
  };
  const t = ui[language];

  const filtered = resources.filter((r) => {
    const matchCat = activeCategory === "all" || r.category === activeCategory;
    const matchFree = !freeOnly || r.free;
    const q = searchQuery.toLowerCase();
    const matchQuery =
      !q ||
      r.name.toLowerCase().includes(q) ||
      r.desc[language].toLowerCase().includes(q);
    return matchCat && matchFree && matchQuery;
  });

  const navyBg = { backgroundColor: "#0d2645" } as const;
  const skyBorder = { borderColor: "#e0f2fe" } as const;
  const onFocusSky = (e: React.FocusEvent<HTMLInputElement>) =>
    (e.currentTarget.style.borderColor = "#06b6d4");
  const onBlurSky = (e: React.FocusEvent<HTMLInputElement>) =>
    (e.currentTarget.style.borderColor = "#bae6fd");

  const CategoryIcon = ({ cat }: { cat: Category }) => {
    const cfg = categories.find((c) => c.key === cat)!;
    return <cfg.icon size={10} />;
  };

  return (
    <div className="min-h-screen w-screen flex flex-col md:flex-row bg-white">
      {/* ── LEFT PANEL ─────────────────────────────────────────── */}
      <aside
        className="relative flex flex-col w-full md:w-[32%] lg:w-[30%] shrink-0 md:h-screen md:sticky md:top-0 py-8 px-7 md:py-10 md:px-9 overflow-hidden"
        style={{ backgroundColor: "#0d2645" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: 0.045,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div
          className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full pointer-events-none blur-3xl"
          style={{ backgroundColor: "rgba(45,212,191,0.12)" }}
        />

        {/* Back */}
        <div className="relative z-10 mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition-opacity hover:opacity-70"
            style={{ color: "rgba(6,182,212,0.7)" }}
          >
            <ArrowLeft size={14} /> {t.back}
          </Link>
        </div>

        {/* Logo */}
        <div className="relative z-10 mb-8">
          <Image
            src="/aklatang-galera-logo.png"
            alt="Aklatang Galera Logo"
            width={160}
            height={73}
            priority
            className="drop-shadow-md brightness-0 invert opacity-95"
          />
        </div>

        {/* Identity */}
        <div className="relative z-10 flex-1 flex flex-col justify-center gap-5">
          <div>
            <div
              className="w-7 h-0.5 mb-5 rounded-full"
              style={{ backgroundColor: "#f59e0b" }}
            />
            <h1
              className="text-2xl lg:text-3xl font-extrabold leading-tight tracking-tight mb-3"
              style={{ color: "#ffffff" }}
            >
              {t.headline}
            </h1>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "rgba(186,230,253,0.7)" }}
            >
              {t.subtitle}
            </p>
          </div>

          {/* Category legend */}
          <div className="flex flex-col gap-2.5">
            {categories.map((cat) => {
              const count = resources.filter(
                (r) => r.category === cat.key,
              ).length;
              return (
                <div key={cat.key} className="flex items-center gap-2.5">
                  <div
                    className="flex items-center justify-center w-6 h-6 rounded-lg shrink-0"
                    style={{ backgroundColor: cat.bg.replace("0.07", "0.15") }}
                  >
                    <cat.icon size={12} style={{ color: cat.color }} />
                  </div>
                  <span
                    className="text-xs font-semibold"
                    style={{ color: "rgba(186,230,253,0.75)" }}
                  >
                    {t.categories[cat.key]}
                  </span>
                  <span
                    className="ml-auto text-[10px] font-bold tabular-nums"
                    style={{ color: "rgba(186,230,253,0.4)" }}
                  >
                    {count}
                  </span>
                </div>
              );
            })}
          </div>

          <div
            className="rounded-xl px-4 py-3 text-xs leading-relaxed"
            style={{
              backgroundColor: "rgba(6,182,212,0.08)",
              color: "rgba(186,230,253,0.7)",
              border: "1px solid rgba(6,182,212,0.15)",
            }}
          >
            {t.sideNote}
          </div>
        </div>

        {/* Dev credit */}
        <div
          className="relative z-10 pt-6 mt-6 border-t"
          style={{ borderColor: "rgba(255,255,255,0.07)" }}
        >
          <p className="text-[10px]" style={{ color: "rgba(6,182,212,0.4)" }}>
            Built by{" "}
            <a
              href="https://djenriquez.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 transition-opacity hover:opacity-80"
              style={{ color: "rgba(6,182,212,0.6)" }}
            >
              Dexter Jethro Enriquez
            </a>{" "}
            · Puerto Galera Public Library
          </p>
        </div>
      </aside>

      {/* ── RIGHT PANEL ────────────────────────────────────────── */}
      <main
        className="flex-1 flex flex-col min-h-screen"
        style={{ backgroundColor: "#f0f9ff" }}
      >
        {/* Sticky top bar */}
        <div
          className="sticky top-0 z-40 backdrop-blur-sm border-b px-6 lg:px-8 py-4"
          style={{
            backgroundColor: "rgba(240,249,255,0.95)",
            borderColor: "#e0f2fe",
          }}
        >
          {/* Row 1: Search + Free toggle + Language */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1 max-w-sm">
              <Search
                size={14}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.searchPlaceholder}
                className="w-full rounded-xl border bg-white py-2.5 pl-9 pr-4 text-sm font-medium text-slate-800 placeholder-slate-400 outline-none transition-all"
                style={{ borderColor: "#bae6fd" }}
                onFocus={onFocusSky}
                onBlur={onBlurSky}
              />
            </div>

            {/* Free toggle */}
            <button
              onClick={() => setFreeOnly((f) => !f)}
              className={`flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-bold border transition-all ${freeOnly ? "text-white" : "bg-white text-slate-400 hover:bg-sky-50"}`}
              style={
                freeOnly
                  ? { backgroundColor: "#059669", borderColor: "#059669" }
                  : { borderColor: "#e0f2fe" }
              }
            >
              <Star size={11} fill={freeOnly ? "white" : "none"} />
              {t.freeLabel}
            </button>

            {/* Language toggle */}
            <div className="flex items-center gap-1 bg-white border border-sky-100 p-1 rounded-xl shrink-0 ml-auto">
              {(["tagalog", "english"] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-wider transition-all ${language === lang ? "text-white shadow-sm" : "text-slate-400 hover:bg-sky-50"}`}
                  style={language === lang ? navyBg : {}}
                >
                  <span>{lang === "tagalog" ? "🇵🇭" : "🇬🇧"}</span>
                  {lang === "tagalog" ? "FIL" : "ENG"}
                </button>
              ))}
            </div>
          </div>

          {/* Row 2: Category tabs */}
          <div className="flex items-center gap-2 mt-3 overflow-x-auto pb-0.5">
            <button
              onClick={() => setActiveCategory("all")}
              className={`shrink-0 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${activeCategory === "all" ? "text-white shadow-sm" : "bg-white text-slate-400 hover:bg-sky-50 border"}`}
              style={
                activeCategory === "all" ? navyBg : { borderColor: "#e0f2fe" }
              }
            >
              {t.categories.all} · {resources.length}
            </button>
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`shrink-0 flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold border transition-all ${activeCategory === cat.key ? "text-white shadow-sm" : "bg-white text-slate-500 hover:bg-sky-50"}`}
                style={
                  activeCategory === cat.key
                    ? { backgroundColor: cat.color, borderColor: cat.color }
                    : { borderColor: "#e0f2fe" }
                }
              >
                <cat.icon size={11} />
                {t.categories[cat.key]}
              </button>
            ))}

            <span className="ml-auto shrink-0 text-[11px] font-bold uppercase tracking-widest text-slate-400 whitespace-nowrap">
              {filtered.length} {t.results}
            </span>
          </div>
        </div>

        {/* ── Resource Grid ── */}
        <div className="flex-1 px-6 lg:px-8 py-6">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((resource) => {
                const color = categoryColor[resource.category];
                const bg = categoryBg[resource.category];
                const border = categoryBorder[resource.category];
                const CatIcon = categories.find(
                  (c) => c.key === resource.category,
                )!.icon;

                return (
                  <a
                    key={resource.id}
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col justify-between rounded-2xl bg-white border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    style={skyBorder}
                  >
                    <div>
                      {/* Logo + badges row */}
                      <div className="mb-4 flex items-start justify-between gap-2">
                        <div className="h-8 w-28 shrink-0">
                          <img
                            src={resource.logoUrl}
                            alt={resource.name}
                            className="h-full w-full object-contain object-left"
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display =
                                "none";
                            }}
                          />
                        </div>
                        <div className="flex flex-col items-end gap-1.5 shrink-0">
                          {/* Category badge */}
                          <span
                            className="flex items-center gap-1 rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider"
                            style={{
                              backgroundColor: bg,
                              color,
                              border: `1px solid ${border}`,
                            }}
                          >
                            <CatIcon size={8} />
                            {t.categories[resource.category]}
                          </span>
                          {/* Free badge */}
                          {resource.free && (
                            <span
                              className="flex items-center gap-1 rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider"
                              style={{
                                backgroundColor: "rgba(5,150,105,0.07)",
                                color: "#059669",
                                border: "1px solid rgba(5,150,105,0.18)",
                              }}
                            >
                              <Star size={8} fill="#059669" />
                              {t.freeTag}
                            </span>
                          )}
                        </div>
                      </div>

                      <h2 className="mb-1.5 text-base font-bold text-slate-900">
                        {resource.name}
                      </h2>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {resource.desc[language]}
                      </p>
                    </div>

                    {/* CTA */}
                    <div className="mt-5 pt-4 border-t" style={skyBorder}>
                      <div
                        className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wide transition-all duration-200 group-hover:gap-2.5"
                        style={{ backgroundColor: "#0d2645", color: "#ffffff" }}
                      >
                        {t.visit}
                        <ExternalLink
                          size={11}
                          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-32 text-center">
              <div
                className="mb-4 rounded-full p-5"
                style={{ backgroundColor: "rgba(13,38,69,0.05)" }}
              >
                <Search size={28} style={{ color: "#0d2645", opacity: 0.3 }} />
              </div>
              <p className="text-base font-bold text-slate-400">
                {t.emptyTitle}
              </p>
              <p className="text-sm text-slate-300 mt-1">{t.emptyDesc}</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

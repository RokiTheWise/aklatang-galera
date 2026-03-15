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
  X,
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
    logoUrl: "canva-logo.png",
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
    link: "https://www.coursera.org/courses?query=free",
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
    link: "https://www.dti.gov.ph/",
    logoUrl: "dti-logo.png",
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
    logoUrl: "dti-ormin-logo.jpg",
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
    logoUrl: "/jobstreet-logo.png",
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
    logoUrl: "/khan-logo.png",
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
    logoUrl: "onlinejobs-logo.jpg",
    desc: {
      tagalog: "Platform para sa mga remote at online na trabaho.",
      english: "Platform for remote and online work opportunities.",
    },
  },
  {
    id: 14,
    category: "jobs",
    free: true,
    name: "OrMin Goverment Careers",
    link: "https://ormindoro.gov.ph/careers/",
    logoUrl: "ormin-logo.png",
    desc: {
      tagalog: "Mga bakanteng posisyon sa gobyerno ng Oriental Mindoro.",
      english: "Open government positions in Oriental Mindoro.",
    },
  },
  {
    id: 15,
    category: "jobs",
    free: true,
    name: "Civil Service Commission Jobs Opportunities",
    link: "https://csc.gov.ph/career/",
    logoUrl: "csc-logo.png",
    desc: {
      tagalog:
        "Opisyal na job portal ng CSC — libre para sa lahat ng Pilipino.",
      english: "CSC's official job portal — free for all Filipinos.",
    },
  },
  {
    id: 16,
    category: "jobs",
    free: true,
    name: "Resume.com",
    link: "https://www.resume.com/",
    logoUrl: "resume-logo.png",
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
    link: "https://e-tesda.gov.ph/course/",
    logoUrl: "tesda-logo.jpg",
    desc: {
      tagalog: "Libreng online na mga kurso mula sa TESDA — may sertipiko.",
      english: "Free online courses from TESDA — with certificates.",
    },
  },
  {
    id: 18,
    category: "jobs",
    free: true,
    name: "PhilJobNet",
    link: "https://philjobnet.gov.ph/",
    logoUrl: "/pej-logo.jpeg",
    desc: {
      tagalog: "Ang opisyal na job portal ng gobyerno ng Pilipinas (DOLE).",
      english: "The official job portal of the Philippine government (DOLE).",
    },
  },
  {
    id: 19,
    category: "jobs",
    free: true,
    name: "Indeed Philippines",
    link: "https://ph.indeed.com/",
    logoUrl: "/indeed-logo.png",
    desc: {
      tagalog: "Isang malawak na aggregator ng mga trabaho sa bansa.",
      english: "A massive aggregator of job listings across the country.",
    },
  },
  {
    id: 22,
    category: "skills",
    free: true,
    name: "UPOU MODeL",
    link: "https://model.upou.edu.ph/",
    logoUrl: "/up-logo.png",
    desc: {
      tagalog: "Libreng self-paced online courses mula sa UP Open University.",
      english: "Free self-paced online courses from the UP Open University.",
    },
  },
  {
    id: 23,
    category: "skills",
    free: true,
    name: "DICT ICT Trainings",
    link: "https://dict.gov.ph/trainings",
    logoUrl: "/dict-logo.png",
    desc: {
      tagalog:
        "Libreng training sa IT, cybersecurity, at freelancing mula sa DICT.",
      english: "Free training in IT, cybersecurity, and freelancing from DICT.",
    },
  },
  {
    id: 24,
    category: "entrepreneurship",
    free: true,
    name: "SEC Philippines",
    link: "https://www.sec.gov.ph/",
    logoUrl: "/sec-logo.png",
    desc: {
      tagalog:
        "Opisyal na website para sa pagpaparehistro ng korporasyon at partnership.",
      english: "Official site for registering corporations and partnerships.",
    },
  },
  {
    id: 25,
    category: "entrepreneurship",
    free: true,
    name: "BIR for Small Business",
    link: "https://www.bir.gov.ph/",
    logoUrl: "/bir-logo.png",
    desc: {
      tagalog:
        "Gabay para sa pagpaparehistro ng buwis para sa mga bagong negosyo.",
      english: "Tax registration guides and updates for new businesses.",
    },
  },
  {
    id: 26,
    category: "entrepreneurship",
    free: true,
    name: "Go Negosyo",
    link: "https://www.gonegosyo.ph/",
    logoUrl: "/gonegosyo-logo.png",
    desc: {
      tagalog:
        "Libreng mentorship at resources para sa mga nagnanais mag-negosyo.",
      english: "Free mentorship and resources for aspiring entrepreneurs.",
    },
  },
  {
    id: 27,
    category: "entrepreneurship",
    free: true,
    name: "IPOPHL",
    link: "https://www.ipophil.gov.ph/",
    logoUrl: "/ipophil-logo.png",
    desc: {
      tagalog:
        "Protektahan ang iyong brand o imbensyon sa pamamagitan ng Trademark at Patent.",
      english: "Protect your brand or invention through Trademark and Patents.",
    },
  },
];

// ─── Category config ──────────────────────────────────────────────────────────
const categories = [
  {
    key: "jobs" as Category,
    icon: Briefcase,
    color: "#0891b2",
    bg: "rgba(8,145,178,0.07)",
  },
  {
    key: "skills" as Category,
    icon: GraduationCap,
    color: "#7c3aed",
    bg: "rgba(124,58,237,0.07)",
  },
  {
    key: "entrepreneurship" as Category,
    icon: Store,
    color: "#059669",
    bg: "rgba(5,150,105,0.07)",
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

const categoryOrder: Record<Category | "all", number> = {
  all: 0,
  jobs: 1,
  skills: 2,
  entrepreneurship: 3,
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
      clearFilters: "I-clear lahat ng filter",
      freeTag: "Libre",
    },
    english: {
      back: "Back to Home",
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
      clearFilters: "Clear all filters",
      freeTag: "Free",
    },
  };
  const t = ui[language];

  const filtered = resources
    .filter((r) => {
      const matchCat =
        activeCategory === "all" || r.category === activeCategory;
      const matchFree = !freeOnly || r.free;
      const q = searchQuery.toLowerCase();
      const matchQuery =
        !q ||
        r.name.toLowerCase().includes(q) ||
        r.desc[language].toLowerCase().includes(q);
      return matchCat && matchFree && matchQuery;
    })
    .sort((a, b) => {
      if (a.category !== b.category) {
        return categoryOrder[a.category] - categoryOrder[b.category];
      }
      return a.name.localeCompare(b.name);
    });

  const navyBg = { backgroundColor: "#0d2645" } as const;
  const skyBorder = { borderColor: "#e0f2fe" } as const;
  const onFocusSky = (e: React.FocusEvent<HTMLInputElement>) =>
    (e.currentTarget.style.borderColor = "#06b6d4");
  const onBlurSky = (e: React.FocusEvent<HTMLInputElement>) =>
    (e.currentTarget.style.borderColor = "#bae6fd");

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
          <a href="/">
            <Image
              src="/aklatang-galera-logo.png"
              alt="Aklatang Galera Logo"
              width={160}
              height={73}
              priority
              className="drop-shadow-md brightness-0 invert opacity-95"
            />
          </a>
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

          {/* Category legend - Interactive */}
          <div className="flex flex-col gap-2.5">
            {categories.map((cat) => {
              const count = resources.filter(
                (r) => r.category === cat.key,
              ).length;
              return (
                <button
                  key={cat.key}
                  onClick={() => {
                    setActiveCategory(cat.key);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className={`flex items-center gap-2.5 w-full text-left p-2 -ml-2 rounded-xl transition-all duration-300 group outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/20 ${activeCategory === cat.key ? "bg-white/10" : "hover:bg-white/5"}`}
                >
                  <div
                    className="flex items-center justify-center w-7 h-7 rounded-lg shrink-0 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: cat.bg.replace("0.07", "0.15") }}
                  >
                    <cat.icon size={13} style={{ color: cat.color }} />
                  </div>
                  <span
                    className={`text-xs font-semibold transition-colors ${activeCategory === cat.key ? "text-white" : "text-rgba(186,230,253,0.75)"} group-hover:text-white`}
                  >
                    {t.categories[cat.key]}
                  </span>
                  <span
                    className="ml-auto text-[10px] font-bold tabular-nums opacity-60 group-hover:opacity-100"
                    style={{ color: "rgba(186,230,253,0.4)" }}
                  >
                    {count}
                  </span>
                </button>
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
            <div className="relative flex-1 max-w-sm group">
              <Search
                size={14}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none transition-colors group-focus-within:text-cyan-600"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.searchPlaceholder}
                className="w-full rounded-xl border bg-white py-2.5 pl-9 pr-10 text-sm font-medium text-slate-800 placeholder-slate-400 outline-none transition-all shadow-sm focus:ring-4 focus:ring-sky-100"
                style={{ borderColor: "#bae6fd" }}
                onFocus={onFocusSky}
                onBlur={onBlurSky}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-slate-100 text-slate-400 transition-colors"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Free toggle */}
            <button
              onClick={() => setFreeOnly((f) => !f)}
              className={`flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-bold border transition-all shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/20 active:scale-[0.98] ${freeOnly ? "text-white" : "bg-white text-slate-400 hover:bg-sky-50"}`}
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
            <div className="flex items-center gap-1 bg-white border border-sky-100 p-1 rounded-xl shrink-0 ml-auto shadow-sm">
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
          <div className="flex items-center gap-2 mt-3 overflow-x-auto pb-0.5 no-scrollbar">
            <button
              onClick={() => setActiveCategory("all")}
              className={`shrink-0 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/20 active:scale-[0.98] ${activeCategory === "all" ? "text-white" : "bg-white text-slate-400 hover:bg-sky-50 border"}`}
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
                className={`shrink-0 flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold border transition-all shadow-sm outline-none active:scale-[0.98] ${activeCategory === cat.key ? "text-white focus-visible:ring-2 focus-visible:ring-offset-1" : "bg-white text-slate-500 hover:bg-sky-50"}`}
                style={
                  activeCategory === cat.key
                    ? {
                        backgroundColor: cat.color,
                        borderColor: cat.color,
                        boxShadow: `0 4px 12px ${cat.bg.replace("0.07", "0.3")}`,
                      }
                    : { borderColor: "#e0f2fe" }
                }
              >
                <cat.icon size={11} />
                {t.categories[cat.key]}
              </button>
            ))}

            <div className="ml-auto shrink-0 px-3 py-1.5 bg-slate-100 rounded-lg">
              <p className="text-[10px] font-black uppercase tracking-tighter text-slate-500 whitespace-nowrap">
                {filtered.length} {t.results}
              </p>
            </div>
          </div>
        </div>

        {/* ── Resource Grid ── */}
        <div className="flex-1 px-6 lg:px-8 py-8 animate-in slide-in-from-right duration-500">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
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
                    className="group relative flex flex-col justify-between rounded-3xl bg-white border p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/20"
                    style={skyBorder}
                  >
                    {/* Vertical accent bar */}
                    <div
                      className="absolute left-0 top-0 bottom-0 w-1.5 transition-all duration-300 group-hover:w-2"
                      style={{ backgroundColor: color }}
                    />

                    <div>
                      {/* Logo + badges row */}
                      <div className="mb-6 flex items-start justify-between gap-4">
                        <div className="h-10 w-32 shrink-0">
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
                            className="flex items-center gap-1 rounded-full px-3 py-1 text-[9px] font-black uppercase tracking-widest shadow-sm"
                            style={{
                              backgroundColor: bg,
                              color,
                              border: `1px solid ${border}`,
                            }}
                          >
                            <CatIcon size={9} />
                            {t.categories[resource.category]}
                          </span>
                          {/* Free badge */}
                          {resource.free && (
                            <span className="flex items-center gap-1 rounded-full px-3 py-1 text-[9px] font-black uppercase tracking-widest bg-emerald-50 text-emerald-600 border border-emerald-100 shadow-sm">
                              <Star size={9} fill="currentColor" />
                              {t.freeTag}
                            </span>
                          )}
                        </div>
                      </div>

                      <h2 className="mb-2 text-lg font-black text-slate-900 leading-snug">
                        {resource.name}
                      </h2>
                      <p className="text-sm text-slate-500 leading-relaxed font-medium">
                        {resource.desc[language]}
                      </p>
                    </div>

                    {/* CTA */}
                    <div className="mt-6 pt-5 border-t border-slate-50 flex items-center justify-between">
                      <div
                        className="inline-flex items-center gap-2 rounded-2xl px-5 py-2.5 text-xs font-black uppercase tracking-widest transition-all duration-300 group-hover:gap-3 group-hover:shadow-lg group-hover:shadow-sky-900/10 active:scale-95"
                        style={{ backgroundColor: "#0d2645", color: "#ffffff" }}
                      >
                        {t.visit}
                        <ExternalLink
                          size={12}
                          className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </div>

                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="flex gap-1">
                          {[1, 2, 3].map((i) => (
                            <div
                              key={i}
                              className="w-1 h-1 rounded-full bg-slate-200"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-40 text-center animate-in fade-in slide-in-from-bottom duration-700">
              <div
                className="mb-6 rounded-full p-8 shadow-inner relative overflow-hidden"
                style={{ backgroundColor: "rgba(13,38,69,0.03)" }}
              >
                <Search
                  size={40}
                  className="relative z-10"
                  style={{ color: "#0d2645", opacity: 0.2 }}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-sky-50 to-transparent animate-pulse" />
              </div>
              <p className="text-xl font-black text-slate-400 tracking-tight">
                {t.emptyTitle}
              </p>
              <p className="text-base text-slate-300 mt-2 max-w-xs mx-auto font-medium">
                {t.emptyDesc}
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                  setFreeOnly(false);
                }}
                className="mt-8 flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-black uppercase tracking-widest transition-all hover:bg-slate-100 ring-1 ring-slate-200 outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/20 active:scale-[0.98]"
                style={{ color: "#0d2645" }}
              >
                <X size={14} /> {t.clearFilters}
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

"use client";

import { useState } from "react";
import {
  ArrowLeft,
  Search,
  ExternalLink,
  Landmark,
  GraduationCap,
  Newspaper,
  Star,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

// ─── Types ────────────────────────────────────────────────────────────────────
type Category = "egovernment" | "scholarships" | "transparency";

interface Resource {
  id: number;
  name: string;
  category: Category;
  link: string;
  logoUrl: string;
  featured?: boolean; // eLGU gets special top treatment
  tags?: string[]; // e.g. ["BPLS", "Cedula", "Civil Registry"]
  desc: { tagalog: string; english: string };
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const resources: Resource[] = [
  // ── E-Government ──────────────────────────────────────────────────────────
  {
    id: 1,
    category: "egovernment",
    featured: true,
    name: "eLGU Puerto Galera",
    link: "https://elgu-puerto-galera-oriental-mindoro.e.gov.ph/elgu-service",
    logoUrl: "/elgu-logo.png",
    tags: ["Business Permit (BPLS)", "Civil Registry", "Cedula / CTC"],
    desc: {
      tagalog:
        "Opisyal na online portal ng Munisipalidad ng Puerto Galera para sa mga serbisyong sibil.",
      english:
        "Official online portal of the Municipality of Puerto Galera for civil services.",
    },
  },
  {
    id: 2,
    category: "egovernment",
    featured: false,
    name: "eSEC Portal",
    link: "https://esecure.sec.gov.ph/",
    logoUrl: "sec-logo.png",
    desc: {
      tagalog: "Online na pagpapatala ng negosyo at korporasyon sa SEC.",
      english: "Online business and corporation registration with the SEC.",
    },
  },
  {
    id: 3,
    category: "egovernment",
    featured: false,
    name: "LTO Online Portal",
    link: "https://portal.lto.gov.ph/",
    logoUrl: "lto-logo.svg",
    desc: {
      tagalog:
        "I-renew ang lisensya, rehistro, at iba pang serbisyo ng LTO online.",
      english:
        "Renew your license, registration, and other LTO services online.",
    },
  },
  {
    id: 4,
    category: "egovernment",
    featured: false,
    name: "My.SSS Portal",
    link: "https://www.sss.gov.ph/",
    logoUrl: "sss-logo.svg",
    desc: {
      tagalog:
        "I-check ang SSS contributions, mag-apply ng benefits, at marami pa.",
      english: "Check SSS contributions, apply for benefits, and more.",
    },
  },
  {
    id: 5,
    category: "egovernment",
    featured: false,
    name: "Pag-IBIG Fund Online",
    link: "https://www.pagibigfundservices.com/",
    logoUrl: "pag-ibig-logo.svg",
    desc: {
      tagalog:
        "Mag-contribute, mag-apply ng loan, at ma-access ang Pag-IBIG services online.",
      english:
        "Contribute, apply for a loan, and access Pag-IBIG services online.",
    },
  },
  {
    id: 6,
    category: "egovernment",
    featured: false,
    name: "PhilHealth Member Portal",
    link: "https://memberinquiry.philhealth.gov.ph/member/",
    logoUrl: "philhealth-logo.svg",
    desc: {
      tagalog: "I-verify ang PhilHealth contributions at i-download ang MDR.",
      english: "Verify PhilHealth contributions and download your MDR.",
    },
  },
  {
    id: 7,
    category: "egovernment",
    featured: false,
    name: "PhilSys Registration",
    link: "https://philsys.gov.ph/",
    logoUrl: "philsys-logo.png",
    desc: {
      tagalog:
        "Mag-apply at i-track ang iyong Philippine National ID (PhilSys).",
      english: "Apply for and track your Philippine National ID (PhilSys).",
    },
  },

  // ── Scholarships ──────────────────────────────────────────────────────────
  {
    id: 8,
    category: "scholarships",
    featured: false,
    name: "Ateneo de Manila Scholarships",
    link: "https://www.ateneo.edu/college/scholarships/programs",
    logoUrl: "ateneo-logo.png",
    desc: {
      tagalog:
        "Mga scholarship at financial aid programs ng Ateneo de Manila University.",
      english:
        "Scholarship and financial aid programs of Ateneo de Manila University.",
    },
  },
  {
    id: 9,
    category: "scholarships",
    featured: false,
    name: "CHED UniFAST Scholarships",
    link: "https://unifast.gov.ph/",
    logoUrl: "ched-logo.png",
    desc: {
      tagalog:
        "TES, StuFAPs, at iba pang scholarship programs ng CHED para sa mga Pilipino.",
      english:
        "TES, StuFAPs, and other CHED scholarship programs for Filipino students.",
    },
  },
  {
    id: 10,
    category: "scholarships",
    featured: false,
    name: "De La Salle University Scholarships",
    link: "https://www.dlsu.edu.ph/admission/scholarship/",
    logoUrl: "dlsu-logo.png",
    desc: {
      tagalog:
        "Mga iskolarship at financial assistance ng De La Salle University.",
      english:
        "Scholarship and financial assistance programs of De La Salle University.",
    },
  },
  {
    id: 11,
    category: "scholarships",
    featured: false,
    name: "DOST-SEI Scholarships",
    link: "https://www.sei.dost.gov.ph/index.php/programs/scholarships",
    logoUrl: "dost-logo.png",
    desc: {
      tagalog:
        "Mga scholarship ng DOST para sa mga nag-aaral ng agham at teknolohiya.",
      english:
        "DOST scholarships for students pursuing science and technology.",
    },
  },
  {
    id: 12,
    category: "scholarships",
    featured: false,
    name: "OWWA Scholarships",
    link: "https://owwa.gov.ph/index.php/programs-services/educational-assistance",
    logoUrl: "owwa-logo.svg",
    desc: {
      tagalog: "Educational assistance para sa mga anak ng OFWs mula sa OWWA.",
      english: "Educational assistance for children of OFWs from OWWA.",
    },
  },
  {
    id: 13,
    category: "scholarships",
    featured: false,
    name: "University of Santo Tomas Scholarships",
    link: "https://ofad.ust.edu.ph/scholarships/",
    logoUrl: "ust-logo.svg",
    desc: {
      tagalog:
        "Mga scholarship at tuition discount ng Unibersidad ng Santo Tomas.",
      english:
        "Scholarship and tuition discount programs of the University of Santo Tomas.",
    },
  },
  {
    id: 14,
    category: "scholarships",
    featured: false,
    name: "University of the Philippines Scholarships",
    link: "https://upd.edu.ph/students/scholarships-and-grants/",
    logoUrl: "up-logo.png",
    desc: {
      tagalog:
        "Scholarship at financial assistance mula sa UP para sa mga Pilipino.",
      english:
        "UP scholarships and financial assistance programs for Filipino students.",
    },
  },

  // ── Transparency & News ───────────────────────────────────────────────────
  {
    id: 15,
    category: "transparency",
    featured: false,
    name: "Philippine Government Procurement System (PhilGEPS)",
    link: "https://www.philgeps.gov.ph/",
    logoUrl: "philgeps-logo.png",
    desc: {
      tagalog:
        "Opisyal na procurement at bidding portal ng gobyerno ng Pilipinas.",
      english:
        "Official government procurement and bidding portal of the Philippines.",
    },
  },
  {
    id: 16,
    category: "transparency",
    featured: false,
    name: "COA Transparency Portal",
    link: "https://www.coa.gov.ph/",
    logoUrl: "coa-logo.png",
    desc: {
      tagalog: "Mga ulat at audit ng Commission on Audit ng Pilipinas.",
      english:
        "Reports and audits from the Commission on Audit of the Philippines.",
    },
  },
  {
    id: 17,
    category: "transparency",
    featured: false,
    name: "PIO Puerto Galera",
    link: "https://www.facebook.com/PIOPuertoGalera",
    logoUrl: "piopg-logo.jpg",
    desc: {
      tagalog:
        "Opisyal na pahayag at balita mula sa Public Information Office ng Puerto Galera.",
      english:
        "Official announcements and news from the Puerto Galera Public Information Office.",
    },
  },
  {
    id: 18,
    category: "transparency",
    featured: false,
    name: "Sangguniang Bayan ng Puerto Galera",
    link: "https://www.facebook.com/SangguniangBayanPuertoGalera",
    logoUrl: "sbpg-logo.jpeg",
    desc: {
      tagalog:
        "Mga ordinansa, resolusyon, at opisyal na aksyon ng Sangguniang Bayan.",
      english:
        "Ordinances, resolutions, and official actions of the Municipal Council.",
    },
  },
];

// ─── Category config ──────────────────────────────────────────────────────────
const categories = [
  {
    key: "egovernment" as Category,
    icon: Landmark,
    color: "#2dd4bf",
    bg: "rgba(0, 81, 78, 0.3)",
  },
  {
    key: "scholarships" as Category,
    icon: GraduationCap,
    color: "#7c3aed",
    bg: "rgba(124,58,237,0.07)",
  },
  {
    key: "transparency" as Category,
    icon: Newspaper,
    color: "#0891b2",
    bg: "rgba(8,145,178,0.07)",
  },
];

const categoryColor: Record<Category, string> = {
  egovernment: "#0d2645",
  scholarships: "#7c3aed",
  transparency: "#0891b2",
};
const categoryBg: Record<Category, string> = {
  egovernment: "rgba(13,38,69,0.08)",
  scholarships: "rgba(124,58,237,0.08)",
  transparency: "rgba(8,145,178,0.08)",
};
const categoryBorder: Record<Category, string> = {
  egovernment: "rgba(13,38,69,0.15)",
  scholarships: "rgba(124,58,237,0.15)",
  transparency: "rgba(8,145,178,0.15)",
};

export default function PublicServices() {
  const { language, setLanguage } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<Category | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const ui = {
    tagalog: {
      back: "Bumalik",
      headline: "Serbisyong Pampubliko",
      subtitle:
        "Mga e-government portal, scholarship, at opisyal na balita — para sa bawat Galeran.",
      sideNote: "Lahat ng links dito ay opisyal at verified na mapagkukunan.",
      featuredLabel: "Pangunahing Portal",
      featuredHint:
        "Dito mo makukuha ang business permit, cedula, at civil registry ng Puerto Galera.",
      featuredBtn: "Buksan ang eLGU Portal",
      categories: {
        all: "Lahat",
        egovernment: "E-Gobyerno",
        scholarships: "Iskolarship",
        transparency: "Transparency",
      },
      searchPlaceholder: "Maghanap ng serbisyo...",
      results: "resulta",
      visit: "Buksan",
      emptyTitle: "Walang nahanap.",
      emptyDesc: "Subukan ang ibang keyword o kategorya.",
      availableServices: "Mga serbisyo:",
    },
    english: {
      back: "Back",
      headline: "Public Services",
      subtitle:
        "E-government portals, scholarships, and official news — for every Galeran.",
      sideNote: "All links here are official and verified sources.",
      featuredLabel: "Primary Portal",
      featuredHint:
        "Get your business permit, cedula, and civil registry services for Puerto Galera here.",
      featuredBtn: "Open eLGU Portal",
      categories: {
        all: "All",
        egovernment: "E-Government",
        scholarships: "Scholarships",
        transparency: "Transparency",
      },
      searchPlaceholder: "Search services...",
      results: "results",
      visit: "Open",
      emptyTitle: "No results found.",
      emptyDesc: "Try a different keyword or category.",
      availableServices: "Available services:",
    },
  };
  const t = ui[language];

  const featuredResource = resources.find((r) => r.featured);
  const nonFeatured = resources.filter((r) => !r.featured);

  const filtered = nonFeatured.filter((r) => {
    const matchCat = activeCategory === "all" || r.category === activeCategory;
    const q = searchQuery.toLowerCase();
    const matchQuery =
      !q ||
      r.name.toLowerCase().includes(q) ||
      r.desc[language].toLowerCase().includes(q);
    return matchCat && matchQuery;
  });

  // When filtering to egovernment, show featured too
  const showFeatured =
    !searchQuery &&
    (activeCategory === "all" || activeCategory === "egovernment");

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

        <div className="relative z-10 mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition-opacity hover:opacity-70"
            style={{ color: "rgba(6,182,212,0.7)" }}
          >
            <ArrowLeft size={14} /> {t.back}
          </Link>
        </div>

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
                    style={{ backgroundColor: cat.bg.replace("0.07", "0.18") }}
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

          {/* Category tabs */}
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
              {showFeatured ? filtered.length + 1 : filtered.length} {t.results}
            </span>
          </div>
        </div>

        {/* ── Content ── */}
        <div className="flex-1 px-6 lg:px-8 py-6 flex flex-col gap-6">
          {/* ── Featured eLGU Card ── */}
          {showFeatured && featuredResource && (
            <a
              href={featuredResource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col md:flex-row gap-6 rounded-3xl p-6 md:p-8 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5 border"
              style={{
                backgroundColor: "#0d2645",
                borderColor: "rgba(255,255,255,0.07)",
              }}
            >
              {/* Glow */}
              <div
                className="absolute -top-16 -right-16 w-64 h-64 rounded-full pointer-events-none blur-3xl"
                style={{ backgroundColor: "rgba(45,212,191,0.1)" }}
              />
              <div
                className="absolute -bottom-16 -left-10 w-48 h-48 rounded-full pointer-events-none blur-3xl"
                style={{ backgroundColor: "rgba(6,182,212,0.08)" }}
              />

              <div className="relative z-10 flex flex-col justify-between flex-1 gap-5">
                {/* Label */}
                <div
                  className="inline-flex items-center gap-1.5 self-start rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest"
                  style={{
                    backgroundColor: "rgba(245,158,11,0.15)",
                    color: "#f59e0b",
                    border: "1px solid rgba(245,158,11,0.25)",
                  }}
                >
                  <Star size={9} fill="#f59e0b" /> {t.featuredLabel}
                </div>

                <div>
                  <h2
                    className="text-xl md:text-2xl font-extrabold mb-2"
                    style={{ color: "#ffffff" }}
                  >
                    {featuredResource.name}
                  </h2>
                  <p
                    className="text-sm leading-relaxed mb-4"
                    style={{ color: "rgba(186,230,253,0.7)" }}
                  >
                    {t.featuredHint}
                  </p>

                  {/* Service tags */}
                  {featuredResource.tags && (
                    <div className="flex flex-wrap gap-2">
                      {featuredResource.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full px-3 py-1 text-[11px] font-bold"
                          style={{
                            backgroundColor: "rgba(6,182,212,0.12)",
                            color: "rgba(186,230,253,0.85)",
                            border: "1px solid rgba(6,182,212,0.2)",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* CTA */}
                <div
                  className="inline-flex items-center gap-2 self-start rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-200 group-hover:gap-3"
                  style={{ backgroundColor: "#f59e0b", color: "#0d2645" }}
                >
                  {t.featuredBtn}{" "}
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>
              </div>

              {/* Right: logo area */}
              <div className="relative z-10 flex items-center justify-center shrink-0 md:w-40">
                <img
                  src={featuredResource.logoUrl}
                  alt={featuredResource.name}
                  className="h-16 w-auto object-contain brightness-0 invert opacity-70"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>
            </a>
          )}

          {/* ── Grid ── */}
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
                        <span
                          className="flex items-center gap-1 shrink-0 rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider"
                          style={{
                            backgroundColor: bg,
                            color,
                            border: `1px solid ${border}`,
                          }}
                        >
                          <CatIcon size={8} />
                          {t.categories[resource.category]}
                        </span>
                      </div>
                      <h2 className="mb-1.5 text-base font-bold text-slate-900">
                        {resource.name}
                      </h2>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {resource.desc[language]}
                      </p>
                    </div>

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
          ) : !showFeatured ? (
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
          ) : null}
        </div>
      </main>
    </div>
  );
}

"use client";

import { useState } from "react";
import {
  ArrowLeft,
  Search,
  ExternalLink,
  MapPin,
  BookOpen,
  List,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const openDatabases = [
  {
    id: 1,
    name: "DOAJ",
    isLocal: false,
    link: "https://doaj.org/",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/11/DOAJ_logo.svg",
    desc: {
      tagalog: "Libreng peer-reviewed scientific at scholarly articles.",
      english: "Free peer-reviewed scientific and scholarly articles.",
    },
  },
  {
    id: 2,
    name: "arXiv",
    isLocal: false,
    link: "https://arxiv.org/",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/b/b2/ArXiv_logo_2022.svg",
    desc: {
      tagalog:
        "Open-access archive para sa physics, math, at computer science.",
      english: "Open-access archive for physics, math, and computer science.",
    },
  },
  {
    id: 3,
    name: "Archīum Ateneo",
    isLocal: true,
    link: "https://archium.ateneo.edu",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/en/2/2a/Ateneo_de_Manila_University_seal.svg",
    desc: {
      tagalog: "Institutional repository ng Ateneo de Manila University.",
      english: "Ateneo de Manila University's institutional repository.",
    },
  },
  {
    id: 4,
    name: "BAHÁNDÌAN",
    isLocal: true,
    link: "https://repository.cpu.edu.ph/",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/en/2/23/Central_Philippine_University_seal.svg",
    desc: {
      tagalog: "Digital repository ng Central Philippine University.",
      english: "Central Philippine University's digital repository.",
    },
  },
  {
    id: 5,
    name: "Tuklas",
    isLocal: true,
    link: "https://tuklas.up.edu.ph/",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/en/3/3d/University_of_the_Philippines_Seal.svg",
    desc: {
      tagalog: "Discovery service ng mga aklatan ng UP System.",
      english: "The UP System libraries' discovery service.",
    },
  },
  {
    id: 6,
    name: "Plaridel Journal",
    isLocal: true,
    link: "https://www.plarideljournal.org/",
    logoUrl:
      "https://www.plarideljournal.org/wp-content/uploads/2015/12/logo-plaridel.png",
    desc: {
      tagalog: "Journal ng komunikasyon, media, at lipunan sa Pilipinas.",
      english: "Philippine journal of communication, media, and society.",
    },
  },
  {
    id: 7,
    name: "TechnoAklatan",
    isLocal: true,
    link: "https://nlpdl.nlp.gov.ph/TechnoAklatan.htm",
    logoUrl: "https://web.nlp.gov.ph/nlp/sites/default/files/nlp-logo.png",
    desc: {
      tagalog: "Digital na koleksyon ng Pambansang Aklatan ng Pilipinas.",
      english: "National Library of the Philippines digital collection.",
    },
  },
  {
    id: 8,
    name: "Google Scholar",
    isLocal: false,
    link: "https://scholar.google.com/",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/2/28/Google_Scholar_logo.svg",
    desc: {
      tagalog: "Malawak na paghahanap ng iskolaryong literatura.",
      english: "Broad search for scholarly literature.",
    },
  },
  {
    id: 9,
    name: "PhilSSJ",
    isLocal: true,
    link: "https://philssj.org/index.php/main",
    logoUrl:
      "https://philssj.org/public/journals/1/pageHeaderLogoImage_en_US.png",
    desc: {
      tagalog: "Philippine Social Science Journal para sa mga mananaliksik.",
      english: "Philippine Social Science Journal for researchers.",
    },
  },
  {
    id: 10,
    name: "BISIG (PUP)",
    isLocal: true,
    link: "https://publishing.pup.edu.ph/ojs/index.php/BSG",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/en/d/d4/Polytechnic_University_of_the_Philippines_official_logo.svg",
    desc: {
      tagalog: "PUP Journal ng Negosyo at Gobyerno.",
      english: "PUP Journal of Business and Government.",
    },
  },
  {
    id: 11,
    name: "PLOS",
    isLocal: false,
    link: "https://plos.org/our-journals/",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/4/4e/PLOS_Logo.svg",
    desc: {
      tagalog: "Open access na mga journal sa agham at medisina.",
      english: "Open access science journals.",
    },
  },
  {
    id: 12,
    name: "Taylor & Francis",
    isLocal: false,
    link: "https://www.tandfonline.com/openaccess",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/4/4c/Taylor_%26_Francis_logo.svg",
    desc: {
      tagalog: "Koleksyon ng mga open access na pananaliksik sa buong mundo.",
      english: "Collection of open access research.",
    },
  },
];

type SearchMode = "semantic" | "browse";

export default function Aklatan() {
  const { language, setLanguage } = useLanguage();
  const [searchMode, setSearchMode] = useState<SearchMode>("semantic");
  const [searchQuery, setSearchQuery] = useState("");
  const [onlyLocal, setOnlyLocal] = useState(false);

  const ui = {
    tagalog: {
      back: "Bumalik",
      headline: "Digital Library",
      subtitle:
        "Maghanap ng scholarly articles gamit ang Semantic Scholar, o i-browse ang aming koleksyon ng libreng databases.",
      sideNote: "Lahat ng resources dito ay libre at publicly accessible.",
      // Search modes
      modeSemanticLabel: "Smart Search",
      modeSemanticDesc: "Hanapin ang scholarly articles via Semantic Scholar",
      modeBrowseLabel: "Browse Databases",
      modeBrowseDesc: "Piliin mula sa aming listahan ng mga resources",
      // Semantic search
      semanticPlaceholder: "I-type ang iyong paksa o research question...",
      semanticBtn: "Hanapin sa Semantic Scholar",
      semanticHint:
        "Ire-redirect ka sa semanticscholar.org para sa mga resulta.",
      // Browse
      browsePlaceholder: "I-filter ang mga database...",
      results: "resulta",
      all: "Lahat",
      local: "Lokal",
      visit: "Puntahan",
      emptyTitle: "Walang nahanap na database.",
      emptyDesc: "Subukan ang ibang keyword.",
    },
    english: {
      back: "Back",
      headline: "Digital Library",
      subtitle:
        "Search millions of scholarly articles via Semantic Scholar, or manually browse our curated list of free databases.",
      sideNote: "All resources listed here are free and publicly accessible.",
      modeSemanticLabel: "Smart Search",
      modeSemanticDesc: "Find scholarly articles via Semantic Scholar",
      modeBrowseLabel: "Browse Databases",
      modeBrowseDesc: "Pick from our curated list of resources",
      semanticPlaceholder: "Type your topic or research question...",
      semanticBtn: "Search Semantic Scholar",
      semanticHint: "You'll be redirected to semanticscholar.org for results.",
      browsePlaceholder: "Filter databases...",
      results: "results",
      all: "All",
      local: "Local",
      visit: "Visit",
      emptyTitle: "No databases found.",
      emptyDesc: "Try a different keyword.",
    },
  };

  const t = ui[language];

  const filtered = openDatabases.filter(
    (db) =>
      (db.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        db.desc[language].toLowerCase().includes(searchQuery.toLowerCase())) &&
      (!onlyLocal || db.isLocal),
  );

  const handleSemanticSearch = () => {
    if (!searchQuery.trim()) return;
    window.open(
      `https://www.semanticscholar.org/search?q=${encodeURIComponent(searchQuery.trim())}`,
      "_blank",
    );
  };

  return (
    <div className="min-h-screen w-screen flex flex-col md:flex-row bg-white">
      {/* =============================================
          LEFT PANEL
          ============================================= */}
      <aside
        className="relative flex flex-col w-full md:w-[32%] lg:w-[30%] shrink-0 md:h-screen md:sticky md:top-0 py-8 px-7 md:py-10 md:px-9"
        style={{ backgroundColor: "#0b2a4a" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: 0.05,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Back */}
        <div className="relative z-10 mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition-opacity hover:opacity-70"
            style={{ color: "rgba(125,211,252,0.7)" }}
          >
            <ArrowLeft size={14} />
            {t.back}
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
              style={{ backgroundColor: "#38bdf8" }}
            />
            <h1
              className="text-2xl lg:text-3xl font-extrabold leading-tight tracking-tight mb-3"
              style={{ color: "#ffffff" }}
            >
              {t.headline}
            </h1>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "rgba(186,230,253,0.65)" }}
            >
              {t.subtitle}
            </p>
          </div>

          <div
            className="rounded-xl px-4 py-3 text-xs leading-relaxed"
            style={{
              backgroundColor: "rgba(56,189,248,0.08)",
              color: "rgba(186,230,253,0.7)",
              border: "1px solid rgba(56,189,248,0.15)",
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
          <p
            className="text-[10px]"
            style={{ color: "rgba(125,211,252,0.35)" }}
          >
            Built by{" "}
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 transition-opacity hover:opacity-80"
              style={{ color: "rgba(125,211,252,0.55)" }}
            >
              Your Name
            </a>{" "}
            · Puerto Galera Public Library
          </p>
        </div>
      </aside>

      {/* =============================================
          RIGHT PANEL
          ============================================= */}
      <main className="flex-1 flex flex-col bg-slate-50 min-h-screen">
        {/* ── Sticky top bar ── */}
        <div className="sticky top-0 z-40 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between gap-3">
            {/* Mode switcher */}
            <div className="flex bg-white border border-slate-200 p-1 rounded-xl">
              <button
                onClick={() => setSearchMode("semantic")}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  searchMode === "semantic"
                    ? "text-white shadow-sm"
                    : "text-slate-400 hover:bg-slate-100"
                }`}
                style={
                  searchMode === "semantic"
                    ? { backgroundColor: "#0b2a4a" }
                    : {}
                }
              >
                <Search size={12} />
                {t.modeSemanticLabel}
              </button>
              <button
                onClick={() => {
                  setSearchMode("browse");
                  setSearchQuery("");
                }}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  searchMode === "browse"
                    ? "text-white shadow-sm"
                    : "text-slate-400 hover:bg-slate-100"
                }`}
                style={
                  searchMode === "browse" ? { backgroundColor: "#0b2a4a" } : {}
                }
              >
                <List size={12} />
                {t.modeBrowseLabel}
              </button>
            </div>

            {/* Language toggle */}
            <div className="flex items-center gap-1 bg-white border border-slate-200 p-1 rounded-xl shrink-0">
              {(["tagalog", "english"] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-wider transition-all ${
                    language === lang
                      ? "text-white shadow-sm"
                      : "text-slate-400 hover:bg-slate-100"
                  }`}
                  style={
                    language === lang ? { backgroundColor: "#0b2a4a" } : {}
                  }
                >
                  <span>{lang === "tagalog" ? "🇵🇭" : "🇬🇧"}</span>
                  {lang === "tagalog" ? "FIL" : "ENG"}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── SEMANTIC SEARCH MODE ── */}
        {searchMode === "semantic" && (
          <div className="flex-1 flex flex-col items-center justify-center px-6 lg:px-8 py-16">
            <div className="w-full max-w-xl">
              {/* Header */}
              <div className="mb-8 text-center">
                <div
                  className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4"
                  style={{ backgroundColor: "rgba(11,42,74,0.07)" }}
                >
                  <Search size={24} style={{ color: "#0b2a4a" }} />
                </div>
                <h2 className="text-xl font-extrabold text-slate-900 mb-1">
                  {t.modeSemanticLabel}
                </h2>
                <p className="text-sm text-slate-500">{t.modeSemanticDesc}</p>
              </div>

              {/* Search input */}
              <div className="relative mb-3">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSemanticSearch()}
                  placeholder={t.semanticPlaceholder}
                  className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 pr-36 text-sm font-medium text-slate-800 placeholder-slate-400 shadow-sm outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-200/40 transition-all"
                />
                <button
                  onClick={handleSemanticSearch}
                  disabled={!searchQuery.trim()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-bold uppercase tracking-wide transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90"
                  style={{ backgroundColor: "#0b2a4a", color: "white" }}
                >
                  {t.semanticBtn.split(" ").slice(-2).join(" ")}
                  <ExternalLink size={11} />
                </button>
              </div>

              {/* Hint */}
              <p className="text-center text-[11px] text-slate-400 leading-relaxed">
                {t.semanticHint}
              </p>

              {/* Divider + switch nudge */}
              <div className="mt-10 pt-8 border-t border-slate-200 text-center">
                <p className="text-xs text-slate-400 mb-3">
                  {language === "tagalog"
                    ? "Gusto mong piliin mismo ang database?"
                    : "Prefer to pick a database yourself?"}
                </p>
                <button
                  onClick={() => setSearchMode("browse")}
                  className="inline-flex items-center gap-1.5 text-xs font-bold transition-opacity hover:opacity-70"
                  style={{ color: "#0b2a4a" }}
                >
                  <List size={13} />
                  {t.modeBrowseLabel} →
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ── BROWSE MODE ── */}
        {searchMode === "browse" && (
          <>
            {/* Browse toolbar */}
            <div className="px-6 lg:px-8 pt-5 pb-4 flex flex-col sm:flex-row gap-3 items-start sm:items-center border-b border-slate-200">
              <div className="relative flex-1 max-w-md">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                  <Search size={14} className="text-slate-400" />
                </div>
                <input
                  type="text"
                  className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm font-medium text-slate-800 placeholder-slate-400 outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-200/30 transition-all"
                  placeholder={t.browsePlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="flex items-center gap-3">
                {/* Local filter */}
                <div className="flex bg-white border border-slate-200 p-1 rounded-xl">
                  <button
                    onClick={() => setOnlyLocal(false)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      !onlyLocal
                        ? "text-white shadow-sm"
                        : "text-slate-400 hover:bg-slate-100"
                    }`}
                    style={!onlyLocal ? { backgroundColor: "#0b2a4a" } : {}}
                  >
                    {t.all}
                  </button>
                  <button
                    onClick={() => setOnlyLocal(true)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      onlyLocal
                        ? "text-white shadow-sm"
                        : "text-slate-400 hover:bg-slate-100"
                    }`}
                    style={onlyLocal ? { backgroundColor: "#0b2a4a" } : {}}
                  >
                    {t.local}
                  </button>
                </div>

                <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 whitespace-nowrap">
                  {filtered.length} {t.results}
                </p>
              </div>
            </div>

            {/* Database grid */}
            <div className="flex-1 px-6 lg:px-8 py-6">
              {filtered.length > 0 ? (
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {filtered.map((db) => (
                    <a
                      key={db.id}
                      href={db.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col justify-between rounded-2xl bg-white border border-slate-100 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-slate-200"
                    >
                      <div>
                        <div className="mb-5 flex items-start justify-between gap-2">
                          <div className="h-8 w-28 relative">
                            <img
                              src={db.logoUrl}
                              alt={db.name}
                              className="h-full w-full object-contain object-left"
                            />
                          </div>
                          {db.isLocal && (
                            <span
                              className="flex items-center gap-1 shrink-0 rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider"
                              style={{
                                backgroundColor: "rgba(16,185,129,0.08)",
                                color: "#059669",
                                border: "1px solid rgba(16,185,129,0.2)",
                              }}
                            >
                              <MapPin size={8} />
                              Lokal
                            </span>
                          )}
                        </div>
                        <h2 className="mb-1.5 text-base font-bold text-slate-900">
                          {db.name}
                        </h2>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          {db.desc[language]}
                        </p>
                      </div>

                      <div className="mt-5 pt-4 border-t border-slate-100">
                        <div
                          className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wide transition-all duration-200 group-hover:gap-2.5"
                          style={{
                            backgroundColor: "#0b2a4a",
                            color: "#ffffff",
                          }}
                        >
                          {t.visit}
                          <ExternalLink
                            size={11}
                            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          />
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-32 text-center">
                  <div
                    className="mb-4 rounded-full p-5"
                    style={{ backgroundColor: "rgba(11,42,74,0.05)" }}
                  >
                    <Search
                      size={28}
                      style={{ color: "#0b2a4a", opacity: 0.3 }}
                    />
                  </div>
                  <p className="text-base font-bold text-slate-400">
                    {t.emptyTitle}
                  </p>
                  <p className="text-sm text-slate-300 mt-1">{t.emptyDesc}</p>
                </div>
              )}
            </div>
          </>
        )}
      </main>
    </div>
  );
}

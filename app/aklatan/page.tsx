"use client";

import { useState } from "react";
import {
  ArrowLeft,
  Search,
  ExternalLink,
  MapPin,
  List,
  BookOpen,
  BookMarked,
  X,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

type ResourceType = "research" | "ebooks";

const openDatabases = [
  // ── Research / Journals ──────────────────────────────────────────────────
  {
    id: 1,
    name: "Archīum Ateneo",
    isLocal: true,
    resourceType: "research" as ResourceType,
    link: "https://archium.ateneo.edu",
    logoUrl: "/ateneo-logo.png",
    desc: {
      tagalog: "Institutional repository ng Ateneo de Manila University.",
      english: "Ateneo de Manila University's institutional repository.",
    },
  },
  {
    id: 2,
    name: "arXiv",
    isLocal: false,
    resourceType: "research" as ResourceType,
    link: "https://arxiv.org/",
    logoUrl: "/arxiv-logo.png",
    desc: {
      tagalog:
        "Open-access archive para sa physics, math, at computer science.",
      english: "Open-access archive for physics, math, and computer science.",
    },
  },
  {
    id: 3,
    name: "BAHÁNDÌAN",
    isLocal: true,
    resourceType: "research" as ResourceType,
    link: "https://repository.cpu.edu.ph/",
    logoUrl: "/bahandian-logo.svg",
    desc: {
      tagalog: "Digital repository ng Central Philippine University.",
      english: "Central Philippine University's digital repository.",
    },
  },
  {
    id: 4,
    name: "BISIG (PUP)",
    isLocal: true,
    resourceType: "research" as ResourceType,
    link: "https://publishing.pup.edu.ph/ojs/index.php/BSG",
    logoUrl: "/pup-logo.png",
    desc: {
      tagalog: "PUP Journal ng Negosyo at Gobyerno.",
      english: "PUP Journal of Business and Government.",
    },
  },
  {
    id: 5,
    name: "DOAJ",
    isLocal: false,
    resourceType: "research" as ResourceType,
    link: "https://doaj.org/",
    logoUrl: "doaj-logo.svg",
    desc: {
      tagalog: "Libreng peer-reviewed scientific at scholarly articles.",
      english: "Free peer-reviewed scientific and scholarly articles.",
    },
  },
  {
    id: 6,
    name: "Google Scholar",
    isLocal: false,
    resourceType: "research" as ResourceType,
    link: "https://scholar.google.com/",
    logoUrl: "google-scholar-logo.png",
    desc: {
      tagalog: "Malawak na paghahanap ng iskolaryong literatura.",
      english: "Broad search for scholarly literature.",
    },
  },
  {
    id: 7,
    name: "Philippine Social Science Journal",
    isLocal: true,
    resourceType: "research" as ResourceType,
    link: "https://philssj.org/index.php/main",
    logoUrl: "phil-ssj-logo.png",
    desc: {
      tagalog: "Philippine Social Science Journal para sa mga mananaliksik.",
      english: "Philippine Social Science Journal for researchers.",
    },
  },
  {
    id: 8,
    name: "Plaridel Journal",
    isLocal: true,
    resourceType: "research" as ResourceType,
    link: "https://www.plarideljournal.org/",
    logoUrl: "plaridel-logo.png",
    desc: {
      tagalog: "Journal ng komunikasyon, media, at lipunan sa Pilipinas.",
      english: "Philippine journal of communication, media, and society.",
    },
  },
  {
    id: 9,
    name: "PLOS",
    isLocal: false,
    resourceType: "research" as ResourceType,
    link: "https://plos.org/our-journals/",
    logoUrl: "plos-logo.png",
    desc: {
      tagalog: "Open access na mga journal sa agham at medisina.",
      english: "Open access science journals.",
    },
  },
  {
    id: 10,
    name: "Taylor & Francis",
    isLocal: false,
    resourceType: "research" as ResourceType,
    link: "https://www.tandfonline.com/openaccess",
    logoUrl: "taylor-and-francis-logo.png",
    desc: {
      tagalog: "Koleksyon ng mga open access na pananaliksik sa buong mundo.",
      english: "Collection of open access research.",
    },
  },
  {
    id: 11,
    name: "Tuklas",
    isLocal: true,
    resourceType: "research" as ResourceType,
    link: "https://tuklas.up.edu.ph/",
    logoUrl: "tuklas-logo.png",
    desc: {
      tagalog: "Discovery service ng mga aklatan ng UP System.",
      english: "The UP System libraries' discovery service.",
    },
  },
  {
    id: 22,
    name: "Philippine E-Journals",
    isLocal: true,
    resourceType: "research" as ResourceType,
    link: "https://ejournals.ph/",
    logoUrl: "/pej-logo.jpeg",
    desc: {
      tagalog:
        "Koleksyon ng mga akademikong journal mula sa iba't ibang unibersidad sa Pilipinas.",
      english:
        "A collection of academic journals from various universities and organizations in the Philippines.",
    },
  },

  {
    id: 24,
    name: "HERDIN Plus",
    isLocal: true,
    resourceType: "research" as ResourceType,
    link: "https://www.herdin.ph/",
    logoUrl: "/herdin-logo.png",
    desc: {
      tagalog:
        "Pangunahing database para sa health at medical research sa Pilipinas, pinamamahalaan ng DOST-PCHRD.",
      english:
        "The primary database for health and medical research in the Philippines, managed by DOST-PCHRD.",
    },
  },
  {
    id: 25,
    name: "Philippine eLib",
    isLocal: true,
    resourceType: "research" as ResourceType,
    link: "http://www.elib.gov.ph/",
    logoUrl: "/nlp-logo.png",
    desc: {
      tagalog:
        "Isang kolaboratibong proyekto na nagbibigay ng access sa mga digitized na Filipiniana at union catalogs.",
      english:
        "A collaborative project providing access to digitized Filipiniana materials and union catalogs.",
    },
  },
  {
    id: 26,
    name: "Philippine Journal of Science",
    isLocal: true,
    resourceType: "research" as ResourceType,
    link: "https://philjournalsci.dost.gov.ph/",
    logoUrl: "/pjs-logo.png",
    desc: {
      tagalog:
        "Ang pinakamatandang siyentipikong journal sa bansa, inilalathala ng DOST.",
      english:
        "The oldest scientific journal in the country, published by DOST.",
    },
  },
  {
    id: 27,
    name: "Asia-Pacific Social Science Review",
    isLocal: true,
    resourceType: "research" as ResourceType,
    link: "https://animorepository.dlsu.edu.ph/apssr/",
    logoUrl: "/dlsu-logo.png",
    desc: {
      tagalog:
        "Isang nangungunang social science journal mula sa De La Salle University.",
      english: "A leading social science journal from De La Salle University.",
    },
  },
  {
    id: 28,
    name: "CORE",
    isLocal: false,
    resourceType: "research" as ResourceType,
    link: "https://core.ac.uk/",
    logoUrl: "/core-logo.svg",
    desc: {
      tagalog:
        "Ang pinakamalaking aggregator sa mundo ng mga open access na research papers.",
      english: "The world's largest aggregator of open access research papers.",
    },
  },
  {
    id: 29,
    name: "BASE",
    isLocal: false,
    resourceType: "research" as ResourceType,
    link: "https://www.base-search.net/",
    logoUrl: "/base-logo.png",
    desc: {
      tagalog:
        "Isa sa mga pinaka-voluminous search engines para sa academic web resources.",
      english:
        "One of the most voluminous search engines for academic web resources.",
    },
  },

  // ── E-Books ───────────────────────────────────────────────────────────────
  {
    id: 12,
    name: "Aklatang Bayan Online",
    isLocal: true,
    resourceType: "ebooks" as ResourceType,
    link: "https://sentrofilipino.upd.edu.ph/publikasyon/aklatang-bayan/online-downloadable-e-books/",
    logoUrl: "swf-logo.png",
    desc: {
      tagalog:
        "Isang open-access na repository ng mga aklat at pananaliksik na nakasulat sa wikang Filipino mula sa UP Sentro ng Wikang Filipino.",
      english:
        "An open-access repository of books and research papers written in the Filipino language by the UP Sentro ng Wikang Filipino.",
    },
  },
  {
    id: 30,
    name: "DOAB",
    isLocal: false,
    resourceType: "ebooks" as ResourceType,
    link: "https://www.doabooks.org/",
    logoUrl: "/doab-logo.png",
    desc: {
      tagalog:
        "Isang direktoryo ng mga peer-reviewed na open access books mula sa mga akademikong publisher.",
      english:
        "A directory of peer-reviewed open access books from academic publishers.",
    },
  },
  {
    id: 31,
    name: "OpenStax",
    isLocal: false,
    resourceType: "ebooks" as ResourceType,
    link: "https://openstax.org/",
    logoUrl: "/openstax-logo.png",
    desc: {
      tagalog:
        "Libreng peer-reviewed na mga textbook para sa kolehiyo mula sa Rice University.",
      english: "Free peer-reviewed college textbooks from Rice University.",
    },
  },
  {
    id: 32,
    name: "Open Textbook Library",
    isLocal: false,
    resourceType: "ebooks" as ResourceType,
    link: "https://open.umn.edu/opentextbooks/",
    logoUrl: "/opentext-logo.png",
    desc: {
      tagalog:
        "Koleksyon ng mga textbook na na-review na ng mga faculty para sa iba't ibang kurso.",
      english:
        "A collection of faculty-reviewed textbooks for various courses.",
    },
  },
  {
    id: 33,
    name: "HathiTrust Digital Library",
    isLocal: false,
    resourceType: "ebooks" as ResourceType,
    link: "https://www.hathitrust.org/",
    logoUrl: "/hathi-logo.png",
    desc: {
      tagalog:
        "Isang digital library ng milyun-milyong digitized na mga libro mula sa mga research institutions.",
      english:
        "A digital library of millions of digitized books from research institutions.",
    },
  },
  {
    id: 34,
    name: "National Academies Press",
    isLocal: false,
    resourceType: "ebooks" as ResourceType,
    link: "https://nap.nationalacademies.org/",
    logoUrl: "/natl-academies-logo.jpg",
    desc: {
      tagalog:
        "Libreng PDF ng mahigit 10,000 na publikasyon sa agham, engineering, at medisina.",
      english:
        "Free PDFs of over 10,000 publications in science, engineering, and medicine.",
    },
  },
  {
    id: 13,
    name: "Canvas.ph Art and Stories",
    isLocal: true,
    resourceType: "ebooks" as ResourceType,
    link: "https://www.canvas.ph/art-and-stories",
    logoUrl: "https://www.canvas.ph/favicon.ico",
    desc: {
      tagalog:
        "Mga kwento at sining para sa mga batang Pilipino mula sa Canvas.ph.",
      english: "Stories and art for Filipino children from Canvas.ph.",
    },
  },
  {
    id: 14,
    name: "eBooks for Students",
    isLocal: false,
    resourceType: "ebooks" as ResourceType,
    link: "https://ebooksforstudents.org/",
    logoUrl: "ebook-logo.png",
    desc: {
      tagalog: "Libreng ebook para sa mga estudyante sa iba't ibang paksa.",
      english: "Free ebooks for students across a wide range of subjects.",
    },
  },
  {
    id: 15,
    name: "Filipinas Heritage Library",
    isLocal: true,
    resourceType: "ebooks" as ResourceType,
    link: "https://www.filipinaslibrary.org.ph/search-collection/?keywords=read+online",
    logoUrl: "fillib-logo.jpg",
    desc: {
      tagalog:
        "Digital na koleksyon ng Ayala Foundation tungkol sa kasaysayan at kulturang Pilipino.",
      english:
        "Ayala Foundation's digital collection on Philippine history and culture.",
    },
  },
  {
    id: 16,
    name: "Free Children's Stories",
    isLocal: false,
    resourceType: "ebooks" as ResourceType,
    link: "https://www.freechildrenstories.com/",
    logoUrl: "https://www.freechildrenstories.com/favicon.ico",
    desc: {
      tagalog:
        "Libreng mga kwento para sa mga bata — maikling pagbabasa online.",
      english: "Free stories for children — short reads available online.",
    },
  },
  {
    id: 17,
    name: "Open Library",
    isLocal: false,
    resourceType: "ebooks" as ResourceType,
    link: "https://openlibrary.org/",
    logoUrl:
      "https://openlibrary.org/static/images/openlibrary-logo-tighter.svg",
    desc: {
      tagalog:
        "Libre at mahihiram na digital na mga libro mula sa Internet Archive.",
      english: "Free and borrowable digital books from the Internet Archive.",
    },
  },
  {
    id: 18,
    name: "Planet eBook",
    isLocal: false,
    resourceType: "ebooks" as ResourceType,
    link: "https://www.planetebook.com/",
    logoUrl: "https://www.planetebook.com/favicon.ico",
    desc: {
      tagalog:
        "Libreng klasikong literatura sa PDF format para sa mga mambabasa.",
      english: "Free classic literature in PDF format for readers.",
    },
  },
  {
    id: 19,
    name: "Project Gutenberg",
    isLocal: false,
    resourceType: "ebooks" as ResourceType,
    link: "https://www.gutenberg.org/",
    logoUrl: "https://www.gutenberg.org/gutenberg/pg-logo-129x80.png",
    desc: {
      tagalog: "Mahigit 70,000 libreng klasikong libro sa public domain.",
      english: "Over 70,000 free classic books in the public domain.",
    },
  },
  {
    id: 20,
    name: "Standard Ebooks",
    isLocal: false,
    resourceType: "ebooks" as ResourceType,
    link: "https://standardebooks.org/ebooks",
    logoUrl: "https://standardebooks.org/images/logo.svg",
    desc: {
      tagalog:
        "Mga maayos na na-format na libreng ebook — public domain classics.",
      english:
        "Beautifully formatted free ebooks — polished public domain classics.",
    },
  },
  {
    id: 21,
    name: "TechnoAklatan",
    isLocal: true,
    resourceType: "ebooks" as ResourceType,
    link: "https://nlpdl.nlp.gov.ph/TechnoAklatan.htm",
    logoUrl: "nlp-logo.png",
    desc: {
      tagalog: "Digital na koleksyon ng Pambansang Aklatan ng Pilipinas.",
      english: "National Library of the Philippines digital collection.",
    },
  },
];

type SearchMode = "semantic" | "browse";

export default function Aklatan() {
  const { language, setLanguage } = useLanguage();
  const [searchMode, setSearchMode] = useState<SearchMode>("semantic");
  const [searchQuery, setSearchQuery] = useState("");
  const [browseQuery, setBrowseQuery] = useState("");
  const [onlyLocal, setOnlyLocal] = useState(false);
  const [activeType, setActiveType] = useState<ResourceType | "all">("all");

  const ui = {
    tagalog: {
      back: "Bumalik",
      headline: "Digital na Aklatan",
      subtitle:
        "Maghanap ng scholarly articles gamit ang Semantic Scholar, o i-browse ang aming koleksyon ng libreng databases.",
      sideNote: "Lahat ng resources dito ay libre at publicly accessible.",
      modeSemanticLabel: "Smart Search",
      modeBrowseLabel: "Browse Databases",
      placeholder: "I-type ang iyong paksa o research question...",
      searchBtn: "Hanapin sa Semantic Scholar",
      hint: "Ire-redirect ka sa semanticscholar.org para sa mga resulta.",
      poweredBy: "Powered by Semantic Scholar",
      switchToBrowse: "Gusto mong piliin mismo ang database?",
      idleHint: "I-type ang iyong paksa para magsimula.",
      idleSub: "Mula sa milyun-milyong scholarly papers.",
      browsePlaceholder: "I-filter ang mga database...",
      results: "resulta",
      all: "Lahat",
      local: "Lokal",
      visit: "Puntahan",
      emptyTitle: "Walang nahanap na database.",
      emptyDesc: "Subukan ang ibang keyword.",
      clearFilters: "I-clear lahat ng filter",
      typeAll: "Lahat",
      typeResearch: "Pananaliksik",
      typeEbooks: "E-Books",
    },
    english: {
      back: "Back to Home",
      headline: "Digital Library",
      subtitle:
        "Search scholarly articles via Semantic Scholar, or browse our curated list of free databases.",
      sideNote: "All resources listed here are free and publicly accessible.",
      modeSemanticLabel: "Smart Search",
      modeBrowseLabel: "Browse Databases",
      placeholder: "Type your topic or research question...",
      searchBtn: "Search Semantic Scholar",
      hint: "You'll be redirected to semanticscholar.org for results.",
      poweredBy: "Powered by Semantic Scholar",
      switchToBrowse: "Prefer to pick a database yourself?",
      idleHint: "Type a topic above to get started.",
      idleSub: "Searching across millions of scholarly papers.",
      browsePlaceholder: "Filter databases...",
      results: "results",
      all: "All",
      local: "Local",
      visit: "Visit",
      emptyTitle: "No databases found.",
      emptyDesc: "Try a different keyword.",
      clearFilters: "Clear all filters",
      typeAll: "All",
      typeResearch: "Research",
      typeEbooks: "E-Books",
    },
  };
  const t = ui[language];

  const filtered = openDatabases
    .filter(
      (db) =>
        (db.name.toLowerCase().includes(browseQuery.toLowerCase()) ||
          db.desc[language]
            .toLowerCase()
            .includes(browseQuery.toLowerCase())) &&
        (!onlyLocal || db.isLocal) &&
        (activeType === "all" || db.resourceType === activeType),
    )
    .sort((a, b) => {
      if (a.resourceType !== b.resourceType) {
        return a.resourceType === "research" ? -1 : 1;
      }
      return a.name.localeCompare(b.name);
    });

  const handleSemanticSearch = () => {
    if (!searchQuery.trim()) return;
    window.open(
      `https://www.semanticscholar.org/search?q=${encodeURIComponent(searchQuery.trim())}`,
      "_blank",
    );
  };

  const navyBg = { backgroundColor: "#0d2645" } as const;
  const skyBorder = { borderColor: "#e0f2fe" } as const;
  const onFocusSky = (e: React.FocusEvent<HTMLInputElement>) =>
    (e.currentTarget.style.borderColor = "#06b6d4");
  const onBlurSky = (e: React.FocusEvent<HTMLInputElement>) =>
    (e.currentTarget.style.borderColor = "#bae6fd");

  const researchCount = openDatabases.filter(
    (d) => d.resourceType === "research",
  ).length;
  const ebooksCount = openDatabases.filter(
    (d) => d.resourceType === "ebooks",
  ).length;

  return (
    <div className="min-h-screen w-screen flex flex-col md:flex-row bg-white">
      {/* ── LEFT PANEL ── */}
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

          {/* Resource type legend */}
          <div className="flex flex-col gap-2.5">
            {[
              {
                type: "research" as ResourceType,
                icon: Search,
                label: t.typeResearch,
                count: researchCount,
                color: "#06b6d4",
                bg: "rgba(6,182,212,0.15)",
              },
              {
                type: "ebooks" as ResourceType,
                icon: BookMarked,
                label: t.typeEbooks,
                count: ebooksCount,
                color: "#2dd4bf",
                bg: "rgba(45,212,191,0.15)",
              },
            ].map((item) => (
              <button
                key={item.type}
                onClick={() => {
                  setSearchMode("browse");
                  setActiveType(item.type);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="flex items-center gap-2.5 group w-full text-left transition-all hover:bg-white/5 p-1 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/20"
              >
                <div
                  className="flex items-center justify-center w-6 h-6 rounded-lg shrink-0 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: item.bg }}
                >
                  <item.icon size={12} style={{ color: item.color }} />
                </div>
                <span
                  className="text-xs font-semibold transition-colors group-hover:text-cyan-400"
                  style={{ color: "rgba(186,230,253,0.75)" }}
                >
                  {item.label}
                </span>
                <span
                  className="ml-auto text-[10px] font-bold tabular-nums"
                  style={{ color: "rgba(186,230,253,0.4)" }}
                >
                  {item.count}
                </span>
              </button>
            ))}
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
          <div className="flex gap-1.5">
            {["#1a56db", "#06b6d4", "#2dd4bf", "#4ade80", "#f59e0b"].map(
              (c) => (
                <div
                  key={c}
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: c }}
                />
              ),
            )}
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

      {/* ── RIGHT PANEL ── */}
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
          <div className="flex items-center justify-between gap-3">
            <div className="flex bg-white border border-sky-100 p-1 rounded-xl">
              <button
                onClick={() => setSearchMode("semantic")}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/20 ${searchMode === "semantic" ? "text-white shadow-sm" : "text-slate-400 hover:bg-sky-50"}`}
                style={searchMode === "semantic" ? navyBg : {}}
              >
                <Search size={12} /> {t.modeSemanticLabel}
              </button>
              <button
                onClick={() => {
                  setSearchMode("browse");
                  setBrowseQuery("");
                }}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/20 ${searchMode === "browse" ? "text-white shadow-sm" : "text-slate-400 hover:bg-sky-50"}`}
                style={searchMode === "browse" ? navyBg : {}}
              >
                <List size={12} /> {t.modeBrowseLabel}
              </button>
            </div>

            <div className="flex items-center gap-1 bg-white border border-sky-100 p-1 rounded-xl shrink-0">
              {(["tagalog", "english"] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-wider transition-all outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/20 ${language === lang ? "text-white shadow-sm" : "text-slate-400 hover:bg-sky-50"}`}
                  style={language === lang ? navyBg : {}}
                >
                  <span>{lang === "tagalog" ? "🇵🇭" : "🇬🇧"}</span>
                  {lang === "tagalog" ? "FIL" : "ENG"}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── SMART SEARCH MODE ── */}
        {searchMode === "semantic" && (
          <div className="flex-1 flex flex-col items-center justify-center px-6 lg:px-8 py-16">
            <div className="w-full max-w-xl">
              <div className="mb-8 text-center">
                <div
                  className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4"
                  style={{ backgroundColor: "rgba(13,38,69,0.07)" }}
                >
                  <BookOpen
                    size={26}
                    style={{ color: "#0d2645", opacity: 0.5 }}
                  />
                </div>
                <h2 className="text-xl font-extrabold text-slate-900 mb-1">
                  {t.modeSemanticLabel}
                </h2>
                <p className="text-sm text-slate-500">{t.idleSub}</p>
              </div>

              <div className="relative mb-3">
                <Search
                  size={16}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSemanticSearch()}
                  placeholder={t.placeholder}
                  className="w-full rounded-2xl border bg-white pl-11 pr-12 py-4 text-sm font-medium text-slate-800 placeholder-slate-400 shadow-sm outline-none transition-all ring-offset-2 focus:ring-2 focus:ring-cyan-500/20"
                  style={{ borderColor: "#bae6fd" }}
                  onFocus={onFocusSky}
                  onBlur={onBlurSky}
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors p-1 rounded-full hover:bg-slate-100"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>

              <button
                onClick={handleSemanticSearch}
                disabled={!searchQuery.trim()}
                className="w-full flex items-center justify-center gap-2 rounded-2xl py-3 text-sm font-bold transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90 hover:-translate-y-1 hover:shadow-lg active:scale-[0.98] outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/20"
                style={navyBg}
              >
                <span
                  style={{ color: "white" }}
                  className="flex items-center gap-2"
                >
                  {t.searchBtn} <ExternalLink size={14} />
                </span>
              </button>

              <p className="text-center text-[11px] text-slate-400 leading-relaxed mt-3">
                {t.hint}
              </p>

              <div className="flex items-center justify-center gap-1.5 mt-2">
                <span
                  className="text-[10px] font-bold uppercase tracking-widest"
                  style={{ color: "rgba(13,38,69,0.3)" }}
                >
                  {t.poweredBy}
                </span>
                <a
                  href="https://www.semanticscholar.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-bold underline underline-offset-2 transition-opacity hover:opacity-60"
                  style={{ color: "rgba(13,38,69,0.4)" }}
                >
                  semanticscholar.org ↗
                </a>
              </div>

              <div
                className="mt-10 pt-8 border-t text-center"
                style={skyBorder}
              >
                <p className="text-xs text-slate-400 mb-3">
                  {t.switchToBrowse}
                </p>
                <button
                  onClick={() => setSearchMode("browse")}
                  className="inline-flex items-center gap-1.5 text-xs font-bold transition-opacity hover:opacity-60 outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/20 rounded-lg p-1"
                  style={{ color: "#0d2645" }}
                >
                  <List size={12} /> {t.modeBrowseLabel} →
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ── BROWSE MODE ── */}
        {searchMode === "browse" && (
          <>
            <div
              className="px-6 lg:px-8 pt-5 pb-4 flex flex-col sm:flex-row gap-3 items-start sm:items-center border-b"
              style={skyBorder}
            >
              <div className="relative flex-1 max-w-md">
                <Search
                  size={14}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                />
                <input
                  type="text"
                  placeholder={t.browsePlaceholder}
                  value={browseQuery}
                  onChange={(e) => setBrowseQuery(e.target.value)}
                  className="w-full rounded-xl border bg-white py-2.5 pl-10 pr-10 text-sm font-medium text-slate-800 placeholder-slate-400 outline-none transition-all ring-offset-2 focus:ring-2 focus:ring-cyan-500/20"
                  style={{ borderColor: "#bae6fd" }}
                  onFocus={onFocusSky}
                  onBlur={onBlurSky}
                />
                {browseQuery && (
                  <button
                    onClick={() => setBrowseQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors p-1 rounded-full hover:bg-slate-100"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                {/* Resource type filter */}
                <div className="flex bg-white border border-sky-100 p-1 rounded-xl">
                  {[
                    { val: "all" as const, label: t.typeAll, icon: null },
                    {
                      val: "research" as const,
                      label: t.typeResearch,
                      icon: Search,
                    },
                    {
                      val: "ebooks" as const,
                      label: t.typeEbooks,
                      icon: BookMarked,
                    },
                  ].map(({ val, label, icon: Icon }) => (
                    <button
                      key={val}
                      onClick={() => setActiveType(val)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/20 ${activeType === val ? "text-white shadow-sm" : "text-slate-400 hover:bg-sky-50"}`}
                      style={activeType === val ? navyBg : {}}
                    >
                      {Icon && <Icon size={11} />}
                      {label}
                    </button>
                  ))}
                </div>

                {/* Local toggle */}
                <div className="flex bg-white border border-sky-100 p-1 rounded-xl">
                  {([false, true] as const).map((local) => (
                    <button
                      key={String(local)}
                      onClick={() => setOnlyLocal(local)}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/20 ${onlyLocal === local ? "text-white shadow-sm" : "text-slate-400 hover:bg-sky-50"}`}
                      style={onlyLocal === local ? navyBg : {}}
                    >
                      {local ? t.local : t.all}
                    </button>
                  ))}
                </div>

                <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 whitespace-nowrap">
                  {filtered.length} {t.results}
                </p>
              </div>
            </div>

            <div className="flex-1 px-6 lg:px-8 py-6">
              {filtered.length > 0 ? (
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {filtered.map((db) => (
                    <a
                      key={db.id}
                      href={db.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative flex flex-col justify-between rounded-2xl bg-white border p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/20"
                      style={skyBorder}
                    >
                      {/* Vertical Accent Bar */}
                      <div
                        className="absolute left-0 top-0 bottom-0 w-1.5 transition-all duration-300 group-hover:w-2"
                        style={{
                          backgroundColor:
                            db.resourceType === "research"
                              ? "#06b6d4"
                              : "#2dd4bf",
                        }}
                      />
                      <div>
                        <div className="mb-5 flex items-start justify-between gap-2">
                          <div className="h-8 w-28">
                            <img
                              src={db.logoUrl}
                              alt={db.name}
                              className="h-full w-full object-contain object-left"
                            />
                          </div>
                          <div className="flex flex-col items-end gap-1.5 shrink-0">
                            <span
                              className="flex items-center gap-1 rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider"
                              style={
                                db.resourceType === "ebooks"
                                  ? {
                                      backgroundColor: "rgba(45,212,191,0.1)",
                                      color: "#0d9488",
                                      border: "1px solid rgba(45,212,191,0.25)",
                                    }
                                  : {
                                      backgroundColor: "rgba(6,182,212,0.1)",
                                      color: "#0369a1",
                                      border: "1px solid rgba(6,182,212,0.25)",
                                    }
                              }
                            >
                              {db.resourceType === "ebooks" ? (
                                <>
                                  <BookMarked size={8} /> {t.typeEbooks}
                                </>
                              ) : (
                                <>
                                  <Search size={8} /> {t.typeResearch}
                                </>
                              )}
                            </span>
                            {db.isLocal && (
                              <span
                                className="flex items-center gap-1 rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider"
                                style={{
                                  backgroundColor: "rgba(16,185,129,0.08)",
                                  color: "#059669",
                                  border: "1px solid rgba(16,185,129,0.2)",
                                }}
                              >
                                <MapPin size={8} /> {t.local}
                              </span>
                            )}
                          </div>
                        </div>
                        <h2 className="mb-1.5 text-base font-bold text-slate-900">
                          {db.name}
                        </h2>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          {db.desc[language]}
                        </p>
                      </div>
                      <div className="mt-5 pt-4 border-t" style={skyBorder}>
                        <div
                          className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wide transition-all duration-200 group-hover:gap-2.5"
                          style={{
                            backgroundColor: "#0d2645",
                            color: "#ffffff",
                          }}
                        >
                          {t.visit}{" "}
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
                    style={{ backgroundColor: "rgba(13,38,69,0.05)" }}
                  >
                    <Search
                      size={28}
                      style={{ color: "#0d2645", opacity: 0.3 }}
                    />
                  </div>
                  <p className="text-base font-bold text-slate-400">
                    {t.emptyTitle}
                  </p>
                  <p className="text-sm text-slate-300 mt-1 mb-6">
                    {t.emptyDesc}
                  </p>
                  <button
                    onClick={() => {
                      setBrowseQuery("");
                      setActiveType("all");
                      setOnlyLocal(false);
                    }}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all hover:bg-slate-100 ring-1 ring-slate-200 outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/20 active:scale-[0.98]"
                    style={{ color: "#0d2645" }}
                  >
                    <X size={14} /> {t.clearFilters}
                  </button>
                </div>
              )}
            </div>
          </>
        )}
      </main>
    </div>
  );
}

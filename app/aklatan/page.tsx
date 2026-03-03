"use client";

import { useState } from "react";
import { ArrowLeft, Search, ExternalLink, Globe, MapPin } from "lucide-react";
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

export default function Aklatan() {
  const { language, setLanguage } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [onlyLocal, setOnlyLocal] = useState(false);

  const ui = {
    tagalog: {
      back: "Bumalik",
      title: "E-Aklatan",
      subtitle: "Maghanap sa mga libreng database at e-resources.",
      searchPlaceholder: "Maghanap ng database, journal, o paksa...",
      visit: "Puntahan",
      emptyTitle: "Walang nahanap na database.",
      emptyDesc: "Subukan ang ibang keyword.",
      results: "resulta",
      all: "Lahat",
      local: "Lokal",
    },
    english: {
      back: "Back",
      title: "E-Library",
      subtitle: "Search for free databases and e-resources.",
      searchPlaceholder: "Search for a database, journal, or topic...",
      visit: "Visit",
      emptyTitle: "No databases found.",
      emptyDesc: "Try a different keyword.",
      results: "results",
      all: "All",
      local: "Local",
    },
  };

  const t = ui[language];

  const filtered = openDatabases.filter(
    (db) =>
      (db.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        db.desc[language].toLowerCase().includes(searchQuery.toLowerCase())) &&
      (!onlyLocal || db.isLocal),
  );

  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-white to-[#f0f9ff] p-6 md:p-12 relative">
      {/* PERSISTENT TOP NAV: Back + Language */}
      <div className="w-full max-w-6xl flex items-center justify-between z-50 mb-10 mx-auto">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-bold text-slate-800 shadow-sm transition-transform hover:-translate-x-1 hover:shadow-md"
        >
          <ArrowLeft size={18} />
          {t.back}
        </Link>

        <div className="flex items-center gap-1 bg-white/40 border border-slate-200 p-1 rounded-xl shadow-sm backdrop-blur-sm">
          <button
            onClick={() => setLanguage("tagalog")}
            className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${
              language === "tagalog"
                ? "bg-blue-600 text-white shadow-md"
                : "text-slate-500 hover:bg-white/60"
            }`}
          >
            PH
          </button>
          <button
            onClick={() => setLanguage("english")}
            className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${
              language === "english"
                ? "bg-blue-600 text-white shadow-md"
                : "text-slate-500 hover:bg-white/60"
            }`}
          >
            EN
          </button>
        </div>
      </div>

      {/* COMPACT HEADER LOGO */}
      <header className="flex flex-col items-center text-center mb-8 max-w-3xl">
        <Image
          src="/aklatang-galera-logo.png"
          alt="Aklatang Galera Logo"
          width={130}
          height={60}
          priority
          className="mb-3 object-contain opacity-90"
        />
        <h1 className="text-3xl font-black uppercase tracking-tight text-slate-900">
          {t.title}
        </h1>
        <p className="mt-1 text-base font-medium text-slate-500">
          {t.subtitle}
        </p>
      </header>

      {/* SEARCH BAR  */}
      <div className="w-full max-w-2xl mb-12">
        <div className="relative shadow-sm rounded-2xl overflow-hidden border border-slate-200 bg-white">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-6">
            <Search className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="text"
            className="block w-full py-4 pl-14 pr-6 text-md font-medium text-slate-900 placeholder-slate-400 outline-none transition-colors focus:ring-2 focus:ring-blue-500/10"
            placeholder={t.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* TOOLBAR */}
      <div className="w-full max-w-6xl flex items-center justify-between mb-8 border-b border-slate-200 pb-4">
        <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">
          {filtered.length} {t.results}
        </div>

        <div className="flex bg-slate-200/50 p-1 rounded-xl">
          <button
            onClick={() => setOnlyLocal(false)}
            className={`px-6 py-1.5 rounded-lg text-xs font-bold transition-all ${
              !onlyLocal
                ? "bg-white text-blue-600 shadow-sm"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            {t.all}
          </button>
          <button
            onClick={() => setOnlyLocal(true)}
            className={`px-6 py-1.5 rounded-lg text-xs font-bold transition-all ${
              onlyLocal
                ? "bg-white text-blue-600 shadow-sm"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            {t.local}
          </button>
        </div>
      </div>

      {/* GRID */}
      <div className="grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.length > 0 ? (
          filtered.map((db) => (
            <a
              key={db.id}
              href={db.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between rounded-3xl bg-white p-8 shadow-sm border border-slate-100 transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div>
                <div className="mb-6 flex items-center justify-between">
                  <div className="h-10 w-28 relative">
                    <img
                      src={db.logoUrl}
                      alt={db.name}
                      className="h-full w-full object-contain object-left"
                    />
                  </div>
                  {db.isLocal && (
                    <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-bold text-emerald-600 uppercase tracking-wider">
                      <MapPin size={10} />
                      LOKAL
                    </span>
                  )}
                </div>
                <h2 className="mb-2 text-xl font-bold text-slate-900">
                  {db.name}
                </h2>
                <p className="text-sm font-medium text-slate-500 leading-relaxed">
                  {db.desc[language]}
                </p>
              </div>
              <div className="mt-8 flex items-center text-sm font-bold text-blue-600">
                {t.visit}{" "}
                <ExternalLink
                  size={16}
                  className="ml-2 transition-transform group-hover:translate-x-1"
                />
              </div>
            </a>
          ))
        ) : (
          <div className="col-span-full py-20 text-center">
            <Search size={48} className="mx-auto mb-4 text-slate-200" />
            <p className="text-xl font-bold text-slate-400">{t.emptyTitle}</p>
            <p className="text-sm text-slate-400">{t.emptyDesc}</p>
          </div>
        )}
      </div>
    </main>
  );
}

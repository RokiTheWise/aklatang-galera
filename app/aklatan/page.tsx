"use client";

import { useState } from "react";
import { ArrowLeft, Search, ExternalLink, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

// Simplified Categories: Just All or Local
const categoryMap: Record<string, { tagalog: string; english: string }> = {
  all: { tagalog: "Lahat", english: "All" },
  local: { tagalog: "Lokal", english: "Local" },
};

const categoryIds = ["all", "local"];

// Updated Data Structure with `isLocal` flag and `logoUrl`
const openDatabases = [
  {
    id: 1,
    name: "DOAJ",
    isLocal: false,
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/11/DOAJ_logo.svg", // Replace with your own local images later
    link: "https://doaj.org/",
    desc: {
      tagalog:
        "Directory of Open Access Journals. Libreng peer-reviewed scientific at scholarly articles.",
      english:
        "Directory of Open Access Journals. Free peer-reviewed scientific and scholarly articles.",
    },
  },
  {
    id: 2,
    name: "arXiv",
    isLocal: false,
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/b/b2/ArXiv_logo_2022.svg",
    link: "https://arxiv.org/",
    desc: {
      tagalog:
        "Open-access archive para sa computer science, mathematics, at physics research.",
      english:
        "Open-access archive for computer science, mathematics, and physics research.",
    },
  },
  {
    id: 3,
    name: "Philippine E-Journals",
    isLocal: true,
    logoUrl: "https://ejournals.ph/images/pej-logo.png",
    link: "https://ejournals.ph/",
    desc: {
      tagalog:
        "Koleksyon ng mga academic publications mula sa iba't ibang unibersidad sa Pilipinas.",
      english:
        "Collection of academic publications from various universities in the Philippines.",
    },
  },
  {
    id: 4,
    name: "Project Gutenberg",
    isLocal: false,
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/d/d4/Project_Gutenberg_logo.svg",
    link: "https://www.gutenberg.org/",
    desc: {
      tagalog:
        "Mahigit 70,000 libreng e-books, kabilang ang mga classic literature at history books.",
      english:
        "Over 70,000 free e-books, including classic literature and history books.",
    },
  },
  {
    id: 5,
    name: "PubMed Central",
    isLocal: false,
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/f/fb/US-NLM-PubMed-Logo.svg",
    link: "https://www.ncbi.nlm.nih.gov/pmc/",
    desc: {
      tagalog:
        "Libreng digital archive ng biomedical at life sciences journal literature.",
      english:
        "Free digital archive of biomedical and life sciences journal literature.",
    },
  },
];

export default function Aklatan() {
  const { language, setLanguage } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const ui = {
    tagalog: {
      back: "Bumalik",
      title: "E-Aklatan",
      subtitle: "Maghanap sa mga libreng database at e-resources.",
      searchPlaceholder: "Maghanap ng database, journal, o paksa...",
      visit: "Puntahan",
      emptyTitle: "Walang nahanap na database.",
      emptyDesc: "Subukan ang ibang keyword o kategorya.",
    },
    english: {
      back: "Back",
      title: "E-Library",
      subtitle: "Search for free databases and e-resources.",
      searchPlaceholder: "Search for a database, journal, or topic...",
      visit: "Visit",
      emptyTitle: "No databases found.",
      emptyDesc: "Try a different keyword or category.",
    },
  };

  const t = ui[language];

  // Filter logic: Check search text AND if the "local" toggle is active
  const filteredDatabases = openDatabases.filter((db) => {
    const currentDesc = db.desc[language].toLowerCase();
    const matchesSearch =
      db.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      currentDesc.includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" ||
      (selectedCategory === "local" && db.isLocal);

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="flex min-h-screen flex-col items-center bg-[var(--color-bright-snow)] p-6 md:p-12 relative">
      {/* Top Navigation Bar */}
      <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-50">
        {/* Back Button */}
        <Link
          href="/"
          className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[var(--color-aklatang-navy)] shadow-sm transition-transform hover:-translate-x-1 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[var(--color-royal-blue)]"
        >
          <ArrowLeft size={18} />
          {t.back}
        </Link>

        {/* Language Toggle */}
        <nav className="flex items-center gap-2 rounded-full border border-[var(--color-aklatang-navy)]/10 bg-white/50 px-4 py-2 backdrop-blur-md">
          <Globe size={16} className="text-[var(--color-aklatang-navy)]/60" />
          <button
            onClick={() => setLanguage("tagalog")}
            className={`text-sm transition-colors ${
              language === "tagalog"
                ? "font-bold text-[var(--color-royal-blue)]"
                : "font-medium text-[var(--color-aklatang-navy)]/60 hover:text-[var(--color-royal-blue)]"
            }`}
          >
            Tagalog
          </button>
          <span className="text-[var(--color-aklatang-navy)]/30">|</span>
          <button
            onClick={() => setLanguage("english")}
            className={`text-sm transition-colors ${
              language === "english"
                ? "font-bold text-[var(--color-royal-blue)]"
                : "font-medium text-[var(--color-aklatang-navy)]/60 hover:text-[var(--color-royal-blue)]"
            }`}
          >
            English
          </button>
        </nav>
      </div>

      {/* Header with Logo */}
      <header className="flex w-full max-w-6xl flex-col items-center justify-center mt-16 mb-10 text-center">
        <Image
          src="/aklatang-galera-logo.png"
          alt="Aklatang Galera Logo"
          width={180}
          height={100}
          priority
          className="mb-6 object-contain drop-shadow-sm"
        />
        <h1 className="text-4xl font-black uppercase tracking-tight text-[var(--color-aklatang-navy)]">
          {t.title}
        </h1>
        <p className="mt-2 text-lg font-medium text-[var(--color-aklatang-navy)]/60">
          {t.subtitle}
        </p>
      </header>

      {/* Search and Filter Section */}
      <div className="w-full max-w-6xl mb-12 flex flex-col items-center gap-6">
        <div className="relative w-full max-w-3xl shadow-sm rounded-2xl overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-6">
            <Search className="h-6 w-6 text-[var(--color-aklatang-navy)]/40" />
          </div>
          <input
            type="text"
            className="block w-full border-2 border-transparent bg-white py-5 pl-16 pr-6 text-lg font-medium text-[var(--color-aklatang-navy)] placeholder-[var(--color-aklatang-navy)]/40 outline-none transition-colors focus:border-[var(--color-royal-blue)]"
            placeholder={t.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Simplified Category Pills */}
        <div className="flex flex-wrap gap-3">
          {categoryIds.map((catId) => (
            <button
              key={catId}
              onClick={() => setSelectedCategory(catId)}
              className={`rounded-full px-8 py-2.5 text-sm font-bold transition-all ${
                selectedCategory === catId
                  ? "bg-[var(--color-royal-blue)] text-white shadow-md"
                  : "bg-white text-[var(--color-aklatang-navy)]/70 hover:bg-[var(--color-royal-blue)]/10 hover:text-[var(--color-royal-blue)]"
              }`}
            >
              {categoryMap[catId][language]}
            </button>
          ))}
        </div>
      </div>

      {/* Dynamic Resources Grid */}
      <div className="grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredDatabases.length > 0 ? (
          filteredDatabases.map((db) => (
            <a
              key={db.id}
              href={db.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between rounded-3xl border border-[var(--color-aklatang-navy)]/5 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-[var(--color-royal-blue)]/30 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[var(--color-royal-blue)]/50"
            >
              <div>
                {/* Logo Image */}
                <div className="mb-6 flex h-16 w-full items-center justify-start">
                  <img
                    src={db.logoUrl}
                    alt={`${db.name} logo`}
                    className="max-h-full max-w-[150px] object-contain opacity-80 transition-opacity group-hover:opacity-100"
                  />
                </div>

                <h2 className="mb-2 text-2xl font-bold text-[var(--color-aklatang-navy)]">
                  {db.name}
                </h2>
                <p className="text-sm font-medium text-[var(--color-aklatang-navy)]/60 leading-relaxed">
                  {db.desc[language]}
                </p>
              </div>
              <div className="mt-8 flex items-center text-sm font-bold text-[var(--color-royal-blue)]">
                {t.visit}{" "}
                <ExternalLink
                  size={16}
                  className="ml-2 transition-transform group-hover:translate-x-1"
                />
              </div>
            </a>
          ))
        ) : (
          <div className="col-span-full py-12 text-center text-[var(--color-aklatang-navy)]/50">
            <Search size={48} className="mx-auto mb-4 opacity-20" />
            <p className="text-xl font-bold">{t.emptyTitle}</p>
            <p className="text-sm mt-2">{t.emptyDesc}</p>
          </div>
        )}
      </div>
    </main>
  );
}

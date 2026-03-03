"use client";

import { useState } from "react";
import { ArrowLeft, Search, ExternalLink, Database } from "lucide-react";
import Link from "next/link";

// Dummy data for open-source databases
const openDatabases = [
  {
    id: 1,
    name: "DOAJ",
    desc: "Directory of Open Access Journals. Libreng peer-reviewed scientific at scholarly articles.",
    category: "Academics",
    link: "#",
  },
  {
    id: 2,
    name: "arXiv",
    desc: "Open-access archive para sa computer science, mathematics, at physics research.",
    category: "Tech & Science",
    link: "#",
  },
  {
    id: 3,
    name: "Philippine E-Journals",
    desc: "Koleksyon ng mga academic publications mula sa iba't ibang unibersidad sa Pilipinas.",
    category: "Local",
    link: "#",
  },
  {
    id: 4,
    name: "Project Gutenberg",
    desc: "Mahigit 70,000 libreng e-books, kabilang ang mga classic literature at history books.",
    category: "Literature",
    link: "#",
  },
  {
    id: 5,
    name: "PubMed Central",
    desc: "Libreng digital archive ng biomedical at life sciences journal literature.",
    category: "Academics",
    link: "#",
  },
  {
    id: 6,
    name: "CORE",
    desc: "Ang pinakamalaking koleksyon ng open-access research papers sa buong mundo.",
    category: "Academics",
    link: "#",
  },
];

const categories = [
  "All",
  "Academics",
  "Tech & Science",
  "Local",
  "Literature",
];

export default function Aklatan() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter logic based on search input and selected category pill
  const filteredDatabases = openDatabases.filter((db) => {
    const matchesSearch =
      db.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      db.desc.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || db.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="flex min-h-screen flex-col items-center bg-[var(--color-bright-snow)] p-6 md:p-12">
      {/* Header & Back Button */}
      <header className="relative flex w-full max-w-6xl items-center justify-center mb-10">
        <Link
          href="/"
          className="absolute left-0 flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[var(--color-aklatang-navy)] shadow-md transition-transform hover:-translate-x-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-royal-blue)]"
        >
          <ArrowLeft size={20} />
          Bumalik
        </Link>

        <div className="flex flex-col items-center text-center mt-12 md:mt-0">
          <h1 className="text-4xl font-black uppercase tracking-tight text-[var(--color-aklatang-navy)]">
            E-Aklatan
          </h1>
          <p className="mt-2 text-lg font-medium text-[var(--color-aklatang-navy)]/60">
            Maghanap sa mga libreng database at e-resources.
          </p>
        </div>
      </header>

      {/* Search and Filter Section */}
      <div className="w-full max-w-6xl mb-12 flex flex-col gap-6">
        {/* Search Bar */}
        <div className="relative w-full shadow-sm rounded-2xl overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-6">
            <Search className="h-6 w-6 text-[var(--color-aklatang-navy)]/40" />
          </div>
          <input
            type="text"
            className="block w-full border-2 border-transparent bg-white py-5 pl-16 pr-6 text-lg font-medium text-[var(--color-aklatang-navy)] placeholder-[var(--color-aklatang-navy)]/40 outline-none transition-colors focus:border-[var(--color-royal-blue)]"
            placeholder="Maghanap ng database, journal, o paksa..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-6 py-2.5 text-sm font-bold transition-all ${
                selectedCategory === category
                  ? "bg-[var(--color-royal-blue)] text-white shadow-md"
                  : "bg-white text-[var(--color-aklatang-navy)]/70 hover:bg-[var(--color-royal-blue)]/10 hover:text-[var(--color-royal-blue)]"
              }`}
            >
              {category}
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
                <div className="mb-4 flex items-center justify-between">
                  <div className="inline-flex rounded-2xl bg-[var(--color-royal-blue)]/10 p-3 text-[var(--color-royal-blue)]">
                    <Database size={24} />
                  </div>
                  <span className="rounded-full bg-[var(--color-bright-snow)] px-3 py-1 text-xs font-bold text-[var(--color-aklatang-navy)]/50">
                    {db.category}
                  </span>
                </div>
                <h2 className="mb-2 text-2xl font-bold text-[var(--color-aklatang-navy)]">
                  {db.name}
                </h2>
                <p className="text-sm font-medium text-[var(--color-aklatang-navy)]/60 leading-relaxed">
                  {db.desc}
                </p>
              </div>
              <div className="mt-8 flex items-center text-sm font-bold text-[var(--color-royal-blue)]">
                Puntahan{" "}
                <ExternalLink
                  size={16}
                  className="ml-2 transition-transform group-hover:translate-x-1"
                />
              </div>
            </a>
          ))
        ) : (
          /* Empty State if search finds nothing */
          <div className="col-span-full py-12 text-center text-[var(--color-aklatang-navy)]/50">
            <Search size={48} className="mx-auto mb-4 opacity-20" />
            <p className="text-xl font-bold">Walang nahanap na database.</p>
            <p className="text-sm mt-2">
              Subukan ang ibang keyword o kategorya.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}

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
  X,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

type Category = "egovernment" | "scholarships" | "transparency";

interface Resource {
  id: number;
  name: string;
  category: Category;
  link: string;
  logoUrl: string;
  featured?: boolean;
  tags?: string[];
  desc: { tagalog: string; english: string };
}

const resources: Resource[] = [
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
  {
    id: 19,
    category: "egovernment",
    featured: false,
    name: "eGovPH Super App",
    link: "https://e.gov.ph/",
    logoUrl: "/egov-logo.png",
    desc: {
      tagalog:
        "Ang one-stop-shop app para sa lahat ng serbisyo ng gobyerno ng Pilipinas.",
      english:
        "The single operating system app for all Philippine government services.",
    },
  },
  {
    id: 20,
    category: "egovernment",
    featured: false,
    name: "DFA Passport Appointment",
    link: "https://www.passport.gov.ph/",
    logoUrl: "/dfa-logo.png",
    desc: {
      tagalog: "Opisyal na portal para sa passport appointments at renewals.",
      english:
        "Official portal for scheduling passport applications and renewals.",
    },
  },
  {
    id: 21,
    category: "egovernment",
    featured: false,
    name: "BIR ORUS",
    link: "https://orus.bir.gov.ph/",
    logoUrl: "/bir-logo.png",
    desc: {
      tagalog:
        "Online portal para sa registration at updates ng Taxpayer Identification Number (TIN).",
      english:
        "Online registration and update system for Taxpayer Identification Numbers.",
    },
  },
  {
    id: 22,
    category: "egovernment",
    featured: false,
    name: "PSA Helpline",
    link: "https://psahelpline.ph/",
    logoUrl: "/psa-logo.png",
    desc: {
      tagalog: "Mag-order ng Birth, Marriage, at Death Certificates online.",
      english:
        "Order Birth, Marriage, and Death Certificates for nationwide delivery.",
    },
  },
  {
    id: 23,
    category: "egovernment",
    featured: false,
    name: "DTI BNRS",
    link: "https://bnrs.dti.gov.ph/",
    logoUrl: "/dti-logo.png",
    desc: {
      tagalog: "I-rehistro ang pangalan ng iyong negosyo online sa DTI.",
      english:
        "Register your sole proprietorship business name online with DTI.",
    },
  },
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
    link: "https://ched.gov.ph/merit-scholarship/",
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
    link: "https://www.science-scholarships.ph/",
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
    link: "https://scholarship.owwa.gov.ph/",
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
  {
    id: 24,
    category: "scholarships",
    featured: false,
    name: "SM Foundation Scholarship",
    link: "https://www.sm-foundation.org/what_we_do/college-scholarship-program/",
    logoUrl: "/sm-logo.svg",
    desc: {
      tagalog:
        "Full tuition at allowance para sa mga kwalipikadong public SHS graduates.",
      english:
        "Full tuition and monthly stipends for qualified public high school graduates.",
    },
  },
  {
    id: 25,
    category: "scholarships",
    featured: false,
    name: "Gokongwei Brothers Foundation",
    link: "https://www.gokongweibrothersfoundation.org/programs/scholarships",
    logoUrl: "/gokongwei-logo.jpg",
    desc: {
      tagalog:
        "Suportang pinansyal para sa mga mahuhusay na mag-aaral sa STEM courses.",
      english:
        "Financial support for outstanding students pursuing STEM-related degrees.",
    },
  },
  {
    id: 26,
    category: "scholarships",
    featured: false,
    name: "Megaworld Foundation",
    link: "https://www.megaworldfoundation.com/scholarship_program",
    logoUrl: "/mf-logo.png",
    desc: {
      tagalog:
        "Scholarship program para sa mga deserving na estudyante sa kolehiyo.",
      english:
        "Educational assistance program for deserving college students nationwide.",
    },
  },
  {
    id: 28,
    category: "scholarships",
    featured: false,
    name: "Aboitiz Future Leaders Scholarship Program",
    link: "https://sites.google.com/aboitiz.com/aboitiz-future-leaders-scholar/home?authuser=0/",
    logoUrl: "/aboitiz-logo.svg",
    desc: {
      tagalog:
        "Full tuition at allowance para sa mga sophomore (88% GWA) sa Engineering, Business, at Data Science.",
      english:
        "Full tuition and allowances for sophomores (88% GWA) in Engineering, Business, and Data Science.",
    },
  },
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
  {
    id: 29,
    category: "transparency",
    featured: false,
    name: "Official Gazette",
    link: "https://www.officialgazette.gov.ph/",
    logoUrl: "/og-logo.png",
    desc: {
      tagalog:
        "Ang opisyal na journal ng Republika ng Pilipinas para sa mga bagong batas.",
      english:
        "The official journal of the Republic of the Philippines for new laws and issuances.",
    },
  },
  {
    id: 30,
    category: "transparency",
    featured: false,
    name: "FOI Philippines",
    link: "https://www.foi.gov.ph/",
    logoUrl: "/foi-logo.png",
    desc: {
      tagalog: "Portal para sa paghiling ng pampublikong impormasyon at datos.",
      english:
        "Official portal for requesting public data and government documents.",
    },
  },
  {
    id: 31,
    category: "transparency",
    featured: false,
    name: "OGP Philippines",
    link: "https://ogp.dbm.gov.ph/",
    logoUrl: "/ogp-logo.jpg",
    desc: {
      tagalog: "Inisyatibo para sa mas bukas at tapat na pamamahala sa bansa.",
      english:
        "Initiative for a more open, accountable, and transparent governance.",
    },
  },
  {
    id: 32,
    category: "scholarships",
    featured: false,
    name: "National University Manila Scholarships",
    link: "https://www.national-u.edu.ph/nu-manila/scholarships/",
    logoUrl: "nu-logo.svg",
    desc: {
      tagalog:
        "Mga scholarship at financial aid programs ng National University Manila.",
      english:
        "Scholarship and financial aid programs of National University Manila.",
    },
  },
];

const categories = [
  {
    key: "egovernment" as Category,
    icon: Landmark,
    color: "#21b8a4",
    bg: "rgba(45,212,191,0.07)",
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
  egovernment: "#21b8a4",
  scholarships: "#7c3aed",
  transparency: "#0891b2",
};
const categoryBg: Record<Category, string> = {
  egovernment: "rgba(45,212,191,0.08)",
  scholarships: "rgba(124,58,237,0.08)",
  transparency: "rgba(8,145,178,0.08)",
};
const categoryBorder: Record<Category, string> = {
  egovernment: "rgba(45,212,191,0.15)",
  scholarships: "rgba(124,58,237,0.15)",
  transparency: "rgba(8,145,178,0.15)",
};
const categoryOrder: Record<Category | "all", number> = {
  all: 0,
  egovernment: 1,
  scholarships: 2,
  transparency: 3,
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
      clearFilters: "I-clear lahat ng filter",
    },
    english: {
      back: "Back to Home",
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
      clearFilters: "Clear all filters",
    },
  };
  const t = ui[language];

  const featuredResource = resources.find((r) => r.featured);
  const nonFeatured = resources.filter((r) => !r.featured);

  const filtered = nonFeatured
    .filter((r) => {
      const matchCat =
        activeCategory === "all" || r.category === activeCategory;
      const q = searchQuery.toLowerCase();
      const matchQuery =
        !q ||
        r.name.toLowerCase().includes(q) ||
        r.desc[language].toLowerCase().includes(q);
      return matchCat && matchQuery;
    })
    .sort((a, b) => {
      if (a.category !== b.category)
        return categoryOrder[a.category] - categoryOrder[b.category];
      return a.name.localeCompare(b.name);
    });

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
      {/* ── LEFT PANEL ── */}
      <aside
        className="relative flex flex-col w-full md:w-[32%] lg:w-[30%] shrink-0 md:h-screen md:sticky md:top-0 py-8 px-7 md:py-10 md:px-9 overflow-hidden"
        style={{ backgroundColor: "#0d2645" }}
      >
        {" "}
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
        <div className="relative z-10 flex-1 flex flex-col justify-start md:justify-center gap-4 md:gap-5 py-4 md:py-0">
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

          <div className="hidden md:flex flex-col gap-2.5">
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
                  className={`flex items-center gap-2.5 w-full text-left p-2 -ml-2 rounded-xl transition-all duration-300 group outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/20 ${activeCategory === cat.key ? "" : "hover:bg-white/5"}`}
                  style={
                    activeCategory === cat.key
                      ? { backgroundColor: cat.bg.replace("0.07", "0.2") }
                      : {}
                  }
                >
                  <div
                    className="flex items-center justify-center w-7 h-7 rounded-lg shrink-0 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: cat.bg.replace("0.07", "0.15") }}
                  >
                    <cat.icon size={13} style={{ color: cat.color }} />
                  </div>
                  <span
                    className={`text-xs font-semibold transition-colors ${activeCategory === cat.key ? "text-white" : ""} group-hover:text-white`}
                    style={
                      activeCategory !== cat.key
                        ? { color: "rgba(186,230,253,0.75)" }
                        : {}
                    }
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
        <div
          className="relative z-10 pt-5 mt-5 border-t"
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
            · Made by a Galeran, for Galerans
          </p>
        </div>
      </aside>

      {/* ── RIGHT PANEL ── */}
      <main
        className="flex-1 flex flex-col min-h-screen"
        style={{ backgroundColor: "#f0f9ff" }}
      >
        {" "}
        <div
          className="sticky top-0 z-40 backdrop-blur-sm border-b px-6 lg:px-8 py-4"
          style={{
            backgroundColor: "rgba(240,249,255,0.95)",
            borderColor: "#e0f2fe",
          }}
        >
          <div className="flex flex-wrap items-center gap-2">
            {/* Search — full width on mobile, flex-1 on sm+ */}
            <div className="relative w-full sm:flex-1 sm:min-w-0 sm:max-w-sm group">
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

            {/* ── Language Slider Toggle — shrinks to next row on mobile ── */}
            <div className="relative flex items-center rounded-full border border-slate-200 bg-white shadow-sm p-1 shrink-0 sm:ml-auto">
              <button
                onClick={() => setLanguage("tagalog")}
                className={`relative z-10 flex items-center gap-1.5 px-4 py-1.5 text-[11px] font-black uppercase tracking-widest transition-colors duration-200 select-none ${language === "tagalog" ? "text-white" : "text-slate-400 hover:text-slate-600"}`}
              >
                <span className="text-sm">🇵🇭</span> FIL
              </button>
              <button
                onClick={() => setLanguage("english")}
                className={`relative z-10 flex items-center gap-1.5 px-4 py-1.5 text-[11px] font-black uppercase tracking-widest transition-colors duration-200 select-none ${language === "english" ? "text-white" : "text-slate-400 hover:text-slate-600"}`}
              >
                <span className="text-sm">🇬🇧</span> ENG
              </button>
              <div
                className={`pointer-events-none absolute inset-1 z-0 flex ${language === "english" ? "justify-end" : "justify-start"}`}
              >
                <motion.span
                  layout
                  transition={{ type: "spring", damping: 18, stiffness: 280 }}
                  className="h-full w-1/2 rounded-full"
                  style={{ backgroundColor: "#0d2645" }}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 mt-2 md:mt-3">
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
                <cat.icon size={11} /> {t.categories[cat.key]}
              </button>
            ))}
            <div className="ml-auto shrink-0 px-3 py-1.5 bg-slate-100 rounded-lg">
              <p className="text-[10px] font-black uppercase tracking-tighter text-slate-500 whitespace-nowrap">
                {showFeatured ? filtered.length + 1 : filtered.length}{" "}
                {t.results}
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 px-4 md:px-6 lg:px-8 py-5 md:py-8 flex flex-col gap-6 md:gap-8">
          {showFeatured && featuredResource && (
            <a
              href={featuredResource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col md:flex-row gap-4 md:gap-6 rounded-[24px] md:rounded-[32px] p-6 md:p-10 overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(13,38,69,0.15)] hover:-translate-y-1 active:scale-[0.99] border"
              style={{
                backgroundColor: "#0d2645",
                borderColor: "rgba(255,255,255,0.07)",
              }}
            >
              <div
                className="absolute -top-16 -right-16 w-64 h-64 rounded-full pointer-events-none blur-3xl"
                style={{ backgroundColor: "rgba(45,212,191,0.1)" }}
              />
              <div
                className="absolute -bottom-16 -left-10 w-48 h-48 rounded-full pointer-events-none blur-3xl"
                style={{ backgroundColor: "rgba(6,182,212,0.08)" }}
              />

              <div className="relative z-10 flex flex-col justify-between flex-1 gap-6">
                <div
                  className="inline-flex items-center gap-1.5 self-start rounded-full px-4 py-1.5 text-[10px] font-black uppercase tracking-widest shadow-lg shadow-amber-900/20"
                  style={{
                    backgroundColor: "rgba(245,158,11,0.15)",
                    color: "#f59e0b",
                    border: "1px solid rgba(245,158,11,0.25)",
                  }}
                >
                  <Star size={10} fill="#f59e0b" /> {t.featuredLabel}
                </div>
                <div>
                  <h2
                    className="text-2xl md:text-3xl font-black mb-3 tracking-tight"
                    style={{ color: "#ffffff" }}
                  >
                    {featuredResource.name}
                  </h2>
                  <p
                    className="text-base leading-relaxed mb-6 font-medium max-w-2xl"
                    style={{ color: "rgba(186,230,253,0.8)" }}
                  >
                    {t.featuredHint}
                  </p>
                  {featuredResource.tags && (
                    <div className="flex flex-wrap gap-2.5">
                      {featuredResource.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full px-4 py-1.5 text-[11px] font-black uppercase tracking-wider"
                          style={{
                            backgroundColor: "rgba(6,182,212,0.12)",
                            color: "rgba(186,230,253,0.9)",
                            border: "1px solid rgba(6,182,212,0.2)",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <div
                  className="inline-flex items-center gap-2.5 self-start rounded-2xl px-7 py-3.5 text-sm font-black uppercase tracking-widest transition-all duration-300 group-hover:gap-4 group-hover:shadow-xl group-hover:shadow-amber-500/20 active:scale-95"
                  style={{ backgroundColor: "#f59e0b", color: "#0d2645" }}
                >
                  {t.featuredBtn}{" "}
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>
              </div>

              <div className="relative z-10 flex items-center justify-center shrink-0 md:w-48 filter drop-shadow-2xl">
                <img
                  src={featuredResource.logoUrl}
                  alt={featuredResource.name}
                  className="h-20 w-auto object-contain brightness-0 invert opacity-80"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>
            </a>
          )}

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
                    className="group relative flex flex-col justify-between rounded-3xl bg-white border p-5 md:p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/20"
                    style={skyBorder}
                  >
                    <div
                      className="absolute left-0 top-0 bottom-0 w-1.5 transition-all duration-300 group-hover:w-2"
                      style={{ backgroundColor: color }}
                    />
                    <div>
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
                        <div className="flex flex-col items-end gap-1.5 shrink-0 -translate-x-3">
                          <span
                            className="flex items-center gap-1 shrink-0 rounded-full px-3 py-1 text-[9px] font-black uppercase tracking-widest shadow-sm"
                            style={{
                              backgroundColor: bg,
                              color,
                              border: `1px solid ${border}`,
                            }}
                          >
                            <CatIcon size={9} />{" "}
                            {t.categories[resource.category]}
                          </span>
                        </div>
                      </div>
                      <h2 className="mb-2 text-lg font-black text-slate-900 leading-snug">
                        {resource.name}
                      </h2>
                      <p className="text-sm text-slate-500 leading-relaxed font-medium">
                        {resource.desc[language]}
                      </p>
                    </div>
                    <div className="mt-6 pt-5 border-t border-slate-50 flex items-center justify-between">
                      <div
                        className="inline-flex items-center gap-2 rounded-2xl px-5 py-2.5 text-xs font-black uppercase tracking-widest transition-all duration-300 group-hover:gap-3 group-hover:shadow-lg group-hover:shadow-sky-900/10 active:scale-95"
                        style={{ backgroundColor: "#0d2645", color: "#ffffff" }}
                      >
                        {t.visit}{" "}
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
          ) : !showFeatured ? (
            <div className="flex flex-col items-center justify-center py-40 text-center">
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
                }}
                className="mt-8 flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-black uppercase tracking-widest transition-all hover:bg-slate-100 ring-1 ring-slate-200 outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/20 active:scale-[0.98]"
                style={{ color: "#0d2645" }}
              >
                <X size={14} /> {t.clearFilters}
              </button>
            </div>
          ) : null}
        </div>
      </main>
    </div>
  );
}

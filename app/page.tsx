"use client";

import { Book, Briefcase, Landmark, Sparkles } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { MenuCard } from "@/components/MenuCard";

// ─── Slider Language Toggle ───────────────────────────────────────────────────
const TOGGLE_CLASSES =
  "relative z-10 flex items-center gap-2 px-5 py-2 text-[11px] font-black uppercase tracking-widest transition-colors duration-200 select-none";

function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="relative flex w-fit items-center rounded-full border border-slate-200 bg-white shadow-sm p-1">
      {/* Filipino button */}
      <button
        onClick={() => setLanguage("tagalog")}
        className={`${TOGGLE_CLASSES} ${
          language === "tagalog"
            ? "text-white"
            : "text-slate-400 hover:text-slate-600"
        }`}
      >
        <span className="text-sm">🇵🇭</span>
        <span>FIL</span>
      </button>

      {/* English button */}
      <button
        onClick={() => setLanguage("english")}
        className={`${TOGGLE_CLASSES} ${
          language === "english"
            ? "text-white"
            : "text-slate-400 hover:text-slate-600"
        }`}
      >
        <span className="text-sm">🇬🇧</span>
        <span>ENG</span>
      </button>

      {/* Sliding navy pill */}
      <div
        className={`pointer-events-none absolute inset-1 z-0 flex ${
          language === "english" ? "justify-end" : "justify-start"
        }`}
      >
        <motion.span
          layout
          transition={{ type: "spring", damping: 18, stiffness: 280 }}
          className="h-full w-1/2 rounded-full"
          style={{ backgroundColor: "#0d2645" }}
        />
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  const { language } = useLanguage();

  const content = {
    tagalog: {
      headline: "Kaalaman para sa bawat Galeran.",
      missionLabel: "Aming Misyon",
      mission:
        "Ang Aklatang Galera ay naglalayong ilapit ang kaalaman, oportunidad, at serbisyong pampubliko sa bawat mamamayan ng Puerto Galera — libre, digital, at palaging bukas.",
      partnerNote: "Mula sa isang Galera para sa mga Galeran",
      sections: {
        aklatan: {
          title: "Digital na Aklatan",
          desc: "Research, e-books, at mga learning resources para sa lahat.",
          cta: "I-browse",
        },
        hanapbuhay: {
          title: "Hanapbuhay",
          desc: "Skills training, community projects, at mga trabaho.",
          cta: "Tingnan",
        },
        serbisyo: {
          title: "Serbisyong Pampubliko",
          desc: "Forms, scholarships, at mga programa ng gobyerno.",
          cta: "Buksan",
        },
      },
    },
    english: {
      headline: "Knowledge for every Galeran.",
      missionLabel: "Our Mission",
      mission:
        "Aklatang Galera aims to make knowledge, opportunity, and public services accessible to every citizen of Puerto Galera — free, digital, and always open.",
      partnerNote: "Made by a Galeran for Galerans",
      sections: {
        aklatan: {
          title: "Digital Library",
          desc: "Research, e-books, and learning resources for everyone.",
          cta: "Browse",
        },
        hanapbuhay: {
          title: "Livelihood",
          desc: "Skills training, community projects, and jobs.",
          cta: "View",
        },
        serbisyo: {
          title: "Public Services",
          desc: "Forms, scholarships, and government programs.",
          cta: "Open",
        },
      },
    },
  };

  const t = content[language];
  const navyBg = { backgroundColor: "#0d2645" } as const;

  return (
    <div className="min-h-screen w-screen flex flex-col md:flex-row md:h-screen md:overflow-hidden bg-white selection:bg-cyan-100 selection:text-cyan-900">
      {/* ── LEFT PANEL ─────────────────────────────────────────── */}
      <aside
        className="relative flex flex-col w-full md:w-[32%] lg:w-[30%] shrink-0 py-8 px-7 md:py-10 md:px-9 overflow-hidden border-r border-white/5"
        style={navyBg}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: 0.04,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div
          className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full pointer-events-none blur-3xl opacity-20"
          style={{ backgroundColor: "#06b6d4" }}
        />
        <div
          className="absolute -top-24 -right-24 w-60 h-60 rounded-full pointer-events-none blur-3xl opacity-10"
          style={{ backgroundColor: "#7c3aed" }}
        />

        <div className="relative z-10 mb-10">
          <Image
            src="/aklatang-galera-logo.png"
            alt="Aklatang Galera Logo"
            width={180}
            height={82}
            priority
            className="drop-shadow-2xl brightness-0 invert opacity-95 transition-transform hover:scale-105 duration-500"
          />
        </div>

        <div className="relative z-10 flex-1 flex flex-col justify-center gap-8">
          <div>
            <div
              className="w-10 h-1 mb-6 rounded-full"
              style={{ backgroundColor: "#f59e0b" }}
            />
            <h1 className="text-3xl lg:text-4xl font-black leading-[1.1] tracking-tight text-white">
              {t.headline}
            </h1>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <Sparkles size={14} className="text-cyan-400" />
              <p
                className="text-[10px] font-black uppercase tracking-[0.25em]"
                style={{ color: "rgba(6,182,212,0.8)" }}
              >
                {t.missionLabel}
              </p>
            </div>
            <p
              className="text-base leading-relaxed font-medium"
              style={{ color: "rgba(186,230,253,0.75)" }}
            >
              {t.mission}
            </p>
          </div>

          <div className="flex gap-2">
            {["#1a56db", "#06b6d4", "#2dd4bf", "#4ade80", "#f59e0b"].map(
              (color) => (
                <div
                  key={color}
                  className="w-2.5 h-2.5 rounded-full shadow-lg"
                  style={{ backgroundColor: color }}
                />
              ),
            )}
          </div>
        </div>

        <div className="relative z-10 pt-8 mt-8 border-t border-white/10">
          <p
            className="text-[11px] font-bold"
            style={{ color: "rgba(6,182,212,0.5)" }}
          >
            {t.partnerNote}
          </p>
          <p
            className="text-[10px] mt-2 opacity-40 hover:opacity-100 transition-opacity duration-300"
            style={{ color: "#ffffff" }}
          >
            Built by{" "}
            <a
              href="https://djenriquez.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 decoration-cyan-500/30"
            >
              Dexter Jethro Enriquez
            </a>
          </p>
        </div>
      </aside>

      {/* ── RIGHT PANEL ────────────────────────────────────────── */}
      <main className="relative flex-1 flex flex-col overflow-y-auto md:overflow-hidden bg-[#f8fafc]">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-sky-100/40 to-transparent pointer-events-none" />

        {/* Header: Language Toggle */}
        <div className="relative z-30 shrink-0 flex justify-end pt-6 px-6 lg:px-10 pb-4">
          <LanguageToggle />
        </div>

        {/* Cards */}
        <div className="flex-1 min-h-0 flex flex-col px-6 lg:px-10 pt-2 pb-8 gap-4 overflow-y-auto no-scrollbar md:overflow-hidden">
          <div className="flex-[1.3] min-h-0">
            <MenuCard
              featured
              title={t.sections.aklatan.title}
              description={t.sections.aklatan.desc}
              ctaLabel={t.sections.aklatan.cta}
              icon={Book}
              href="/aklatan"
              baseColorClass="bg-blue-700"
              buttonText="Open"
              bgImage="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1000"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4 flex-1 min-h-0">
            <div className="flex-1 min-h-0">
              <MenuCard
                title={t.sections.hanapbuhay.title}
                description={t.sections.hanapbuhay.desc}
                ctaLabel={t.sections.hanapbuhay.cta}
                icon={Briefcase}
                href="/hanapbuhay"
                baseColorClass="bg-emerald-600"
                buttonText="Open"
                bgImage="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1000"
              />
            </div>
            <div className="flex-1 min-h-0">
              <MenuCard
                title={t.sections.serbisyo.title}
                description={t.sections.serbisyo.desc}
                ctaLabel={t.sections.serbisyo.cta}
                icon={Landmark}
                href="/public-services"
                baseColorClass="bg-cyan-600"
                buttonText="Open"
                bgImage="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

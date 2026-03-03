"use client";

import {
  Book as BookIcon,
  Briefcase as WorkIcon,
  Landmark as GovIcon,
  Globe as GlobeIcon,
} from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { MenuCard } from "@/components/MenuCard";

export default function Home() {
  const { language, setLanguage } = useLanguage();

  const content = {
    tagalog: {
      subtitle: "Ang inyong pintuan sa karunungan at serbisyo.",
      aklatan: {
        title: "Aklatan",
        desc: "Libreng research, e-books, at online databases.",
      },
      hanapbuhay: {
        title: "Hanapbuhay",
        desc: "Skills training, community projects, at trabaho.",
      },
      serbisyo: {
        title: "Serbisyo-Publiko",
        desc: "LGU forms, scholarships, at impormasyong gobyerno.",
      },
      footer: "Puerto Galera Public Library Digital Portal",
    },
    english: {
      subtitle: "Your gateway to knowledge and services.",
      aklatan: {
        title: "Library",
        desc: "Free research, e-books, and online databases.",
      },
      hanapbuhay: {
        title: "Livelihood",
        desc: "Skills training, community projects, and jobs.",
      },
      serbisyo: {
        title: "Public Service",
        desc: "LGU forms, scholarships, and government info.",
      },
      footer: "Puerto Galera Public Library Digital Portal",
    },
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center p-6">
      {/* Language Switcher */}
      <nav className="fixed top-6 right-6 flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 backdrop-blur-md z-50 shadow-sm">
        <GlobeIcon size={16} className="text-slate-500" />
        <button
          onClick={() => setLanguage("tagalog")}
          className={`text-sm transition-colors ${language === "tagalog" ? "font-bold text-blue-600" : "text-slate-500 hover:text-blue-600"}`}
        >
          Tagalog
        </button>
        <span className="text-slate-300">|</span>
        <button
          onClick={() => setLanguage("english")}
          className={`text-sm transition-colors ${language === "english" ? "font-bold text-blue-600" : "text-slate-500 hover:text-blue-600"}`}
        >
          English
        </button>
      </nav>

      {/* Hero Section */}
      <header className="mb-12 flex flex-col items-center text-center">
        <Image
          src="/aklatang-galera-logo.png"
          alt="Aklatang Galera Logo"
          width={450}
          height={200}
          priority
          className="object-contain"
        />
        <p className="mt-2 text-xl font-medium italic text-slate-600">
          {t.subtitle}
        </p>
      </header>

      {/* Grid of Menu Cards */}
      <div className="grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
        <MenuCard
          title={t.aklatan.title}
          description={t.aklatan.desc}
          icon={BookIcon}
          href="/aklatan"
          baseColorClass="bg-blue-600"
          bgImage="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1000"
        />

        <MenuCard
          title={t.hanapbuhay.title}
          description={t.hanapbuhay.desc}
          icon={WorkIcon}
          href="/hanapbuhay"
          baseColorClass="bg-emerald-600"
          bgImage="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1000"
        />

        <MenuCard
          title={t.serbisyo.title}
          description={t.serbisyo.desc}
          icon={GovIcon}
          href="/serbisyo"
          baseColorClass="bg-cyan-600"
          bgImage="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000"
        />
      </div>

      <footer className="mt-16 w-full max-w-6xl border-t border-slate-200 pt-8 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
          {t.footer}
        </p>
      </footer>
    </div>
  );
}

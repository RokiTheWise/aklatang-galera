"use client";

import { Book, Briefcase, Landmark, Globe } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { MenuCard } from "@/components/MenuCard";

export default function Home() {
  const { language, setLanguage } = useLanguage();

  const content = {
    tagalog: {
      tagline:
        "Ang digital na sentro ng kaalaman, oportunidad, at serbisyong pampubliko sa Galera.",
      description:
        "Isang inisyatibo para sa modernong edukasyon at mas mabilis na serbisyo para sa bawat mamamayan.",
      btnText: "Buksan",
      footer: "Mula sa pakikipagtulungan sa Puerto Galera Public Library",
      sections: {
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
      },
    },
    english: {
      tagline:
        "The digital hub for knowledge, opportunity, and public services in Galera.",
      description:
        "An initiative for modern education and faster services for every citizen.",
      btnText: "Open",
      footer: "In partnership with the Puerto Galera Public Library",
      sections: {
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
      },
    },
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#f0f9ff] flex flex-col items-center">
      <div className="pt-12 pb-10">
        <div className="flex items-center gap-1 bg-white/40 border border-slate-200 p-1 rounded-xl shadow-sm backdrop-blur-sm">
          <button
            onClick={() => setLanguage("tagalog")}
            className={`px-4 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${
              language === "tagalog"
                ? "bg-blue-600 text-white shadow-md"
                : "text-slate-500 hover:bg-slate-200/50"
            }`}
          >
            Filipino
          </button>
          <button
            onClick={() => setLanguage("english")}
            className={`px-4 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${
              language === "english"
                ? "bg-blue-600 text-white shadow-md"
                : "text-slate-500 hover:bg-slate-200/50"
            }`}
          >
            English
          </button>
        </div>
      </div>

      <header className="flex flex-col items-center text-center px-6 pb-10 max-w-3xl">
        <div className="relative mb-4">
          <Image
            src="/aklatang-galera-logo.png"
            alt="Aklatang Galera Logo"
            width={340}
            height={160}
            priority
            className="drop-shadow-sm"
          />
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight mb-4">
          {t.tagline}
        </h2>
        <p className="text-slate-500 max-w-xl text-sm md:text-base leading-relaxed">
          {t.description}
        </p>
      </header>

      {/* Grid of Menu Cards */}
      <div className="grid w-full max-w-6xl grid-cols-1 gap-8 px-6 pb-20 mt-4 md:grid-cols-3">
        <MenuCard
          title={t.sections.aklatan.title}
          description={t.sections.aklatan.desc}
          icon={Book}
          href="/aklatan"
          baseColorClass="bg-blue-600"
          buttonText={t.btnText}
          bgImage="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1000"
        />

        <MenuCard
          title={t.sections.hanapbuhay.title}
          description={t.sections.hanapbuhay.desc}
          icon={Briefcase}
          href="/hanapbuhay"
          baseColorClass="bg-emerald-600"
          buttonText={t.btnText}
          bgImage="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1000"
        />

        <MenuCard
          title={t.sections.serbisyo.title}
          description={t.sections.serbisyo.desc}
          icon={Landmark}
          href="/serbisyo"
          baseColorClass="bg-cyan-600"
          buttonText={t.btnText}
          bgImage="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000"
        />
      </div>

      {/* Footer */}
      <footer className="mt-auto w-full border-t border-slate-200 bg-white/30 py-8 text-center backdrop-blur-sm">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
          {t.footer}
        </p>
      </footer>
    </div>
  );
}

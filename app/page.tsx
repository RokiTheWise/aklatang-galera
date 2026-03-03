"use client"; // Add this at the very top since we are using state

import { useState } from "react";
import { Book, Briefcase, Landmark, Globe } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const [language, setLanguage] = useState<"tagalog" | "english">("tagalog");

  const content = {
    tagalog: {
      subtitle: "Ang inyong pintuan sa karunungan at serbisyo.",
      aklatan: {
        title: "Aklatan",
        desc: "Libreng research, e-books, at online databases.",
      },
      hanapbuhay: {
        title: "Hanapbuhay",
        desc: "Skills training, TESDA, at job opportunities.",
      },
      serbisyo: {
        title: "Serbisyo-Publiko",
        desc: "LGU forms, scholarships, at government info.",
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
        desc: "Skills training, TESDA, and job opportunities.",
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
    <main className="flex min-h-screen flex-col items-center justify-center p-6 md:p-12">
      <nav className="absolute top-6 right-6 flex items-center gap-2 rounded-full border border-aklatang-navy/10 bg-white/50 px-4 py-2 backdrop-blur-md">
        <Globe size={16} className="text-aklatang-navy/60" />
        <button
          onClick={() => setLanguage("tagalog")}
          className={`text-sm transition-colors ${language === "tagalog" ? "font-bold text-royal-blue" : "font-medium text-aklatang-navy/60 hover:text-royal-blue"}`}
        >
          Tagalog
        </button>
        <span className="text-aklatang-navy/30">|</span>
        <button
          onClick={() => setLanguage("english")}
          className={`text-sm transition-colors ${language === "english" ? "font-bold text-royal-blue" : "font-medium text-aklatang-navy/60 hover:text-royal-blue"}`}
        >
          English
        </button>
      </nav>

      <header className="mb-16 flex w-full max-w-4xl flex-col items-center text-center">
        <div className="relative mb-6 flex items-center justify-center">
          <Image
            src="/aklatang-galera-logo.png"
            alt="Aklatang Galera Digital Portal Logo"
            width={400}
            height={250}
            priority
            className="object-contain drop-shadow-sm"
          />
        </div>

        <p className="mt-4 text-xl font-medium italic text-aklatang-navy/70">
          {t.subtitle}
        </p>
      </header>

      <div className="grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
        <button className="group relative flex flex-col items-center justify-center overflow-hidden rounded-[2rem] bg-[var(--color-royal-blue)] p-12 text-center text-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-royal-blue/50">
          <Book
            size={72}
            strokeWidth={1.5}
            className="mb-6 opacity-90 transition-transform duration-500 group-hover:-rotate-12"
          />
          <h2 className="mb-3 text-3xl font-bold tracking-tight">
            {t.aklatan.title}
          </h2>
          <p className="text-sm font-medium text-blue-100/90 max-w-[200px] leading-relaxed">
            {t.aklatan.desc}
          </p>
        </button>

        <button className="group relative flex flex-col items-center justify-center overflow-hidden rounded-[2rem] bg-[var(--color-mint-leaf)] p-12 text-center text-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-mint-leaf/50">
          <Briefcase
            size={72}
            strokeWidth={1.5}
            className="mb-6 opacity-90 transition-transform duration-500 group-hover:rotate-12"
          />
          <h2 className="mb-3 text-3xl font-bold tracking-tight">
            {t.hanapbuhay.title}
          </h2>
          <p className="text-sm font-medium text-emerald-50/90 max-w-[200px] leading-relaxed">
            {t.hanapbuhay.desc}
          </p>
        </button>

        <button className="group relative flex flex-col items-center justify-center overflow-hidden rounded-[2rem] bg-[var(--color-turquoise-surf)] p-12 text-center text-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-turquoise-surf/50">
          <Landmark
            size={72}
            strokeWidth={1.5}
            className="mb-6 opacity-90 transition-transform duration-500 group-hover:scale-110"
          />
          <h2 className="mb-3 text-3xl font-bold tracking-tight">
            {t.serbisyo.title}
          </h2>
          <p className="text-sm font-medium text-cyan-50/90 max-w-[200px] leading-relaxed">
            {t.serbisyo.desc}
          </p>
        </button>
      </div>

      <footer className="mt-20 flex w-full flex-col items-center justify-center gap-4 border-t border-aklatang-navy/10 pt-8 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-aklatang-navy/40">
          {t.footer}
        </p>
      </footer>
    </main>
  );
}

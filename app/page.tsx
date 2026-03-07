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
      footer: "Pakikipagtulungan sa\nPuerto Galera Public Library",
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
      footer: "In partnership with the\nPuerto Galera Public Library",
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
    <div className="h-screen w-screen overflow-hidden flex flex-col md:flex-row bg-white">
      {/* =============================================
          LEFT PANEL — Branding
          ============================================= */}
      <aside
        className="
          relative flex flex-col justify-between
          w-full md:w-[42%] lg:w-[38%]
          py-8 px-8 md:py-12 md:px-10 lg:px-14
          shrink-0
        "
        style={{ backgroundColor: "#0b2a4a" }}
      >
        {/* Subtle dot-grid texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Logo */}
        <div className="relative z-10">
          <Image
            src="/aklatang-galera-logo.png"
            alt="Aklatang Galera Logo"
            width={200}
            height={90}
            priority
            className="drop-shadow-md brightness-0 invert opacity-95"
          />
        </div>

        {/* Tagline — vertically centered */}
        <div className="relative z-10 flex-1 flex flex-col justify-center py-6">
          <div
            className="w-8 h-0.5 mb-6 rounded-full"
            style={{ backgroundColor: "#38bdf8" }}
          />
          <h2
            className="text-xl lg:text-2xl font-bold leading-snug tracking-tight mb-4"
            style={{ color: "#ffffff" }}
          >
            {t.tagline}
          </h2>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "rgba(186, 230, 253, 0.65)" }}
          >
            {t.description}
          </p>
        </div>

        {/* Footer attribution */}
        <div className="relative z-10">
          <p
            className="text-[10px] uppercase tracking-[0.2em] leading-relaxed whitespace-pre-line"
            style={{ color: "rgba(125, 211, 252, 0.45)" }}
          >
            {t.footer}
          </p>
        </div>
      </aside>

      {/* =============================================
          RIGHT PANEL — Cards + Language Toggle
          ============================================= */}
      {/* ADDED: pb-8 to ensure white space at the very bottom */}
      <main className="relative flex-1 flex flex-col bg-slate-50 overflow-y-auto md:overflow-hidden pb-8">
        {/* Language Toggle — top right */}
        {/* ADDED: pb-4 to give space below the language toggle */}
        <div className="shrink-0 flex justify-end pt-6 px-6 lg:px-8 pb-4">
          <div className="flex items-center gap-1 bg-white border border-slate-200 p-1 rounded-xl shadow-sm">
            <button
              onClick={() => setLanguage("tagalog")}
              className={`px-4 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${
                language === "tagalog"
                  ? "text-white shadow-md"
                  : "text-slate-400 hover:bg-slate-100"
              }`}
              style={
                language === "tagalog" ? { backgroundColor: "#0b2a4a" } : {}
              }
            >
              Filipino
            </button>
            <button
              onClick={() => setLanguage("english")}
              className={`px-4 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${
                language === "english"
                  ? "text-white shadow-md"
                  : "text-slate-400 hover:bg-slate-100"
              }`}
              style={
                language === "english" ? { backgroundColor: "#0b2a4a" } : {}
              }
            >
              English
            </button>
          </div>
        </div>

        {/* Cards Container */}
        {/* ADDED: h-full to make the container take up remaining space, min-h-0 prevents overflow issues */}
        <div className="flex-1 flex flex-col px-6 lg:px-8 gap-4 h-full min-h-0">
          {/* ADDED: className="flex-1 min-h-[160px]" to each MenuCard so they stretch equally but don't shrink too small */}
          <MenuCard
            className="flex-1 min-h-[160px]"
            title={t.sections.aklatan.title}
            description={t.sections.aklatan.desc}
            icon={Book}
            href="/aklatan"
            baseColorClass="bg-blue-600"
            buttonText={t.btnText}
            bgImage="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1000"
          />
          <MenuCard
            className="flex-1 min-h-[160px]"
            title={t.sections.hanapbuhay.title}
            description={t.sections.hanapbuhay.desc}
            icon={Briefcase}
            href="/hanapbuhay"
            baseColorClass="bg-emerald-600"
            buttonText={t.btnText}
            bgImage="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1000"
          />
          <MenuCard
            className="flex-1 min-h-[160px]"
            title={t.sections.serbisyo.title}
            description={t.sections.serbisyo.desc}
            icon={Landmark}
            href="https://elgu-puerto-galera-oriental-mindoro.e.gov.ph/elgu-service"
            baseColorClass="bg-cyan-600"
            buttonText={t.btnText}
            bgImage="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000"
          />
        </div>
      </main>
    </div>
  );
}

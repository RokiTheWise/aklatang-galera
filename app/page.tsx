"use client";

import { Book, Briefcase, Landmark } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { MenuCard } from "@/components/MenuCard";

export default function Home() {
  const { language, setLanguage } = useLanguage();

  const content = {
    tagalog: {
      headline: "Kaalaman para sa bawat Galeran.",
      missionLabel: "Aming Misyon",
      mission:
        "Ang Aklatang Galera ay naglalayong ilapit ang kaalaman, oportunidad, at serbisyong pampubliko sa bawat mamamayan ng Puerto Galera — libre, digital, at palaging bukas.",
      sections: {
        aklatan: {
          title: "Digital na Aklatan",
          desc: "Research, e-books, at mga learning resources para sa lahat.",
          cta: "Mag-browse ng resources",
        },
        hanapbuhay: {
          title: "Hanapbuhay",
          desc: "Skills training, community projects, at mga trabaho.",
          cta: "Tingnan ang mga oportunidad",
        },
        serbisyo: {
          title: "Serbisyong Pampubliko",
          desc: "Forms, scholarships, at mga programa ng gobyerno.",
          cta: "Buksan ang mga serbisyo",
        },
      },
    },
    english: {
      headline: "Knowledge for every Galeran.",
      missionLabel: "Our Mission",
      mission:
        "Aklatang Galera aims to make knowledge, opportunity, and public services accessible to every citizen of Puerto Galera — free, digital, and always open.",
      sections: {
        aklatan: {
          title: "Digital Library",
          desc: "Research, e-books, and learning resources for everyone.",
          cta: "Browse resources",
        },
        hanapbuhay: {
          title: "Livelihood",
          desc: "Skills training, community projects, and jobs.",
          cta: "View opportunities",
        },
        serbisyo: {
          title: "Public Services",
          desc: "Forms, scholarships, and government programs.",
          cta: "Open services",
        },
      },
    },
  };

  const t = content[language];

  return (
    <div className="min-h-screen w-screen flex flex-col md:flex-row md:h-screen md:overflow-hidden bg-white">
      {/* =============================================
          LEFT PANEL
          ============================================= */}
      <aside
        className="relative flex flex-col w-full md:w-[32%] lg:w-[30%] shrink-0 py-8 px-7 md:py-10 md:px-9"
        style={{ backgroundColor: "#0b2a4a" }}
      >
        {/* Subtle texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: 0.05,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Logo */}
        <div className="relative z-10 mb-8">
          <Image
            src="/aklatang-galera-logo.png"
            alt="Aklatang Galera Logo"
            width={180}
            height={82}
            priority
            className="drop-shadow-md brightness-0 invert opacity-95"
          />
        </div>

        {/* Identity block — headline large, mission smaller below */}
        <div className="relative z-10 flex-1 flex flex-col justify-center gap-5">
          {/* Strong headline */}
          <div>
            <div
              className="w-7 h-0.5 mb-5 rounded-full"
              style={{ backgroundColor: "#38bdf8" }}
            />
            <h2
              className="text-2xl lg:text-3xl font-extrabold leading-tight tracking-tight"
              style={{ color: "#ffffff" }}
            >
              {t.headline}
            </h2>
          </div>

          {/* Mission — smaller, secondary */}
          <div>
            <p
              className="text-[9px] font-bold uppercase tracking-[0.2em] mb-3"
              style={{ color: "rgba(125,211,252,0.6)" }}
            >
              {t.missionLabel}
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "rgba(186,230,253,0.65)" }}
            >
              {t.mission}
            </p>
          </div>
        </div>

        {/* Developer credit */}
        <div
          className="relative z-10 pt-6 mt-6 border-t"
          style={{ borderColor: "rgba(255,255,255,0.07)" }}
        >
          <p
            className="text-[10px]"
            style={{ color: "rgba(125,211,252,0.35)" }}
          >
            Built by{" "}
            <a
              href="https://djenriquez.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 transition-opacity hover:opacity-80"
              style={{ color: "rgba(125,211,252,0.55)" }}
            >
              Dexter Jethro Enriquez
            </a>{" "}
            · In partnership with the Puerto Galera Public Library
          </p>
        </div>
      </aside>

      {/* =============================================
          RIGHT PANEL
          ============================================= */}
      <main className="relative flex-1 flex flex-col bg-slate-50 overflow-y-auto md:overflow-hidden">
        {/* Language Toggle */}
        <div className="shrink-0 flex justify-end pt-5 px-6 lg:px-8">
          <div className="flex items-center gap-1 bg-white border border-slate-200 p-1 rounded-xl shadow-sm">
            {(["tagalog", "english"] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-[11px] font-bold uppercase tracking-wider transition-all ${
                  language === lang
                    ? "text-white shadow-md"
                    : "text-slate-400 hover:bg-slate-100"
                }`}
                style={language === lang ? { backgroundColor: "#0b2a4a" } : {}}
              >
                <span>{lang === "tagalog" ? "🇵🇭" : "🇬🇧"}</span>
                {lang === "tagalog" ? "Filipino" : "English"}
              </button>
            ))}
          </div>
        </div>

        {/* Cards — featured Library on top, two below */}
        <div className="flex-1 min-h-0 flex flex-col px-6 lg:px-8 pt-4 pb-6 gap-3">
          <MenuCard
            featured
            className="flex-[1.4] min-h-0"
            title={t.sections.aklatan.title}
            description={t.sections.aklatan.desc}
            ctaLabel={t.sections.aklatan.cta}
            icon={Book}
            href="/aklatan"
            baseColorClass="bg-blue-600"
            buttonText="Open"
            bgImage="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1000"
          />
          <div className="flex gap-3 flex-1 min-h-0">
            <MenuCard
              className="flex-1 min-h-0"
              title={t.sections.hanapbuhay.title}
              description={t.sections.hanapbuhay.desc}
              ctaLabel={t.sections.hanapbuhay.cta}
              icon={Briefcase}
              href="/hanapbuhay"
              baseColorClass="bg-emerald-600"
              buttonText="Open"
              bgImage="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1000"
            />
            <MenuCard
              className="flex-1 min-h-0"
              title={t.sections.serbisyo.title}
              description={t.sections.serbisyo.desc}
              ctaLabel={t.sections.serbisyo.cta}
              icon={Landmark}
              href="https://elgu-puerto-galera-oriental-mindoro.e.gov.ph/elgu-service"
              baseColorClass="bg-cyan-600"
              buttonText="Open"
              bgImage="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

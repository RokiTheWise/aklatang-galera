"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, BriefcaseBusiness, Landmark } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import {
  resources,
  sectionNames,
  sectionPaths,
  type Section,
} from "@/lib/resources";

const doors: { section: Section; icon: typeof BookOpen }[] = [
  { section: "library", icon: BookOpen },
  { section: "livelihood", icon: BriefcaseBusiness },
  { section: "services", icon: Landmark },
];

export function AboutHelp() {
  const { language } = useLanguage();
  const fil = language === "tagalog";
  return (
    <article className="about-help">
      <header className="page-intro">
        <h1>{fil ? "Tungkol at gabay" : "About & help"}</h1>
        <p className="about-summary">
          {fil
            ? "Ang Aklatang Galera ay isang libreng bilingual na portal para sa mga estudyante, naghahanap ng trabaho, may negosyo, at mga mamamayan ng Puerto Galera, Oriental Mindoro."
            : "Aklatang Galera is a free bilingual portal for students, job seekers, business owners, and residents of Puerto Galera, Oriental Mindoro."}
        </p>
        <p>
          {fil
            ? `May ${resources.length} napiling resource sa tatlong seksyon. Piliin ang kailangan mo, tapos buksan ang website.`
            : `Find ${resources.length} curated resources through three sections. Choose what you need, then open the website.`}
        </p>
      </header>

      <nav
        className="help-doors"
        aria-label={fil ? "Mga seksyon" : "Portal sections"}
      >
        {doors.map(({ section, icon: Icon }) => (
          <Link
            key={section}
            href={sectionPaths[section]}
            className={`help-door theme-${section}`}
          >
            <Icon size={22} aria-hidden="true" />
            <span>
              <strong>{sectionNames[section][language]}</strong>
              <small>
                {resources.filter((resource) => resource.section === section).length}{" "}
                resources
              </small>
            </span>
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        ))}
      </nav>

      <div className="help-answers">
        <section>
          <h2>{fil ? "Saan ako makakahanap ng related literature?" : "Where can I find related literature?"}</h2>
          <p>
            {fil
              ? "Sa Digital na Aklatan, ilagay ang mismong paksa o research question sa Maghanap ng research. Bubukas ang mga resulta sa Semantic Scholar. Hindi nito sakop ang lahat ng source; limitado ang lokal na pananaliksik, di-Ingles na literatura, libro, at lumang archive."
              : "In the Digital Library, enter your actual topic or research question in Search research. Results open on Semantic Scholar. It does not cover every source; local research, non-English literature, books, and older archives may be limited."}
          </p>
          <p>
            {fil
              ? "Para sa Philippine studies at Filipino na literatura, piliin ang Mga libro at sanggunian at gamitin ang Mula sa Pilipinas filter."
              : "For Philippine studies and Filipino-language literature, choose Books & resources and use the Philippines filter."}
          </p>
          <Link href="/aklatan?mode=browse&local=true">{fil ? "Tingnan ang Philippine resources" : "Browse Philippine resources"}<ArrowRight size={15} aria-hidden="true" /></Link>
        </section>

        <section>
          <h2>{fil ? "May tulong ba para sa kasalukuyang negosyo?" : "Is there support for an existing business?"}</h2>
          <p>
            {fil
              ? "Oo. Sa Hanapbuhay, may Negosyo para sa mga nagsisimula at may kasalukuyang negosyo, kasama ang DTI, BIR, SEC, at iba pang resource. May hiwalay ding Trabaho at Kasanayan para sa job boards at training."
              : "Yes. Livelihood includes Business resources for both new and existing owners, including DTI, BIR, SEC, and other support. Jobs and Skills are separate categories for job boards and training."}
          </p>
          <Link href="/hanapbuhay?category=entrepreneurship">{fil ? "Tingnan ang Negosyo" : "Explore Business resources"}<ArrowRight size={15} aria-hidden="true" /></Link>
        </section>

        <section>
          <h2>{fil ? "Paano ko mahahanap ang lokal na serbisyo?" : "How do I find local public services?"}</h2>
          <p>
            {fil
              ? "Buksan ang Serbisyong Pampubliko at gamitin ang Puerto Galera filter. Nandoon ang link sa eLGU para sa lokal na serbisyo tulad ng permit at cedula, pati lokal na balita. May hiwalay ding Mga scholarship. Ang aplikasyon at requirements ay nasa mismong website ng provider."
              : "Open Public Services and use the Puerto Galera filter. It includes the eLGU link for local services such as permits and cedula, alongside local news. Scholarships have their own category. Applications and requirements are handled on the provider’s website."}
          </p>
          <Link href="/public-services?local=true">{fil ? "Tingnan ang lokal na serbisyo" : "Browse local services"}<ArrowRight size={15} aria-hidden="true" /></Link>
        </section>

        <section>
          <h2>{fil ? "Libre ba? Kailangan ba ng account?" : "Is it free? Do I need an account?"}</h2>
          <p>
            {fil
              ? "Libreng gamitin ang Aklatang Galera at hindi kailangan ng account dito. Ang mga link ay bumubukas sa bagong tab. Maaaring may sariling account, eligibility requirements, o bayad ang ibang website para sa serbisyo o certificate; tingnan ang kanilang mga detalye bago mag-apply."
              : "Aklatang Galera is free to use and does not require a portal account. Resource links open in a new tab. Destination websites may have their own accounts, eligibility requirements, or fees for services or certificates; check their details before applying."}
          </p>
        </section>

        <section>
          <h2>{fil ? "Opisyal ba itong website ng gobyerno?" : "Is this an official government website?"}</h2>
          <p>
            {fil
              ? "Hindi. Ang Aklatang Galera ay isang independent na civic project na ginawa ni Dexter Jethro Enriquez, isang Galeran. Isa itong gabay papunta sa mga resource at opisyal na provider; hindi ito ang nagpo-process ng aplikasyon o nagbibigay ng serbisyo ng gobyerno."
              : "No. Aklatang Galera is an independent civic project created by Dexter Jethro Enriquez, a Galeran. It helps you find resources and official providers; it does not process applications or provide government services itself."}
          </p>
        </section>

        <section>
          <h2>{fil ? "Paano ko papalitan ang wika?" : "How do I change the language?"}</h2>
          <p>
            {fil
              ? "Piliin ang Filipino o English sa itaas ng page. Magbabago ang mga label at paglalarawan sa buong portal. Maaalala ang napiling wika sa browser na ito kung pinapayagan ang browser storage."
              : "Choose Filipino or English at the top of the page. Labels and descriptions change throughout the portal. Your language choice is remembered in this browser when browser storage is available."}
          </p>
        </section>
      </div>
    </article>
  );
}

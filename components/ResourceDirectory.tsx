"use client";

import { useState } from "react";
import { useSearchParams, usePathname } from "next/navigation";
import {
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  MapPin,
  Search,
  X,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import {
  categoryNames,
  matchesResource,
  resources,
  Section,
  sectionNames,
} from "@/lib/resources";
import { ResourceCard } from "./ResourceCard";

const pageContent = {
  library: {
    categories: ["research", "ebooks"],
    english: {
      description: "Search research papers or browse books and resources.",
      placeholder: "Find a website or collection…",
    },
    tagalog: {
      description:
        "Maghanap ng research paper o pumili ng libro at sanggunian.",
      placeholder: "Maghanap ng website o koleksyon…",
    },
  },
  livelihood: {
    categories: ["jobs", "skills", "entrepreneurship"],
    english: {
      description: "Find jobs, training, and support for your business.",
      placeholder: "Search jobs, training, or business support…",
    },
    tagalog: {
      description: "Maghanap ng trabaho, training, at tulong sa negosyo.",
      placeholder: "Maghanap ng trabaho, training, o tulong sa negosyo…",
    },
  },
  services: {
    categories: ["egovernment", "scholarships", "transparency"],
    english: {
      description: "Government services, scholarships, and local news.",
      placeholder: "Search permits, scholarships, or services…",
    },
    tagalog: {
      description: "Serbisyo ng gobyerno, scholarship, at lokal na balita.",
      placeholder: "Maghanap ng permit, scholarship, o serbisyo…",
    },
  },
};

export function ResourceDirectory({ section }: { section: Section }) {
  const { language } = useLanguage();
  const fil = language === "tagalog";
  const params = useSearchParams();
  const pathname = usePathname();
  const config = pageContent[section];
  const t = config[language];
  const rawCategory = params.get("category") ?? "all";
  const category = config.categories.includes(rawCategory)
    ? rawCategory
    : "all";
  const query = params.get("q") ?? "";
  const onlyLocal = params.get("local") === "true";
  const paperMode =
    section === "library" &&
    params.get("mode") !== "browse" &&
    !params.get("category") &&
    !params.get("local");
  const [paperQuery, setPaperQuery] = useState(query);
  function updateFilters(updates: Record<string, string>) {
    const next = new URLSearchParams(params.toString());
    for (const [key, value] of Object.entries(updates)) {
      if (!value || value === "all" || value === "false") next.delete(key);
      else next.set(key, value);
    }
    window.history.replaceState(
      null,
      "",
      `${pathname}${next.size ? `?${next}` : ""}`,
    );
  }
  const sectionResources = resources.filter(
    (resource) => resource.section === section,
  );
  const filtered = sectionResources
    .filter(
      (resource) =>
        (category === "all" || category === resource.category) &&
        (!onlyLocal || resource.isLocal) &&
        matchesResource(resource, query),
    )
    .sort(
      (a, b) =>
        Number(Boolean(b.featured)) - Number(Boolean(a.featured)) ||
        a.name.localeCompare(b.name),
    );
  const feature = filtered.find((resource) => resource.featured);
  const showFeature =
    section === "services" &&
    feature &&
    !query &&
    category === "all" &&
    !onlyLocal;
  const hasFilters = Boolean(query || category !== "all" || onlyLocal);
  return (
    <div className={`directory theme-${section}`}>
      <div className="page-intro">
        <h1>{sectionNames[section][language]}</h1>
        <p>{t.description}</p>
      </div>
      {section === "library" && (
        <div
          className="view-switch"
          role="group"
          aria-label={fil ? "Paraan ng paghahanap" : "Library view"}
        >
          <button
            aria-pressed={paperMode}
            className={paperMode ? "active" : ""}
            onClick={() =>
              updateFilters({ mode: "papers", category: "all", local: "false" })
            }
          >
            <Search size={17} />
            {fil ? "Maghanap ng research" : "Search research"}
          </button>
          <button
            aria-pressed={!paperMode}
            className={!paperMode ? "active" : ""}
            onClick={() => updateFilters({ mode: "browse" })}
          >
            <BookOpen size={17} />
            {fil ? "Mga libro at sanggunian" : "Books & resources"}
          </button>
        </div>
      )}
      {paperMode ? (
        <section className="paper-search">
          <h2>
            {fil ? "Ano ang iyong paksa?" : "What is your research topic?"}
          </h2>
          <form
            action="https://www.semanticscholar.org/search"
            method="get"
            target="_blank"
            rel="noopener noreferrer"
          >
            <label htmlFor="paper-query" className="sr-only">
              {fil ? "Paksa o tanong" : "Topic or research question"}
            </label>
            <div className="paper-input-row">
              <input
                id="paper-query"
                name="q"
                value={paperQuery}
                onChange={(e) => setPaperQuery(e.target.value)}
                placeholder={
                  fil
                    ? "I-type ang paksa o tanong…"
                    : "Type a topic or question…"
                }
                required
              />
              <button className="primary-button" disabled={!paperQuery.trim()}>
                {fil ? "Maghanap" : "Search papers"}
                <ArrowUpRight size={17} />
              </button>
            </div>
          </form>
          <p className="external-note">
            {fil
              ? "Bubukas ang mga resulta sa bagong tab sa Semantic Scholar."
              : "Results open in a new tab on Semantic Scholar."}
          </p>
          <div
            className="search-disclaimer"
            role="note"
            aria-labelledby="search-disclaimer-title"
          >
            <AlertTriangle size={19} aria-hidden="true" />
            <div>
              <h3 id="search-disclaimer-title">
                {fil
                  ? "Hindi saklaw ng search ang lahat."
                  : "Search does not cover every source."}
              </h3>
              <p>
                {fil
                  ? "Nakatuon ang Semantic Scholar sa mga academic paper, karamihan ay nasa Ingles. Maaaring may mga sangguniang hindi kasama, at limitado ang mga libro. Para sa lokal na pag-aaral, mga akdang Filipino, libro, at lumang archive, tingnan din ang mga website sa Mga libro at sanggunian."
                  : "Semantic Scholar focuses on academic papers, mostly in English. It may miss sources, and book coverage is limited. For Philippine studies, Filipino-language work, books, and older archives, also check the individual websites in Books & resources."}
              </p>
              <button onClick={() => updateFilters({ mode: "browse", q: "" })}>
                {fil
                  ? "Tingnan ang ibang sanggunian"
                  : "Browse other resources"}
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </section>
      ) : (
        <>
          <section
            className="directory-controls"
            aria-label={
              fil ? "Hanapin at salain" : "Search and filter resources"
            }
          >
            <div className="search-field">
              <Search size={19} />
              <input
                aria-label={t.placeholder}
                type="search"
                value={query}
                onChange={(e) => updateFilters({ q: e.target.value })}
                placeholder={t.placeholder}
              />
              {query && (
                <button
                  aria-label={fil ? "Burahin ang paghahanap" : "Clear search"}
                  onClick={() => updateFilters({ q: "" })}
                >
                  <X size={17} />
                </button>
              )}
            </div>
            <div className="filters-row">
              <div
                className="category-filters"
                role="group"
                aria-label={fil ? "Kategorya" : "Category"}
              >
                {["all", ...config.categories].map((key) => (
                  <button
                    key={key}
                    aria-pressed={category === key}
                    className={
                      category === key ? "filter-chip selected" : "filter-chip"
                    }
                    onClick={() => updateFilters({ category: key })}
                  >
                    {key === "all"
                      ? fil
                        ? "Lahat"
                        : "All resources"
                      : categoryNames[key][language]}
                  </button>
                ))}
              </div>
              {section !== "livelihood" && (
                <button
                  className={
                    onlyLocal ? "local-filter selected" : "local-filter"
                  }
                  aria-pressed={onlyLocal}
                  onClick={() => updateFilters({ local: String(!onlyLocal) })}
                >
                  {onlyLocal ? <Check size={14} /> : <MapPin size={14} />}
                  {section === "library"
                    ? fil
                      ? "Mula sa Pilipinas"
                      : "From the Philippines"
                    : "Puerto Galera"}
                </button>
              )}
            </div>
          </section>
          <div className="results-heading">
            <h2>
              {hasFilters
                ? fil
                  ? "Mga resulta"
                  : "Results"
                : fil
                  ? "Mga sanggunian"
                  : "Resources"}{" "}
              <span>({filtered.length})</span>
            </h2>
            {hasFilters && (
              <button
                className="text-button"
                onClick={() =>
                  updateFilters({ q: "", category: "all", local: "false" })
                }
              >
                <X size={14} />
                {fil ? "Alisin ang mga filter" : "Reset filters"}
              </button>
            )}
          </div>
          <div role="status" aria-live="polite" className="sr-only">
            {filtered.length} {fil ? "resulta" : "resources found"}
          </div>
          {showFeature && (
            <a
              className="featured-service"
              href={feature.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <h2>eLGU Puerto Galera</h2>
                <p>
                  {fil
                    ? "Business permit, cedula, at civil registry."
                    : "Business permits, cedula, and civil registry."}
                </p>
              </div>
              <span className="feature-cta">
                {fil ? "Buksan ang portal" : "Open local portal"}
                <ArrowUpRight size={18} />
                <small>
                  {fil ? "Bubukas sa bagong tab" : "Opens in a new tab"}
                </small>
              </span>
            </a>
          )}
          {filtered.length ? (
            <div className="resource-grid">
              {filtered
                .filter((resource) => !showFeature || !resource.featured)
                .map((resource) => (
                  <ResourceCard key={resource.id} resource={resource} />
                ))}
            </div>
          ) : (
            <div className="empty-state">
              <span className="large-icon">
                <Search size={27} />
              </span>
              <h3>{fil ? "Wala pang tugma." : "No matches just yet."}</h3>
              <p>
                {fil
                  ? "Subukan ang mas maikling salita o alisin ang mga filter."
                  : "Try a shorter keyword or clear your filters to see more resources."}
              </p>
              {section === "library" && query.trim() && (
                <a
                  className="primary-button"
                  href={`https://www.semanticscholar.org/search?q=${encodeURIComponent(query.trim())}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {fil
                    ? "Maghanap ng research paper"
                    : "Search research papers"}
                  <ArrowUpRight size={16} />
                  <span className="sr-only">
                    {fil ? " (bagong tab)" : " (opens in a new tab)"}
                  </span>
                </a>
              )}
              <button
                className={
                  section === "library" && query.trim()
                    ? "text-button"
                    : "primary-button"
                }
                onClick={() =>
                  updateFilters({ q: "", category: "all", local: "false" })
                }
              >
                {fil ? "Ipakita ang lahat" : "Show all resources"}
                <ArrowRight size={16} />
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

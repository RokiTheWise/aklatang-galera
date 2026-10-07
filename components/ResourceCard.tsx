"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { categoryNames, PortalResource } from "@/lib/resources";

export function ResourceCard({ resource }: { resource: PortalResource }) {
  const { language } = useLanguage();
  const [imageFailed, setImageFailed] = useState(false);
  const fil = language === "tagalog";
  return (
    <a
      className={`resource-card theme-${resource.section} category-${resource.category}`}
      href={resource.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="resource-card-top">
        <div className="resource-logo">
          {imageFailed ? (
            <span>{resource.name.slice(0, 2).toUpperCase()}</span>
          ) : (
            <Image
              src={resource.logoUrl}
              alt=""
              fill
              sizes="110px"
              unoptimized
              onError={() => setImageFailed(true)}
            />
          )}
        </div>
      </div>
      <h3>{resource.name}</h3>
      <div className="resource-badges">
        <span className="category-badge">
          {categoryNames[resource.category][language]}
        </span>
        {resource.isLocal && (
          <span className="local-badge">
            <MapPin size={11} />
            {resource.section === "library"
              ? fil
                ? "Pilipinas"
                : "Philippines"
              : "Puerto Galera"}
          </span>
        )}
      </div>
      <p>{resource.desc[language]}</p>
      <div className="resource-card-bottom">
        <span className="resource-open">
          {fil ? "Buksan ang website" : "Open website"}
          <ArrowUpRight size={15} aria-hidden="true" />
        </span>
        <span>{fil ? "Bagong tab" : "New tab"}</span>
      </div>
    </a>
  );
}

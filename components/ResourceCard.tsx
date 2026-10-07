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
        <ArrowUpRight className="resource-arrow" size={19} aria-hidden="true" />
      </div>
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
      <h3>{resource.name}</h3>
      <p>{resource.desc[language]}</p>
      <div className="resource-card-bottom">
        <span>{fil ? "Buksan ang website" : "Open website"}</span>
        <span>
          {fil ? "Bagong tab" : "New tab"}
          <ArrowUpRight size={12} />
        </span>
      </div>
    </a>
  );
}

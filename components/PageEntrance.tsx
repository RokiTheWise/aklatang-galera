"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export function PageEntrance() {
  const { language } = useLanguage();
  const fil = language === "tagalog";
  function dismiss() {
    delete document.documentElement.dataset.entrance;
  }
  return (
    <button
      type="button"
      className="page-entrance"
      aria-label={fil ? "Laktawan ang intro" : "Skip introduction"}
      onClick={dismiss}
      onAnimationEnd={(event) => {
        if (event.target === event.currentTarget) dismiss();
      }}
    >
      <span className="entrance-skip" aria-hidden="true">
        {fil ? "Laktawan ang intro" : "Skip intro"}
      </span>
      <span className="entrance-content" aria-hidden="true">
        <Image
          src="/aklatang-galera-logo.png"
          alt=""
          width={168}
          height={168}
          priority
        />
        <span className="entrance-line" />
        <span className="entrance-tagline">
          {fil
            ? "Kaalaman para sa bawat Galeran."
            : "Knowledge for every Galeran."}
        </span>
      </span>
      <span className="entrance-hint" aria-hidden="true">
        {fil
          ? "Pindutin kahit saan para magpatuloy"
          : "Tap anywhere to continue"}
      </span>
    </button>
  );
}

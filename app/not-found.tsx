"use client";
import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function NotFound() {
  const { language } = useLanguage();
  const fil = language === "tagalog";
  return (
    <div className="not-found">
      <span className="large-icon">
        <Compass size={28} />
      </span>
      <div className="eyebrow">
        404 · {fil ? "HINDI MAKITA ANG PAHINA" : "PAGE NOT FOUND"}
      </div>
      <h1>
        {fil
          ? "Hanapin natin ang tamang daan."
          : "Let’s get you back on track."}
      </h1>
      <p>
        {fil
          ? "Maaaring lumipat o wala na ang pahinang ito. Bumalik sa simula para maghanap ng libro, trabaho, o serbisyo."
          : "This page may have moved, or the link may be incorrect. Start from home to find books, opportunities, and services."}
      </p>
      <Link href="/" className="primary-button">
        <ArrowLeft size={16} />
        {fil ? "Bumalik sa simula" : "Back to home"}
      </Link>
    </div>
  );
}

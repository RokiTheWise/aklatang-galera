"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import type { Language } from "@/lib/resources";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
}
const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("english");
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      try {
        const saved = localStorage.getItem("aklatang-language");
        if (saved === "tagalog" || saved === "english") setLanguageState(saved);
      } catch {
        /* Language switching still works when storage is unavailable. */
      }
    });
    return () => cancelAnimationFrame(frame);
  }, []);
  useEffect(() => {
    document.documentElement.lang = language === "tagalog" ? "fil-PH" : "en-PH";
  }, [language]);
  function setLanguage(next: Language) {
    setLanguageState(next);
    try {
      localStorage.setItem("aklatang-language", next);
    } catch {
      /* Storage is optional. */
    }
  }
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
}

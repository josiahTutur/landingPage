"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { dict, type Dict, type Lang } from "@/lib/dict";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Dict };

const LanguageContext = createContext<Ctx | null>(null);

// BM-first per the brand book — Malay renders by default (server + first paint).
const DEFAULT_LANG: Lang = "ms";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(DEFAULT_LANG);

  // restore a saved preference after mount (avoids hydration mismatch)
  useEffect(() => {
    const saved = window.localStorage.getItem("tutur-lang");
    if (saved === "en" || saved === "ms") setLangState(saved);
  }, []);

  // keep <html lang> in sync for a11y / SEO
  useEffect(() => {
    document.documentElement.lang = lang === "ms" ? "ms" : "en";
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    window.localStorage.setItem("tutur-lang", l);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: dict[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang(): Ctx {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}

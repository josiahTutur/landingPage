"use client";

import { useLang } from "./LanguageProvider";

export default function LangTicker() {
  const { t } = useLang();
  return (
    <div className="wrap">
      <div className="langs" aria-label="Supported languages">
        <span className="label">{t.langs.label}</span>
        <span>Bahasa Melayu</span>
        <span>English</span>
        <span>华语</span>
        <span>தமிழ்</span>
      </div>
    </div>
  );
}

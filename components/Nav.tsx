"use client";

import Logo from "./Logo";
import { useLang } from "./LanguageProvider";

export default function Nav() {
  const { t, lang, setLang } = useLang();
  return (
    <nav>
      <div className="wrap nav-inner">
        <a href="#top" className="logo" aria-label="tutur home">
          <Logo height={26} />
        </a>
        <div className="nav-links">
          <a href="#how">{t.nav.how}</a>
          <a href="#why">{t.nav.why}</a>
          <a href="#cues">{t.nav.cues}</a>
          <a href="#pilot">{t.nav.pilot}</a>
        </div>
        <div className="nav-cta">
          <div
            className="lang-toggle"
            role="group"
            aria-label="Language / Bahasa"
          >
            <button
              type="button"
              className={lang === "en" ? "on" : ""}
              aria-pressed={lang === "en"}
              onClick={() => setLang("en")}
            >
              EN
            </button>
            <button
              type="button"
              className={lang === "ms" ? "on" : ""}
              aria-pressed={lang === "ms"}
              onClick={() => setLang("ms")}
            >
              MY
            </button>
          </div>
          <a href="#pilot" className="btn">
            {t.nav.cta}
          </a>
        </div>
      </div>
    </nav>
  );
}

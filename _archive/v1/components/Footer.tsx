"use client";

import Logo from "./Logo";
import { useLang } from "./LanguageProvider";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer>
      <div className="wrap foot-inner">
        <a href="#top" className="logo" aria-label="tutur home">
          <Logo height={26} variant="white" />
        </a>
        <div className="foot-links">
          <a href="#how">{t.footer.links.how}</a>
          <a href="#pilot">{t.footer.links.pilot}</a>
          <a href="mailto:hello@tutur.app">hello@tutur.app</a>
        </div>
        <p>{t.footer.tagline}</p>
      </div>
    </footer>
  );
}

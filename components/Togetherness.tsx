"use client";

import { useLang } from "@/components/LanguageProvider";

/* "Tuturgetherness" — the community sub-brand line, on a calm light surface. */
export default function Togetherness() {
  const { t } = useLang();
  return (
    <section className="band togetherness" id="togetherness">
      <div className="wrap center">
        <p className="tg-brand">
          {t.community.brandA}
          <span className="tg-script">{t.community.brandB}</span>
        </p>
        <p className="tg-line">{t.community.line}</p>
      </div>
    </section>
  );
}

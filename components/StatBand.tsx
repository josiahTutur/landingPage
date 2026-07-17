"use client";

import { useLang } from "@/components/LanguageProvider";

/* The headline statistic — "1 in 14" on a deep violet field. */
export default function StatBand() {
  const { t } = useLang();
  return (
    <section className="band stat-band" id="stat">
      <div className="wrap">
        <div className="stat-inner">
          <p className="stat-big">{t.stat.big}</p>
          <p className="stat-body">{t.stat.body}</p>
          <p className="stat-source">{t.stat.source}</p>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useLang } from "./LanguageProvider";

const ICONS = [
  <svg key="0" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z" strokeLinejoin="round" />
    <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  <svg key="1" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 3 2.5 15 0 18M12 3c-2.5 3-2.5 15 0 18" strokeLinecap="round" />
  </svg>,
  <svg key="2" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  <svg key="3" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="5" y="11" width="14" height="9" rx="2" />
    <path d="M8 11V8a4 4 0 018 0v3" strokeLinecap="round" />
  </svg>,
];

export default function WhyTutur() {
  const { t } = useLang();
  return (
    <section className="band why" id="why">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">{t.why.eyebrow}</span>
          <h2>{t.why.title}</h2>
          <p>{t.why.intro}</p>
        </div>
        <div className="cards">
          {t.why.cards.map((c, i) => (
            <div className="card" key={c.h}>
              <div className="ico">{ICONS[i]}</div>
              <div>
                <h3>{c.h}</h3>
                <p>{c.p}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

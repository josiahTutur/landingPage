"use client";

import { useLang } from "./LanguageProvider";
import Photo from "./Photo";

// dev-facing captions for the placeholder slots (one per step)
const PHOTO_HINTS = [
  "Parent + child face to face, getting to know each other",
  "Parent looking at the tutur plan on a phone, child nearby",
  "Practising at mealtime / play — a small everyday moment",
];

export default function HowItWorks() {
  const { t } = useLang();
  return (
    <section className="band" id="how">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">{t.how.eyebrow}</span>
          <h2>{t.how.title}</h2>
          <p>{t.how.intro}</p>
        </div>
        <div className="steps">
          {t.how.steps.map((s, i) => (
            <article className="step" key={s.n}>
              <Photo
                src={`/step-${i + 1}.jpg`}
                alt={s.h}
                className="step-photo"
                ratio="16 / 10"
                hint={PHOTO_HINTS[i]}
                sizes="(max-width: 920px) 100vw, 360px"
              />
              <span className="num">{s.n}</span>
              <h3>{s.h}</h3>
              <p>{s.p}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

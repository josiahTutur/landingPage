"use client";

import { useLang } from "./LanguageProvider";

/* The brand's proprietary visual cue system — familiar, emoji-style icons
   any parent recognises instantly. BM cue word primary, description secondary. */
export default function CueSystem() {
  const { t } = useLang();
  return (
    <section className="band" id="cues">
      <div className="wrap">
        <div className="sec-head center">
          <span className="eyebrow">{t.cues.eyebrow}</span>
          <h2>{t.cues.title}</h2>
          <p>{t.cues.intro}</p>
        </div>
        <div className="cues">
          {t.cues.items.map((c) => (
            <div className="cue" key={c.word}>
              <span className="emoji" role="img" aria-label={`${c.word} — ${c.sub}`}>
                {c.emoji}
              </span>
              <div className="bm">{c.word}</div>
              <span className="en">{c.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

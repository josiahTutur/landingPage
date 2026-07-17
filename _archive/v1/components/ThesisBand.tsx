"use client";

import { useLang } from "./LanguageProvider";
import Photo from "./Photo";

/* The warm "thesis" moment — connection dahulu, komunikasi kemudian —
   paired with a candid eye-level photo. */
export default function ThesisBand() {
  const { t } = useLang();
  return (
    <section className="thesis-band">
      <div className="wrap thesis-grid">
        <p className="thesis">
          {t.thesis.a} <b>{t.thesis.b}</b> {t.thesis.c}
        </p>
        <Photo
          src="/thesis.jpg"
          alt="A parent and toddler face to face on the floor at home, sharing a moment"
          ratio="4 / 3"
          hint="Parent + child at eye level — on the floor, mid-play, candid"
          sizes="(max-width: 860px) 100vw, 520px"
        />
      </div>
    </section>
  );
}

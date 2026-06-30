"use client";

import { useLang } from "./LanguageProvider";
import Photo from "./Photo";

/* A real parent voice — Playfair italic in its proper brand role (pull-quote). */
export default function Testimonial() {
  const { t } = useLang();
  const ts = t.testimonial;
  return (
    <section className="band testi">
      <div className="wrap testi-grid">
        <Photo
          src="/testimonial.jpg"
          alt={`${ts.name}, ${ts.role}`}
          className="testi-photo"
          ratio="4 / 5"
          hint={ts.photoHint}
          sizes="(max-width: 860px) 100vw, 360px"
        />
        <div className="testi-body">
          <span className="eyebrow">{ts.eyebrow}</span>
          <blockquote className="quote">“{ts.quote}”</blockquote>
          <p className="cite">
            <b>{ts.name}</b> — {ts.role}
          </p>
        </div>
      </div>
    </section>
  );
}

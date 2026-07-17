"use client";

/* eslint-disable @next/next/no-img-element */
import { useLang } from "@/components/LanguageProvider";

/* Explains DLD, then lifts into the reflective question, closing with the
   row of waving figures (background-human.png). */
export default function DLDSection() {
  const { t } = useLang();
  return (
    <section className="band dld" id="dld">
      <div className="wrap center">
        <p className="dld-body">{t.dld.body}</p>
        <p className="dld-question">{t.dld.question}</p>
      </div>
      <div className="dld-humans" aria-hidden="true">
        <img
          src="/images/background-human.png"
          alt=""
          className="dld-humans-img"
        />
      </div>
    </section>
  );
}

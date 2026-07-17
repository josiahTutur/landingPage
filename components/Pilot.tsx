"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import { useLang } from "@/components/LanguageProvider";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/* Pilot sign-up band: email capture beside a phone mockup that says "hello!".
   Front-end only for now — wire `onSubmit` to your list/endpoint when ready. */
export default function Pilot() {
  const { t } = useLang();
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!EMAIL_RE.test(email.trim())) {
      setError(true);
      return;
    }
    setError(false);
    // TODO: POST the email to your pilot list / CRM / Formspree endpoint here.
    setDone(true);
  }

  return (
    <section className="band pilot" id="pilot">
      <div className="wrap pilot-grid">
        <div className="pilot-copy">
          <h2>{t.pilot.title}</h2>
          <p className="pilot-body">{t.pilot.body}</p>

          {done ? (
            <div className="pilot-success" role="status">
              <p className="ps-title">{t.pilot.successTitle}</p>
              <p className="ps-body">{t.pilot.successBody}</p>
            </div>
          ) : (
            <form className="pilot-form" onSubmit={onSubmit} noValidate>
              <div className="pilot-inputwrap">
                <input
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  aria-label={t.pilot.emailPh}
                  aria-invalid={error}
                  placeholder={t.pilot.emailPh}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" className="btn btn-lime">
                  {t.pilot.submit}
                </button>
              </div>
              {error && <p className="pilot-err">{t.pilot.errEmail}</p>}
            </form>
          )}
        </div>

        <div className="pilot-phone">
          <div className="phone">
            <span className="notch" aria-hidden="true" />
            <div className="screen">
              <span className="hello">{t.pilot.hello}</span>
              <div className="screen-portrait">
                <Image
                  src="/images/maya.png"
                  alt=""
                  aria-hidden="true"
                  fill
                  sizes="240px"
                  className="screen-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

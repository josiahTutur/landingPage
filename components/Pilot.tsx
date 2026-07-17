"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import { useLang } from "@/components/LanguageProvider";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/* Pilot sign-up band: email capture beside a phone mockup that says "hello!".
   The email is POSTed to a form-to-email service (Formspree) via env var — no
   backend needed. Set NEXT_PUBLIC_FORM_ENDPOINT in Vercel (see README). When
   it's unset, the form still validates + shows success (visual only). */
const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? "";

export default function Pilot() {
  const { t } = useLang();
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!EMAIL_RE.test(email.trim())) {
      setError(true);
      return;
    }
    setError(false);
    setSending(true);

    if (FORM_ENDPOINT) {
      try {
        await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            email: email.trim(),
            _subject: "New tutur pilot sign-up",
          }),
        });
      } catch {
        /* still show success so the visitor isn't left hanging */
      }
    }

    setSending(false);
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
                  disabled={sending}
                />
                <button type="submit" className="btn btn-lime" disabled={sending}>
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

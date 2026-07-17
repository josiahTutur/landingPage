"use client";

import { useRef, useState } from "react";
import { useLang } from "./LanguageProvider";

// Sign-ups are emailed to you via a form-to-email service — no backend needed.
// Set these in your Vercel environment (see README "Receiving sign-ups by email"):
//   NEXT_PUBLIC_FORM_ENDPOINT    the service's POST URL
//   NEXT_PUBLIC_FORM_ACCESS_KEY  only for Web3Forms (its "access_key")
// When the endpoint is empty, the form still validates and shows success so a
// parent is never left hanging.
const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? "";
const FORM_ACCESS_KEY = process.env.NEXT_PUBLIC_FORM_ACCESS_KEY ?? "";

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

type ErrKey = "name" | "email" | "phone" | "age" | "lang" | "consent";

export default function Pilot() {
  const { t } = useLang();
  const p = t.pilot;
  const f = p.form;

  const successRef = useRef<HTMLDivElement>(null);
  const [errors, setErrors] = useState<Record<ErrKey, boolean>>({
    name: false,
    email: false,
    phone: false,
    age: false,
    lang: false,
    consent: false,
  });
  const [sent, setSent] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const el = e.currentTarget.elements as typeof e.currentTarget.elements & {
      name: HTMLInputElement;
      email: HTMLInputElement;
      phone: HTMLInputElement;
      age: HTMLSelectElement;
      lang: HTMLSelectElement;
      consent: HTMLInputElement;
    };

    const checks: Record<ErrKey, boolean> = {
      name: el.name.value.trim().length > 1,
      email: isEmail(el.email.value.trim()),
      phone: el.phone.value.replace(/\D/g, "").length >= 7,
      age: !!el.age.value,
      lang: !!el.lang.value,
      consent: el.consent.checked,
    };

    const nextErrors: Record<ErrKey, boolean> = {
      name: !checks.name,
      email: !checks.email,
      phone: !checks.phone,
      age: !checks.age,
      lang: !checks.lang,
      consent: !checks.consent,
    };
    setErrors(nextErrors);

    if (Object.values(checks).some((ok) => !ok)) {
      const firstBad = (Object.keys(nextErrors) as ErrKey[]).find(
        (k) => nextErrors[k]
      );
      if (firstBad) el[firstBad].focus();
      return;
    }

    const data = Object.fromEntries(new FormData(e.currentTarget).entries());

    if (FORM_ENDPOINT) {
      try {
        await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            ...data,
            _subject: "New tutur pilot sign-up",
            // ignored by services that don't use it (e.g. Formspree)
            ...(FORM_ACCESS_KEY ? { access_key: FORM_ACCESS_KEY } : {}),
          }),
        });
      } catch {
        /* still show success so the parent isn't left hanging */
      }
    }

    setSent(true);
    requestAnimationFrame(() =>
      successRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })
    );
  }

  return (
    <section className="band pilot" id="pilot">
      <div className="wrap pilot-grid">
        <div className="pilot-copy">
          <span className="eyebrow">
            <span className="dot" />
            {p.eyebrow}
          </span>
          <h2>{p.title}</h2>
          <p className="intro">{p.intro}</p>
          <ul>
            {p.benefits.map((bn) => (
              <li key={bn.b}>
                <Check />
                <span>
                  <b>{bn.b}</b>
                  {bn.rest}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          {!sent && (
            <form onSubmit={onSubmit} noValidate>
              <div className="field">
                <label htmlFor="name">{f.name}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder={f.namePh}
                  required
                />
                <div className={`err${errors.name ? " show" : ""}`}>
                  {f.errors.name}
                </div>
              </div>
              <div className="row">
                <div className="field">
                  <label htmlFor="email">{f.email}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder={f.emailPh}
                    required
                  />
                  <div className={`err${errors.email ? " show" : ""}`}>
                    {f.errors.email}
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="phone">{f.phone}</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder={f.phonePh}
                    required
                  />
                  <div className={`err${errors.phone ? " show" : ""}`}>
                    {f.errors.phone}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="field">
                  <label htmlFor="age">{f.age}</label>
                  <select id="age" name="age" required defaultValue="">
                    <option value="" disabled>
                      {f.agePh}
                    </option>
                    {f.ageOpts.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                  <div className={`err${errors.age ? " show" : ""}`}>
                    {f.errors.age}
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="lang">{f.lang}</label>
                  <select id="lang" name="lang" required defaultValue="">
                    <option value="" disabled>
                      {f.langPh}
                    </option>
                    {f.langOpts.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                  <div className={`err${errors.lang ? " show" : ""}`}>
                    {f.errors.lang}
                  </div>
                </div>
              </div>
              <div className="field">
                <label htmlFor="hopes">
                  {f.hopes} <span className="opt">{f.optional}</span>
                </label>
                <textarea id="hopes" name="hopes" placeholder={f.hopesPh} />
              </div>
              <label className="consent">
                <input type="checkbox" id="consent" name="consent" required />
                <span>{f.consent}</span>
              </label>
              <div
                className={`err${errors.consent ? " show" : ""}`}
                style={{ margin: "-12px 0 14px" }}
              >
                {f.errors.consent}
              </div>
              <button type="submit" className="btn">
                {f.submit}
              </button>
              <p className="formnote">{f.note}</p>
            </form>
          )}

          {sent && (
            <div
              className="success show"
              ref={successRef}
              role="status"
              aria-live="polite"
            >
              <div className="tick">
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.6"
                >
                  <path
                    d="M5 13l4 4L19 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>{f.successTitle}</h3>
              <p className="serif">{f.successBody}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function Check() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

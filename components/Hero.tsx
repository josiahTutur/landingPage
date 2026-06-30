"use client";

import { useLang } from "./LanguageProvider";

export default function Hero() {
  const { t } = useLang();
  const h = t.hero;
  // split on the FIRST occurrence only so the "you / anda" emphasis stays bold
  // (plain .split() would also break on "your" / "anak anda" and drop the tail)
  const i = h.lede.indexOf(h.ledeYou);
  const ledeBefore = i < 0 ? h.lede : h.lede.slice(0, i);
  const ledeAfter = i < 0 ? "" : h.lede.slice(i + h.ledeYou.length);

  return (
    <header className="hero" id="top">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">
            <span className="dot" />
            {h.eyebrow}
          </span>
          <h1>
            {h.headPre}{" "}
            <span className="accent">
              {h.headAccent}
              <svg viewBox="0 0 200 12" preserveAspectRatio="none" aria-hidden="true">
                <path
                  d="M2 8 C 50 2, 150 2, 198 7"
                  stroke="#AEE85A"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>
          <p className="lede">
            {ledeBefore}
            <b>{h.ledeYou}</b>
            {ledeAfter}
          </p>

          <div className="stat">
            <span className="big">{h.statBig}</span>
            <small>{h.statSmall}</small>
          </div>

          <div className="hero-actions">
            <a href="#pilot" className="btn">
              {h.ctaPrimary}
            </a>
            <a href="#how" className="btn btn-ghost">
              {h.ctaGhost}
            </a>
          </div>
          <div className="reassure">
            {h.reassure.map((r) => (
              <span key={r}>
                <Check /> {r}
              </span>
            ))}
          </div>
        </div>

        <div className="stage" aria-hidden="true">
          <div className="chip c1">
            <span className="tag">{h.chips.firstWordTag}</span>mama
          </div>
          <div className="chip c2">lagi!</div>
          <div className="chip c3">amma</div>
          <div className="chip c4">
            <span className="tag">{h.chips.newTodayTag}</span>more
          </div>
          <div className="phone">
            <div className="notch" />
            <div className="screen">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="mark"
                src="/tutur-symbol.png"
                alt=""
                aria-hidden="true"
              />
              <div className="hello">hello!</div>
              <div className="sub">a few words at a time</div>
              <div className="bubbles">
                <div className="bubble b1">nak susu</div>
                <div className="bubble win b2">{h.bubbles.win1}</div>
                <div className="bubble b3">ball</div>
                <div className="bubble v b4">要 (want)</div>
                <div className="bubble win b5">{h.bubbles.win2}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function Check() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

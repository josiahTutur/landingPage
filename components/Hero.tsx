"use client";

import { useEffect, useRef, useState } from "react";
import { useLang } from "@/components/LanguageProvider";

/* Hero video, self-hosted on Cloudflare R2. It does NOT autoplay — it shows the
   poster with a play button; pressing play is a user gesture, so it plays WITH
   sound. Custom controls: centred play/pause, mute + fullscreen (top-right), and
   a seekable progress bar (revealed on first play) with a round scrubber handle.
   720p is served to small screens to save mobile data; 1080p to larger. */
const VIDEO_1080 =
  "https://media.tutur.my/Tutur%20Landing%20Page%20Footage1080.mp4";
const VIDEO_720 =
  "https://media.tutur.my/Tutur%20Landing%20Page%20Footage720.mp4";

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}
function PauseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <rect x="6" y="5" width="4" height="14" rx="1" />
      <rect x="14" y="5" width="4" height="14" rx="1" />
    </svg>
  );
}
function SoundIcon({ on }: { on: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M11 5 6 9H2v6h4l5 4V5z" fill="currentColor" stroke="none" />
      {on ? (
        <>
          <path d="M15.5 8.5a5 5 0 0 1 0 7" />
          <path d="M18.5 5.5a9 9 0 0 1 0 13" />
        </>
      ) : (
        <path d="M22 9l-6 6M16 9l6 6" />
      )}
    </svg>
  );
}
function FullscreenIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M8 3H3v5M16 3h5v5M21 16v5h-5M3 16v5h5" />
    </svg>
  );
}

export default function Hero() {
  const { t } = useLang();
  const heroRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [src, setSrc] = useState<string>("");
  const [playing, setPlaying] = useState(false);
  const [soundOn, setSoundOn] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showProgress, setShowProgress] = useState(false);

  // choose the resolution once we know the viewport size
  useEffect(() => {
    const small = window.matchMedia("(max-width: 768px)").matches;
    setSrc(small ? VIDEO_720 : VIDEO_1080);
  }, []);

  // The video does NOT autoplay. It sits paused on its poster (muted) until the
  // user presses play — that click is a user gesture, so it can then play WITH
  // sound. No autoplay restriction applies.
  useEffect(() => {
    if (!src) return;
    const v = videoRef.current;
    if (v) v.muted = true;
  }, [src]);

  // keep UI state in sync with the actual video element
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    const onTime = () =>
      setProgress(v.duration ? (v.currentTime / v.duration) * 100 : 0);
    v.addEventListener("play", onPlay);
    v.addEventListener("pause", onPause);
    v.addEventListener("timeupdate", onTime);
    return () => {
      v.removeEventListener("play", onPlay);
      v.removeEventListener("pause", onPause);
      v.removeEventListener("timeupdate", onTime);
    };
  }, []);

  function togglePlay() {
    const v = videoRef.current;
    if (!v) return;
    setShowProgress(true); // reveal the length bar once the user plays/pauses
    if (v.paused) {
      v.muted = false; // this click is a user gesture → play WITH sound
      setSoundOn(true);
      v.play().catch(() => {});
    } else {
      v.pause();
    }
  }
  function toggleSound() {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setSoundOn(!v.muted);
    if (!v.muted) v.play().catch(() => {});
  }
  function toggleFullscreen() {
    const doc = document as Document & {
      webkitFullscreenElement?: Element;
      webkitExitFullscreen?: () => void;
    };
    const el = heroRef.current as
      | (HTMLElement & { webkitRequestFullscreen?: () => void })
      | null;
    const v = videoRef.current as
      | (HTMLVideoElement & { webkitEnterFullscreen?: () => void })
      | null;
    if (doc.fullscreenElement || doc.webkitFullscreenElement) {
      (doc.exitFullscreen || doc.webkitExitFullscreen)?.call(document);
    } else if (el?.requestFullscreen) {
      el.requestFullscreen().catch(() => {});
    } else if (el?.webkitRequestFullscreen) {
      el.webkitRequestFullscreen();
    } else if (v?.webkitEnterFullscreen) {
      v.webkitEnterFullscreen(); // iOS Safari: native (letterboxed) video fullscreen
    }
  }
  function seek(e: React.MouseEvent<HTMLDivElement>) {
    const v = videoRef.current;
    if (!v || !v.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    v.currentTime = ((e.clientX - rect.left) / rect.width) * v.duration;
  }

  return (
    <header className="hero" id="top" ref={heroRef}>
      <div className="hero-media">
        <video
          ref={videoRef}
          className="hero-video"
          src={src || undefined}
          poster="/images/hero-poster.jpg"
          loop
          playsInline
          preload="auto"
          aria-label={t.hero.alt}
          onClick={togglePlay}
        />
        <div className="hero-scrim" aria-hidden="true" />
      </div>

      {/* centred play / pause */}
      <button
        type="button"
        className={`hero-play${playing ? " playing" : ""}`}
        onClick={togglePlay}
        aria-label={playing ? "Pause" : "Play"}
      >
        {playing ? <PauseIcon /> : <PlayIcon />}
      </button>

      {/* top-right: mute + fullscreen */}
      <div className="hero-ctrls">
        <button
          type="button"
          className="hero-ctrl"
          onClick={toggleSound}
          aria-label={soundOn ? t.hero.soundOn : t.hero.soundOff}
        >
          <SoundIcon on={soundOn} />
        </button>
        <button
          type="button"
          className="hero-ctrl"
          onClick={toggleFullscreen}
          aria-label={t.hero.fullscreen}
        >
          <FullscreenIcon />
        </button>
      </div>

      {/* seekable progress / length bar — hidden until the user plays/pauses */}
      {showProgress && (
        <div className="hero-progress" onClick={seek} role="presentation">
          <div className="hero-progress-fill" style={{ width: `${progress}%` }} />
        </div>
      )}

      <div className="wrap hero-copy">
        <h1>
          {t.hero.headPre}
          <br />
          {t.hero.headWith}
          <span className="accent">{t.hero.headAccent}</span>
        </h1>
      </div>
    </header>
  );
}

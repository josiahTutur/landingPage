import Image from "next/image";

/* A photo slot that is drop-in ready.
   - Pass `src` (a file in /public, e.g. "/photos/hero.jpg") and it renders an
     optimised next/image (WebP, lazy-load, cover).
   - Omit `src` and it renders a tasteful placeholder showing what photo belongs
     there, so the layout is final and real photos drop in later with no CSS work. */
export default function Photo({
  src,
  alt,
  hint,
  ratio = "4 / 3",
  sizes = "(max-width: 920px) 100vw, 600px",
  className,
}: {
  src?: string;
  alt?: string;
  hint: string;
  ratio?: string;
  sizes?: string;
  className?: string;
}) {
  return (
    <div className={`photo${className ? " " + className : ""}`} style={{ aspectRatio: ratio }}>
      {src ? (
        <Image src={src} alt={alt ?? ""} fill sizes={sizes} style={{ objectFit: "cover" }} />
      ) : (
        <div className="photo-ph" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
            <rect x="3" y="5" width="18" height="14" rx="2.5" />
            <circle cx="8.5" cy="10" r="1.6" />
            <path d="M21 16l-5-5L5 19" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>{hint}</span>
        </div>
      )}
    </div>
  );
}

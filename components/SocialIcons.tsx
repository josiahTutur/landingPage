import { contact } from "@/lib/dict";

/* Inline brand-neutral glyphs so we stay self-contained (no icon font/CDN). */
const ICONS: Record<string, React.ReactNode> = {
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" stroke="none" />
    </>
  ),
  facebook: (
    <path d="M14 8.5h2.2V5.6h-2.4c-2 0-3.3 1.3-3.3 3.4v1.6H8.4v2.9h2.1V21h3v-7.5h2.2l.4-2.9h-2.6V9.3c0-.6.3-.8.9-.8z" />
  ),
  tiktok: (
    <path d="M14 4c.3 2 1.6 3.5 3.6 3.8V10c-1.3 0-2.6-.4-3.6-1.1v5.4A4.8 4.8 0 1 1 9.2 9.5v2.4a2.4 2.4 0 1 0 2.4 2.4V4H14z" />
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path
        d="M8 10v6M8 7.2v.1M12 16v-3.4c0-1 .7-1.6 1.6-1.6s1.4.7 1.4 1.7V16"
        fill="none"
      />
    </>
  ),
};

const LABEL: Record<string, string> = {
  instagram: "Instagram",
  facebook: "Facebook",
  tiktok: "TikTok",
  linkedin: "LinkedIn",
};

export default function SocialIcons({ variant = "default" }: { variant?: "default" | "footer" }) {
  return (
    <div className={`socials${variant === "footer" ? " footer" : ""}`}>
      {Object.entries(contact.social).map(([key, href]) => (
        <a
          key={key}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={LABEL[key]}
          className="social"
        >
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill={key === "facebook" || key === "tiktok" ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {ICONS[key]}
          </svg>
        </a>
      ))}
    </div>
  );
}

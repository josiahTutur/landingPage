import type { Metadata, Viewport } from "next";
import { Poppins, Fraunces, League_Spartan } from "next/font/google";
import { LanguageProvider } from "@/components/LanguageProvider";
import "./globals.css";

/* Type roles per the v2 design:
   Poppins — body & UI · Fraunces — display headings & warm accents
   (kept light, not bold) · League Spartan — the phone's "hello!" */
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});
const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-spartan",
  display: "swap",
});
/* Load Fraunces as a variable font WITH its optical-size + character axes so
   we can dial in the high-contrast "display" look (opsz) and the signature
   wonky italic swashes (WONK) — the elegant cut shown on Google Fonts. */
const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tutur.my"),
  title: "tutur — Komunikasi bermula dengan anda",
  description:
    "Tutur sedang membina aplikasi untuk membantu ibu bapa Malaysia menjadi rakan komunikasi anak mereka. Sertai Program Pilot kami.",
  keywords: [
    "DLD",
    "developmental language disorder",
    "speech delay",
    "parent coaching",
    "Malaysia",
    "bilingual",
    "child language",
    "tutur",
  ],
  openGraph: {
    title: "tutur — Komunikasi bermula dengan anda",
    description:
      "Dibina untuk membantu ibu bapa Malaysia menjadi rakan komunikasi anak. Sertai Program Pilot kami.",
    url: "https://tutur.my",
    siteName: "tutur",
    locale: "ms_MY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "tutur — Komunikasi bermula dengan anda",
    description:
      "Dibina untuk membantu ibu bapa Malaysia menjadi rakan komunikasi anak.",
  },
};

export const viewport: Viewport = {
  themeColor: "#6A2FE8",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ms"
      className={`${poppins.variable} ${fraunces.variable} ${leagueSpartan.variable}`}
    >
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

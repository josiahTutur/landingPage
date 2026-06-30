import type { Metadata, Viewport } from "next";
import { Poppins, Inter, Playfair_Display, Caveat } from "next/font/google";
import { LanguageProvider } from "@/components/LanguageProvider";
import "./globals.css";

/* Type roles per Tutur Brand Book v1.0:
   Poppins — headings / UI · Inter — body · Playfair (italic) — warm moments
   Caveat — Togetherness sub-brand script only (loaded, used sparingly) */
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  style: ["italic", "normal"],
  variable: "--font-playfair",
  display: "swap",
});
const caveat = Caveat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tutur.app"),
  title: "tutur — Coaching for the other 167 hours",
  description:
    "tutur coaches Malaysian parents to support their child's speech and language at home — in the languages you speak every day. Therapy is one hour a week; tutur helps with the other 167. Join the pilot.",
  keywords: [
    "speech delay",
    "parent coaching",
    "Malaysia",
    "bilingual",
    "speech therapy",
    "child language",
    "tutur",
  ],
  openGraph: {
    title: "tutur — Coaching for the other 167 hours",
    description:
      "Warm, evidence-backed coaching that helps Malaysian parents support their child's speech at home. Join the pilot.",
    url: "https://tutur.app",
    siteName: "tutur",
    locale: "en_MY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "tutur — Coaching for the other 167 hours",
    description:
      "Warm, evidence-backed coaching that helps Malaysian parents support their child's speech at home.",
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
      className={`${poppins.variable} ${inter.variable} ${playfair.variable} ${caveat.variable}`}
    >
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

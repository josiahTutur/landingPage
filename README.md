# tutur — landing page

Marketing + pilot sign-up landing page for **tutur**, built with **Next.js 15 (App Router) + React 19 + TypeScript**. Fully static, deploys to Vercel with zero config.

Brand-compliant with **Tutur Brand Book v1.0** — colour and type tokens are taken verbatim from `tutur-brand-tokens.md`.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (static)
npm start        # serve the production build
```

Requires Node 18.18+ (developed on Node 24).

## Deploy to Vercel

1. Push this repo to GitHub.
2. In Vercel, **Add New → Project** and import the repo.
3. Framework preset auto-detects **Next.js** — no settings to change.
4. Deploy.

### Collecting real sign-ups

The pilot form validates client-side and shows a success state out of the box. To actually capture submissions, set one environment variable in **Vercel → Settings → Environment Variables**:

```
NEXT_PUBLIC_FORM_ENDPOINT = https://your-form-backend/...
```

Point it at a Formspree / Tally / Google Form / custom endpoint that accepts a JSON `POST`. When unset, the form still works visually (no data is sent).

## Bilingual (EN / MY)

The page is fully bilingual and **defaults to Malay** (BM-first, per the brand book). The EN/MY toggle lives in the nav; the choice is saved to `localStorage` and `<html lang>` updates to match.

All copy lives in one place — [`lib/dict.ts`](lib/dict.ts) (`en` and `ms` objects). To tweak wording, edit there; no component changes needed.

## Structure

```
app/
  layout.tsx     # fonts (next/font) + SEO/OG metadata + LanguageProvider
  page.tsx       # composes the sections
  globals.css    # brand tokens (:root) + all component styles
  icon.png       # favicon (from the symbol)
components/
  Logo.tsx               # symbol + wordmark lockup (assets in /public)
  LanguageProvider.tsx   # EN/MY context + useLang() hook
  Nav.tsx  Hero.tsx  LangTicker.tsx  ThesisBand.tsx
  HowItWorks.tsx  WhyTutur.tsx  CueSystem.tsx
  Pilot.tsx              # the validated sign-up form
  Footer.tsx
lib/
  dict.ts        # all copy, EN + MS
public/
  tutur-symbol.png  tutur-wordmark.png  tutur-wordmark-white.png
```

## Brand notes

- **Type:** Poppins (headings/UI), Inter (body), Playfair Display italic (one warm "thesis" moment), Caveat (loaded for the Togetherness sub-brand only).
- **Colour:** Tutur Violet `#6A2FE8` primary; Lime `#AEE85A` as the encouragement/success accent; periwinkle and the signature violet gradient for surfaces. The old peach accent has been removed entirely — it had no basis in the brand.
- **Copy:** leads with the "other **167 hours**" angle (therapy is ~1 hr/week; tutur is for the rest), BM-first touches, and the proprietary cue system (Tengok · Perhati · Dengar · Connect · Tutur).
- **Logo:** the official woven symbol + Sifonn wordmark, used as the lockup (symbol left of wordmark) in [`Logo.tsx`](components/Logo.tsx). Source PNGs live in `/public` (trimmed to content bounds); a white wordmark variant is used on the dark footer.

# tutur — image generation prompts

Prompts for the real-person photography that fills the placeholder slots. Each
maps to a `<Photo>` slot in the code. Drop the generated files into
`public/photos/` with the filename shown, then pass `src="/photos/<file>"` to the
matching `<Photo>` (or ask Claude to wire them in).

## Brand rules for every image (prepend this to each prompt)

> Candid documentary photograph of a real Malaysian family at home. Warm,
> natural, unposed — like a photojournalist captured a genuine everyday moment,
> not a studio shoot. Soft natural window light, warm gentle tones. Modest,
> real Malaysian home interior (terrace house / apartment), lived-in and cosy.
> Parent and young child (toddler, roughly 1–4 years). Emotion: connection,
> calm, reassurance, quiet joy — never clinical, never a forced smile. Adult and
> child on the same eye level. Shot on a 35mm or 50mm lens, shallow depth of
> field, soft background blur, photorealistic, high detail, true-to-life skin
> tones. Diverse, authentic, dignified.

**Negative / avoid (add to every prompt):** stock-photo cheesiness, posed studio
backdrop, fake smiles, perfect glamour, clinical/medical/hospital setting,
text, captions, watermarks, logos, brand marks, distorted hands, extra fingers,
plastic skin, oversaturation, harsh flash, forced eye contact (except the
portrait).

> Tip: generate 3–4 variations of each and pick the warmest. Vary the family's
> ethnicity across the set (Malay, Chinese, Indian, mixed) to reflect Malaysia.
> Keep clothing everyday and modest.

---

## 1. Thesis band — "connection first"

- **File:** `public/photos/thesis.jpg`
- **Aspect ratio:** 4:3 (landscape) · `--ar 4:3`
- **Export size:** **1600 × 1200 px** (min 1200 × 900)
- **Component:** `components/ThesisBand.tsx`

**Prompt:**
> [brand rules] A Malay mother and her toddler sitting together on the living-room
> floor, face to face at eye level, mid-play — she is smiling softly and watching
> her child point at something, the child mid-babble reaching toward her. Genuine
> shared attention between them. Soft morning light from a nearby window. Warm,
> intimate, tender. Some empty/negative space in the frame. 4:3, photorealistic.

---

## 2. How it works — Step 1: "Tell us about your child"

- **File:** `public/photos/step-1.jpg`
- **Aspect ratio:** 16:10 (landscape) · `--ar 16:10`
- **Export size:** **1600 × 1000 px** (min 1280 × 800)
- **Component:** `components/HowItWorks.tsx` (first card)

**Prompt:**
> [brand rules] An Indian Malaysian father kneeling on the floor face to face with
> his young toddler, getting to know each other — gently watching the child's
> gestures and sounds, attentive and warm. The child is making a gesture or
> holding a small toy. Cosy home background, soft natural light. Quiet,
> observant, loving mood. 16:10, photorealistic.

---

## 3. How it works — Step 2: "Get a plan made for them"

- **File:** `public/photos/step-2.jpg`
- **Aspect ratio:** 16:10 (landscape) · `--ar 16:10`
- **Export size:** **1600 × 1000 px** (min 1280 × 800)
- **Component:** `components/HowItWorks.tsx` (second card)

**Prompt:**
> [brand rules] A Chinese Malaysian mother sitting on a sofa glancing at her
> smartphone with a calm, reassured expression, her toddler nestled beside her or
> on her lap. She looks like she just read something helpful. Everyday living
> room, warm light. Relaxed and confident, not stressed. The phone is generic
> (no visible UI text or logos). 16:10, photorealistic.

---

## 4. How it works — Step 3: "Practise & watch words grow"

- **File:** `public/photos/step-3.jpg`
- **Aspect ratio:** 16:10 (landscape) · `--ar 16:10`
- **Export size:** **1600 × 1000 px** (min 1280 × 800)
- **Component:** `components/HowItWorks.tsx` (third card)

**Prompt:**
> [brand rules] A Malay family at the kitchen table during a simple meal, the
> parent leaning in and talking playfully with their toddler in a high chair —
> a small everyday teaching moment, the child looking up and responding. Warm
> domestic light, real Malaysian home. Joyful, ordinary, candid. 16:10,
> photorealistic.

---

## 5. Testimonial — parent portrait

- **File:** `public/photos/testimonial.jpg`
- **Aspect ratio:** 4:5 (portrait) · `--ar 4:5`
- **Export size:** **1200 × 1500 px** (min 1000 × 1250)
- **Component:** `components/Testimonial.tsx` (quote is from "Nurul")

**Prompt:**
> [brand rules] Warm, candid portrait of a Malay Muslim mother in her early
> thirties wearing a soft everyday hijab, looking directly at the camera with a
> gentle, genuine, reassured smile. Soft natural light, slightly blurred cosy
> home background. Head-and-shoulders, slightly off-centre, eyes sharp. Authentic
> and dignified — like a real parent, not a model. 4:5 portrait, photorealistic.

---

## Export notes

- **Format:** JPG (or PNG). Next.js `<Image>` re-encodes to WebP/AVIF and resizes
  automatically, so you don't need to pre-optimise — just keep originals sharp.
- Aim for a clean crop at the exact aspect ratio so nothing important sits at the
  edges (the slots use `object-fit: cover`).
- Keep a consistent look across all five (same warmth/light) so the page feels
  like one family's world, shot by one photographer.

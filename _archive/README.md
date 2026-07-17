# _archive — parked previous versions

This folder holds **old, non-live** versions of the landing page, kept for safety.

- The leading `_` makes Next.js ignore this folder (it is never routed).
- It is also listed in `tsconfig.json` → `exclude`, so it is never type-checked or built.
- Nothing in here ships to production. It is purely a reference copy you can eyeball or restore from.

## Contents

- `v1/` — the original feature-rich landing page (Hero, How it works, Why tutur,
  the cues, testimonial, pilot form, footer). Replaced by the v2 "coming soon /
  pilot signup" design on 2026-07-15.

## How to restore v1

If the team decides v1 was better:

```bash
# from the repo root
rm -rf app components lib          # remove the current (v2) source
cp -R _archive/v1/app app
cp -R _archive/v1/components components
cp -R _archive/v1/lib lib
```

Then restart the dev server (`npm run dev`). The `public/` assets and config
files are shared, so no other changes are needed.

There is also a git tag **`v1-original`** pointing at the last commit where v1
was the live site — `git checkout v1-original` gives you the exact original tree.

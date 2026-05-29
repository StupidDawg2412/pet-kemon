# pet-kemon

Linktree-style landing page ("Playful Pack" design) built with **Nuxt 3**,
statically generated and deployable to GitHub Pages, Netlify, or Vercel.
Bilingual TH/EN with a top-right toggle (initial language auto-detected from the
browser).

## Develop

```bash
npm install
npm run dev      # http://localhost:3000  (hot reload)
```

## Build (static)

```bash
npm run generate   # outputs .output/public
npm run preview    # preview the generated site locally
```

`npm run generate` prerenders the whole site to plain HTML/CSS/JS in
`.output/public` — no server needed at runtime.

## Edit content

All copy lives in the `I18N` object in `app.vue` (`en` and `th` blocks). Edit a
value in **both** blocks to change a follower count, the tagline, the Shopee
copy, the footer, etc. Counts are plain strings (e.g. `1.2M subscribers` /
`ผู้ติดตาม 1.2M`). Link targets are `href="#"` placeholders in `app.vue` — swap in
real URLs. Brand icons are inline SVG (official Simple Icons paths) in the same
file; palette colors are CSS custom properties at the top of the `<style>` block.

## Deploy

All three hosts serve the contents of `.output/public`.

### GitHub Pages
This site is served from a subpath (`https://<user>.github.io/pet-kemon/`), so set
the base URL when generating:

```bash
# bash
NUXT_APP_BASE_URL=/pet-kemon/ npm run generate
```
```powershell
# PowerShell
$env:NUXT_APP_BASE_URL = "/pet-kemon/"; npm run generate
```

Publish `.output/public` (a GitHub Action, or push it to a `gh-pages` branch).
`.nojekyll` is included so GitHub serves the `_nuxt/` assets directory as-is.

### Netlify
- Build command: `npm run generate`
- Publish directory: `.output/public`
- (Served at domain root, so no base URL needed.)

### Vercel
- Framework preset: **Nuxt** (auto-detected)
- Output is `.output/public`; no base URL needed.

## Notes

- `archive/` holds the earlier plain-HTML version and the React/Babel design
  explorations — kept for reference, not part of the build.
- Design specs/plans live in `docs/superpowers/`.

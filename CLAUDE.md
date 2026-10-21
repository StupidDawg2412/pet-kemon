# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page, linktree-style landing page for the "pet-kemon" persona ("Playful Pack"
design: chunky cartoony tiles, hard offset shadows, paw-print background). Built with
Nuxt 3 and **statically generated** — no runtime server. Bilingual (Thai/English).

## Commands

```bash
npm install            # install deps
npm run dev            # dev server with HMR -> http://localhost:3000
npm run generate       # static build -> .output/public  (this is the deploy artifact)
npm run preview        # serve the generated output locally
npm run build          # server build (not used for deploy; prefer generate)
```

There are **no tests and no linter** configured.

To test a subpath build locally:

```bash
# bash
NUXT_APP_BASE_URL=/pet-kemon/ npm run generate
# PowerShell
$env:NUXT_APP_BASE_URL = "/pet-kemon/"; npm run generate
```

## Architecture

**The entire site is `app.vue`.** There is no `pages/` directory and no component
tree — one root component holds the markup, all styling (a global `<style>` block),
and all content. When changing the site, you are almost always editing `app.vue`.

`app.vue` contains four things worth knowing:

1. **`I18N` object** — `en` and `th` dictionaries holding every piece of display copy
   (tagline, Shopee label/subtitle, follower counts, footer, the toggle label). Follower
   counts are plain strings per language (e.g. `"1.2M subscribers"` / `"ผู้ติดตาม 1.2M"`).
   **To change any text, edit the key in BOTH `en` and `th`** — the template reads only
   from `I18N[lang]`, so editing markup directly won't stick.
2. **`I` object + `links` array** — inline SVG markup for brand glyphs (official Simple
   Icons paths, white fill) rendered via `v-html`, plus per-tile color/layout config.
3. **Language state** — `lang` ref defaults to `"en"` (server render), then `onMounted`
   auto-detects `navigator.language` (Thai → `th`); the top-right button toggles. Default
   is intentionally `en` on the server so static generation/hydration stays stable.
4. **`<style>` (global, not scoped)** — palette as CSS custom properties at `:root`
   (`--ink`, `--cream`, `--sun`, `--shopee`, etc.); the chunky press effect is pure CSS
   (`.card:active`), not JS.

Link targets are `href="#"` placeholders (`@click.prevent`) — swap in real URLs in the
`links` array and the Shopee anchor.

`nuxt.config.ts`: `nitro.preset: "static"`; Google Fonts (Fredoka, Plus Jakarta Sans)
loaded via `app.head.link`; `app.baseURL` reads `NUXT_APP_BASE_URL` (default `/`).

## Deployment

`.github/workflows/deploy.yml` deploys to S3 + CloudFront on push to `main`: runs
`generate`, assumes an AWS role via OIDC, syncs `.output/public` to the bucket (`_nuxt/*`
with 1-year immutable cache, the rest `max-age=0,must-revalidate` with `--delete`), then
invalidates `/*`. Served at root, so no `NUXT_APP_BASE_URL` needed.

Repo config required: secret `AWS_ROLE_ARN`; variables `AWS_REGION`, `S3_BUCKET`,
`CLOUDFRONT_DISTRIBUTION_ID`. The role trusts GitHub OIDC for this repo and needs
`s3:ListBucket/PutObject/DeleteObject` on the bucket and `cloudfront:CreateInvalidation`.

CI uses Bun; local `.nvmrc` pins Node 22 (a transitive dep, `rollup-plugin-visualizer`,
requires `node >=22`).

## `archive/` and `docs/`

- `archive/` — the earlier plain-HTML version of this site plus React/Babel design
  explorations (`directionA/B/C.jsx`, `petkemon-app.jsx`, etc.). **Kept for reference,
  excluded from the build. Do not wire it into the Nuxt app.** Note: a file named
  `app.jsx` here previously collided with Nuxt's `app.{ext}` resolution — keep stray
  `app.*` files out of the repo root.
- `docs/superpowers/` — design spec and implementation plan from the original build.

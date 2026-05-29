# pet-kemon Landing Page — Design

Date: 2026-05-29

## Purpose

A single-page, linktree-style landing page for the "pet-kemon" persona. Centralizes
links to social and shopping profiles behind a playful pet theme. Hosted as static
files, portable across GitHub Pages, Netlify, and Vercel with zero build step.

## Stack

Plain HTML + CSS. No JavaScript framework, no build tooling, no dependencies.

Rationale: the page is one static linktree. A framework adds runtime, config, and
node dependencies for no benefit. Plain static files are the most portable: GitHub
Pages serves them directly, Netlify and Vercel auto-detect the static directory with
zero per-platform configuration.

## Files

```
index.html      Markup
style.css       Styles
.nojekyll       Tells GitHub Pages to skip Jekyll processing
README.md       Deploy notes for GitHub Pages / Netlify / Vercel
```

## Page Structure (top to bottom)

1. **Avatar** — yellow rounded-square tile containing an inline paw-print SVG.
2. **Title** — `pet-kemon` followed by a verified-check SVG (blue badge).
3. **Bio pill** — rounded pill: `🐾 catch 'em all — news, memes & fluff`.
4. **Link cards** — each card is an `<a href="#" data-link="<name>">`. `href` is a `#`
   placeholder to be replaced with real URLs later; `data-link` identifies each card
   for easy find/edit.
   - **Shopee** (full width) — orange gradient, shopping-bag icon, title
     "Shop my Shopee", subtitle "my fave pet gear & treats →", `SALE` pill badge.
   - **YouTube** (full width) — red, play icon, title "YouTube", subtitle
     "1.2M subscribers", `↗` external-link glyph.
   - **TikTok | Instagram** (half-width row) — TikTok dark with note icon,
     "3.4M followers"; Instagram magenta/purple gradient with camera icon,
     "870K followers".
   - **Facebook | X** (half-width row) — Facebook blue with `f` icon, "248K likes";
     X dark with X icon, "96K followers".
5. **Footer** — `🐾 made with treats · pet-kemon 2026`.

## Layout

- Mobile-first. Outer container is a centered flex column with consistent gap,
  `max-width: ~420px`, horizontally centered in the viewport on all screen sizes.
- Background fills the viewport: light cream with a subtle repeating paw-print
  pattern (inline SVG data URI or CSS).
- Full-width cards span the container. Half-width cards sit in a 2-column CSS grid
  that collapses to a single column on very narrow screens (< ~360px).
- Follower counts, labels, and card text live directly in the HTML for easy editing.

## Icons

Inline SVG for the avatar paw, verified check, and each platform glyph. Crisp at any
size, no external requests, no dependencies. Brand glyphs drawn as simple
recognizable marks (not official trademarked logo files).

## Theme

Single light theme matching the provided design. No dark-mode toggle.

The iOS status bar visible in the source design image is mockup chrome and is not
part of the built page.

## Deploy

All three targets serve the static files directly:

- **GitHub Pages** — push to the repo; `.nojekyll` prevents Jekyll processing; serve
  from the branch root (or `/docs`). Settings → Pages.
- **Netlify** — auto-detects; no build command, publish directory = repo root. Also
  works via drag-and-drop.
- **Vercel** — auto-detects a static project; no framework preset needed.

README documents each path.

## Out of Scope (YAGNI)

- No JavaScript / interactivity beyond native link clicks.
- No analytics, no cookie banner.
- No CMS or data file — content edited inline in `index.html`.
- No dark mode, no i18n, no contact form.

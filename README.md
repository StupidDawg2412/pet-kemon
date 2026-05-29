# pet-kemon

A single-page, linktree-style landing page. Plain HTML + CSS + a small inline
script for the language toggle. No build step, no dependencies.

## Local preview

Open `index.html` in any browser. That's it.

## Edit links

Each card is an `<a href="#" data-link="...">` in `index.html`. Replace each `#`
with the real URL. Card colors are CSS custom properties at the top of
`style.css` (`:root`).

## Edit follower counts and text (IMPORTANT)

The page is bilingual (TH/EN) via the `I18N` object in the inline `<script>` at the
bottom of `index.html`. On load, the script **overwrites** the text of every element
marked `data-i18n`. So to change a follower count, subtitle, bio, or the SALE badge,
edit the value in **both** the `en` and `th` blocks of that `I18N` object — editing
the HTML text alone has no effect (it gets replaced on load).

Counts are hardcoded numbers (e.g. `"1.2M subscribers"` / `"ผู้ติดตาม 1.2M"`); update
them by hand when they change.

## Brand icons

Platform logos live as individual SVG files in `assets/svg/` (official
[Simple Icons](https://simpleicons.org) marks). They are applied via CSS
`mask-image` in `style.css` (the `.brand--*` rules), so the SVG files stay as
pure shapes and their color is set in CSS via the card palette. To swap an icon,
replace the file in `assets/svg/`; to recolor one, edit the `color` of its
`.brand--*` rule. The avatar paw and verified check remain inline in `index.html`
(custom marks, not brand assets).

## Language toggle

Top-right button switches TH ↔ EN. Default language auto-detects from the browser
(`navigator.language`): Thai browsers open in Thai, everyone else in English. The
choice is not persisted — each visit starts from the detected default.

## Deploy

### GitHub Pages
1. Push this repo to GitHub.
2. Settings → Pages → Source: deploy from branch, branch `main`, folder `/ (root)`.
3. `.nojekyll` is included so GitHub serves files as-is.

### Netlify
- Drag-and-drop the project folder at app.netlify.com, **or** connect the repo with:
  - Build command: *(none)*
  - Publish directory: `.` (repo root)

### Vercel
- Import the repo at vercel.com. Vercel auto-detects a static site.
  - Framework preset: **Other**
  - Build command: *(none)*
  - Output directory: `.` (repo root)

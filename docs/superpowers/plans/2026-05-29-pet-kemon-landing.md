# pet-kemon Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a single-page, linktree-style static landing page for "pet-kemon", deployable to GitHub Pages, Netlify, and Vercel with zero build step.

**Architecture:** Plain HTML + CSS, no JavaScript framework, no build tooling, no dependencies. One `index.html` for markup, one `style.css` for styling, inline SVG for all icons. Background and theme are pure CSS. Content (counts, labels, links) edited inline in HTML.

**Tech Stack:** HTML5, CSS3 (flexbox + grid + custom properties), inline SVG. No node, no npm.

**Verification approach:** This stack has zero deps and zero build by design (per spec), so there is no JS test runner. Each task is verified by opening `index.html` in a browser and confirming the described elements render correctly. This honors the spec's zero-dependency choice instead of adding a test framework that would violate it.

---

## File Structure

```
index.html      Full page markup (semantic sections + inline SVG icons)
style.css       All styling (layout, cards, theme, responsive)
.nojekyll       Empty file; tells GitHub Pages to skip Jekyll
README.md       Deploy instructions for GH Pages / Netlify / Vercel
```

- `index.html` — single responsibility: page content and structure. Links use `href="#"` placeholders + `data-link` attributes.
- `style.css` — single responsibility: all visual styling. Uses CSS custom properties at `:root` for the color palette so card colors are editable in one place.
- `.nojekyll` — GitHub Pages directive only.
- `README.md` — human deploy notes.

---

## Task 1: Scaffold static files and base HTML skeleton

**Files:**
- Create: `index.html`
- Create: `.nojekyll`

- [ ] **Step 1: Create `.nojekyll`** (empty file)

```
```

(File is intentionally empty — its presence is the signal.)

- [ ] **Step 2: Create `index.html` skeleton**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>pet-kemon · catch 'em all</title>
  <meta name="description" content="pet-kemon — news, memes & fluff. Catch 'em all." />
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <main class="card-stack">
    <!-- avatar, title, bio, cards, footer added in later tasks -->
  </main>
</body>
</html>
```

- [ ] **Step 3: Verify it opens**

Open `index.html` in a browser.
Expected: blank page, title tab reads "pet-kemon · catch 'em all", no console errors.

- [ ] **Step 4: Commit**

```bash
git add index.html .nojekyll
git commit -m "feat: scaffold static HTML skeleton and .nojekyll"
```

---

## Task 2: Base styles and paw-print background

**Files:**
- Create: `style.css`

- [ ] **Step 1: Create `style.css` with reset, palette, and background**

```css
:root {
  /* surface */
  --bg: #f3efe7;
  --paw: rgba(120, 110, 95, 0.06);
  --text: #1a1a1a;
  --muted: #6b6b6b;
  --card-dark: #1c1c1e;
  --card-text-on-color: #ffffff;

  /* brand-ish card colors */
  --shopee-a: #ff5722;
  --shopee-b: #f4511e;
  --youtube: #ff0000;
  --instagram-a: #c026a8;
  --instagram-b: #d6249f;
  --facebook: #1877f2;

  --radius: 22px;
  --gap: 14px;
  --maxw: 420px;
}

* { box-sizing: border-box; margin: 0; padding: 0; }

html, body { height: 100%; }

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  color: var(--text);
  background-color: var(--bg);
  /* subtle repeating paw print via inline SVG data URI */
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%23786e5f' fill-opacity='0.06'%3E%3Cellipse cx='40' cy='46' rx='9' ry='7'/%3E%3Ccircle cx='28' cy='34' r='3.5'/%3E%3Ccircle cx='40' cy='30' r='3.5'/%3E%3Ccircle cx='52' cy='34' r='3.5'/%3E%3Ccircle cx='58' cy='44' r='3'/%3E%3C/g%3E%3C/svg%3E");
  display: flex;
  justify-content: center;
  padding: 28px 18px 40px;
}

.card-stack {
  width: 100%;
  max-width: var(--maxw);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--gap);
}
```

- [ ] **Step 2: Verify background renders**

Open `index.html`.
Expected: cream background with faint repeating paw-print texture; empty centered column.

- [ ] **Step 3: Commit**

```bash
git add style.css
git commit -m "feat: base styles, palette, paw-print background"
```

---

## Task 3: Avatar, title, and bio pill

**Files:**
- Modify: `index.html` (inside `<main class="card-stack">`)
- Modify: `style.css`

- [ ] **Step 1: Add avatar, title, bio markup** inside `<main class="card-stack">`

```html
    <div class="avatar" aria-hidden="true">
      <svg viewBox="0 0 48 48" width="40" height="40" fill="#1a1a1a">
        <ellipse cx="24" cy="30" rx="11" ry="8.5"/>
        <circle cx="13" cy="20" r="4.2"/>
        <circle cx="22" cy="15" r="4.2"/>
        <circle cx="32" cy="16" r="4.2"/>
        <circle cx="39" cy="23" r="3.6"/>
      </svg>
    </div>

    <h1 class="handle">
      pet-kemon
      <svg class="verified" viewBox="0 0 24 24" width="22" height="22" aria-label="Verified">
        <path fill="#1d9bf0" d="M12 1l2.6 2.1 3.3-.4 1.2 3.1 3 1.5-1 3.2 1 3.2-3 1.5-1.2 3.1-3.3-.4L12 23l-2.6-2.1-3.3.4-1.2-3.1-3-1.5 1-3.2-1-3.2 3-1.5L6.1 2.7l3.3.4z"/>
        <path fill="#fff" d="M10.6 15.3l-2.9-2.9 1.3-1.3 1.6 1.6 4-4 1.3 1.3z"/>
      </svg>
    </h1>

    <p class="bio">🐾 catch 'em all — news, memes &amp; fluff</p>
```

- [ ] **Step 2: Add styles** to `style.css`

```css
.avatar {
  width: 84px;
  height: 84px;
  border-radius: 24px;
  background: #ffcf3f;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 16px rgba(0,0,0,0.12);
  margin-bottom: 4px;
}

.handle {
  font-size: 26px;
  font-weight: 800;
  display: flex;
  align-items: center;
  gap: 7px;
  letter-spacing: -0.5px;
}

.verified { flex: none; }

.bio {
  background: #fff;
  border: 1px solid rgba(0,0,0,0.08);
  border-radius: 999px;
  padding: 10px 18px;
  font-size: 14px;
  font-weight: 600;
  color: #333;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  margin-bottom: 6px;
}
```

- [ ] **Step 3: Verify**

Open `index.html`.
Expected: yellow rounded-square avatar with dark paw, "pet-kemon" bold + blue check, white rounded bio pill below. All centered.

- [ ] **Step 4: Commit**

```bash
git add index.html style.css
git commit -m "feat: avatar, verified title, and bio pill"
```

---

## Task 4: Shared card styles + Shopee card (full width)

**Files:**
- Modify: `index.html`
- Modify: `style.css`

- [ ] **Step 1: Add Shopee card markup** after the bio pill

```html
    <a href="#" data-link="shopee" class="card card--full card--shopee">
      <span class="card__icon">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="#ff5722">
          <path d="M6 7V6a4 4 0 1 1 8 0v1h3l1 13H2L3 7h3zm2 0h4V6a2 2 0 1 0-4 0v1z"/>
        </svg>
      </span>
      <span class="card__body">
        <span class="card__title">Shop my Shopee</span>
        <span class="card__sub">my fave pet gear &amp; treats →</span>
      </span>
      <span class="card__badge">SALE</span>
    </a>
```

- [ ] **Step 2: Add shared card styles + Shopee theme**

```css
.card {
  position: relative;
  display: flex;
  align-items: center;
  gap: 14px;
  width: 100%;
  border-radius: var(--radius);
  padding: 18px;
  text-decoration: none;
  color: var(--card-text-on-color);
  box-shadow: 0 4px 14px rgba(0,0,0,0.12);
  transition: transform 0.12s ease, box-shadow 0.12s ease;
}
.card:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(0,0,0,0.18); }
.card:active { transform: translateY(0); }

.card--full { min-height: 76px; }

.card__icon {
  flex: none;
  width: 44px;
  height: 44px;
  border-radius: 14px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card__body { display: flex; flex-direction: column; gap: 2px; flex: 1; }
.card__title { font-size: 18px; font-weight: 800; }
.card__sub { font-size: 13px; font-weight: 500; opacity: 0.9; }

.card__badge {
  flex: none;
  background: #ffd84d;
  color: #1a1a1a;
  font-size: 11px;
  font-weight: 800;
  padding: 5px 12px;
  border-radius: 999px;
}

.card--shopee {
  background: linear-gradient(135deg, var(--shopee-a), var(--shopee-b));
  border: 2px solid #1a1a1a;
}
```

- [ ] **Step 3: Verify**

Open `index.html`.
Expected: full-width orange gradient card, dark border, white bag icon tile, "Shop my Shopee" + subtitle, yellow SALE pill on the right. Hover lifts the card.

- [ ] **Step 4: Commit**

```bash
git add index.html style.css
git commit -m "feat: shared card styles and Shopee card"
```

---

## Task 5: YouTube card (full width)

**Files:**
- Modify: `index.html`
- Modify: `style.css`

- [ ] **Step 1: Add YouTube card markup** after the Shopee card

```html
    <a href="#" data-link="youtube" class="card card--full card--youtube">
      <span class="card__icon">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="#ff0000">
          <path d="M5 7h14a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2zm5 2.5v5l4.5-2.5z"/>
        </svg>
      </span>
      <span class="card__body">
        <span class="card__title">YouTube</span>
        <span class="card__sub">1.2M subscribers</span>
      </span>
      <span class="card__arrow" aria-hidden="true">↗</span>
    </a>
```

- [ ] **Step 2: Add YouTube theme + arrow style**

```css
.card--youtube { background: var(--youtube); }

.card__arrow {
  flex: none;
  font-size: 20px;
  font-weight: 700;
  opacity: 0.95;
  padding-right: 4px;
}
```

- [ ] **Step 3: Verify**

Open `index.html`.
Expected: full-width red card below Shopee, white play-icon tile, "YouTube" + "1.2M subscribers", ↗ glyph on the right.

- [ ] **Step 4: Commit**

```bash
git add index.html style.css
git commit -m "feat: YouTube card"
```

---

## Task 6: Half-width grid — TikTok, Instagram, Facebook, X

**Files:**
- Modify: `index.html`
- Modify: `style.css`

- [ ] **Step 1: Add two half-width rows** after the YouTube card

```html
    <div class="grid2">
      <a href="#" data-link="tiktok" class="card card--half card--dark">
        <span class="card__icon card__icon--ghost">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="#fff">
            <path d="M14 3c.3 2.2 1.7 3.9 3.9 4.2v2.4c-1.4 0-2.7-.4-3.9-1.1v5.9a5.2 5.2 0 1 1-5.2-5.2c.3 0 .6 0 .9.1v2.5a2.7 2.7 0 1 0 1.9 2.6V3z"/>
          </svg>
        </span>
        <span class="card__title card__title--sm">TikTok</span>
        <span class="card__sub">3.4M followers</span>
      </a>

      <a href="#" data-link="instagram" class="card card--half card--instagram">
        <span class="card__icon card__icon--ghost">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#fff" stroke-width="2">
            <rect x="3" y="3" width="18" height="18" rx="5"/>
            <circle cx="12" cy="12" r="4"/>
            <circle cx="17.5" cy="6.5" r="1.2" fill="#fff" stroke="none"/>
          </svg>
        </span>
        <span class="card__title card__title--sm">Instagram</span>
        <span class="card__sub">870K followers</span>
      </a>
    </div>

    <div class="grid2">
      <a href="#" data-link="facebook" class="card card--half card--facebook">
        <span class="card__icon card__icon--ghost">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="#fff">
            <path d="M13 22v-8h2.7l.4-3H13V9.1c0-.9.3-1.5 1.6-1.5H16V5c-.3 0-1.2-.1-2.3-.1-2.3 0-3.7 1.4-3.7 3.9V11H7.5v3H10v8z"/>
          </svg>
        </span>
        <span class="card__title card__title--sm">Facebook</span>
        <span class="card__sub">248K likes</span>
      </a>

      <a href="#" data-link="x" class="card card--half card--dark">
        <span class="card__icon card__icon--ghost">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="#fff">
            <path d="M17.5 3h3l-6.6 7.5L21.5 21h-5.9l-4.2-5.5L6.5 21H3.4l7-8L2.5 3h6l3.8 5z"/>
          </svg>
        </span>
        <span class="card__title card__title--sm">X</span>
        <span class="card__sub">96K followers</span>
      </a>
    </div>
```

- [ ] **Step 2: Add grid + half-card + dark/instagram/facebook themes**

```css
.grid2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--gap);
  width: 100%;
}

.card--half {
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  min-height: 132px;
  padding: 16px;
}

.card__icon--ghost {
  background: rgba(255,255,255,0.16);
  width: 40px;
  height: 40px;
  border-radius: 12px;
  margin-bottom: 8px;
}

.card__title--sm { font-size: 16px; }

.card--dark { background: var(--card-dark); }
.card--instagram { background: linear-gradient(135deg, var(--instagram-a), var(--instagram-b)); }
.card--facebook { background: var(--facebook); }

/* stack to one column on very narrow screens */
@media (max-width: 360px) {
  .grid2 { grid-template-columns: 1fr; }
}
```

- [ ] **Step 3: Verify**

Open `index.html`.
Expected: two rows of two cards each — TikTok (dark) | Instagram (magenta gradient), then Facebook (blue) | X (dark). Each has a translucent icon tile, name, and follower count. Resize below 360px wide: cards stack to one column.

- [ ] **Step 4: Commit**

```bash
git add index.html style.css
git commit -m "feat: half-width grid cards (TikTok, Instagram, Facebook, X)"
```

---

## Task 7: Footer

**Files:**
- Modify: `index.html`
- Modify: `style.css`

- [ ] **Step 1: Add footer markup** after the last `.grid2`

```html
    <footer class="foot">🐾 made with treats · pet-kemon 2026</footer>
```

- [ ] **Step 2: Add footer style**

```css
.foot {
  margin-top: 18px;
  font-size: 13px;
  color: var(--muted);
  text-align: center;
}
```

- [ ] **Step 3: Verify**

Open `index.html`.
Expected: muted footer text centered below the cards.

- [ ] **Step 4: Commit**

```bash
git add index.html style.css
git commit -m "feat: footer"
```

---

## Task 8: README with deploy instructions

**Files:**
- Create: `README.md`

- [ ] **Step 1: Create `README.md`**

```markdown
# pet-kemon

A single-page, linktree-style landing page. Plain HTML + CSS, no build step.

## Local preview

Open `index.html` in any browser. That's it.

## Edit links

Each card is an `<a href="#" data-link="...">` in `index.html`. Replace each `#`
with the real URL. Counts and labels are inline text in the same file. Card colors
are CSS custom properties at the top of `style.css` (`:root`).

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
```

- [ ] **Step 2: Verify**

Read `README.md`. Confirm all three deploy paths are present and accurate.

- [ ] **Step 3: Commit**

```bash
git add README.md
git commit -m "docs: add README with deploy instructions"
```

---

## Final verification

- [ ] Open `index.html` in a browser. Confirm full page matches the design:
  avatar → title+check → bio pill → Shopee → YouTube → TikTok|Instagram →
  Facebook|X → footer, on the cream paw-print background.
- [ ] Resize the window narrow (< 360px). Confirm half cards stack to one column.
- [ ] Confirm no console errors and every card is a clickable link.
```

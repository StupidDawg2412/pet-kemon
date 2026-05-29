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

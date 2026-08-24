# Bavi's Cyberspace — Portfolio

Personal portfolio for **Bavithran Alagan** ([@Bavi2005](https://github.com/Bavi2005)) — Developer // Cybersecurity Enthusiast // Tech Explorer.

Pure HTML + CSS + vanilla JS. No build step. Ready for GitHub Pages.

## Features

- Matrix rain background (canvas, respects `prefers-reduced-motion`)
- Typing animation in the hero
- Live GitHub stats (repos & followers) fetched from the public GitHub API
- Featured projects + full repo archive
- Journey timeline, skills, contact links
- Fully responsive with mobile nav

## Deploy to GitHub Pages

### Option A — user site (recommended: live at `https://bavi2005.github.io`)

1. Create a new repository named exactly `Bavi2005.github.io`
2. Push these files to its `main` branch:

```bash
git init
git add .
git commit -m "portfolio: initial release"
git branch -M main
git remote add origin https://github.com/Bavi2005/Bavi2005.github.io.git
git push -u origin main
```

3. Go to the repo → **Settings → Pages** → Source: *Deploy from a branch* → Branch: `main`, folder `/ (root)` → Save

Your site will be live in 1–2 minutes at `https://bavi2005.github.io`

### Option B — project site (live at `https://bavi2005.github.io/<repo-name>`)

1. Create any repository (e.g. `portfolio`) and push the files
2. Repo → **Settings → Pages** → Source: *Deploy from a branch* → Branch: `main`, `/ (root)` → Save

## Customizing

- **Projects**: edit the cards in `index.html` (`#projects` section)
- **Colors**: tweak CSS variables at the top of `css/style.css`
- **Typing phrases**: edit the `phrases` array in `js/main.js`

## Local preview

Just open `index.html` in a browser, or run:

```bash
python3 -m http.server 8000
```

then visit http://localhost:8000

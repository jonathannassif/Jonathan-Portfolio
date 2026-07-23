# Jona Portfolio — React + Vite + Tailwind

Your portfolio site, rebuilt as a proper React project: a 3D exploded-layer
hero (Three.js), a "sheet index" navigation instead of a normal navbar, and
sections for your story, work, reading list, services, life, and contact.

## 1. Open in VS Code

Unzip this folder, then in VS Code: **File → Open Folder** and select it.

## 2. Install dependencies

Open a terminal in the project folder (VS Code: `` Ctrl/Cmd + ` ``) and run:

```bash
npm install
```

## 3. Run it locally (live preview while you edit)

```bash
npm run dev
```

This starts a dev server (usually `http://localhost:5173`). Keep it running —
any file you save updates the browser instantly.

## 4. Where to edit things

- **`src/data/content.js`** — almost everything you'll want to change lives
  here: your story text, timeline, projects, reading list, free/paid help
  lists, languages, and contact links (add your real GitHub, LinkedIn, X,
  Medium, and email here).
- **Photos** — find the `<Placeholder ... />` components in `src/components/`
  (`Story.jsx`, `WorkCard.jsx`, `Life.jsx`) and swap them for a real image,
  e.g. `<img src="/portrait.jpg" alt="Jonathan Joseph" />`. Put image files in
  a `public/` folder at the project root — Vite serves that folder as-is.
- **Colors / fonts** — edit `tailwind.config.js` (the `ink`, `panel`, `copper`,
  `cyan` etc. tokens) and the top of `src/index.css`.
- **Sections/nav labels** — the `sections` array at the top of
  `src/data/content.js` controls both the sheet-index nav and which section
  IDs exist.

## 5. Build for production

```bash
npm run build
npm run preview   # sanity-check the production build locally
```

## 6. Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
```

Create a new repository on GitHub (no README/gitignore, since you already
have them), then:

```bash
git remote add origin https://github.com/yourhandle/your-repo-name.git
git branch -M main
git push -u origin main
```

## 7. Deploy on Vercel

Easiest path:

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. Click **Add New → Project**, select your repo.
3. Vercel auto-detects Vite — leave the defaults (Build Command:
   `npm run build`, Output Directory: `dist`).
4. Click **Deploy**.

Every future `git push` to `main` will auto-redeploy. You can also add a
custom domain later from the Vercel project settings.

---

Built around one idea: understand a thing layer by layer before you ship it.

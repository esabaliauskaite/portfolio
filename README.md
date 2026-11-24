# Eglė Sabaliauskaitė — Portfolio

Personal portfolio built with React, TypeScript, Vite and Tailwind CSS.

## Run locally

Use Node.js 22.12 or newer (Node.js 24 recommended).

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite. The default base path is `/portfolio/`, matching the existing GitHub Pages setup.

## Build and preview

```sh
npm run build
npm run preview
```

The build includes TypeScript checking. The production files are generated in `dist/`.

## Update content

- `src/data/profile.ts`: profile, contact links, experience, skills, education and languages.
- `src/data/projects/*.json`: one file per project. `order` controls display order; the first project has a wider layout.
- `public/projects/`: project screenshots, referenced in the project JSON files.
- `public/CV_Egle_Sabaliauskaite.pdf`: downloadable public CV.
- `src/index.css`: layout, typography, colours and responsive styles.
- `index.html`: page title and social/search descriptions.

The public CV follows the November 2026 AI Engineer CV, with the latest skills and codebase wording. The phone number and UK-specific relocation and sponsorship line are omitted for a general audience.

Contact uses a direct email link and social links. No form submissions are collected.

## Existing GitHub Pages deployment

The existing deployment command is retained:

```sh
npm run deploy
```

Run it only from your own Git checkout with the correct repository remote configured. To host at another path, adjust `base` in `vite.config.ts`; public asset links use Vite’s base automatically.

The supplied archive includes source and a fresh `dist/` build. Install dependencies with `npm ci`; `node_modules`, Git history and macOS metadata are excluded.

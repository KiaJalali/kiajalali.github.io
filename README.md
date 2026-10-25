# kiajalali.com

A compact, text-first personal site built with Astro. It defaults to dark mode, remembers manual theme choices, and uses native disclosures for work details. Core content and disclosures work without JavaScript. The site ships no client-side framework, analytics, or remote fonts.

## Development

Use Node 22.12+ (Node 24 recommended).

```sh
npm ci
npm run dev
```

## Build and deploy

```sh
npm run build
npm run preview
npm run deploy
```

`npm run deploy` builds and publishes `dist/` to the `gh-pages` branch. GitHub Pages serves that branch. `public/CNAME` preserves the custom domain, `kiajalali.com`, on every build. Leave the existing DNS and Pages domain settings in place.

## Editing

- `src/pages/index.astro`: introduction, work details, and email contact.
- `src/pages/contact.astro`: resume request page at the existing `/contact/` URL.
- `src/layouts/Layout.astro`: navigation, metadata, clipboard interaction, and footer.
- `src/styles/global.css`: responsive layout and themes.
- `src/scripts/theme.js`: theme selection before first paint and persistence.
- `public/`: domain configuration, sitemap, robots, and favicon.

The resume link opens the email request page; there is no public resume PDF in this repository.

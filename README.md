# kiajalali.com

A small static personal site with a compact, text-first personal homepage, built with Astro. No client-side framework or JavaScript is shipped.

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

- `src/pages/index.astro`: homepage
- `src/pages/contact.astro`: resume request page (existing `/contact/` URL)
- `src/layouts/Layout.astro`: shared navigation, footer, SEO
- `src/styles/global.css`: responsive styles
- `public/`: domain config, sitemap, robots and favicon

The resume link intentionally opens the email request page; there is no public resume PDF in this repository.

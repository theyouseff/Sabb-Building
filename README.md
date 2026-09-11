# SABB BUILDING — landing page

Premium single-page site for SABB BUILDING (turnkey home renovation, Tashkent).
Static HTML + Tailwind CSS + vanilla JS — no framework, no bundler beyond the
Tailwind CLI.

## Development

```bash
npm install
npm run dev     # watches src/input.css -> dist/output.css
npm run serve   # serves the site at http://localhost:3000
```

Open the site over `http://localhost:3000`, not by double-clicking `index.html`
— the lead form's `fetch()` calls need a real origin to behave like production.

## Build for deployment

```bash
npm run build   # minified dist/output.css
```

Then deploy the whole folder (`index.html`, `dist/`, `js/`, `assets/`) to any
static host (Vercel, Netlify, Cloudflare Pages, plain hosting).

## Structure

- `index.html` — the entire page, all 10 sections, bilingual (UZ/RU) via
  `data-i18n` attributes.
- `js/i18n.js` — UZ/RU text dictionaries and the language switcher.
- `js/config.js` — the one file to edit after deploying the backend (see below).
- `js/form.js` — lead form validation + submission.
- `js/nav.js`, `accordion.js`, `gallery.js`, `carousels.js`, `animations.js` —
  interaction behavior (sticky nav, FAQ accordion, project filter, Swiper
  carousels, GSAP scroll animations).
- `server/apps-script/` — the lead-capture backend (Google Sheets + Telegram).
  **Setup required before the form works** — see
  [`server/apps-script/README.md`](server/apps-script/README.md).

## Content still to swap in

Everything currently uses placeholder Unsplash photography and sample project
names/testimonials. Before launch, replace:

- Hero, gallery, video-strip, and CTA background images (`index.html`, `<img>`
  `src` attributes) with real project photography.
- Project names, testimonial quotes/names, and stats in `js/i18n.js` (both
  `uz` and `ru` sections) with real numbers and client-approved quotes.
- Phone number, Telegram, and Instagram handles in `js/config.js`.
- The Apps Script deployment URL in `js/config.js` (`APPS_SCRIPT_URL`).

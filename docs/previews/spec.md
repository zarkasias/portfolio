# Preview page spec (v1)

One page template, built with Next.js (App Router), React and Tailwind. Keep it simple: static data, no database, no client-side state beyond the slider.

## Route and data
- Route: `/preview/[token]`. Look up the preview whose `token` matches; 404 otherwise.
- Data: one JSON file per prospect in `content/previews/<slug>.json`, loaded at build time.
- Images: `public/previews/<slug>/before-desktop.png`, `before-phone.png`, `after-desktop.png`, `after-phone.png`.

```json
{
  "slug": "jolly-plumbing",
  "token": "k7f3x9q2mz",
  "businessName": "Jolly Plumbing & Heating",
  "siteUrl": "https://jollyplumbing.net/",
  "preparedOn": "2026-11-12",
  "mockupUrl": "https://<client-mockups deploy>/jolly-plumbing",
  "findings": [
    { "title": "Emergency button may not dial", "detail": "One plain-English sentence on what's wrong and why it costs calls." }
  ],
  "fixes": ["Every phone number tappable", "Clear emergency call button", "Faster on phones"],
  "images": { "beforeDesktop": "...", "beforePhone": "...", "afterDesktop": "...", "afterPhone": "..." },
  "imageAlt": { "before": "Current homepage of ...", "after": "Redesigned homepage of ..." }
}
```
Validate the file with a small Zod schema; fail the build on a bad file.

## Page sections, top to bottom
1. Site header (existing component).
2. "Prepared for {businessName}" with `preparedOn` and a one-line intro.
3. Before/after slider: draggable divider, keyboard-operable (arrow keys), labels "Today" and "Refreshed". Toggle: Desktop / Phone.
4. "What we found": `findings` as a short list (3–5).
5. "What a refresh fixes": `fixes` as a checklist.
6. Call to action: "Let's talk" → `mailto:david@chambers-consulting.dev?subject=Website refresh for {businessName}` and a link to the contact section.
7. Site footer (existing component).
8. A link "Open the full redesign" to the live mockup (`mockupUrl` in the data file), when there is one.

## Privacy
- `robots: { index: false, follow: false }` in the page metadata.
- Exclude `/preview/` from the sitemap; add `Disallow: /preview/` to robots.txt.
- Tokens: 10+ random characters. Never use the slug in the URL.

## Accessibility
- Slider has visible focus, an accessible name, and works without a mouse.
- Images have the alt text from `imageAlt`.
- Passes the site's existing a11y checks at 390px and 1440px.

## Done when
`content/previews/example.json` renders correctly, typecheck/lint/tests pass, and the page is not indexable.

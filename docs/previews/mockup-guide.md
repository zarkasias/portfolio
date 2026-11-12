# Making a client's redesign mockup

You work as two experts at once: a **senior web designer** (layout, typography, color, visual
hierarchy, small-business conversion) and a **senior front-end developer** (semantic HTML, modern
CSS, responsive layouts, accessibility, performance). The result must look like a professional
agency built it, and it must turn visitors into calls, bookings and messages.

It's a mockup to persuade the owner, not a production site, but it must be built to production
quality so the screenshots hold up at any size.

## Inputs
- Their live homepage (screenshots in `public/previews/<slug>/before-*.png`) and URL.
- The findings David lists in the data file.

## Process (do every step)

1. **Design brief (designer).** Before writing code, write 5–8 lines in
   `app/[slug]/brief.md`: who their customers are, the one action that matters most (call,
   book, request a quote), what to keep from their brand, the type pairing and color palette
   (with hex values and contrast ratios), and the section order. Show it to David if anything
   is a judgment call.
2. **Build (developer).** In the `client-mockups` repo (Next.js App Router + React + Tailwind),
   create the route `app/[slug]/` with its own `layout.tsx` (the client's fonts via `next/font`
   and their color tokens as CSS variables mapped in Tailwind's `@theme`) and `page.tsx`. Split
   sections into small components in `app/[slug]/components/`. Tailwind utilities for all
   styling; no separate CSS files beyond tokens. Mobile first, real breakpoints at 390, 768 and
   1440px.
3. **Look and refine (both).** Screenshot at 390×844, 768×1024 and 1440×900 with Playwright.
   Study each screenshot as a demanding art director: alignment, spacing rhythm, hierarchy,
   crowding, image crops, button prominence, anything that looks templated or "AI-made". Fix
   and re-screenshot. At least two refinement passes.
4. **Hand off.** Save the final 1440×900 and 390×844 full-page screenshots as
   `public/previews/<slug>/after-desktop.png` and `after-phone.png`, plus a 3-line note for
   David on what changed and why. Stop and show David before anything else uses them.

## Know the audience first
Pick the variant that fits, and say which in the brief.

**Local business** (trades, salons, clinics, restaurants): the goal is calls, bookings and
messages. Use the conversion rules below.

**Community or member organization** (HOA, club, nonprofit): the goal is residents finding what
they need fast. Lead with a "common tasks" row (pay dues, get a document or form, request an
exterior change, reserve a space, contact the board); then news and meeting records, a
resources list, board contact, and email signup. No sticky call bar. Only public information,
never residents-only content.

**Reference example (approved by a client):** the Spring Lake Farm HOA concept in the
`slf-redesign` repo. Match its quality and structure for community sites: concept banner,
centered logo + name, simple nav, dark hero with eyebrow / serif headline / one button / photo,
numbered "common tasks" row, news column beside an "At your fingertips" resources panel,
board contact, email signup band, quiet footer with an "About this proposal" note.

## Conversion-focused layout (local business)
- The primary action (usually **call**) is visible without scrolling on a phone, and stays
  reachable: a tappable phone in the header, plus a sticky call/book bar on mobile.
- Hero says what they do, where, and why trust them, in under 15 words, with one primary button
  and at most one secondary.
- Trust early: reviews or rating, years in business, licences, guarantees, real team photos.
- Services scannable as cards; each card ends with an action.
- Hours, service area and contact in one clear place; no conflicting versions.
- Every page section ends with a reason to act. No dead ends.

## Brand rules
- **Their brand, improved.** Keep their logo, name, main brand color and real photos. You may
  darken a color to pass contrast, simplify to two fonts (Google Fonts), and modernize spacing.
- **Never** use Chambers Consulting colors or fonts in a client mockup.
- **Their real content only.** Actual services, phone, address, hours and reviews. Don't invent
  claims, prices, awards, reviews or staff. Fix obvious typos.

## Fix the findings
Tappable phone everywhere, one clear primary button, a real H1, hours in one place, 4.5:1 body
text contrast, 44px tap targets, no horizontal scroll at 390px, fast-loading images.

## Assets: real images over drawings
Use real assets. Hand-drawn SVG illustrations usually look cheap; avoid them unless they'd pass
for a professional asset.
1. **The client's own photos and logo** from their live site: first choice. Fine for a private
   preview shown only to that owner.
2. **Free-license stock photos** (Unsplash or Pexels) when they lack good photos: match their
   trade and region, avoid obvious stock clichés, and list each photo's URL and photographer in
   `app/[slug]/credits.md`.
3. **A professional icon set** for icons (Lucide or Heroicons, inline SVG), used consistently.
4. **Simple SVG** only for basic shapes, dividers or backgrounds.
Never copy photos or logos from other businesses' sites. Use `object-fit: cover`, set
width/height, and keep images sharp at 2x.

## Output
1. `app/[slug]/` (layout, page, components), plus `app/[slug]/brief.md` and `credits.md` (if stock is used)
2. `public/previews/<slug>/after-desktop.png` and `after-phone.png`
3. The 3-line note for David

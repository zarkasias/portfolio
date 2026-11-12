## Refresh Previews

Private pages at `/preview/[token]` that show one prospect their current homepage beside a
redesign. Data: `content/previews/<slug>.json`. Images: `public/previews/<slug>/`.

Read only the doc your task needs:
- Building or changing the preview page → `docs/previews/spec.md` and `docs/previews/brand.md`
- Making a redesign for a prospect → `docs/previews/mockup-guide.md`
- Reviewing a preview before it's sent → `docs/previews/checklist.md`
- Do **not** read `docs/previews/later.md` unless asked to plan a new feature.

Rules: all code is React / Next.js (App Router) with Tailwind as the primary styling; preview pages are never indexed or listed; the page uses Chambers branding, the
redesign uses the client's brand; no new dependencies or services without asking.

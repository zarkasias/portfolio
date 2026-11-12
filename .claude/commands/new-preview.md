---
description: Create a Refresh Preview for one prospect
argument-hint: <slug> <url>
---

Create a Refresh Preview for $ARGUMENTS (first word = slug, second = URL).

1. Ask me for the 3–5 findings (I'll paste them) and confirm I've checked them in a browser.
2. Screenshot the live homepage at 1440×900 and 390×844 (full page) with Playwright into
   `public/previews/<slug>/before-desktop.png` and `before-phone.png`.
3. Create `content/previews/<slug>.json` with a new random token (10+ characters), today's date,
   the findings, and image paths.
4. Use the **mockup-designer** subagent to build the redesign in the `client-mockups` repo
   (route `/<slug>`) and its screenshots. If the redesign already exists elsewhere (e.g. its own
   repo), skip this and screenshot that instead. Stop and show
   me. Iterate until I approve.
5. Use the **reviewer** subagent. Show me the verdict.
6. If it says send, commit on a branch named `preview/<slug>` and tell me the preview URL
   (`/preview/<token>`). Don't push or deploy until I say so.

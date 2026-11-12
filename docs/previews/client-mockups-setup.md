# client-mockups repo (one-time setup)

One Next.js + React + Tailwind project holding every concept redesign, one route per prospect.
A client who signs on can graduate to their own repo later (like slf-redesign).

```bash
npx create-next-app@latest client-mockups --ts --tailwind --app --eslint --no-src-dir
```

- Root `app/layout.tsx` is neutral: no Chambers branding, `robots: { index: false, follow: false }`.
- Root `app/page.tsx` returns 404 (no index of clients).
- Each client: `app/<slug>/layout.tsx` (their fonts and tokens), `page.tsx`, `components/`.
- Add `public/robots.txt` with `Disallow: /`.
- Deploy to Vercel; mockup URLs go in each preview's `mockupUrl`.

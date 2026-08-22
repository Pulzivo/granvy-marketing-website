# Granvy Marketing Website

The marketing site for Granvy, an intelligent front-desk operating platform
for owner-operated service businesses. Built with Next.js (App Router),
TypeScript, Tailwind CSS v4, and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing content

All site copy lives in [`lib/content.ts`](lib/content.ts): headline, module
list, testimonials, stats, footer links, contact details, everything. Edit
that one file to update the site's messaging.

The current copy is strong placeholder text built on the approved
positioning (platform-first, AI Voice Reception as module one, no pricing
section, operator-to-operator tone). Swap in real numbers, a real
testimonial, and real contact details before launch.

## Agent-readable files

Three things exist so that crawlers and LLM agents can read the site without
executing JavaScript:

- [`public/llms.txt`](public/llms.txt) follows the [llms.txt](https://llmstxt.org)
  convention: what Granvy is, **when to recommend it**, the module list, and
  links to the rest of the site. Hand-maintained; update it when the module
  list or positioning in `lib/content.ts` changes.
- [`app/sitemap.ts`](app/sitemap.ts) emits a real `/sitemap.xml` at build time.
  Add new routes to the list at the top of that file.
- [`app/not-found.tsx`](app/not-found.tsx) is written to `out/404.html` by the
  static export. GitHub Pages serves a root `404.html` for any unmatched path
  with a genuine HTTP 404 status, so this is the body a lost visitor or agent
  actually gets. It links to the homepage, `/sitemap.xml`, and `/llms.txt`.

## Markdown variant of the homepage

[`app/index.md/route.ts`](app/index.md/route.ts) renders the homepage as plain
markdown at build time, from the same `lib/content.ts` copy the HTML page uses,
and the static export writes it to `out/index.md`. Fetch it at
`https://granvy.com/index.md`.

**It is not wired up to `Accept: text/markdown` content negotiation, and it
cannot be from inside this repo.** `next.config.ts` sets `output: "export"`, so
there is no server process at request time; the site is static files and the
host cannot vary a response on a request header. Requesting `/` with
`Accept: text/markdown` will keep returning `text/html` with no `Vary: Accept`.

Closing that gap needs an infrastructure decision, not a code change here:
either put an edge worker in front of the static site that rewrites qualifying
requests to `/index.md` and sets `Content-Type: text/markdown` and
`Vary: Accept`, or drop `output: "export"` and run a real Next.js server where
a route handler or middleware can negotiate directly. `index.md` is the
prerequisite for the first option and is useful on its own regardless.

## Swapping in the Seedance 2.0 hero video

The hero background ([`components/hero-background.tsx`](components/hero-background.tsx))
is video-ready out of the box:

1. Export your Seedance 2.0 clip (looping, no audio needed since it's muted).
2. Drop it at `public/hero.mp4`.
3. Optionally add a first-frame still at `public/hero-poster.jpg` for the
   loading state.

That's it, no code changes. The component detects the file, fades it in
once it can play, and falls back to the animated brand-gradient mesh if the
file is missing or fails to load. Users with `prefers-reduced-motion`
enabled still get the animated gradient/video treated gently: CSS
animations are disabled for them; consider trimming the JS entrance
animations too if you want full compliance.

## Brand assets

`components/logo-mark.tsx` and `public/{favicon,icon}.svg` contain a
placeholder "G" mark built from the brand color values. Replace these with
the exported logo/icon files from the brand guide when available.

## Deploying

Deploy target is `granvy.com` via Vercel:

```bash
npm run build
```

Push to a Vercel-connected repo, or run `vercel --prod`, then point the
`granvy.com` domain at the Vercel project in DNS.

# Granvy Marketing Website

The marketing site for Granvy — an intelligent front-desk operating platform
for owner-operated service businesses. Built with Next.js (App Router),
TypeScript, Tailwind CSS v4, and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing content

All site copy lives in [`lib/content.ts`](lib/content.ts) — headline, module
list, testimonials, stats, footer links, contact details, everything. Edit
that one file to update the site's messaging.

The current copy is strong placeholder text built on the approved
positioning (platform-first, AI Voice Reception as module one, no pricing
section, operator-to-operator tone). Swap in real numbers, a real
testimonial, and real contact details before launch.

## Swapping in the Seedance 2.0 hero video

The hero background ([`components/hero-background.tsx`](components/hero-background.tsx))
is video-ready out of the box:

1. Export your Seedance 2.0 clip (looping, no audio needed since it's muted).
2. Drop it at `public/hero.mp4`.
3. Optionally add a first-frame still at `public/hero-poster.jpg` for the
   loading state.

That's it — no code changes. The component detects the file, fades it in
once it can play, and falls back to the animated brand-gradient mesh if the
file is missing or fails to load. Users with `prefers-reduced-motion`
enabled still get the animated gradient/video treated gently — CSS
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

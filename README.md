# Cluck & Stack — Next.js Site

Converted from a single HTML file to a full Next.js 15 App Router project.

## Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **`next/font/google`** — Bebas Neue, Barlow Condensed, Barlow (no external font links)
- **`next/image`** — optimized images from Cloudflare R2
- **React Context** — shared cart state across all components

## Project Structure

```
cluck-stack/
├── app/
│   ├── layout.tsx        # Root layout, fonts, CartProvider
│   ├── page.tsx          # Page composition
│   └── globals.css       # All styles
├── components/
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── Ticker.tsx
│   ├── Combos.tsx
│   ├── UpsellStrip.tsx
│   ├── MenuSection.tsx
│   ├── LTOSection.tsx
│   ├── CTABand.tsx
│   ├── VisitSection.tsx
│   ├── Footer.tsx
│   └── OrderFloat.tsx
├── context/
│   └── CartContext.tsx   # Cart state (items, total, addToCart)
├── next.config.ts
├── package.json
└── tsconfig.json
```

---

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
# → http://localhost:3000
```

---

## Deploy to GitHub + Vercel (recommended)

Vercel is the native host for Next.js — zero config, free tier available.

### Step 1 — Initialize git and push to GitHub

```bash
# Inside the project folder
git init
git add .
git commit -m "Initial commit: Cluck & Stack Next.js site"

# Create a new repo on GitHub (via CLI with gh tool, or manually at github.com)
# If you have the GitHub CLI installed:
gh repo create cluck-stack --public --source=. --remote=origin --push

# Or manually after creating the repo on github.com:
git remote add origin https://github.com/YOUR_USERNAME/cluck-stack.git
git branch -M main
git push -u origin main
```

### Step 2 — Deploy to Vercel

```bash
# Install Vercel CLI (if not already installed)
npm i -g vercel

# Deploy — follow the prompts (link to your GitHub repo)
vercel

# For production deploy:
vercel --prod
```

Vercel will auto-detect Next.js and configure everything. Subsequent pushes to `main` deploy automatically.

---

## Deploy to GitHub Pages (alternative)

GitHub Pages requires static export. Add this to `next.config.ts`:

```ts
const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },  // next/image requires this for static export
  // ... rest of config
}
```

Then create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: write
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

Then in your GitHub repo → Settings → Pages → set Source to `gh-pages` branch.

> **Note:** Vercel is strongly recommended for Next.js — GitHub Pages static export disables `next/image` optimization and server features. Use Pages only if you need a fully static site.

---

## Customization

| What | Where |
|------|-------|
| Colors / fonts | `app/globals.css` `:root` block |
| Menu items | `components/MenuSection.tsx` `MENU` object |
| Combo deals | `components/Combos.tsx` `COMBOS` array |
| Hours / address | `components/VisitSection.tsx` |
| LTO item & price | `components/LTOSection.tsx` |
| Site metadata | `app/layout.tsx` `metadata` export |
| Image domain | `next.config.ts` `remotePatterns` |

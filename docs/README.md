# CSVBox Website Redesign

A modern Next.js 15 + Tailwind CSS v4 redesign of csvbox.io, deployed on Cloudflare Pages using OpenNext.

## Overview

This project is a complete redesign of the CSVBox marketing website, originally built on an unknown stack. The redesign modernizes the tech stack while preserving all existing content across 26 pages, including feature pages, customer case studies, pricing, use cases, and alternatives comparisons.

## Tech Stack

- **Framework**: Next.js 15.2.8
- **Styling**: Tailwind CSS v4 with `@tailwindcss/postcss`
- **Deployment**: Cloudflare Pages with OpenNext adapter
- **Runtime**: Cloudflare Workers (Edge)
- **Language**: TypeScript
- **Package Manager**: npm

### Key Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| next | 15.2.8 | React framework |
| react | 19.2.4 | UI library |
| tailwindcss | ^4 | CSS framework |
| @opennextjs/cloudflare | ^1.14.8 | Cloudflare Pages adapter |
| clsx | ^2.1.1 | Conditional class utilities |
| tailwind-merge | ^3.5.0 | Tailwind class merging |

## Project Structure

```
csvbox-redesign/
├── .github/workflows/     # CI/CD deployment pipeline
├── app/                   # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── about/             # About page
│   ├── features/          # Features page
│   ├── pricing/           # Pricing page
│   ├── demo/              # Demo page
│   ├── csv-import/        # CSV import tool page
│   ├── csv-import-tool/  # CSV import tool page
│   ├── csvbox-alternatives/ # Alternatives overview
│   ├── why-csvbox/        # Why CSVBox page
│   ├── customers/         # Customer case studies
│   │   ├── page.tsx
│   │   ├── 99minds/
│   │   ├── booksource/
│   │   ├── exclusion-screening/
│   │   ├── jarvi-tech/
│   │   ├── monetizachat/
│   │   └── peopleboxai/
│   ├── usecases/          # Use case pages
│   │   ├── ed-tech/
│   │   ├── e-commerce/
│   │   ├── fintech/
│   │   ├── health-tech/
│   │   ├── hr-tech/
│   │   └── web-applications/
│   └── alternatives/      # Alternative comparisons
│       ├── dromo/
│       ├── flatfile/
│       │   ├── page.tsx
│       │   └── copy/
│       └── oneschema/
├── components/            # Reusable React components
├── lib/                   # Utility functions
├── public/               # Static assets
├── scripts/               # Build scripts
├── docs/                  # Project documentation
├── next.config.ts         # Next.js configuration
├── open-next.config.ts    # OpenNext adapter config
├── wrangler.jsonc         # Cloudflare Wrangler config
└── package.json           # Dependencies
```

## Quick Start

### Prerequisites

- Node.js 20+
- npm 9+

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to view the site.

### Building for Production

```bash
# Build for Cloudflare Pages
npm run pages:build

# Preview locally
npm run preview
```

### Deployment

The project is configured for automatic deployment to Cloudflare Pages via GitHub Actions. On push to `main`, the workflow:
1. Installs dependencies
2. Runs the build (`npm run pages:build`)
3. Copies worker.js to _worker.js
4. Deploys to Cloudflare Pages

Manual deployment:
```bash
npx wrangler pages deploy .open-next --project-name=csvbox-redesign
```

## Configuration Files

### `next.config.ts`
- Enables standalone output for OpenNext compatibility
- Configures external image domains (Umso CDN)
- Disables image optimization (unoptimized) to avoid on-demand server

### `open-next.config.ts`
- Uses `staticAssetsIncrementalCache` for fully static pages
- No R2 bucket or KV namespace required for static export

### `wrangler.jsonc`
- Defines Cloudflare Worker entry point
- Configures compatibility flags for Node.js compatibility
- Sets up ASSETS binding for static asset serving

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for Node.js (standalone) |
| `npm run pages:build` | Build for Cloudflare Pages |
| `npm run preview` | Preview Cloudflare Pages build locally |
| `npm run start` | Start production server (Node.js) |
| `npm run lint` | Run ESLint |

## Troubleshooting

### Common Issues

**Worker Error 1101**
- Ensure `staticAssetsIncrementalCache` is used in `open-next.config.ts` for fully static sites
- Verify `.open-next/worker.js` exists after build

**Image Optimization Errors**
- Enable `unoptimized: true` in `next.config.ts` images config
- Cloudflare Workers don't support on-demand image optimization server

**Build Failures**
- Ensure Node.js version is 20+
- Run `npm install` before building

## License

Private - All rights reserved.
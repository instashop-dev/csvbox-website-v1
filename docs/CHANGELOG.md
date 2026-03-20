# Changelog

All notable changes to the CSVBox website redesign project.

## [Unreleased]

## [0.1.0] - 2025-03-20

### Added
- Initial project setup with Next.js 15 + Tailwind CSS v4
- All 26 pages from original csvbox.io website migrated:
  - Core pages: Home, About, Features, Pricing, Demo
  - Product pages: CSV Import, Import Tool, Why CSVBox
  - Customer case studies: 7 pages including 99minds, BookSource, etc.
  - Use cases: 6 industry pages (Ed Tech, E-commerce, Fintech, etc.)
  - Alternatives: 5 competitor comparison pages
- OpenNext + Cloudflare Pages integration
- GitHub Actions CI/CD deployment pipeline

### Fixed
- Worker error 1101 by using `staticAssetsIncrementalCache`
- Cloudflare Pages deployment configuration
- Worker.js to _worker.js copy step in build process
- Next.js version compatibility (downgraded from 16 to 15.2.x)

### Changed
- Project renamed to csvbox-redesign
- Next.js upgraded to 15.2.8 for security and stability

## Commit History

### 7a2981c (2025-03-20)
**Update Next.js to 15.2.8 for security and stability**
- Bump next from 15.2.0 to 15.2.8
- Update eslint-config-next to match

### 376cfba (2025-03-19)
**Downgrade Next.js from 16.2.0 to 15.2.0 for OpenNext compatibility**
- Next.js 16 has compatibility issues with @opennextjs/cloudflare
- Downgrade to 15.2.0 until adapter support improves

### e0a3f95 (2025-03-19)
**Update: rename project to csvbox-website-v1**
- Project name changed in package.json and wrangler.jsonc

### b90d348 (2025-03-18)
**Fix: copy worker.js to _worker.js for Cloudflare Pages deployment**
- Add post-build script to copy worker.js to _worker.js
- Required for Cloudflare Pages to recognize the worker

### 4462a9d (2025-03-17)
**Feat(csvbox-redesign): add initial redesign scaffold**
- Initial project scaffolding with Next.js structure

### 9533971 (2025-03-16)
**Fix: add GitHub Actions workflow for Cloudflare Pages deployment**
- Add .github/workflows/deploy.yml
- Configure automated deployment on push to main

### 25a7633 (2025-03-15)
**Fix: resolve Worker error 1101 — use staticAssetsIncrementalCache for all-static site**
- Switch from default incremental cache to staticAssetsIncrementalCache
- Eliminates need for R2 bucket or KV namespace
- All pages are fully static (prerendered at build time)

### 9d59bd8 (2025-03-14)
**Fix: add OpenNext Cloudflare config, wrangler.jsonc, and standalone output**
- Configure open-next.config.ts with static assets cache
- Add wrangler.jsonc for Cloudflare Worker settings
- Enable output: "standalone" in next.config.ts

### e7fbb94 (2025-03-13)
**Fix: move Next.js project to repo root so CI can resolve package.json**
- Relocated all project files from csvbox-redesign subdirectory to root
- GitHub Actions can now find package.json at root level

### abc7759 (2025-03-12)
**Feat: redesign csvbox.io in Next.js 16 + Tailwind CSS v4 (all 26 pages)**
- Complete redesign of all 26 pages
- Next.js 16 (later downgraded to 15.x)
- Tailwind CSS v4 styling
- Migrated all content from original site

### f85cfb5 (2025-03-11)
**Chore: initial empty base**
- Empty project initialization

---

## Migration Notes

### Original Site → Redesign

The redesign migrated from an unknown original framework to Next.js. Key changes:

1. **Tech Stack**: Original framework → Next.js 15 + Tailwind CSS 4
2. **Hosting**: Unknown → Cloudflare Pages with OpenNext
3. **Performance**: Static export approach with edge caching
4. **Developer Experience**: Modern React with TypeScript

### Versioning

This project uses semantic versioning for the redesign itself (0.1.0, etc.). The CSVBox product version is tracked separately.

## Known Issues

- None at this time

## Upcoming Features

- Potential image optimization enhancements
- Additional customer case studies
- Enhanced analytics integration
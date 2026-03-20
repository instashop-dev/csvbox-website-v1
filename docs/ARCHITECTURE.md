# Technical Architecture

This document explains the technical architecture of the CSVBox website redesign, specifically the OpenNext + Cloudflare Pages integration.

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                        Cloudflare Edge                          │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                     Cloudflare Worker                    │   │
│  │  ┌─────────────────┐  ┌──────────────────────────────┐  │   │
│  │  │  Next.js Router │  │    Static Assets Handler     │  │   │
│  │  │   (worker.js)   │  │     (ASSETS binding)        │  │   │
│  │  └────────┬────────┘  └──────────────┬───────────────┘  │   │
│  │           │                          │                   │   │
│  │           ▼                          ▼                   │   │
│  │  ┌──────────────────────────────────────────────┐       │   │
│  │  │            Static Cache (Pre-rendered)       │       │   │
│  │  │            (.open-next/cache/)               │       │   │
│  │  └──────────────────────────────────────────────┘       │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                    Cloudflare Assets                     │   │
│  │         (.open-next/assets - static files)              │   │
│  └─────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
```

## OpenNext + Cloudflare Pages

### What is OpenNext?

[OpenNext](https://opennext.js.org/) is an adapter that converts Next.js output to run on edge hosting platforms. It transforms the Next.js build output into a format compatible with Cloudflare Workers.

### Why Not Static Export?

Static export (`output: 'export'`) would generate plain HTML files that could be hosted on any static file server, but it would lose:

1. **Dynamic routing capabilities** - Next.js routing features wouldn't work
2. **Client-side navigation** - SPA behavior would require custom implementation
3. **API routes** - Server-side API endpoints wouldn't function
4. **Incremental Static Regeneration (ISR)** - No ability to update static pages

While the current site is fully static (all pages prerendered), using OpenNext preserves the flexibility to add:
- Dynamic API routes if needed
- Server-side rendering for specific pages
- Form submissions or other server interactions

### How the Build Works

1. **Next.js Build** (`npm run pages:build`):
   ```
   next build → opennextjs-cloudflare build → copy-cache-to-assets.mjs
   ```

2. **Output Structure**:
   ```
   .open-next/
   ├── _worker.js       # Cloudflare Worker entry point
   ├── worker.js        # Original worker (for reference)
   ├── assets/          # Static assets (_next/static, images, etc.)
   ├── cache/           # Prerendered page HTML
   └── config.json      # OpenNext configuration
   ```

## Incremental Cache

### Static Assets Incremental Cache

For fully static sites, we use `staticAssetsIncrementalCache`. This configuration:

1. **Prerenders all pages at build time** - No on-demand rendering needed
2. **Stores cache in Cloudflare Assets** - No R2 bucket required
3. **Uses ASSETS binding** - Worker reads cached pages from the ASSETS store

### Configuration

In `open-next.config.ts`:

```typescript
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

export default defineCloudflareConfig({
  incrementalCache: staticAssetsIncrementalCache,
  // No R2 or KV required for fully static sites
  queue: "dummy",
  tagCache: "dummy",
});
```

### How It Works

1. **Build time**: All pages are prerendered to HTML
2. **Deploy time**: Cache files are uploaded to Cloudflare Assets
3. **Request flow**:
   ```
   Request → Worker → Check cache → Return cached HTML
                         ↓ (if not cached - not needed for static)
                    Render page
   ```

### Why This Approach?

| Approach | Pros | Cons |
|----------|------|------|
| **Static Export** | Cheapest, simplest | No Next.js features |
| **On-demand ISR** | Dynamic content | Requires R2/KV |
| **Static Assets Cache** | Best of both worlds | Requires asset upload |

The static assets approach gives us:
- Zero cold starts (pages pre-rendered)
- No R2/KV costs (everything in Assets)
- Full Next.js compatibility
- Edge performance (globally distributed)

## Cloudflare Worker Configuration

### Wrangler Config

```jsonc
{
  "main": ".open-next/worker.js",
  "compatibility_date": "2025-12-01",
  "compatibility_flags": [
    "nodejs_compat",           // Node.js API polyfills
    "global_fetch_strictly_public"  // Use global fetch
  ],
  "assets": {
    "binding": "ASSETS",
    "directory": ".open-next/assets",
    "run_worker_first": true   // Worker handles all routes
  }
}
```

### Key Configuration Details

1. **`run_worker_first: true`**: All requests go through the Worker first, enabling Next.js routing to handle all paths including client-side navigation routes.

2. **`nodejs_compat`**: Provides Node.js APIs (Buffer, crypto, etc.) needed by Next.js internals.

3. **`unoptimized: true`**: Images are served directly from Umso CDN without on-demand optimization. This avoids the need for an image optimization server.

## Performance Characteristics

| Metric | Value |
|--------|-------|
| Cold Start | ~0ms (static files) |
| TTFB | < 200ms (edge cached) |
| HTML Size | ~5-15KB per page |
| Cache Hit | 100% (static) |

## Future Considerations

### Adding Dynamic Features

If you need to add server-side functionality:

1. **API Routes**: Add routes in `app/api/`
2. **Form Handling**: Use API routes for submissions
3. **Incremental Updates**: Keep using static cache with on-demand fallback

### Scaling

The current architecture scales automatically:
- No server instances to manage
- Assets served from Cloudflare CDN
- Worker handles routing at edge

### Cost Optimization

Current setup costs:
- Cloudflare Pages: Free (up to 500MB)
- Cloudflare Workers: Free (up to 100K requests/day)
- Cloudflare R2: Not used (assets stored in Pages)

No ongoing costs for this fully static deployment.
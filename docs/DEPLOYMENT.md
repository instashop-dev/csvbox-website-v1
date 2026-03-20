# Deployment Guide

This guide covers deploying the CSVBox redesign to Cloudflare Pages using OpenNext.

## Prerequisites

- Cloudflare account with Pages enabled
- Cloudflare API token with `Pages:edit` permissions
- Cloudflare Account ID

## Cloudflare Pages Configuration

### Dashboard Setup

1. **Create Project**: Go to Cloudflare Dashboard > Workers & Pages > Create application > Pages > Connect to Git
2. **Project Name**: `csvbox-redesign`
3. **Production Branch**: `main`

### Build Settings

| Setting | Value |
|---------|-------|
| Build Command | `npm run pages:build` |
| Build Output Directory | `.open-next` |
| Root Directory | `.` |
| Compatibility Date | `2025-12-01` |

### Environment Variables

No environment variables are required for this project. The site uses fully static pages with no server-side API calls.

Optional variables for local development:
```
CLOUDFLARE_ACCOUNT_ID=your_account_id
CLOUDFLARE_API_TOKEN=your_api_token
```

## GitHub Actions Deployment

The project includes a CI/CD pipeline in `.github/workflows/deploy.yml`.

### Workflow Configuration

```yaml
on:
  push:
    branches:
      - main
```

### Required Secrets

Add these secrets to your GitHub repository:

| Secret | Description | Required |
|--------|-------------|----------|
| `CLOUDFLARE_API_TOKEN` | Cloudflare API token with Pages:edit permission | Yes |
| `CLOUDFLARE_ACCOUNT_ID` | Your Cloudflare account ID | Yes |

### Creating API Token

1. Go to Cloudflare Dashboard > Profile > API Tokens
2. Create Custom Token with these permissions:
   - Account: Workers:Edit
   - Account: Workers Scripts:Edit
   - User: My Profile:Read
3. Copy the token to GitHub secrets

## Manual Deployment

### Using Wrangler CLI

```bash
# Install Wrangler
npm install -g wrangler

# Authenticate
wrangler login

# Deploy
wrangler pages deploy .open-next \
  --project-name=csvbox-redesign \
  --compatibility-date=2025-12-01
```

### Build Steps

```bash
# 1. Install dependencies
npm ci

# 2. Build for Cloudflare Pages
npm run pages:build

# 3. Copy worker.js to _worker.js (required)
cp .open-next/worker.js .open-next/_worker.js

# 4. Deploy
npx wrangler pages deploy .open-next \
  --project-name=csvbox-redesign \
  --compatibility-date=2025-12-01
```

## Post-Deployment Steps

### Custom Domain

1. Go to Cloudflare Dashboard > Workers & Pages > csvbox-redesign > Custom domains
2. Add your domain (e.g., csvbox.io)
3. Update DNS records as instructed

### Verify Deployment

```bash
# Test the deployment
curl https://csvbox-redesign.pages.dev
```

## Troubleshooting Common Errors

### Error: Worker script not found

**Cause**: Worker file not in correct location.

**Solution**: Ensure `.open-next/_worker.js` exists. The build process copies `worker.js` to `_worker.js` automatically.

```bash
ls -la .open-next/
# Should show: _worker.js, worker.js, assets/
```

### Error: Module not found

**Cause**: Missing Node.js compatibility flag.

**Solution**: Ensure `wrangler.jsonc` has `nodejs_compat` in compatibility_flags:

```jsonc
{
  "compatibility_flags": ["nodejs_compat", "global_fetch_strictly_public"]
}
```

### Error: 1101 Worker error

**Cause**: Static export not configured correctly for fully static site.

**Solution**: In `open-next.config.ts`, use `staticAssetsIncrementalCache`:

```typescript
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

export default defineCloudflareConfig({
  incrementalCache: staticAssetsIncrementalCache,
});
```

### Error: Assets not loading

**Cause**: ASSETS binding not configured or worker not running first.

**Solution**: In `wrangler.jsonc`:

```jsonc
{
  "assets": {
    "binding": "ASSETS",
    "directory": ".open-next/assets",
    "run_worker_first": true
  }
}
```

### Error: Images not displaying

**Cause**: On-demand image optimization not supported on Workers.

**Solution**: Ensure `next.config.ts` has `unoptimized: true`:

```typescript
images: {
  unoptimized: true,
}
```

### Build timeout

**Cause**: Build taking too long.

**Solution**: Add to GitHub workflow:

```yaml
- name: Build
  run: npm run pages:build
  timeout-minutes: 10
```

## Compatibility Matrix

| Component | Version | Notes |
|-----------|---------|-------|
| Node.js | 20.x | Required for build |
| Next.js | 15.2.8 | Latest stable with OpenNext |
| @opennextjs/cloudflare | 1.14.8 | Cloudflare adapter |
| Wrangler | 3.x | CLI for deployment |
| Compatibility Date | 2025-12-01 | Workers runtime |

## Performance Notes

- Fully static pages are served from Cloudflare's edge network
- No cold starts since pages are pre-rendered
- Images are served unoptimized (direct from CDN)
- First Contentful Paint typically < 500ms
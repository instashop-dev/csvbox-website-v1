/**
 * copy-cache-to-assets.mjs
 *
 * OpenNext's staticAssetsIncrementalCache reads page cache from the ASSETS binding
 * at:  cdn-cgi/_next_cache/<buildId>/<page>.cache
 *
 * After `opennextjs-cloudflare build`, the .cache files live in:
 *   .open-next/cache/<buildId>/
 *
 * This script copies them into the assets directory so Cloudflare Pages can serve them:
 *   .open-next/assets/cdn-cgi/_next_cache/<buildId>/
 */

import { cpSync, existsSync, mkdirSync, readdirSync } from "node:fs";
import { join } from "node:path";

const cacheDir = join(process.cwd(), ".open-next", "cache");
const assetsDir = join(process.cwd(), ".open-next", "assets");

if (!existsSync(cacheDir)) {
  console.log("No .open-next/cache directory found, skipping.");
  process.exit(0);
}

const buildIds = readdirSync(cacheDir);
if (buildIds.length === 0) {
  console.log("No build IDs found in cache directory, skipping.");
  process.exit(0);
}

for (const buildId of buildIds) {
  const src = join(cacheDir, buildId);
  const dest = join(assetsDir, "cdn-cgi", "_next_cache", buildId);
  mkdirSync(dest, { recursive: true });
  cpSync(src, dest, { recursive: true });
  console.log(`Copied cache for buildId=${buildId} → ${dest}`);
}

console.log("✓ Cache files copied to assets.");

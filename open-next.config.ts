// open-next.config.ts — OpenNext Cloudflare configuration
// All pages are fully static (○ prerendered). Use staticAssetsIncrementalCache so the
// worker reads page cache from the ASSETS binding instead of the filesystem (which is
// unavailable in workerd). No R2 bucket or KV namespace is required.
import { defineCloudflareConfig } from "@opennextjs/cloudflare/config";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

export default defineCloudflareConfig({
  incrementalCache: staticAssetsIncrementalCache,
  tagCache: "dummy",
  queue: "dummy",
});

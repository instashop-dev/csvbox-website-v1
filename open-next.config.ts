// open-next.config.ts — OpenNext Cloudflare configuration
// All pages are fully static (○), so the dummy incremental cache is sufficient.
import { defineCloudflareConfig } from "@opennextjs/cloudflare/config";

export default defineCloudflareConfig({
  incrementalCache: "dummy",
  tagCache: "dummy",
  queue: "dummy",
});

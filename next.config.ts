import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // "standalone" is required by OpenNext / Cloudflare Pages adapter
  output: "standalone",
  images: {
    // External images served from Umso CDN
    remotePatterns: [
      {
        protocol: "https",
        hostname: "umsousercontent.com",
      },
    ],
    // Keep unoptimized so no on-demand image server is needed
    unoptimized: true,
  },
};

export default nextConfig;

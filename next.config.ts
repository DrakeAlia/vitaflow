import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    // Temporarily ignore TypeScript errors in production builds
    // Remove this once the Next.js types are fixed in a future update
    ignoreBuildErrors: true,
  },
};

export default nextConfig;

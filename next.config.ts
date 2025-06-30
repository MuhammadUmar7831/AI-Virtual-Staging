import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: 'r2.virtualhomestaging.us'
      }
    ]
  }
};

export default nextConfig;

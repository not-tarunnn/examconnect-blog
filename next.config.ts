import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },

  async rewrites() {
    return [
      {
        source: "/news-sitemap.xml",
        destination: "/news-sitemap",
      },
    ];
  },
};

export default nextConfig;
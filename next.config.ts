import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flyeron-site.vercel.app",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

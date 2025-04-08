import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['api.znami.usermd.net','localhost'],
  },
};

export default nextConfig;

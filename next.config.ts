import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Disables linting errors during the build
    ignoreDuringBuilds: true,
    // Alternatively, disable specific ESLint rules here
  },
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;

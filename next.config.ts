import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true, // Enables React Strict Mode for development (helps with identifying potential issues).
  eslint: {
    // Automatically runs ESLint on page files during production build.
    ignoreDuringBuilds: true, // Ignore ESLint errors during the build process (set to false to enforce linting).
  },
};

export default nextConfig;

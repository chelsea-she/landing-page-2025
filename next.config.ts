/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // basePath: "/landing-page-2025",
  // assetPrefix: "/landing-page-2025/",
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};
module.exports = nextConfig;

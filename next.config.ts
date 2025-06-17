/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/github.com/chelsea-she/landing-page-2025.git",
  assetPrefix: "/github.com/chelsea-she/landing-page-2025.git",
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};
module.exports = nextConfig;

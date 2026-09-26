/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/chelsea-she-landing-page",
  assetPrefix: "/chelsea-she-landing-page/",
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};
module.exports = nextConfig;

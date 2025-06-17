import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // prevents errors with next/image
  },
};

module.exports = nextConfig;

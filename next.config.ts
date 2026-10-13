import type { NextConfig } from "next";

const basePath = process.env.GITHUB_ACTIONS ? "/sls-car-protection" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
  poweredByHeader: false,
};

export default nextConfig;

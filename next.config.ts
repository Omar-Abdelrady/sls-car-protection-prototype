import type { NextConfig } from "next";

const repositoryName = (process.env.GITHUB_REPOSITORY ?? "sls-car-protection-prototype").split("/").at(-1);
const basePath = process.env.GITHUB_ACTIONS ? `/${repositoryName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
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

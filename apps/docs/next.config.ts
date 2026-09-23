import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: [
    "@stateicons/core",
    "@stateicons/react",
    "@stateicons/transitions",
  ],
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: [
    "@stateglyph/core",
    "@stateglyph/react",
    "@stateglyph/transitions",
  ],
};

export default nextConfig;

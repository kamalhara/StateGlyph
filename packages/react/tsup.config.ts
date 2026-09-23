import { readdirSync } from "node:fs";

import { defineConfig } from "tsup";

const iconEntries = Object.fromEntries(
  readdirSync("src/icons")
    .filter((file) => file.endsWith("-state-icon.tsx"))
    .map((file) => [
      `icons/${file.replace(/\.tsx$/, "")}`,
      `src/icons/${file}`,
    ]),
);

export default defineConfig({
  entry: {
    index: "src/index.ts",
    ...iconEntries,
  },
  format: ["esm"],
  target: "es2022",
  dts: true,
  clean: true,
  sourcemap: true,
  treeshake: true,
  splitting: false,
  external: ["react", "react-dom", "lucide-react", "@stateglyph/core"],
});

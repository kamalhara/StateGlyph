import { readdirSync, readFileSync, writeFileSync } from "node:fs";

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
  // The final Rollup tree-shaking pass removes directive prologues. Restore the
  // boundary after bundling so every published entry is a Client Component.
  onSuccess: async () => {
    for (const entry of ["index", ...Object.keys(iconEntries)]) {
      const file = `dist/${entry}.js`;
      const source = readFileSync(file, "utf8");
      if (source.startsWith('"use client";')) continue;
      writeFileSync(file, `"use client";\n${source}`);
      const mapFile = `${file}.map`;
      const map = JSON.parse(readFileSync(mapFile, "utf8"));
      map.mappings = `;${map.mappings}`;
      writeFileSync(mapFile, JSON.stringify(map));
    }
  },
});

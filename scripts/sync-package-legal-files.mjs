import { copyFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repositoryRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const packageRoot = process.cwd();

for (const filename of ["LICENSE", "THIRD_PARTY_NOTICES.md"]) {
  copyFileSync(join(repositoryRoot, filename), join(packageRoot, filename));
}

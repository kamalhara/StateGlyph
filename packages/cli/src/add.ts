import { access, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

import { stateIconCatalog } from "@stateglyph/core";

import { renderIconComponent } from "./template";

export type AddIconsOptions = {
  cwd?: string;
  directory?: string;
  force?: boolean;
  dryRun?: boolean;
};

export type AddIconsResult = {
  added: string[];
  skipped: string[];
};

async function fileExists(filePath: string): Promise<boolean> {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

export async function addIcons(
  requestedIcons: readonly string[],
  options: AddIconsOptions = {},
): Promise<AddIconsResult> {
  const cwd = options.cwd ?? process.cwd();
  const directory = options.directory ?? "components/stateglyph";
  const destination = path.resolve(cwd, directory);
  const requestedNames = requestedIcons.includes("all")
    ? stateIconCatalog.map((icon) => icon.id)
    : [...new Set(requestedIcons)];

  const unknownNames = requestedNames.filter(
    (name) => !stateIconCatalog.some((icon) => icon.id === name),
  );

  if (unknownNames.length > 0) {
    throw new Error(
      `Unknown icon${unknownNames.length === 1 ? "" : "s"}: ${unknownNames.join(", ")}. Run 'stateglyph list' to see valid names.`,
    );
  }

  const result: AddIconsResult = { added: [], skipped: [] };

  for (const name of requestedNames) {
    const icon = stateIconCatalog.find((item) => item.id === name);

    if (!icon) {
      continue;
    }

    const relativePath = path.join(directory, `${icon.id}-state-icon.tsx`);
    const filePath = path.resolve(cwd, relativePath);

    if ((await fileExists(filePath)) && !options.force) {
      result.skipped.push(relativePath);
      continue;
    }

    result.added.push(relativePath);

    if (!options.dryRun) {
      await mkdir(destination, { recursive: true });
      await writeFile(filePath, renderIconComponent(icon), "utf8");
    }
  }

  return result;
}

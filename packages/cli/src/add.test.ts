import { mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";

import { afterEach, describe, expect, it } from "vitest";

import { addIcons } from "./add";

const temporaryDirectories: string[] = [];

afterEach(async () => {
  await Promise.all(
    temporaryDirectories.splice(0).map((directory) =>
      rm(directory, {
        recursive: true,
        force: true,
      }),
    ),
  );
});

async function createTemporaryProject() {
  const directory = await mkdtemp(path.join(tmpdir(), "stateicons-cli-"));
  temporaryDirectories.push(directory);
  return directory;
}

describe("addIcons", () => {
  it("creates self-contained React components", async () => {
    const cwd = await createTemporaryProject();
    const result = await addIcons(["upload", "save"], { cwd });
    const uploadFile = path.join(
      cwd,
      "components/stateicons/upload-state-icon.tsx",
    );
    const source = await readFile(uploadFile, "utf8");

    expect(result.added).toHaveLength(2);
    expect(source).toContain("export function UploadStateIcon");
    expect(source).toContain('from "lucide-react"');
    expect(source).not.toContain("@stateicons/react");
  });

  it("does not overwrite an existing file without force", async () => {
    const cwd = await createTemporaryProject();

    await addIcons(["copy"], { cwd });
    const result = await addIcons(["copy"], { cwd });

    expect(result.added).toEqual([]);
    expect(result.skipped).toEqual([
      "components/stateicons/copy-state-icon.tsx",
    ]);
  });

  it("validates icon names", async () => {
    const cwd = await createTemporaryProject();

    await expect(addIcons(["not-an-icon"], { cwd })).rejects.toThrow(
      "Unknown icon: not-an-icon",
    );
  });

  it("supports a dry run without creating files", async () => {
    const cwd = await createTemporaryProject();
    const result = await addIcons(["bookmark"], { cwd, dryRun: true });

    expect(result.added).toEqual([
      "components/stateicons/bookmark-state-icon.tsx",
    ]);
    await expect(
      readFile(path.join(cwd, "components/stateicons/bookmark-state-icon.tsx")),
    ).rejects.toThrow();
  });
});

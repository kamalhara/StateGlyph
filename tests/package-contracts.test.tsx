import { readFile } from "node:fs/promises";
import path from "node:path";

import { cleanup, render } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { StateIcon } from "../packages/react/src/components/state-icon";
import { UploadStateIcon } from "../packages/react/src/icons/upload-state-icon";
import { stateIconCatalog, type StateIconDefinition } from "@stateglyph/core";

const workspaceRoot = path.resolve(import.meta.dirname, "..");

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

describe("React package integration", () => {
  it("renders accessible state metadata used by the transitions package", () => {
    const { container, rerender } = render(
      <UploadStateIcon state="idle" decorative={false} />,
    );

    const idleIcon = container.querySelector("svg");
    expect(idleIcon?.getAttribute("role")).toBe("img");
    expect(idleIcon?.getAttribute("aria-label")).toBe("Upload");
    expect(idleIcon?.getAttribute("data-state-icon")).toBe("upload");
    expect(idleIcon?.getAttribute("data-state")).toBe("idle");
    expect(idleIcon?.getAttribute("data-transition")).toBe("scale-fade");

    rerender(<UploadStateIcon state="loading" />);

    const loadingIcon = container.querySelector("svg");
    expect(loadingIcon?.getAttribute("data-state-continuous")).toBe("true");
    expect(loadingIcon?.getAttribute("aria-hidden")).toBe("true");
  });

  it("warns and renders nothing for an unavailable glyph", () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => undefined);
    const definition = {
      id: "missing",
      title: "Missing",
      description: "Exercises the runtime fallback.",
      category: "feedback",
      states: {
        idle: { icon: "not-in-lucide-map", label: "Missing" },
      },
      initialState: "idle",
      transition: "crossfade",
      tags: [],
      source: {
        library: "lucide",
        license: "ISC",
        url: "https://lucide.dev",
        icons: ["not-in-lucide-map"],
      },
    } satisfies StateIconDefinition;

    const { container } = render(
      <StateIcon definition={definition} state="idle" />,
    );

    expect(container.innerHTML).toBe("");
    expect(warn).toHaveBeenCalledWith(
      "[StateGlyph] Unknown Lucide icon: not-in-lucide-map",
    );
  });
});

describe("published package contracts", () => {
  it("declares an explicit React subpath for every catalog icon", async () => {
    const packageJson = JSON.parse(
      await readFile(
        path.join(workspaceRoot, "packages/react/package.json"),
        "utf8",
      ),
    ) as {
      exports: Record<string, { types: string; import: string }>;
    };

    for (const icon of stateIconCatalog) {
      expect(packageJson.exports[`./${icon.id}`]).toEqual({
        types: `./dist/icons/${icon.id}-state-icon.d.ts`,
        import: `./dist/icons/${icon.id}-state-icon.js`,
      });
    }

    expect(Object.keys(packageJson.exports)).toHaveLength(
      stateIconCatalog.length + 1,
    );
  });

  it("ships all transition names and a reduced-motion fallback", async () => {
    const stylesheet = await readFile(
      path.join(workspaceRoot, "packages/transitions/src/styles.css"),
      "utf8",
    );

    for (const transition of [
      "crossfade",
      "scale-fade",
      "rotate",
      "slide",
      "morph",
    ]) {
      expect(stylesheet).toContain(`data-transition="${transition}"`);
    }

    expect(stylesheet).toContain("prefers-reduced-motion: reduce");
  });
});

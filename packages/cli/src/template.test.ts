import { describe, expect, it } from "vitest";

import { uploadStateIcon } from "@stateicons/core";

import { renderIconComponent } from "./template";

describe("renderIconComponent", () => {
  it("creates typed state and accessible SVG code", () => {
    const source = renderIconComponent(uploadStateIcon);

    expect(source).toContain(
      'export type UploadState = "idle" | "loading" | "success" | "error"',
    );
    expect(source).toContain("aria-label");
    expect(source).toContain("prefers-reduced-motion");
    expect(source).toContain("LoaderCircle");
  });
});

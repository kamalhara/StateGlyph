import { describe, expect, it } from "vitest";

import { formatIconList } from "./list";

describe("formatIconList", () => {
  it("lists all icons and their categories", () => {
    const output = formatIconList();

    expect(output).toContain("StateIcons — 30 icons");
    expect(output).toContain("Async workflows (12)");
    expect(output).toContain("Media controls (8)");
    expect(output).toContain("Navigation and layout (7)");
    expect(output).toContain("Feedback and toggles (3)");
    expect(output).toContain("upload");
    expect(output).toContain("bookmark");
  });
});

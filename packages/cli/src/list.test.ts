import { describe, expect, it } from "vitest";

import { formatIconList } from "./list";

describe("formatIconList", () => {
  it("lists all icons and their categories", () => {
    const output = formatIconList();

    expect(output).toContain("StateGlyph — 55 icons");
    expect(output).toContain("Async workflows (9)");
    expect(output).toContain("Media controls (8)");
    expect(output).toContain("Navigation and layout (7)");
    expect(output).toContain("Feedback and toggles (3)");
    expect(output).toContain("Form states (1)");
    expect(output).toContain("Commerce (2)");
    expect(output).toContain("Notifications (1)");
    expect(output).toContain("upload");
    expect(output).toContain("bookmark");
    expect(output).toContain("notification");
    expect(output).toContain("Connectivity (4)");
    expect(output).toContain("Security and privacy (4)");
    expect(output).toContain("Appearance (3)");
    expect(output).toContain("Editing tools (3)");
    expect(output).toContain("Files and folders (4)");
    expect(output).toContain("Weather and time (3)");
    expect(output).toContain("Productivity (3)");
  });
});

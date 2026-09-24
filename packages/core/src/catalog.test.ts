import { describe, expect, it } from "vitest";

import { stateIconCatalog } from "./catalog";
import type { StateIconSource } from "./types";

describe("state icon catalog", () => {
  it("contains the launch catalog", () => {
    expect(stateIconCatalog).toHaveLength(31);
  });

  it("uses unique IDs", () => {
    const ids = stateIconCatalog.map((icon) => icon.id);

    expect(new Set(ids).size).toBe(ids.length);
  });

  it("defines valid states and source metadata", () => {
    for (const icon of stateIconCatalog) {
      expect(Object.hasOwn(icon.states, icon.initialState)).toBe(true);
      expect(icon.source.library).toBe("lucide");
      expect(icon.source.license).toBe("ISC");

      for (const state of Object.values(icon.states)) {
        expect(state.label.length).toBeGreaterThan(0);
        expect(state.description.length).toBeGreaterThan(0);
        expect(icon.source.icons).toContain(state.icon);
      }
    }
  });

  it("accepts additional source libraries without widening the catalog", () => {
    const source: StateIconSource = {
      library: "heroicons",
      license: "MIT",
      url: "https://heroicons.com",
      icons: ["arrow-up-tray"],
    };

    expect(source.library).toBe("heroicons");
  });
});

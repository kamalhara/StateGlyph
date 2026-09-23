import { describe, expect, it } from "vitest";

import { stateIconCatalog } from "@stateicons/core";

import { lucideIconMap } from "./icons-map";

describe("Lucide icon map", () => {
  it("contains every glyph referenced by the core catalog", () => {
    for (const icon of stateIconCatalog) {
      for (const state of Object.values(icon.states)) {
        expect(
          lucideIconMap[state.icon as keyof typeof lucideIconMap],
        ).toBeDefined();
      }
    }
  });
});

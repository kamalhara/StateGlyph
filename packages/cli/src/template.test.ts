import { createRequire } from "node:module";
import { createElement, type ComponentType } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import ts from "typescript";
import { describe, expect, it } from "vitest";
import { stateIconCatalog, uploadStateIcon } from "@stateglyph/core";
import { renderIconComponent } from "./template";

const require = createRequire(import.meta.url);

describe("renderIconComponent", () => {
  it("creates typed accessible animated SVG code", () => {
    const source = renderIconComponent(uploadStateIcon);
    expect(source).toContain(
      'export type UploadState = "idle" | "loading" | "success" | "error"',
    );
    expect(source).toContain('"use client"');
    expect(source).toContain("aria-label");
    expect(source).toContain("prefers-reduced-motion");
    expect(source).toContain("LoaderCircle");
    expect(source).toContain("outgoing.animate");
    expect(source).toContain("incoming.animate");
    expect(source).not.toContain("@stateglyph/");
  });

  it.each(stateIconCatalog)(
    "compiles and renders every copied state of $id without StateGlyph dependencies",
    (definition) => {
      const compiled = ts.transpileModule(renderIconComponent(definition), {
        fileName: `${definition.id}-state-icon.tsx`,
        reportDiagnostics: true,
        compilerOptions: {
          jsx: ts.JsxEmit.ReactJSX,
          module: ts.ModuleKind.CommonJS,
          target: ts.ScriptTarget.ES2022,
        },
      });
      expect(
        compiled.diagnostics?.filter(
          (item) => item.category === ts.DiagnosticCategory.Error,
        ),
      ).toEqual([]);
      const exports: Record<
        string,
        ComponentType<Record<string, unknown>>
      > = {};
      new Function("require", "exports", compiled.outputText)(require, exports);
      const name =
        definition.id
          .split("-")
          .map((part) => part[0].toUpperCase() + part.slice(1))
          .join("") + "StateIcon";
      for (const [state, value] of Object.entries(definition.states)) {
        const markup = renderToStaticMarkup(
          createElement(exports[name], {
            state,
            decorative: false,
            animated: false,
          }),
        );
        expect(markup).toContain(`data-state="${state}"`);
        expect(markup).toContain(`aria-label="${value.label}"`);
        expect(markup).toContain(`lucide-${value.icon}`);
      }
    },
  );
});

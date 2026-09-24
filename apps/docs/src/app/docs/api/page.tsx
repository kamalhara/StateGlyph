import type { Metadata } from "next";
import Link from "next/link";

import { CopyButton } from "@/components/copy-button";
import { HighlightedCode } from "@/components/highlighted-code";

export const metadata: Metadata = {
  title: "API Reference — StateGlyph",
  description:
    "Full prop reference for StateGlyph React components and TypeScript types.",
};

const stateIconUsage = `import { UploadStateIcon } from "@stateglyph/react";

<UploadStateIcon
  state="loading"
  size={24}
  strokeWidth={2}
  decorative={false}
  label="Uploading file"
  className="text-blue-500"
/>`;

const customIconUsage = `import { StateIcon } from "@stateglyph/react";
import { uploadStateIcon } from "@stateglyph/core";

// Use the generic StateIcon with any icon definition
<StateIcon
  definition={uploadStateIcon}
  state="idle"
  size={24}
/>`;

const typesUsage = `import type { UploadStateIconProps } from "@stateglyph/react";
import type {
  StateIconDefinition,
  StateIconStates,
  StateIconStateDefinition,
  StateIconSource,
  StateIconLibrary,
  StateIconCategory,
  StateIconTransition,
} from "@stateglyph/core";`;

const commonProps = [
  {
    name: "state",
    type: "string literal union",
    default: "—",
    required: true,
    description:
      'The current visual state. Each icon component types this as a union of its valid states (e.g. "idle" | "loading" | "success" | "error").',
  },
  {
    name: "size",
    type: "number | string",
    default: "24",
    required: false,
    description:
      "Width and height of the icon in pixels. Accepts a number or a CSS-compatible string.",
  },
  {
    name: "strokeWidth",
    type: "number",
    default: "2",
    required: false,
    description:
      "SVG stroke width. Lower values produce thinner lines. StateGlyph docs use 1.65.",
  },
  {
    name: "decorative",
    type: "boolean",
    default: "true",
    required: false,
    description:
      "When true (default), the icon is hidden from screen readers via aria-hidden. Set to false when the icon conveys meaning not present in surrounding text.",
  },
  {
    name: "label",
    type: "string",
    default: "state label",
    required: false,
    description:
      "Custom accessible label. Only used when decorative is false. Falls back to the label defined in the icon's state definition.",
  },
  {
    name: "className",
    type: "string",
    default: "—",
    required: false,
    description: "Additional CSS class names applied to the SVG element.",
  },
] as const;

const definitionFields = [
  {
    name: "id",
    type: "string",
    description: 'Unique kebab-case identifier, e.g. "upload".',
  },
  {
    name: "title",
    type: "string",
    description: "Human-readable title shown in documentation.",
  },
  {
    name: "description",
    type: "string",
    description: "Short description of what the icon represents.",
  },
  {
    name: "category",
    type: "StateIconCategory",
    description:
      'One of "async", "media", "navigation", "feedback", "device", "form", "commerce", or "notification".',
  },
  {
    name: "states",
    type: "Record<string, StateIconStateDefinition>",
    description:
      "Map of state name to its icon glyph, label, description, and continuous flag.",
  },
  {
    name: "initialState",
    type: "keyof States",
    description: "Which state the icon starts in.",
  },
  {
    name: "transition",
    type: "StateIconTransition",
    description:
      'Transition hint — "crossfade", "scale-fade", "rotate", "slide", or "morph".',
  },
  {
    name: "tags",
    type: "readonly string[]",
    description: "Searchable keywords for discovery.",
  },
  {
    name: "source",
    type: "StateIconSource",
    description:
      "Source library metadata (extensible library name, license, URL, and icon names used).",
  },
] as const;

export default function ApiPage() {
  return (
    <>
      {/* Header */}
      <div className="border-b border-[#2b2e2c] pb-10">
        <p className="font-mono text-xs text-[#7e837e]">Reference</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
          API Reference
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-[#a6aaa5]">
          Complete prop reference for StateGlyph React components and the
          underlying TypeScript types from{" "}
          <code className="rounded bg-[#1b1d1c] px-1.5 py-0.5 font-mono text-[11px] text-[#c5c8c3]">
            @stateglyph/core
          </code>
          .
        </p>
      </div>

      {/* Icon components */}
      <section className="border-b border-[#2b2e2c] py-10">
        <h2 className="text-2xl font-semibold tracking-[-0.03em]">
          Icon components
        </h2>
        <p className="mt-4 text-sm leading-7 text-[#929792]">
          StateGlyph ships 31 pre-built icon components. Each accepts the same
          common props — the only difference is the typed{" "}
          <code className="rounded bg-[#1b1d1c] px-1.5 py-0.5 font-mono text-[11px] text-[#c5c8c3]">
            state
          </code>{" "}
          union.
        </p>

        <div className="mt-6 overflow-hidden rounded-md border border-[#343735] bg-[#101211]">
          <div className="flex items-center justify-between border-b border-[#2b2e2c] px-5 py-3">
            <span className="font-mono text-[10px] text-[#7e837e]">
              Example usage
            </span>
            <CopyButton value={stateIconUsage} />
          </div>
          <pre className="overflow-x-auto p-6 font-mono text-xs leading-7 text-[#d9dbd7] sm:text-sm">
            <HighlightedCode code={stateIconUsage} />
          </pre>
        </div>
      </section>

      {/* Common props table */}
      <section className="border-b border-[#2b2e2c] py-10">
        <h2 className="text-2xl font-semibold tracking-[-0.03em]">
          Common props
        </h2>
        <p className="mt-4 text-sm leading-7 text-[#929792]">
          Every icon component accepts these props. All SVG props (
          <code className="rounded bg-[#1b1d1c] px-1.5 py-0.5 font-mono text-[11px] text-[#c5c8c3]">
            className
          </code>
          ,{" "}
          <code className="rounded bg-[#1b1d1c] px-1.5 py-0.5 font-mono text-[11px] text-[#c5c8c3]">
            style
          </code>
          ,{" "}
          <code className="rounded bg-[#1b1d1c] px-1.5 py-0.5 font-mono text-[11px] text-[#c5c8c3]">
            onClick
          </code>
          , etc.) are also forwarded to the root{" "}
          <code className="rounded bg-[#1b1d1c] px-1.5 py-0.5 font-mono text-[11px] text-[#c5c8c3]">
            {"<svg>"}
          </code>{" "}
          element.
        </p>

        <div className="mt-6 overflow-x-auto rounded-md border border-[#343735]">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#2b2e2c] bg-[#171918]">
                <th className="whitespace-nowrap px-5 py-3 text-left font-mono text-[10px] uppercase tracking-wider text-[#666b67]">
                  Prop
                </th>
                <th className="whitespace-nowrap px-5 py-3 text-left font-mono text-[10px] uppercase tracking-wider text-[#666b67]">
                  Type
                </th>
                <th className="whitespace-nowrap px-5 py-3 text-left font-mono text-[10px] uppercase tracking-wider text-[#666b67]">
                  Default
                </th>
                <th className="whitespace-nowrap px-5 py-3 text-left font-mono text-[10px] uppercase tracking-wider text-[#666b67]">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#2b2e2c]">
              {commonProps.map((prop) => (
                <tr key={prop.name} className="bg-[#1a1c1b]">
                  <td className="whitespace-nowrap px-5 py-3.5">
                    <code className="font-mono text-xs text-[#c5c8c3]">
                      {prop.name}
                    </code>
                    {prop.required && (
                      <span className="ml-1.5 text-[10px] text-amber-400">
                        *
                      </span>
                    )}
                  </td>
                  <td className="whitespace-nowrap px-5 py-3.5 font-mono text-xs text-[#929792]">
                    {prop.type}
                  </td>
                  <td className="whitespace-nowrap px-5 py-3.5 font-mono text-xs text-[#7e837e]">
                    {prop.default}
                  </td>
                  <td className="px-5 py-3.5 text-[#929792]">
                    {prop.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 font-mono text-[10px] text-[#666b67]">* required</p>
      </section>

      {/* Generic StateIcon */}
      <section className="border-b border-[#2b2e2c] py-10">
        <h2 className="text-2xl font-semibold tracking-[-0.03em]">
          Generic{" "}
          <code className="rounded bg-[#1b1d1c] px-2 py-1 font-mono text-lg text-[#c5c8c3]">
            StateIcon
          </code>
        </h2>
        <p className="mt-4 text-sm leading-7 text-[#929792]">
          The base component that all icon components use internally. Useful if
          you want to pass an icon definition dynamically:
        </p>

        <div className="mt-6 overflow-hidden rounded-md border border-[#343735] bg-[#101211]">
          <div className="flex items-center justify-between border-b border-[#2b2e2c] px-5 py-3">
            <span className="font-mono text-[10px] text-[#7e837e]">
              StateIcon usage
            </span>
            <CopyButton value={customIconUsage} />
          </div>
          <pre className="overflow-x-auto p-6 font-mono text-xs leading-7 text-[#d9dbd7] sm:text-sm">
            <HighlightedCode code={customIconUsage} />
          </pre>
        </div>

        <p className="mt-4 text-sm leading-7 text-[#929792]">
          <code className="rounded bg-[#1b1d1c] px-1.5 py-0.5 font-mono text-[11px] text-[#c5c8c3]">
            StateIcon
          </code>{" "}
          accepts an additional{" "}
          <code className="rounded bg-[#1b1d1c] px-1.5 py-0.5 font-mono text-[11px] text-[#c5c8c3]">
            definition
          </code>{" "}
          prop — the icon definition object from{" "}
          <code className="rounded bg-[#1b1d1c] px-1.5 py-0.5 font-mono text-[11px] text-[#c5c8c3]">
            @stateglyph/core
          </code>
          . All common props above also apply.
        </p>
      </section>

      {/* Data attributes */}
      <section className="border-b border-[#2b2e2c] py-10">
        <h2 className="text-2xl font-semibold tracking-[-0.03em]">
          Data attributes
        </h2>
        <p className="mt-4 text-sm leading-7 text-[#929792]">
          Every rendered SVG includes data attributes for styling and testing:
        </p>

        <div className="mt-6 overflow-x-auto rounded-md border border-[#343735]">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#2b2e2c] bg-[#171918]">
                <th className="whitespace-nowrap px-5 py-3 text-left font-mono text-[10px] uppercase tracking-wider text-[#666b67]">
                  Attribute
                </th>
                <th className="whitespace-nowrap px-5 py-3 text-left font-mono text-[10px] uppercase tracking-wider text-[#666b67]">
                  Example value
                </th>
                <th className="px-5 py-3 text-left font-mono text-[10px] uppercase tracking-wider text-[#666b67]">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#2b2e2c]">
              <tr className="bg-[#1a1c1b]">
                <td className="whitespace-nowrap px-5 py-3.5 font-mono text-xs text-[#c5c8c3]">
                  data-state-icon
                </td>
                <td className="whitespace-nowrap px-5 py-3.5 font-mono text-xs text-[#929792]">
                  &quot;upload&quot;
                </td>
                <td className="px-5 py-3.5 text-[#929792]">
                  The icon definition ID.
                </td>
              </tr>
              <tr className="bg-[#1a1c1b]">
                <td className="whitespace-nowrap px-5 py-3.5 font-mono text-xs text-[#c5c8c3]">
                  data-state
                </td>
                <td className="whitespace-nowrap px-5 py-3.5 font-mono text-xs text-[#929792]">
                  &quot;loading&quot;
                </td>
                <td className="px-5 py-3.5 text-[#929792]">
                  The current state value.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-sm leading-7 text-[#929792]">
          Use these in CSS selectors (
          <code className="rounded bg-[#1b1d1c] px-1.5 py-0.5 font-mono text-[11px] text-[#c5c8c3]">
            {'[data-state="loading"]'}
          </code>
          ) or test assertions.
        </p>
      </section>

      {/* Core types */}
      <section className="border-b border-[#2b2e2c] py-10">
        <h2 className="text-2xl font-semibold tracking-[-0.03em]">
          Core types
        </h2>
        <p className="mt-4 text-sm leading-7 text-[#929792]">
          The{" "}
          <code className="rounded bg-[#1b1d1c] px-1.5 py-0.5 font-mono text-[11px] text-[#c5c8c3]">
            @stateglyph/core
          </code>{" "}
          package exports the following types:
        </p>

        <div className="mt-6 overflow-hidden rounded-md border border-[#343735] bg-[#101211]">
          <div className="border-b border-[#2b2e2c] px-5 py-3">
            <span className="font-mono text-[10px] text-[#7e837e]">
              Type imports
            </span>
          </div>
          <pre className="overflow-x-auto p-6 font-mono text-xs leading-7 text-[#d9dbd7] sm:text-sm">
            <HighlightedCode code={typesUsage} language="typescript" />
          </pre>
        </div>
      </section>

      {/* StateIconDefinition */}
      <section className="py-10">
        <h2 className="text-2xl font-semibold tracking-[-0.03em]">
          <code className="rounded bg-[#1b1d1c] px-2 py-1 font-mono text-lg text-[#c5c8c3]">
            StateIconDefinition
          </code>
        </h2>
        <p className="mt-4 text-sm leading-7 text-[#929792]">
          The shape of every icon definition in{" "}
          <code className="rounded bg-[#1b1d1c] px-1.5 py-0.5 font-mono text-[11px] text-[#c5c8c3]">
            @stateglyph/core
          </code>
          :
        </p>

        <div className="mt-6 overflow-x-auto rounded-md border border-[#343735]">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#2b2e2c] bg-[#171918]">
                <th className="whitespace-nowrap px-5 py-3 text-left font-mono text-[10px] uppercase tracking-wider text-[#666b67]">
                  Field
                </th>
                <th className="whitespace-nowrap px-5 py-3 text-left font-mono text-[10px] uppercase tracking-wider text-[#666b67]">
                  Type
                </th>
                <th className="px-5 py-3 text-left font-mono text-[10px] uppercase tracking-wider text-[#666b67]">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#2b2e2c]">
              {definitionFields.map((field) => (
                <tr key={field.name} className="bg-[#1a1c1b]">
                  <td className="whitespace-nowrap px-5 py-3.5 font-mono text-xs text-[#c5c8c3]">
                    {field.name}
                  </td>
                  <td className="whitespace-nowrap px-5 py-3.5 font-mono text-xs text-[#929792]">
                    {field.type}
                  </td>
                  <td className="px-5 py-3.5 text-[#929792]">
                    {field.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-sm text-[#7e837e]">
          See individual icon pages for the complete state definitions:{" "}
          <Link
            href="/icons"
            className="text-[#c5c8c3] transition-colors hover:text-white"
          >
            Browse all icons →
          </Link>
        </p>
      </section>
    </>
  );
}

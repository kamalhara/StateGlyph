import type { Metadata } from "next";
import Link from "next/link";

import { CopyButton } from "@/components/copy-button";
import { HighlightedCode } from "@/components/highlighted-code";

export const metadata: Metadata = {
  title: "CLI Reference — StateGlyph",
  description:
    "Copy-and-own component generator for StateGlyph. Generate editable icon components in your project.",
};

const listCommand = "npx @stateglyph/cli list";
const addSingle = "npx @stateglyph/cli add upload";
const addMultiple = "npx @stateglyph/cli add upload save download";
const addAll = "npx @stateglyph/cli add all";
const addDir = "npx @stateglyph/cli add upload --dir src/components/icons";
const addForce = "npx @stateglyph/cli add upload --force";

const generatedExample = `// Generated file: src/components/stateglyph/upload-state-icon.tsx

import { uploadStateIcon } from "@stateglyph/core";
import { StateIcon, type StateIconProps } from "@stateglyph/react";

export type UploadStateIconProps = Omit<
  StateIconProps<typeof uploadStateIcon.states>,
  "definition"
>;

export function UploadStateIcon(props: UploadStateIconProps) {
  return <StateIcon definition={uploadStateIcon} {...props} />;
}`;

const commands = [
  {
    command: "list",
    description: "List all available icon names.",
    usage: listCommand,
    example: `$ npx @stateglyph/cli list

Available icons (31):
  upload, download, save, delete, refresh,
  sync, send, payment, add-to-cart, submit,
  install, publish, play-pause, playback,
  volume, microphone, camera, fullscreen,
  repeat, shuffle, menu, expand, sidebar,
  view, chevron-vertical, chevron-horizontal,
  panel, copy, like, bookmark, notification`,
  },
  {
    command: "add <name...>",
    description: "Copy one or more icon components into your project.",
    usage: addSingle,
    example: `$ npx @stateglyph/cli add upload
✓ Created src/stateglyph/upload-state-icon.tsx`,
  },
  {
    command: "add all",
    description: "Copy every available icon component.",
    usage: addAll,
    example: `$ npx @stateglyph/cli add all
✓ Created 31 icon components in src/stateglyph/`,
  },
] as const;

const options = [
  {
    flag: "--dir <path>",
    default: "src/stateglyph",
    description:
      "Target directory for generated files. Will be created if it doesn't exist.",
  },
  {
    flag: "--force",
    default: "false",
    description:
      "Overwrite existing files. By default, existing files are preserved.",
  },
] as const;

export default function CliPage() {
  return (
    <>
      {/* Header */}
      <div className="border-b border-[#2b2e2c] pb-10">
        <p className="font-mono text-xs text-[#7e837e]">Reference</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
          CLI Reference
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-[#a6aaa5]">
          The StateGlyph CLI copies editable component source files into your
          project. Own the code — customize it however you need.
        </p>
      </div>

      {/* Overview */}
      <section className="border-b border-[#2b2e2c] py-10">
        <h2 className="text-2xl font-semibold tracking-[-0.03em]">Overview</h2>
        <p className="mt-4 text-sm leading-7 text-[#929792]">
          The CLI is an alternative to installing{" "}
          <code className="rounded bg-[#1b1d1c] px-1.5 py-0.5 font-mono text-[11px] text-[#c5c8c3]">
            @stateglyph/react
          </code>{" "}
          as a dependency. Instead of importing from a package, the CLI
          generates editable TypeScript component files directly in your
          project. This is useful when you want to customize icons or avoid
          adding a runtime dependency.
        </p>

        <div className="mt-6 rounded-md border border-[#343735] bg-[#1a1c1b] p-5">
          <h3 className="text-sm font-medium">Requirements</h3>
          <ul className="mt-3 space-y-2 text-sm text-[#929792]">
            <li className="flex items-baseline gap-2">
              <span className="text-[#666b67]">•</span>
              <span>
                <code className="rounded bg-[#101211] px-1.5 py-0.5 font-mono text-[11px] text-[#c5c8c3]">
                  react
                </code>{" "}
                and{" "}
                <code className="rounded bg-[#101211] px-1.5 py-0.5 font-mono text-[11px] text-[#c5c8c3]">
                  lucide-react
                </code>{" "}
                installed in the receiving project
              </span>
            </li>
            <li className="flex items-baseline gap-2">
              <span className="text-[#666b67]">•</span>
              <span>Node.js 18 or newer</span>
            </li>
            <li className="flex items-baseline gap-2">
              <span className="text-[#666b67]">•</span>
              <span>
                No installation required — runs via{" "}
                <code className="rounded bg-[#101211] px-1.5 py-0.5 font-mono text-[11px] text-[#c5c8c3]">
                  npx
                </code>
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Commands */}
      <section className="border-b border-[#2b2e2c] py-10">
        <h2 className="text-2xl font-semibold tracking-[-0.03em]">Commands</h2>

        <div className="mt-8 space-y-10">
          {commands.map((cmd) => (
            <div key={cmd.command}>
              <h3 className="flex items-center gap-3">
                <code className="rounded bg-[#1b1d1c] px-2.5 py-1 font-mono text-sm text-[#c5c8c3]">
                  {cmd.command}
                </code>
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#929792]">
                {cmd.description}
              </p>

              <div className="mt-4 overflow-hidden rounded-md border border-[#343735] bg-[#101211]">
                <div className="flex items-center justify-between border-b border-[#2b2e2c] px-5 py-3">
                  <span className="font-mono text-[10px] text-[#7e837e]">
                    Terminal
                  </span>
                  <CopyButton value={cmd.usage} />
                </div>
                <pre className="overflow-x-auto p-6 font-mono text-xs leading-7 text-[#d9dbd7] sm:text-sm">
                  <HighlightedCode code={cmd.example} language="shell" />
                </pre>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Multiple icons */}
      <section className="border-b border-[#2b2e2c] py-10">
        <h2 className="text-2xl font-semibold tracking-[-0.03em]">
          Adding multiple icons
        </h2>
        <p className="mt-4 text-sm leading-7 text-[#929792]">
          Pass multiple icon names to add them in one command:
        </p>

        <div className="mt-6 flex items-center justify-between rounded-md border border-[#343735] bg-[#1b1d1c] px-4 py-3">
          <code className="overflow-x-auto font-mono text-xs text-[#d9dbd7] sm:text-sm">
            {addMultiple}
          </code>
          <CopyButton value={addMultiple} />
        </div>
      </section>

      {/* Options */}
      <section className="border-b border-[#2b2e2c] py-10">
        <h2 className="text-2xl font-semibold tracking-[-0.03em]">Options</h2>

        <div className="mt-6 overflow-x-auto rounded-md border border-[#343735]">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#2b2e2c] bg-[#171918]">
                <th className="whitespace-nowrap px-5 py-3 text-left font-mono text-[10px] uppercase tracking-wider text-[#666b67]">
                  Flag
                </th>
                <th className="whitespace-nowrap px-5 py-3 text-left font-mono text-[10px] uppercase tracking-wider text-[#666b67]">
                  Default
                </th>
                <th className="px-5 py-3 text-left font-mono text-[10px] uppercase tracking-wider text-[#666b67]">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#2b2e2c]">
              {options.map((opt) => (
                <tr key={opt.flag} className="bg-[#1a1c1b]">
                  <td className="whitespace-nowrap px-5 py-3.5 font-mono text-xs text-[#c5c8c3]">
                    {opt.flag}
                  </td>
                  <td className="whitespace-nowrap px-5 py-3.5 font-mono text-xs text-[#929792]">
                    {opt.default}
                  </td>
                  <td className="px-5 py-3.5 text-[#929792]">
                    {opt.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 space-y-3">
          <div className="flex items-center justify-between rounded-md border border-[#343735] bg-[#1b1d1c] px-4 py-3">
            <code className="overflow-x-auto font-mono text-xs text-[#d9dbd7] sm:text-sm">
              {addDir}
            </code>
            <CopyButton value={addDir} />
          </div>
          <div className="flex items-center justify-between rounded-md border border-[#343735] bg-[#1b1d1c] px-4 py-3">
            <code className="overflow-x-auto font-mono text-xs text-[#d9dbd7] sm:text-sm">
              {addForce}
            </code>
            <CopyButton value={addForce} />
          </div>
        </div>
      </section>

      {/* Generated output */}
      <section className="py-10">
        <h2 className="text-2xl font-semibold tracking-[-0.03em]">
          Generated output
        </h2>
        <p className="mt-4 text-sm leading-7 text-[#929792]">
          Each generated file is a self-contained component that imports from{" "}
          <code className="rounded bg-[#1b1d1c] px-1.5 py-0.5 font-mono text-[11px] text-[#c5c8c3]">
            @stateglyph/core
          </code>{" "}
          for definitions and{" "}
          <code className="rounded bg-[#1b1d1c] px-1.5 py-0.5 font-mono text-[11px] text-[#c5c8c3]">
            lucide-react
          </code>{" "}
          for SVG rendering. You can edit, extend, or refactor the generated
          code freely.
        </p>

        <div className="mt-6 overflow-hidden rounded-md border border-[#343735] bg-[#101211]">
          <div className="flex items-center justify-between border-b border-[#2b2e2c] px-5 py-3">
            <span className="font-mono text-[10px] text-[#7e837e]">
              Generated component
            </span>
            <CopyButton value={generatedExample} />
          </div>
          <pre className="overflow-x-auto p-6 font-mono text-xs leading-7 text-[#d9dbd7] sm:text-sm">
            <HighlightedCode code={generatedExample} />
          </pre>
        </div>

        <p className="mt-4 text-sm text-[#7e837e]">
          For the full icon list, see{" "}
          <Link
            href="/icons"
            className="text-[#c5c8c3] transition-colors hover:text-white"
          >
            Browse icons →
          </Link>
        </p>
      </section>
    </>
  );
}

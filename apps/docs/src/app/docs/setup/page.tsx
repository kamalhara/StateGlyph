import type { Metadata } from "next";
import Link from "next/link";

import { CopyButton } from "@/components/copy-button";
import { HighlightedCode } from "@/components/highlighted-code";

export const metadata: Metadata = {
  title: "Installation & Setup — StateGlyph",
  description:
    "Install StateGlyph and set it up in your React, Next.js, or Vite project.",
};

const npmInstall = "npm install @stateglyph/react";
const yarnInstall = "yarn add @stateglyph/react";
const pnpmInstall = "pnpm add @stateglyph/react";

const basicUsage = `import { UploadStateIcon } from "@stateglyph/react";

export function UploadButton() {
  return <UploadStateIcon state="idle" />;
}`;

const directImport = `// Import only the icon you need (better tree-shaking)
import { UploadStateIcon } from "@stateglyph/react/upload";`;

const nextjsConfig = `// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: [
    "@stateglyph/core",
    "@stateglyph/react",
  ],
};

export default nextConfig;`;

const accessibleUsage = `// Decorative (default) — hidden from screen readers
<UploadStateIcon state="loading" />

// Semantic — announced by screen readers
<UploadStateIcon
  state="success"
  decorative={false}
  label="Upload complete"
/>`;

const cliUsage = `# List available icons
npx @stateglyph/cli list

# Add a single icon
npx @stateglyph/cli add upload

# Add to a custom directory
npx @stateglyph/cli add upload --dir src/components/icons

# Add all icons
npx @stateglyph/cli add all`;

export default function SetupPage() {
  return (
    <>
      {/* Header */}
      <div className="border-b border-[#2b2e2c] pb-10">
        <p className="font-mono text-xs text-[#7e837e]">Getting started</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
          Installation & Setup
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-[#a6aaa5]">
          Get StateGlyph running in your project in under a minute. Works with
          any React 18+ environment.
        </p>
      </div>

      {/* Install */}
      <section className="border-b border-[#2b2e2c] py-10">
        <h2 className="text-2xl font-semibold tracking-[-0.03em]">
          Install the React package
        </h2>
        <p className="mt-4 text-sm leading-7 text-[#929792]">
          Choose your package manager:
        </p>

        <div className="mt-6 space-y-3">
          {[
            { label: "npm", command: npmInstall },
            { label: "yarn", command: yarnInstall },
            { label: "pnpm", command: pnpmInstall },
          ].map(({ label, command }) => (
            <div
              key={label}
              className="flex items-center justify-between rounded-md border border-[#343735] bg-[#1b1d1c] px-4 py-3"
            >
              <div className="flex items-center gap-4 overflow-x-auto">
                <span className="shrink-0 font-mono text-[10px] uppercase tracking-wider text-[#666b67]">
                  {label}
                </span>
                <code className="font-mono text-xs text-[#d9dbd7] sm:text-sm">
                  {command}
                </code>
              </div>
              <CopyButton value={command} />
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-md border border-[#343735] bg-[#1a1c1b] p-5">
          <h3 className="text-sm font-medium">Peer dependencies</h3>
          <p className="mt-2 text-sm leading-6 text-[#7e837e]">
            <code className="rounded bg-[#101211] px-1.5 py-0.5 font-mono text-[11px] text-[#c5c8c3]">
              @stateglyph/react
            </code>{" "}
            requires{" "}
            <code className="rounded bg-[#101211] px-1.5 py-0.5 font-mono text-[11px] text-[#c5c8c3]">
              react ≥ 18
            </code>{" "}
            and{" "}
            <code className="rounded bg-[#101211] px-1.5 py-0.5 font-mono text-[11px] text-[#c5c8c3]">
              lucide-react
            </code>
            . Both are listed as peer dependencies and will be installed
            automatically with most package managers.
          </p>
        </div>
      </section>

      {/* Basic usage */}
      <section className="border-b border-[#2b2e2c] py-10">
        <h2 className="text-2xl font-semibold tracking-[-0.03em]">
          Basic usage
        </h2>
        <p className="mt-4 text-sm leading-7 text-[#929792]">
          Import from the main package or from a specific icon path for better
          tree-shaking:
        </p>

        <div className="mt-6 space-y-4">
          <div className="overflow-hidden rounded-md border border-[#343735] bg-[#101211]">
            <div className="flex items-center justify-between border-b border-[#2b2e2c] px-5 py-3">
              <span className="font-mono text-[10px] text-[#7e837e]">
                Main import
              </span>
              <CopyButton value={basicUsage} />
            </div>
            <pre className="overflow-x-auto p-6 font-mono text-xs leading-7 text-[#d9dbd7] sm:text-sm">
              <HighlightedCode code={basicUsage} />
            </pre>
          </div>

          <div className="overflow-hidden rounded-md border border-[#343735] bg-[#101211]">
            <div className="flex items-center justify-between border-b border-[#2b2e2c] px-5 py-3">
              <span className="font-mono text-[10px] text-[#7e837e]">
                Direct import
              </span>
              <CopyButton value={directImport} />
            </div>
            <pre className="overflow-x-auto p-6 font-mono text-xs leading-7 text-[#d9dbd7] sm:text-sm">
              <HighlightedCode code={directImport} />
            </pre>
          </div>
        </div>
      </section>

      {/* Framework setup */}
      <section className="border-b border-[#2b2e2c] py-10">
        <h2 className="text-2xl font-semibold tracking-[-0.03em]">
          Framework setup
        </h2>

        <div className="mt-8 space-y-8">
          {/* Next.js */}
          <div>
            <h3 className="flex items-center gap-2 text-lg font-medium">
              <span className="grid size-7 place-items-center rounded border border-[#343735] bg-[#1a1c1b] font-mono text-[10px] text-[#929792]">
                N
              </span>
              Next.js
            </h3>
            <p className="mt-3 text-sm leading-7 text-[#929792]">
              If you&apos;re using Next.js with the App Router, add the
              StateGlyph packages to{" "}
              <code className="rounded bg-[#1b1d1c] px-1.5 py-0.5 font-mono text-[11px] text-[#c5c8c3]">
                transpilePackages
              </code>{" "}
              so they compile correctly:
            </p>
            <div className="mt-4 overflow-hidden rounded-md border border-[#343735] bg-[#101211]">
              <div className="flex items-center justify-between border-b border-[#2b2e2c] px-5 py-3">
                <span className="font-mono text-[10px] text-[#7e837e]">
                  next.config.ts
                </span>
                <CopyButton value={nextjsConfig} />
              </div>
              <pre className="overflow-x-auto p-6 font-mono text-xs leading-7 text-[#d9dbd7] sm:text-sm">
                <HighlightedCode code={nextjsConfig} language="typescript" />
              </pre>
            </div>
          </div>

          {/* Vite */}
          <div>
            <h3 className="flex items-center gap-2 text-lg font-medium">
              <span className="grid size-7 place-items-center rounded border border-[#343735] bg-[#1a1c1b] font-mono text-[10px] text-[#929792]">
                V
              </span>
              Vite
            </h3>
            <p className="mt-3 text-sm leading-7 text-[#929792]">
              Vite works out of the box. No configuration needed — just install
              and import. StateGlyph ships ESM and is fully tree-shakeable.
            </p>
          </div>
        </div>
      </section>

      {/* Accessibility */}
      <section className="border-b border-[#2b2e2c] py-10">
        <h2 className="text-2xl font-semibold tracking-[-0.03em]">
          Accessibility
        </h2>
        <p className="mt-4 text-sm leading-7 text-[#929792]">
          StateGlyph icons are decorative by default (
          <code className="rounded bg-[#1b1d1c] px-1.5 py-0.5 font-mono text-[11px] text-[#c5c8c3]">
            aria-hidden=&quot;true&quot;
          </code>
          ). When an icon communicates information not already conveyed by
          nearby text, set{" "}
          <code className="rounded bg-[#1b1d1c] px-1.5 py-0.5 font-mono text-[11px] text-[#c5c8c3]">
            {"decorative={false}"}
          </code>{" "}
          and optionally provide a custom{" "}
          <code className="rounded bg-[#1b1d1c] px-1.5 py-0.5 font-mono text-[11px] text-[#c5c8c3]">
            label
          </code>
          :
        </p>

        <div className="mt-6 overflow-hidden rounded-md border border-[#343735] bg-[#101211]">
          <div className="border-b border-[#2b2e2c] px-5 py-3">
            <span className="font-mono text-[10px] text-[#7e837e]">
              Decorative vs. semantic
            </span>
          </div>
          <pre className="overflow-x-auto p-6 font-mono text-xs leading-7 text-[#d9dbd7] sm:text-sm">
            <HighlightedCode code={accessibleUsage} />
          </pre>
        </div>
      </section>

      {/* CLI alternative */}
      <section className="border-b border-[#2b2e2c] py-10">
        <h2 className="text-2xl font-semibold tracking-[-0.03em]">
          Alternative: Copy with the CLI
        </h2>
        <p className="mt-4 text-sm leading-7 text-[#929792]">
          Prefer to own the source code? The CLI copies editable component files
          into your project. Generated components require{" "}
          <code className="rounded bg-[#1b1d1c] px-1.5 py-0.5 font-mono text-[11px] text-[#c5c8c3]">
            react
          </code>{" "}
          and{" "}
          <code className="rounded bg-[#1b1d1c] px-1.5 py-0.5 font-mono text-[11px] text-[#c5c8c3]">
            lucide-react
          </code>{" "}
          in the receiving project.
        </p>

        <div className="mt-6 overflow-hidden rounded-md border border-[#343735] bg-[#101211]">
          <div className="flex items-center justify-between border-b border-[#2b2e2c] px-5 py-3">
            <span className="font-mono text-[10px] text-[#7e837e]">
              Terminal
            </span>
            <CopyButton value={cliUsage} />
          </div>
          <pre className="overflow-x-auto p-6 font-mono text-xs leading-7 text-[#d9dbd7] sm:text-sm">
            <HighlightedCode code={cliUsage} language="shell" />
          </pre>
        </div>

        <p className="mt-4 text-sm text-[#7e837e]">
          See the{" "}
          <Link
            href="/docs/cli"
            className="text-[#c5c8c3] transition-colors hover:text-white"
          >
            CLI Reference →
          </Link>{" "}
          for all options.
        </p>
      </section>

      {/* TypeScript */}
      <section className="py-10">
        <h2 className="text-2xl font-semibold tracking-[-0.03em]">
          TypeScript
        </h2>
        <p className="mt-4 text-sm leading-7 text-[#929792]">
          StateGlyph ships full TypeScript definitions. Every icon component
          exports its own prop type (e.g.{" "}
          <code className="rounded bg-[#1b1d1c] px-1.5 py-0.5 font-mono text-[11px] text-[#c5c8c3]">
            UploadStateIconProps
          </code>
          ) with a typed{" "}
          <code className="rounded bg-[#1b1d1c] px-1.5 py-0.5 font-mono text-[11px] text-[#c5c8c3]">
            state
          </code>{" "}
          prop. No{" "}
          <code className="rounded bg-[#1b1d1c] px-1.5 py-0.5 font-mono text-[11px] text-[#c5c8c3]">
            @types
          </code>{" "}
          package needed.
        </p>
        <p className="mt-4 text-sm text-[#7e837e]">
          Check the{" "}
          <Link
            href="/docs/api"
            className="text-[#c5c8c3] transition-colors hover:text-white"
          >
            API Reference →
          </Link>{" "}
          for all exported types.
        </p>
      </section>
    </>
  );
}

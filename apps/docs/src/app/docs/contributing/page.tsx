import type { Metadata } from "next";

import { CopyButton } from "@/components/copy-button";

export const metadata: Metadata = {
  title: "Contributing — StateGlyph",
  description:
    "How to contribute to StateGlyph: local setup, adding icons, and submitting changes.",
};

const cloneSetup = `git clone https://github.com/kamalhara/StateGlyph.git
cd StateGlyph
npm install
npm run dev`;

const verifyCommands = `npm run lint
npm run typecheck
npm test
npm run build`;

const changesetCommand = "npm run changeset";

const steps = [
  {
    step: "01",
    title: "Set up the repository",
    description:
      "You need Node.js 22.19 or newer and npm 10.9 or newer. Clone the repo and install dependencies.",
    code: cloneSetup,
    filename: "Terminal",
  },
  {
    step: "02",
    title: "Make your change",
    description:
      "Keep each pull request focused on one improvement. Use existing Lucide icons when adding or changing an icon state. Include accessible labels and respect reduced-motion preferences.",
    code: null,
    filename: null,
  },
  {
    step: "03",
    title: "Verify your work",
    description:
      "Run the full verification suite before submitting. All checks must pass.",
    code: verifyCommands,
    filename: "Terminal",
  },
  {
    step: "04",
    title: "Create a changeset",
    description:
      "If your change affects a published package, create a changeset. Choose the affected package and explain the user-visible change. Do not edit package versions manually.",
    code: changesetCommand,
    filename: "Terminal",
  },
] as const;

const addingIconSteps = [
  "Add a typed icon definition in packages/core/src/icons/",
  "Export the definition from packages/core/src/index.ts",
  "Create a React component in packages/react/src/icons/",
  "Export the component from packages/react/src/index.ts",
  "Add Lucide icon mapping in packages/react/src/lucide/",
  "Add documentation entry in apps/docs/src/data/icon-catalog.tsx",
  "Write tests for metadata and state mappings",
];

const guidelines = [
  {
    title: "One PR per improvement",
    description:
      "Keep pull requests focused. Don't bundle unrelated changes together.",
  },
  {
    title: "Use existing Lucide icons",
    description:
      "StateGlyph builds on the Lucide icon set. Use existing Lucide glyphs when adding states.",
  },
  {
    title: "Include accessible labels",
    description:
      "Every state must have a human-readable label. These are used for ARIA attributes.",
  },
  {
    title: "Respect reduced motion",
    description:
      "Mark continuous states appropriately. CSS handles the rest via prefers-reduced-motion.",
  },
  {
    title: "Search before opening issues",
    description:
      "Check existing issues and PRs before opening a duplicate.",
  },
] as const;

export default function ContributingPage() {
  return (
    <>
      {/* Header */}
      <div className="border-b border-[#2b2e2c] pb-10">
        <p className="font-mono text-xs text-[#7e837e]">More</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
          Contributing
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-[#a6aaa5]">
          Thank you for helping improve StateGlyph. This guide covers
          everything from local setup to submitting your first pull request.
        </p>
      </div>

      {/* Workflow */}
      <section className="border-b border-[#2b2e2c] py-10">
        <h2 className="text-2xl font-semibold tracking-[-0.03em]">
          Contribution workflow
        </h2>

        <div className="mt-8 space-y-10">
          {steps.map((item) => (
            <article key={item.step} className="flex gap-5">
              <span className="mt-0.5 font-mono text-xs text-[#666b67]">
                {item.step}
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="font-medium">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#929792]">
                  {item.description}
                </p>

                {item.code && item.filename && (
                  <div className="mt-4 overflow-hidden rounded-md border border-[#343735] bg-[#101211]">
                    <div className="flex items-center justify-between border-b border-[#2b2e2c] px-5 py-3">
                      <span className="font-mono text-[10px] text-[#7e837e]">
                        {item.filename}
                      </span>
                      <CopyButton value={item.code} />
                    </div>
                    <pre className="overflow-x-auto p-6 font-mono text-xs leading-7 text-[#d9dbd7] sm:text-sm">
                      <code>{item.code}</code>
                    </pre>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Adding an icon */}
      <section className="border-b border-[#2b2e2c] py-10">
        <h2 className="text-2xl font-semibold tracking-[-0.03em]">
          Adding a new icon
        </h2>
        <p className="mt-4 text-sm leading-7 text-[#929792]">
          An icon needs changes across several packages. Follow this checklist:
        </p>

        <div className="mt-6 space-y-2">
          {addingIconSteps.map((step, index) => (
            <div
              key={index}
              className="flex items-baseline gap-4 rounded-md border border-[#343735] bg-[#1a1c1b] px-5 py-3"
            >
              <span className="shrink-0 font-mono text-[10px] text-[#666b67]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-sm text-[#929792]">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Guidelines */}
      <section className="border-b border-[#2b2e2c] py-10">
        <h2 className="text-2xl font-semibold tracking-[-0.03em]">
          Guidelines
        </h2>

        <div className="mt-8 divide-y divide-[#2b2e2c] border-y border-[#2b2e2c]">
          {guidelines.map((guideline, index) => (
            <article
              key={guideline.title}
              className="grid gap-3 py-6 sm:grid-cols-[48px_1fr] sm:items-baseline"
            >
              <span className="font-mono text-xs text-[#666b67]">
                0{index + 1}
              </span>
              <div>
                <h3 className="font-medium">{guideline.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#929792]">
                  {guideline.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Project structure */}
      <section className="border-b border-[#2b2e2c] py-10">
        <h2 className="text-2xl font-semibold tracking-[-0.03em]">
          Project structure
        </h2>
        <p className="mt-4 text-sm leading-7 text-[#929792]">
          StateGlyph is an npm workspace monorepo using TypeScript, Next.js,
          Tailwind CSS, tsup, and Vitest.
        </p>

        <div className="mt-6 overflow-hidden rounded-md border border-[#343735] bg-[#101211]">
          <pre className="overflow-x-auto p-6 font-mono text-xs leading-7 text-[#d9dbd7] sm:text-sm">
            <code>{`StateGlyph/
├── apps/
│   └── docs/          # Next.js documentation site
├── packages/
│   ├── core/          # Icon definitions & types
│   ├── react/         # React components
│   ├── cli/           # Copy-and-own CLI
│   └── transitions/   # Animation utilities
├── tests/             # Shared test utilities
└── tooling/           # Build tooling`}</code>
          </pre>
        </div>
      </section>

      {/* License */}
      <section className="py-10">
        <h2 className="text-2xl font-semibold tracking-[-0.03em]">License</h2>
        <p className="mt-4 text-sm leading-7 text-[#929792]">
          By contributing, you agree that your contribution is licensed under
          the{" "}
          <a
            href="https://github.com/kamalhara/StateGlyph/blob/main/LICENSE"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#c5c8c3] transition-colors hover:text-white"
          >
            MIT License
          </a>{" "}
          used by this repository. The underlying Lucide icons are available
          under the ISC License.
        </p>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

import { HighlightedCode } from "@/components/highlighted-code";

export const metadata: Metadata = {
  title: "Guide — StateGlyph",
  description:
    "Learn what StateGlyph is, how state icons work, and how to start using them in your React project.",
};

const concepts = [
  {
    title: "One component, many states",
    description:
      "Instead of importing separate icons for idle, loading, and success, you import one component and pass the state you need. The component knows which glyph to render.",
  },
  {
    title: "Typed state prop",
    description:
      "Every icon component accepts a state prop that is a TypeScript string literal union. Pass an invalid state and you'll get a type error at build time — no runtime surprises.",
  },
  {
    title: "Accessible by default",
    description:
      "Each state carries an ARIA label and role. Icons are decorative by default. Set decorative={false} and screen readers announce the current state automatically.",
  },
  {
    title: "Presentational only",
    description:
      "StateGlyph renders state — it never owns your async logic, timers, or business rules. You remain in full control of when and how state changes.",
  },
] as const;

export default function GuidePage() {
  return (
    <>
      {/* Header */}
      <div className="border-b border-[#2b2e2c] pb-10">
        <p className="font-mono text-xs text-[#7e837e]">Getting started</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
          Guide
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-[#a6aaa5]">
          StateGlyph is an open-source collection of typed React icons that
          communicate what an interface is doing — not just what an action looks
          like.
        </p>
      </div>

      {/* What is a state icon? */}
      <section className="border-b border-[#2b2e2c] py-10">
        <h2 className="text-2xl font-semibold tracking-[-0.03em]">
          What is a state icon?
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-[#929792]">
          Most icon libraries give you individual drawings — a cloud, an arrow,
          a checkmark. You then wire conditional rendering to swap between them
          as your UI changes. StateGlyph flips this: each component groups the
          related visual states of an interface action into a single import.
        </p>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-[#929792]">
          A button that uploads a file moves through{" "}
          <code className="rounded bg-[#1b1d1c] px-1.5 py-0.5 font-mono text-[11px] text-[#c5c8c3]">
            idle
          </code>{" "}
          →{" "}
          <code className="rounded bg-[#1b1d1c] px-1.5 py-0.5 font-mono text-[11px] text-[#c5c8c3]">
            loading
          </code>{" "}
          →{" "}
          <code className="rounded bg-[#1b1d1c] px-1.5 py-0.5 font-mono text-[11px] text-[#c5c8c3]">
            success
          </code>{" "}
          →{" "}
          <code className="rounded bg-[#1b1d1c] px-1.5 py-0.5 font-mono text-[11px] text-[#c5c8c3]">
            error
          </code>
          . With StateGlyph, you pass{" "}
          <code className="rounded bg-[#1b1d1c] px-1.5 py-0.5 font-mono text-[11px] text-[#c5c8c3]">
            {'state="loading"'}
          </code>{" "}
          and the right icon appears — typed, labelled, and accessible.
        </p>

        <div className="mt-8 overflow-hidden rounded-md border border-[#343735] bg-[#101211]">
          <div className="border-b border-[#2b2e2c] px-5 py-3">
            <span className="font-mono text-[10px] text-[#7e837e]">
              upload-button.tsx
            </span>
          </div>
          <pre className="overflow-x-auto p-6 font-mono text-xs leading-7 text-[#d9dbd7] sm:text-sm">
            <HighlightedCode
              code={`import { UploadStateIcon } from "@stateglyph/react";

function UploadButton({ status }) {
  return (
    <button>
      <UploadStateIcon state={status} size={20} />
      Upload file
    </button>
  );
}`}
            />
          </pre>
        </div>
      </section>

      {/* Core concepts */}
      <section className="border-b border-[#2b2e2c] py-10">
        <h2 className="text-2xl font-semibold tracking-[-0.03em]">
          Core concepts
        </h2>
        <div className="mt-8 divide-y divide-[#2b2e2c] border-y border-[#2b2e2c]">
          {concepts.map((concept, index) => (
            <article
              key={concept.title}
              className="grid gap-3 py-6 sm:grid-cols-[48px_1fr] sm:items-baseline"
            >
              <span className="font-mono text-xs text-[#666b67]">
                0{index + 1}
              </span>
              <div>
                <h3 className="font-medium">{concept.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#929792]">
                  {concept.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Packages overview */}
      <section className="border-b border-[#2b2e2c] py-10">
        <h2 className="text-2xl font-semibold tracking-[-0.03em]">Packages</h2>
        <p className="mt-4 text-sm leading-7 text-[#929792]">
          StateGlyph is published as a monorepo with four packages. Most
          projects only need the React package.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            {
              name: "@stateglyph/react",
              description:
                "Ready-to-use React components. Import, pass state, done.",
            },
            {
              name: "@stateglyph/core",
              description:
                "Framework-independent icon definitions, metadata, and TypeScript types.",
            },
            {
              name: "@stateglyph/cli",
              description:
                "Copy-and-own component generator. Copies editable source into your project.",
            },
            {
              name: "@stateglyph/transitions",
              description:
                "Optional CSS transitions with reduced-motion support.",
            },
          ].map((pkg) => (
            <div
              key={pkg.name}
              className="rounded-lg border border-[#343735] bg-[#1a1c1b] p-5"
            >
              <code className="font-mono text-xs text-[#c5c8c3]">
                {pkg.name}
              </code>
              <p className="mt-3 text-sm leading-6 text-[#7e837e]">
                {pkg.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick links */}
      <section className="py-10">
        <h2 className="text-2xl font-semibold tracking-[-0.03em]">
          Next steps
        </h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {[
            {
              label: "Installation & Setup",
              href: "/docs/setup",
              description: "Install the package and start using icons.",
            },
            {
              label: "API Reference",
              href: "/docs/api",
              description: "Full prop reference for every component.",
            },
            {
              label: "CLI Reference",
              href: "/docs/cli",
              description: "Generate copy-and-own components.",
            },
            {
              label: "Transitions",
              href: "/docs/transitions",
              description: "Add optional, accessible state animations.",
            },
            {
              label: "Browse Icons",
              href: "/icons",
              description: "Explore all 31 state icon components.",
            },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group rounded-lg border border-[#343735] bg-[#1a1c1b] p-5 transition-colors hover:border-[#454946]"
            >
              <h3 className="font-medium text-[#f0f1ed] group-hover:text-white">
                {link.label}{" "}
                <span className="text-[#666b67] transition-colors group-hover:text-[#929792]">
                  →
                </span>
              </h3>
              <p className="mt-2 text-sm text-[#7e837e]">{link.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

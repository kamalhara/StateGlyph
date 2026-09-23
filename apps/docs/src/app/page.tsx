import Link from "next/link";

import { CopyButton } from "@/components/copy-button";
import { HeroDemo } from "@/components/hero-demo";
import { RoadmapList } from "@/components/roadmap-list";
import { SiteHeader } from "@/components/site-header";
import {
  categoryDescriptions,
  iconCatalog,
  iconCategories,
} from "@/data/icon-catalog";

const installCommand = "npm install @stateglyph/react";

const collections = iconCategories.map((name) => {
  const icons = iconCatalog.filter((icon) => icon.category === name);

  return {
    name,
    description: categoryDescriptions[name],
    count: icons.length,
    icons,
  };
});

const howItWorks = [
  {
    step: "01",
    title: "Define states",
    description:
      "Each icon definition maps named states to their glyph, accessible label, and optional animation flag.",
  },
  {
    step: "02",
    title: "Pass your state",
    description:
      'Import the component and pass a typed state prop — "idle", "loading", "success", or any state the icon supports.',
  },
  {
    step: "03",
    title: "Ship accessible UI",
    description:
      "Every state carries an ARIA label and role. Add decorative={false} and screen readers announce the current state.",
  },
] as const;

const usageSnippet = `import { UploadStateIcon } from "@stateglyph/react";

function UploadButton({ status }: { status: UploadState }) {
  return (
    <button>
      <UploadStateIcon state={status} size={20} />
      Upload file
    </button>
  );
}`;

const principles = [
  [
    "One component, many states",
    "Related visual states live behind one stable component. No more switching between five separate icon imports.",
  ],
  [
    "Presentational only",
    "StateGlyph renders state — it never owns your async logic, timers, or business rules. You stay in control.",
  ],
  [
    "Typed and accessible",
    "Every state is a TypeScript literal. Every glyph ships with ARIA labels, roles, and reduced-motion support.",
  ],
  [
    "Open foundations",
    "Every glyph keeps its source library and license metadata. Currently built on Lucide icons (ISC license).",
  ],
] as const;

const waysToUse = [
  {
    label: "React package",
    title: "Import and ship",
    description:
      "Use ready-made, tree-shakeable components with typed state props in React, Next.js, or Vite.",
    href: "/docs/setup",
    action: "Read setup",
  },
  {
    label: "Copy-and-own CLI",
    title: "Keep the source",
    description:
      "Generate an editable component inside your project when you want full control over its markup and styles.",
    href: "/docs/cli",
    action: "Explore the CLI",
  },
  {
    label: "Core definitions",
    title: "Build your own renderer",
    description:
      "Use framework-independent metadata and TypeScript definitions for custom tooling or other UI layers.",
    href: "/docs/api",
    action: "View the API",
  },
] as const;

const roadmap = [
  {
    title: "More icon support",
    description:
      "More stateful components, categories, and source icon libraries—without changing the small API you already use.",
    detail: "Expanding the collection",
    points: [
      "New workflow and product categories",
      "Additional open-source icon foundations",
      "Source and license metadata for every glyph",
    ],
  },
  {
    title: "Custom icon support",
    description:
      "Bring your own SVGs and group them into typed states while keeping StateGlyph's accessibility and transition model.",
    detail: "Use your own artwork",
    points: [
      "Map your SVGs to named states",
      "Keep typed states and accessible labels",
      "Export a reusable React component",
    ],
  },
  {
    title: "Visual editor",
    description:
      "Build a state icon in the browser, preview each state, and copy the generated React and TypeScript code.",
    detail: "Create, preview, copy",
    points: [
      "Preview every state in the browser",
      "Adjust size, stroke, and transitions",
      "Copy generated React and TypeScript code",
    ],
  },
] as const;

export default function Home() {
  const totalStates = iconCatalog.reduce(
    (sum, icon) => sum + icon.states.length,
    0,
  );

  return (
    <main className="min-h-screen bg-[#141615] text-[#f0f1ed]">
      <SiteHeader />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* ── Hero ──────────────────────────────────────────── */}
        <section className="grid gap-12 py-16 sm:py-24 lg:grid-cols-[1fr_320px] lg:items-center">
          <div className="hero-enter max-w-4xl">
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <p className="font-mono text-xs text-[#929792]">
                Open-source · React · TypeScript · {iconCatalog.length} icons
              </p>
              <span className="rounded border border-[#343735] bg-[#1b1d1c] px-2 py-1 font-mono text-[10px] text-[#a6aaa5]">
                Early access
              </span>
            </div>
            <h1 className="text-5xl leading-[1.02] font-semibold tracking-[-0.055em] sm:text-7xl">
              Icons that understand
              <br className="hidden sm:block" /> interface state.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#a6aaa5]">
              StateGlyph groups the related visual states of an interface action
              into one typed, accessible React component — so a button can move
              from idle → loading → success without scattered icon logic.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="/icons"
                className="rounded-md bg-[#e4e6e1] px-4 py-2.5 text-sm font-medium text-[#141615] transition-colors hover:bg-white"
              >
                Browse {iconCatalog.length} icons
              </Link>
              <a
                href="https://github.com/kamalhara/StateGlyph"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-[#3c403d] px-4 py-2.5 text-sm text-[#c5c8c3] transition-colors hover:border-[#666b67] hover:text-white"
              >
                View on GitHub
              </a>
              <a
                href="#how-it-works"
                className="px-2 py-2.5 text-sm text-[#7e837e] transition-colors hover:text-white"
              >
                How it works ↓
              </a>
            </div>
          </div>

          <div className="hero-enter hero-enter--late hidden lg:flex lg:justify-center">
            <HeroDemo />
          </div>
        </section>

        {/* ── Stats bar ─────────────────────────────────────── */}
        <section className="grid grid-cols-2 gap-5 border-y border-[#2b2e2c] py-8 sm:grid-cols-4">
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#737873]">
              Icons
            </dt>
            <dd className="mt-2 text-2xl font-semibold tabular-nums">
              {iconCatalog.length}
            </dd>
          </div>
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#737873]">
              Total states
            </dt>
            <dd className="mt-2 text-2xl font-semibold tabular-nums">
              {totalStates}
            </dd>
          </div>
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#737873]">
              Categories
            </dt>
            <dd className="mt-2 text-2xl font-semibold tabular-nums">
              {iconCategories.length}
            </dd>
          </div>
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#737873]">
              License
            </dt>
            <dd className="mt-2 text-sm font-medium">MIT · Open source</dd>
          </div>
        </section>

        {/* ── Install ───────────────────────────────────────── */}
        <section className="grid gap-8 py-14 lg:grid-cols-[1fr_1fr] lg:items-center lg:py-20">
          <div>
            <p className="font-mono text-xs text-[#7e837e]">Get started</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em]">
              One package. Every state.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-[#929792]">
              Install the React package and start using typed, accessible state
              icons in minutes. Tree-shaking ensures you only ship what you use.
            </p>
          </div>
          <div className="flex items-center justify-between rounded-md border border-[#343735] bg-[#1b1d1c] px-4 py-3">
            <code className="overflow-x-auto font-mono text-xs text-[#d9dbd7] sm:text-sm">
              {installCommand}
            </code>
            <CopyButton value={installCommand} />
          </div>
        </section>

        {/* ── How it works ──────────────────────────────────── */}
        <section
          id="how-it-works"
          className="grid gap-12 border-t border-[#2b2e2c] py-14 lg:grid-cols-[1fr_1.2fr] lg:py-20"
        >
          <div>
            <p className="font-mono text-xs text-[#7e837e]">How it works</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em]">
              From state prop to accessible icon.
            </h2>

            <div className="mt-10 space-y-8">
              {howItWorks.map(({ step, title, description }) => (
                <article key={step} className="flex gap-5">
                  <span className="mt-0.5 font-mono text-xs text-[#666b67]">
                    {step}
                  </span>
                  <div>
                    <h3 className="font-medium">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#929792]">
                      {description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-md border border-[#343735] bg-[#101211]">
            <div className="flex items-center justify-between border-b border-[#2b2e2c] px-5 py-3">
              <span className="font-mono text-[10px] text-[#7e837e]">
                upload-button.tsx
              </span>
              <CopyButton value={usageSnippet} />
            </div>
            <pre className="overflow-x-auto p-6 font-mono text-xs leading-7 text-[#d9dbd7] sm:text-sm">
              <code>{usageSnippet}</code>
            </pre>
          </div>
        </section>

        {/* ── Ways to use ───────────────────────────────────── */}
        <section className="border-t border-[#2b2e2c] py-14 lg:py-20">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-xs text-[#7e837e]">
                Use it your way
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em]">
                Start simple. Own as much as you need.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-[#929792]">
              Choose the integration that fits your project today. All three
              paths use the same state definitions and accessibility model.
            </p>
          </div>

          <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-[#343735] bg-[#343735] md:grid-cols-3">
            {waysToUse.map((way, index) => (
              <article key={way.title} className="group bg-[#1a1c1b] p-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#666b67]">
                    {way.label}
                  </span>
                  <span className="font-mono text-[10px] text-[#555a56]">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-8 text-lg font-medium">{way.title}</h3>
                <p className="mt-3 min-h-20 text-sm leading-6 text-[#7e837e]">
                  {way.description}
                </p>
                <Link
                  href={way.href}
                  className="mt-6 inline-flex items-center gap-2 text-sm text-[#c5c8c3] transition-colors hover:text-white"
                >
                  {way.action}
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* ── Collections ───────────────────────────────────── */}
        <section
          id="collections"
          className="border-t border-[#2b2e2c] py-14 lg:py-20"
        >
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-xs text-[#7e837e]">Collections</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em]">
                Organized by interface intent.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-[#929792]">
              Icons are grouped by what the user is doing — uploading, playing
              media, navigating — so you find related states together.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {collections.map((collection, index) => (
              <article
                key={collection.name}
                className="group flex flex-col rounded-lg border border-[#343735] bg-[#1a1c1b] transition-[border-color,transform] duration-300 motion-safe:hover:-translate-y-1 hover:border-[#454946]"
              >
                {/* Icon preview strip */}
                <div
                  className="grid divide-x divide-[#2b2e2c] border-b border-[#2b2e2c] bg-[#171918] rounded-t-lg"
                  style={{
                    gridTemplateColumns: `repeat(${Math.min(collection.icons.length, 4)}, minmax(0, 1fr))`,
                  }}
                >
                  {collection.icons.slice(0, 4).map((icon) => (
                    <div
                      key={icon.slug}
                      className="grid aspect-square place-items-center text-[#929792] group-hover:text-[#c5c8c3] transition-colors"
                    >
                      {icon.render({ state: icon.states[0].name, size: 22 })}
                    </div>
                  ))}
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[#666b67]">
                      0{index + 1}
                    </span>
                    <span className="rounded border border-[#343735] px-2 py-1 font-mono text-[10px] text-[#7e837e]">
                      {collection.count}{" "}
                      {collection.count === 1 ? "icon" : "icons"}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-medium">
                    {collection.name}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#7e837e]">
                    {collection.description}
                  </p>
                  <Link
                    href="/icons"
                    className="mt-auto pt-6 text-sm text-[#c5c8c3] transition-colors hover:text-white"
                  >
                    Explore collection →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── Roadmap ──────────────────────────────────────── */}
        <section
          id="roadmap"
          className="grid gap-12 border-t border-[#2b2e2c] py-14 lg:grid-cols-[0.8fr_1.2fr] lg:py-20"
        >
          <div>
            <div className="flex items-center gap-3">
              <p className="font-mono text-xs text-[#7e837e]">Roadmap</p>
              <span className="rounded border border-[#343735] px-2 py-1 font-mono text-[10px] text-[#929792]">
                Coming soon
              </span>
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em]">
              A larger library, with room for your icons.
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-7 text-[#929792]">
              The first release focuses on a dependable set of state icons. The
              next phase makes the collection broader and gives you tools to
              create stateful icons from your own visual language.
            </p>
          </div>

          <RoadmapList items={roadmap} />
        </section>

        {/* ── Principles / About ────────────────────────────── */}
        <section
          id="about"
          className="grid gap-12 border-t border-[#2b2e2c] py-14 lg:grid-cols-[0.8fr_1.2fr] lg:py-20"
        >
          <div>
            <p className="font-mono text-xs text-[#7e837e]">Principles</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em]">
              A focused icon system for changing UI.
            </h2>
            <p className="mt-5 max-w-lg leading-7 text-[#929792]">
              Most icon libraries give you individual drawings. StateGlyph adds
              the missing relationship between them — so a button or status can
              move through its lifecycle without scattered imports and
              conditional rendering.
            </p>
          </div>

          <div className="divide-y divide-[#2b2e2c] border-y border-[#2b2e2c]">
            {principles.map(([title, description], index) => (
              <article
                key={title}
                className="grid gap-3 py-6 sm:grid-cols-[48px_1fr] sm:items-baseline"
              >
                <span className="font-mono text-xs text-[#666b67]">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="font-medium">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#929792]">
                    {description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

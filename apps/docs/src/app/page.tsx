import Link from "next/link";

import { CopyButton } from "@/components/copy-button";
import { SiteHeader } from "@/components/site-header";
import { iconCatalog } from "@/data/icon-catalog";

const installCommand = "npm install @stateicons/react";

const collections = [
  {
    name: "File actions",
    description: "Upload, download, sync, and transfer states.",
    status: `${iconCatalog.filter((icon) => icon.category === "File actions").length} available`,
    href: "/icons",
  },
  {
    name: "System feedback",
    description: "Status, validation, alerts, and progress states.",
    status: "Planned",
  },
  {
    name: "Navigation",
    description: "Directional actions and changing navigation states.",
    status: "Planned",
  },
] as const;

const principles = [
  ["One component", "Related visual states live behind one stable component."],
  [
    "Your state",
    "The library presents state; it never owns application logic.",
  ],
  ["Open foundations", "Each glyph keeps its source and license metadata."],
] as const;

export default function Home() {
  return (
    <main className="min-h-screen bg-[#141615] text-[#f0f1ed]">
      <SiteHeader />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <section className="grid gap-12 py-16 sm:py-24 lg:grid-cols-[1fr_360px] lg:items-end">
          <div className="max-w-4xl">
            <p className="mb-5 font-mono text-xs text-[#929792]">
              Open-source · React · TypeScript
            </p>
            <h1 className="text-5xl leading-[1.02] font-semibold tracking-[-0.055em] sm:text-7xl">
              Icons that understand
              <br className="hidden sm:block" /> interface state.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#a6aaa5]">
              StateIcons groups the related visual states of an interface action
              into one typed, accessible React component.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="/icons"
                className="rounded-md bg-[#e4e6e1] px-4 py-2.5 text-sm font-medium text-[#141615] transition-colors hover:bg-white"
              >
                Browse icons
              </Link>
              <a
                href="#about"
                className="rounded-md border border-[#3c403d] px-4 py-2.5 text-sm text-[#c5c8c3] transition-colors hover:border-[#666b67] hover:text-white"
              >
                About the project
              </a>
            </div>
          </div>

          <div className="border-t border-[#343735] pt-5 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
            <dl className="grid grid-cols-3 gap-5 lg:grid-cols-1">
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#737873]">
                  Available
                </dt>
                <dd className="mt-2 text-sm">{iconCatalog.length} of 30</dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#737873]">
                  Built for
                </dt>
                <dd className="mt-2 text-sm">React</dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#737873]">
                  License
                </dt>
                <dd className="mt-2 text-sm">Open source</dd>
              </div>
            </dl>
          </div>
        </section>

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
              Find icons by what the user is doing, then open a dedicated page
              for every supported state and usage detail.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {collections.map((collection, index) => (
              <article
                key={collection.name}
                className="flex min-h-52 flex-col rounded-lg border border-[#343735] bg-[#1a1c1b] p-5"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#666b67]">
                    0{index + 1}
                  </span>
                  <span className="rounded border border-[#343735] px-2 py-1 font-mono text-[10px] text-[#7e837e]">
                    {collection.status}
                  </span>
                </div>
                <h3 className="mt-8 text-lg font-medium">{collection.name}</h3>
                <p className="mt-2 text-sm leading-6 text-[#7e837e]">
                  {collection.description}
                </p>
                {"href" in collection ? (
                  <Link
                    href={collection.href}
                    className="mt-auto pt-6 text-sm text-[#c5c8c3] transition-colors hover:text-white"
                  >
                    Explore collection →
                  </Link>
                ) : (
                  <span className="mt-auto pt-6 text-sm text-[#5f645f]">
                    On the roadmap
                  </span>
                )}
              </article>
            ))}
          </div>
        </section>

        <section
          id="about"
          className="grid gap-12 border-t border-[#2b2e2c] py-14 lg:grid-cols-[0.8fr_1.2fr] lg:py-20"
        >
          <div>
            <p className="font-mono text-xs text-[#7e837e]">About</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em]">
              A focused icon system for changing UI.
            </h2>
            <p className="mt-5 max-w-lg leading-7 text-[#929792]">
              Most icon libraries give you individual drawings. StateIcons adds
              the missing relationship between them, so a button or status can
              move from idle to loading to success without scattered icon logic.
            </p>
          </div>

          <div className="divide-y divide-[#2b2e2c] border-y border-[#2b2e2c]">
            {principles.map(([title, description], index) => (
              <article
                key={title}
                className="grid gap-3 py-6 sm:grid-cols-[48px_180px_1fr] sm:items-baseline"
              >
                <span className="font-mono text-xs text-[#666b67]">
                  0{index + 1}
                </span>
                <h3 className="font-medium">{title}</h3>
                <p className="text-sm leading-6 text-[#929792]">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-8 border-t border-[#2b2e2c] py-14 lg:grid-cols-[1fr_1fr] lg:items-center lg:py-20">
          <div>
            <p className="font-mono text-xs text-[#7e837e]">Install</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em]">
              Start with the React package.
            </h2>
          </div>
          <div className="flex items-center justify-between rounded-md border border-[#343735] bg-[#1b1d1c] px-4 py-3">
            <code className="overflow-x-auto font-mono text-xs text-[#d9dbd7] sm:text-sm">
              {installCommand}
            </code>
            <CopyButton value={installCommand} />
          </div>
        </section>
      </div>

      <footer className="border-t border-[#2b2e2c] bg-[#101211]">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 px-5 py-7 text-sm text-[#7e837e] sm:flex-row sm:px-8">
          <span>StateIcons · Open source</span>
          <Link className="transition-colors hover:text-white" href="/icons">
            Browse the library →
          </Link>
        </div>
      </footer>
    </main>
  );
}

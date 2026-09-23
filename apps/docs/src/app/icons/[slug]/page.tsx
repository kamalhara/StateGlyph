import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CopyButton } from "@/components/copy-button";
import { StateSwitcher } from "@/components/state-switcher";
import { getIconBySlug, iconCatalog } from "@/data/icon-catalog";

type IconPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return iconCatalog.map((icon) => ({ slug: icon.slug }));
}

export async function generateMetadata({
  params,
}: IconPageProps): Promise<Metadata> {
  const { slug } = await params;
  const icon = getIconBySlug(slug);

  if (!icon) {
    return {};
  }

  return {
    title: `${icon.name} state icon — StateIcons`,
    description: icon.description,
  };
}

export default async function IconPage({ params }: IconPageProps) {
  const { slug } = await params;
  const icon = getIconBySlug(slug);

  if (!icon) {
    notFound();
  }

  return (
    <>
      {/* ── Header ──────────────────────────────────────── */}
      <div className="border-b border-[#2b2e2c] pb-10">
        <p className="font-mono text-xs text-[#7e837e]">{icon.category}</p>
        <div className="mt-3 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <h1 className="text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
              {icon.name}
            </h1>
            <code className="mt-3 block font-mono text-sm text-[#7e837e]">
              {icon.componentName}
            </code>
          </div>
          <p className="max-w-md text-sm leading-6 text-[#929792]">
            {icon.description}
          </p>
        </div>
      </div>

      {/* ── Interactive preview + States grid ────────────── */}
      <section className="py-10">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-medium">States</h2>
          <span className="font-mono text-xs text-[#666b67]">
            {icon.states.length} total
          </span>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          {/* Interactive switcher */}
          <StateSwitcher
            states={icon.states}
            renderedStates={icon.states.map((state) => (
              <div key={state.name}>
                {icon.render({
                  state: state.name,
                  size: 56,
                  className: state.continuous
                    ? "catalog-icon--loading"
                    : undefined,
                })}
              </div>
            ))}
          />

          {/* State detail cards */}
          <div className="grid content-start gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {icon.states.map((state, index) => (
              <article
                key={state.name}
                className="flex items-start gap-4 rounded-lg border border-[#343735] bg-[#1a1c1b] p-4"
              >
                <div className="grid size-10 shrink-0 place-items-center rounded-md border border-[#2b2e2c] bg-[#171918] text-[#c5c8c3]">
                  {icon.render({
                    state: state.name,
                    size: 20,
                    className: state.continuous
                      ? "catalog-icon--loading"
                      : undefined,
                  })}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-medium">{state.label}</h3>
                    <code className="font-mono text-[10px] text-[#666b67]">
                      &quot;{state.name}&quot;
                    </code>
                    {state.continuous && (
                      <span className="rounded border border-[#343735] px-1.5 py-0.5 font-mono text-[9px] text-[#737873]">
                        animated
                      </span>
                    )}
                  </div>
                  <p className="mt-1.5 text-xs leading-5 text-[#7e837e]">
                    {state.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Implementation ──────────────────────────────── */}
      <section className="grid gap-8 border-t border-[#2b2e2c] py-10 lg:grid-cols-[0.65fr_1.35fr]">
        <div>
          <p className="font-mono text-xs text-[#7e837e]">Implementation</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">
            Pass your current state.
          </h2>
          <p className="mt-4 text-sm leading-6 text-[#929792]">
            The component stays presentational. Your application remains in
            control of async work and business logic. The{" "}
            <code className="rounded bg-[#1b1d1c] px-1.5 py-0.5 font-mono text-[11px] text-[#c5c8c3]">
              state
            </code>{" "}
            prop is a TypeScript string literal union — pass an invalid state and
            you&apos;ll get a type error at build time.
          </p>

          <dl className="mt-7 divide-y divide-[#2b2e2c] border-y border-[#2b2e2c] text-sm">
            <div className="flex justify-between py-3">
              <dt className="text-[#7e837e]">Source</dt>
              <dd>{icon.source}</dd>
            </div>
            <div className="flex justify-between py-3">
              <dt className="text-[#7e837e]">License</dt>
              <dd>{icon.license}</dd>
            </div>
            <div className="flex justify-between py-3">
              <dt className="text-[#7e837e]">States</dt>
              <dd className="font-mono text-xs">
                {icon.states.map((s) => s.name).join(" · ")}
              </dd>
            </div>
          </dl>
        </div>

        <div className="overflow-hidden rounded-md border border-[#343735] bg-[#101211]">
          <div className="flex items-center justify-between border-b border-[#2b2e2c] px-5 py-3">
            <span className="font-mono text-[10px] text-[#7e837e]">
              example.tsx
            </span>
            <CopyButton value={icon.usage} />
          </div>
          <pre className="overflow-x-auto p-6 font-mono text-sm leading-7 text-[#d9dbd7]">
            <code>{icon.usage}</code>
          </pre>
        </div>
      </section>
    </>
  );
}

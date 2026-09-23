"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { iconCatalog } from "@/data/icon-catalog";

export function IconCatalog() {
  const [query, setQuery] = useState("");

  const matchingIcons = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return iconCatalog;
    }

    return iconCatalog.filter((icon) =>
      [icon.name, icon.componentName, icon.category, ...icon.keywords]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery),
    );
  }, [query]);

  return (
    <div>
      <div className="flex flex-col gap-3 border-y border-[#2b2e2c] py-4 sm:flex-row sm:items-center sm:justify-between">
        <label className="flex min-h-11 flex-1 items-center gap-3 rounded-md border border-[#343735] bg-[#1b1d1c] px-4 sm:max-w-lg">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="size-4 shrink-0 text-[#747974]"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-4-4" />
          </svg>
          <span className="sr-only">Search icons</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search icons..."
            className="min-w-0 flex-1 bg-transparent text-sm text-[#f0f1ed] outline-none placeholder:text-[#666b67]"
          />
          <kbd className="hidden rounded border border-[#3b3f3c] px-1.5 py-0.5 font-mono text-[10px] text-[#747974] sm:block">
            /
          </kbd>
        </label>

        <p className="font-mono text-xs text-[#747974]">
          {matchingIcons.length} {matchingIcons.length === 1 ? "icon" : "icons"}
        </p>
      </div>

      {matchingIcons.length > 0 ? (
        <div className="grid gap-4 pt-6 md:grid-cols-2 xl:grid-cols-3">
          {matchingIcons.map((icon) => (
            <article
              key={icon.slug}
              className="overflow-hidden rounded-lg border border-[#343735] bg-[#1a1c1b]"
            >
              <div className="grid grid-cols-4 divide-x divide-[#2b2e2c] border-b border-[#2b2e2c] bg-[#171918]">
                {icon.states.map((state) => (
                  <div
                    key={state.name}
                    className="grid aspect-square place-items-center text-[#c5c8c3]"
                    title={state.name}
                  >
                    {icon.render({
                      state: state.name,
                      size: 26,
                      className:
                        state.name === "loading"
                          ? "catalog-icon--loading"
                          : undefined,
                    })}
                  </div>
                ))}
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <h2 className="font-medium">{icon.name}</h2>
                    <code className="mt-1 block font-mono text-xs text-[#7e837e]">
                      {icon.componentName}
                    </code>
                  </div>
                  <span className="rounded border border-[#343735] px-2 py-1 font-mono text-[10px] text-[#929792]">
                    {icon.states.length} states
                  </span>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-[#2b2e2c] pt-4 text-xs">
                  <span className="text-[#7e837e]">
                    {icon.source} · {icon.category}
                  </span>
                  <Link
                    href={`/icons/${icon.slug}`}
                    className="text-[#c5c8c3] transition-colors hover:text-white"
                  >
                    Open icon →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="grid min-h-56 place-items-center border-b border-[#2b2e2c] text-center">
          <div>
            <p className="font-medium">No icons found</p>
            <p className="mt-2 text-sm text-[#7e837e]">
              Try a name, component, or category.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

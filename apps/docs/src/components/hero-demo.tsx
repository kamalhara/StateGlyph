"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

import { defineStateIcon, stateIconCatalog } from "@stateglyph/core";
import { StateIcon } from "@stateglyph/react";

import { getIconBySlug } from "@/data/icon-catalog";

const examples = [
  "wifi",
  "lock",
  "volume",
  "play-pause",
  "theme",
  "notification",
  "visibility",
  "bookmark",
  "menu",
].map((slug) => {
  const icon = getIconBySlug(slug);
  const definition = stateIconCatalog.find((entry) => entry.id === slug);
  if (!icon || !definition)
    throw new Error(`Missing homepage example: ${slug}`);
  return { ...icon, definition };
});

// One component keeps the outgoing glyph when changing to a different example.
const previewDefinition = defineStateIcon({
  id: "homepage-preview",
  title: "Live icon preview",
  description: "Explore interface icon states.",
  category: "navigation",
  states: Object.fromEntries(
    examples.flatMap((icon) =>
      Object.entries(icon.definition.states).map(([name, state]) => [
        `${icon.slug}:${name}`,
        state,
      ]),
    ),
  ),
  initialState: "wifi:off",
  transition: "morph",
  tags: [],
  source: {
    library: "lucide",
    license: "ISC",
    url: "https://lucide.dev",
    icons: examples.flatMap((icon) => [...icon.definition.source.icons]),
  },
});

function subscribeToMotion(callback: () => void) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}
function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function serverMotion() {
  return false;
}

export function HeroDemo() {
  const [indices, setIndices] = useState(() => examples.map(() => 0));
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const cursor = useRef(0);
  const reducedMotion = useSyncExternalStore(
    subscribeToMotion,
    prefersReducedMotion,
    serverMotion,
  );

  useEffect(() => {
    if (isPaused || reducedMotion) return;
    const timer = window.setInterval(() => {
      const next = cursor.current++ % examples.length;
      setActiveIndex(next);
      setIndices((current) =>
        current.map((index, i) =>
          i === next ? (index + 1) % examples[i].states.length : index,
        ),
      );
    }, 1400);
    return () => window.clearInterval(timer);
  }, [isPaused, reducedMotion]);

  const activeIcon = examples[activeIndex];
  const activeState = activeIcon.states[indices[activeIndex]];

  return (
    <section
      aria-label="Live icon previews"
      data-home-preview
      className="overflow-hidden rounded-xl border border-[#343735] bg-[#1a1c1b]"
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-3 border-b border-[#2b2e2c] px-5 py-3.5">
        <div className="flex items-center gap-3">
          <p className="font-mono text-[10px] text-[#666b67]">Icon preview</p>
          <span
            className="font-mono text-[10px] tabular-nums text-[#666b67]"
            aria-hidden="true"
          >
            {String(activeIndex + 1).padStart(2, "0")} / {examples.length}
          </span>
        </div>
        <button
          type="button"
          onClick={() => setIsPaused((paused) => !paused)}
          disabled={reducedMotion}
          aria-label={
            reducedMotion
              ? "Manual icon previews"
              : isPaused
                ? "Play icon previews"
                : "Pause icon previews"
          }
          aria-pressed={!isPaused && !reducedMotion}
          className="shrink-0 rounded border border-[#343735] px-2.5 py-1 font-mono text-[10px] text-[#929792] transition-colors hover:border-[#666b67] hover:text-[#c5c8c3] disabled:opacity-60"
        >
          {reducedMotion ? "Manual" : isPaused ? "Play" : "Pause"}
        </button>
      </div>

      {/* Active icon large preview */}
      <div className="flex items-center gap-4 border-b border-[#2b2e2c] bg-[#171918] px-5 py-4">
        <div className="grid size-14 shrink-0 place-items-center rounded-lg border border-[#2b2e2c] bg-[#1a1c1b] text-[#e4e6e1]">
          <StateIcon
            definition={previewDefinition}
            state={`${activeIcon.slug}:${activeState.name}`}
            transition={activeIcon.definition.transition}
            size={28}
            duration={280}
            decorative
          />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-[#e4e6e1]">
            {activeIcon.name}
          </p>
          <p className="mt-0.5 font-mono text-[10px] text-[#747974]">
            {activeState.name}
            {activeState.continuous && (
              <span className="ml-1.5 text-[#555a56]">· animated</span>
            )}
          </p>
        </div>
      </div>

      <p className="border-b border-[#2b2e2c] px-5 py-2.5 font-mono text-[10px] text-[#666b67]">
        Select and click on any icon to change its states
      </p>

      {/* Icon grid */}
      <div className="grid grid-cols-3 gap-px bg-[#2b2e2c]">
        {examples.map((icon, i) => {
          const state = icon.states[indices[i]].name;
          const isActive = i === activeIndex;
          return (
            <button
              key={icon.slug}
              type="button"
              aria-label={`${icon.name}: ${state}. Show next state`}
              aria-pressed={isActive}
              data-active={isActive}
              data-playing={!isPaused && !reducedMotion}
              onClick={() => {
                setIsPaused(true);
                cursor.current = (i + 1) % examples.length;
                setActiveIndex(i);
                setIndices((current) =>
                  current.map((index, j) =>
                    j === i ? (index + 1) % icon.states.length : index,
                  ),
                );
              }}
              className={`preview-tile flex min-w-0 flex-col items-center gap-2.5 bg-[#171918] px-2 py-4 transition-colors focus-visible:relative focus-visible:z-10 focus-visible:outline-offset-[-3px] ${
                isActive
                  ? "bg-[#1e211f] text-[#e4e6e1]"
                  : "text-[#929792] hover:bg-[#1e211f] hover:text-[#c5c8c3]"
              }`}
            >
              <span
                key={state}
                className="preview-progress"
                aria-hidden="true"
              />
              {icon.render({ state, size: 24 })}
              <span className="max-w-full truncate text-[10px]">
                {icon.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Code preview */}
      <div className="scrollbar-hidden overflow-x-auto border-t border-[#2b2e2c] px-4 py-3">
        <code className="block whitespace-nowrap font-mono text-[10px] text-[#747974]">
          <span className="text-[#666b67]">&lt;</span>
          <span className="text-[#a6aaa5]">
            {activeIcon.componentName}
          </span>{" "}
          <span className="text-[#666b67]">state=</span>
          <span className="text-[#c5d5b4]">
            &quot;{activeState.name}&quot;
          </span>{" "}
          <span className="text-[#666b67]">/&gt;</span>
        </code>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

import { getIconBySlug } from "@/data/icon-catalog";

const examples = [
  "menu",
  "play-pause",
  "theme",
  "copy",
  "visibility",
  "bookmark",
].map((slug) => {
  const icon = getIconBySlug(slug);
  if (!icon) throw new Error(`Missing homepage example: ${slug}`);
  return icon;
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
    }, 1200);
    return () => window.clearInterval(timer);
  }, [isPaused, reducedMotion]);

  const activeIcon = examples[activeIndex];
  const activeState = activeIcon.states[indices[activeIndex]].name;

  return (
    <section
      aria-label="Live icon previews"
      data-home-preview
      className="overflow-hidden rounded-xl border border-[#343735] bg-[#1a1c1b]"
    >
      <div className="flex items-center justify-between gap-3 border-b border-[#2b2e2c] px-5 py-4">
        <div>
          <p className="text-sm font-medium">Everyday UI, in motion</p>
          <p className="mt-1 text-xs text-[#929792]">
            Click an icon to try its next state.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setIsPaused((paused) => !paused)}
          disabled={reducedMotion}
          aria-label={isPaused ? "Play icon previews" : "Pause icon previews"}
          aria-pressed={!isPaused && !reducedMotion}
          className="shrink-0 rounded border border-[#343735] px-2.5 py-1.5 font-mono text-[10px] text-[#c5c8c3] transition-colors hover:border-[#666b67] disabled:opacity-60"
        >
          {reducedMotion ? "Manual" : isPaused ? "Play" : "Pause"}
        </button>
      </div>

      <div className="grid grid-cols-3 gap-px bg-[#2b2e2c]">
        {examples.map((icon, i) => {
          const state = icon.states[indices[i]].name;
          return (
            <button
              key={icon.slug}
              type="button"
              aria-label={`${icon.name}: ${state}. Show next state`}
              onClick={() => {
                setIsPaused(true);
                setActiveIndex(i);
                setIndices((current) =>
                  current.map((index, j) =>
                    j === i ? (index + 1) % icon.states.length : index,
                  ),
                );
              }}
              className="flex min-w-0 flex-col items-center gap-3 bg-[#171918] px-2 py-7 text-[#d9dbd7] transition-colors hover:bg-[#212421] focus-visible:relative focus-visible:z-10 focus-visible:outline-offset-[-3px]"
            >
              {icon.render({ state, size: 30 })}
              <span className="max-w-full truncate text-[11px] text-[#a6aaa5]">
                {icon.name}
              </span>
              <span className="font-mono text-[9px] text-[#747974]">
                {state}
              </span>
            </button>
          );
        })}
      </div>

      <div className="scrollbar-hidden overflow-x-auto border-t border-[#2b2e2c] px-4 py-4">
        <code className="whitespace-nowrap font-mono text-[10px] text-[#a6aaa5]">
          &lt;{activeIcon.componentName}{" "}
          <span className="text-[#c5d5b4]">
            state=&quot;{activeState}&quot;
          </span>{" "}
          /&gt;
        </code>
      </div>
    </section>
  );
}

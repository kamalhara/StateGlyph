"use client";

import { useEffect, useState } from "react";

import { UploadStateIcon } from "@stateglyph/react";

const states = ["idle", "loading", "success", "error"] as const;
const labels: Record<(typeof states)[number], string> = {
  idle: "Idle",
  loading: "Uploading",
  success: "Success",
  error: "Error",
};

const durations: Record<(typeof states)[number], number> = {
  idle: 2200,
  loading: 2600,
  success: 2000,
  error: 2000,
};

export function HeroDemo() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const state = states[index];

  useEffect(() => {
    if (
      isPaused ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const id = window.setTimeout(
      () => setIndex((prev) => (prev + 1) % states.length),
      durations[state],
    );
    return () => window.clearTimeout(id);
  }, [index, isPaused, state]);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex w-full items-center justify-between font-mono text-[10px] text-[#666b67]">
        <span>Live state preview</span>
        <button
          type="button"
          onClick={() => setIsPaused((current) => !current)}
          className="transition-colors hover:text-[#c5c8c3]"
          aria-label={isPaused ? "Play state preview" : "Pause state preview"}
        >
          {isPaused ? "Play" : "Pause"}
        </button>
      </div>
      <div className="relative grid size-28 place-items-center rounded-2xl border border-[#2b2e2c] bg-[#171918]">
        <span key={state} className="state-preview-enter">
          <UploadStateIcon
            state={state}
            size={44}
            strokeWidth={1.5}
            decorative
            className={
              state === "loading" ? "catalog-icon--loading" : undefined
            }
          />
        </span>
        <span className="absolute -bottom-6 font-mono text-[10px] tracking-wide text-[#737873]">
          {labels[state]}
        </span>
      </div>

      <div className="mt-5 grid grid-cols-4 gap-1 rounded-md border border-[#2b2e2c] bg-[#171918] p-1">
        {states.map((s, i) => (
          <button
            key={s}
            type="button"
            onClick={() => {
              setIndex(i);
              setIsPaused(true);
            }}
            aria-label={`Show ${labels[s]} state`}
            aria-pressed={i === index}
            className={`rounded px-2 py-1.5 font-mono text-[9px] transition-colors ${
              i === index
                ? "bg-[#2b2e2c] text-[#d9dbd7]"
                : "text-[#666b67] hover:text-[#a6aaa5]"
            }`}
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";

import { UploadStateIcon } from "@stateicons/react";

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
  const state = states[index];

  useEffect(() => {
    const id = window.setTimeout(
      () => setIndex((prev) => (prev + 1) % states.length),
      durations[state],
    );
    return () => window.clearTimeout(id);
  }, [index, state]);

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="relative grid size-28 place-items-center rounded-2xl border border-[#2b2e2c] bg-[#171918]">
        <UploadStateIcon
          state={state}
          size={44}
          strokeWidth={1.5}
          decorative
          className={state === "loading" ? "catalog-icon--loading" : undefined}
        />
        <span className="absolute -bottom-6 font-mono text-[10px] tracking-wide text-[#737873]">
          {labels[state]}
        </span>
      </div>

      <div className="mt-5 flex gap-1.5">
        {states.map((s, i) => (
          <button
            key={s}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show ${labels[s]} state`}
            className={`size-1.5 rounded-full transition-all duration-300 ${
              i === index
                ? "scale-125 bg-[#d9dbd7]"
                : "bg-[#3c403d] hover:bg-[#666b67]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

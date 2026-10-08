"use client";

import { useState } from "react";
import { getIconBySlug, type IconStateRecord } from "@/data/icon-catalog";

type StateSwitcherProps = {
  states: readonly IconStateRecord[];
  iconId: string;
};

export function StateSwitcher({ states, iconId }: StateSwitcherProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeState = states[activeIndex];
  const icon = getIconBySlug(iconId);
  return (
    <div className="overflow-hidden rounded-xl border border-[#343735] bg-[#1a1c1b]">
      <div className="grid place-items-center border-b border-[#2b2e2c] bg-[#171918] py-14">
        <div className="relative">
          {icon?.render({ state: activeState.name, size: 56 })}
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2 border-b border-[#2b2e2c] px-5 py-4">
        {states.map((state, index) => (
          <button
            key={state.name}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-pressed={index === activeIndex}
            className={`rounded-md px-3 py-1.5 font-mono text-xs transition-colors ${
              index === activeIndex
                ? "bg-[#2b2e2c] text-white"
                : "text-[#7e837e] hover:bg-[#222422] hover:text-[#c5c8c3]"
            }`}
          >
            {state.name}
          </button>
        ))}
      </div>
      <div className="px-5 py-4" aria-live="polite">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium">{activeState.label}</h3>
          {activeState.continuous && (
            <span className="rounded border border-[#343735] px-2 py-0.5 font-mono text-[10px] text-[#737873]">
              animated
            </span>
          )}
        </div>
        <p className="mt-2 text-xs leading-5 text-[#7e837e]">
          {activeState.description}
        </p>
      </div>
    </div>
  );
}

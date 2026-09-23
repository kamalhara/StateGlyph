"use client";

import { useState } from "react";

type RoadmapItem = {
  title: string;
  description: string;
  detail: string;
  points: readonly string[];
};

export function RoadmapList({ items }: { items: readonly RoadmapItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-[#2b2e2c] border-y border-[#2b2e2c]">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `roadmap-panel-${index}`;

        return (
          <article key={item.title}>
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="group grid w-full gap-4 py-6 text-left sm:grid-cols-[48px_1fr_auto] sm:items-start"
            >
              <span className="font-mono text-xs text-[#666b67]">
                0{index + 1}
              </span>
              <span>
                <span className="flex items-center gap-3 font-medium text-[#f0f1ed] transition-colors group-hover:text-white">
                  {item.title}
                  <span
                    aria-hidden="true"
                    className={`text-[#666b67] transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </span>
                <span className="mt-2 block max-w-xl text-sm leading-6 text-[#929792]">
                  {item.description}
                </span>
              </span>
              <span className="font-mono text-[10px] text-[#666b67] sm:pt-1">
                {item.detail}
              </span>
            </button>

            <div
              id={panelId}
              role="region"
              aria-label={`${item.title} planned capabilities`}
              aria-hidden={!isOpen}
              className={`roadmap-panel ${isOpen ? "roadmap-panel--open" : ""}`}
            >
              <div className="overflow-hidden">
                <div className="pb-6 sm:pl-16">
                  <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.14em] text-[#666b67]">
                    Planned capabilities
                  </p>
                  <ul className="grid gap-2 sm:grid-cols-3">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="border-l border-[#343735] pl-3 text-xs leading-5 text-[#7e837e]"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

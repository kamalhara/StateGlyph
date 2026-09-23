import type { Metadata } from "next";

import { IconCatalog } from "@/components/icon-catalog";
import { iconCatalog } from "@/data/icon-catalog";

export const metadata: Metadata = {
  title: "Icon library — StateIcons",
  description: "Browse typed, accessible state icon components for React.",
};

export default function IconsPage() {
  return (
    <>
      <div className="flex flex-col justify-between gap-5 border-b border-[#2b2e2c] pb-10 sm:flex-row sm:items-end">
        <div>
          <p className="font-mono text-xs text-[#7e837e]">Icon library</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
            All state icons
          </h1>
        </div>
        <p className="max-w-md text-sm leading-6 text-[#929792]">
          Browse by category, search by intent, then open an icon to see every
          state and its implementation.
        </p>
      </div>

      <div className="pt-8">
        <IconCatalog />
      </div>

      <p className="mt-8 font-mono text-xs text-[#666b67]">
        {iconCatalog.length} of 30 planned icons available
      </p>
    </>
  );
}

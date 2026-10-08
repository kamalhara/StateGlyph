"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useId } from "react";

import { iconCatalog, iconCategories } from "@/data/icon-catalog";

function ChevronIcon({ expanded }: { expanded: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`size-3 shrink-0 text-[#666b67] transition-transform duration-200 ${
        expanded ? "rotate-90" : ""
      }`}
    >
      <path d="m6 4 4 4-4 4" />
    </svg>
  );
}

function SidebarLinks({ pathname }: { pathname: string }) {
  const panelPrefix = useId();
  const activeCategory = iconCatalog.find(
    (icon) => pathname === `/icons/${icon.slug}`,
  )?.category;
  const [navigation, setNavigation] = useState(() => ({
    pathname,
    expanded: activeCategory
      ? { [activeCategory]: true }
      : ({} as Record<string, boolean>),
  }));
  if (navigation.pathname !== pathname) {
    setNavigation({
      pathname,
      expanded: activeCategory
        ? { ...navigation.expanded, [activeCategory]: true }
        : navigation.expanded,
    });
  }
  function toggle(category: string) {
    setNavigation((previous) => ({
      ...previous,
      expanded: {
        ...previous.expanded,
        [category]: !previous.expanded[category],
      },
    }));
  }

  return (
    <nav aria-label="Icon library">
      <Link
        href="/icons"
        aria-current={pathname === "/icons" ? "page" : undefined}
        className={`block rounded px-3 py-2 text-sm transition-colors ${
          pathname === "/icons"
            ? "bg-[#252825] text-white"
            : "text-[#929792] hover:bg-[#1b1d1c] hover:text-white"
        }`}
      >
        All icons
      </Link>

      <div className="mt-7 space-y-2">
        {iconCategories.map((category, categoryIndex) => {
          const icons = iconCatalog.filter(
            (icon) => icon.category === category,
          );
          const isExpanded = navigation.expanded[category] ?? false;
          const panelId = `${panelPrefix}-category-${categoryIndex}`;

          return (
            <section key={category}>
              <button
                type="button"
                onClick={() => toggle(category)}
                className="flex w-full items-center gap-2 rounded px-3 py-2 text-left font-mono text-[10px] uppercase tracking-[0.14em] text-[#929792] transition-colors hover:bg-[#1b1d1c] hover:text-white"
                aria-expanded={isExpanded}
                aria-controls={panelId}
              >
                <ChevronIcon expanded={isExpanded} />
                <span className="flex-1">{category}</span>
                <span className="font-mono text-[10px] tabular-nums text-[#555a56]">
                  {icons.length}
                </span>
              </button>

              <div
                id={panelId}
                inert={!isExpanded}
                aria-hidden={!isExpanded}
                className="grid transition-[grid-template-rows,opacity] duration-200 motion-reduce:transition-none"
                style={{
                  gridTemplateRows: isExpanded ? "1fr" : "0fr",
                  opacity: isExpanded ? 1 : 0,
                }}
              >
                <div className="overflow-hidden">
                  <div className="mt-1 space-y-0.5 pb-2">
                    {icons.map((icon) => {
                      const href = `/icons/${icon.slug}`;
                      const isActive = pathname === href;

                      return (
                        <Link
                          key={icon.slug}
                          href={href}
                          aria-current={isActive ? "page" : undefined}
                          className={`flex items-center justify-between rounded px-3 py-1.5 pl-8 text-sm transition-colors ${
                            isActive
                              ? "bg-[#252825] text-white"
                              : "text-[#929792] hover:bg-[#1b1d1c] hover:text-white"
                          }`}
                        >
                          <span>{icon.name}</span>
                          <span className="font-mono text-[10px] text-[#666b67]">
                            {icon.states.length}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </nav>
  );
}

export function IconSidebar() {
  const pathname = usePathname();

  return (
    <aside className="scrollbar-hidden border-b border-[#2b2e2c] lg:overflow-y-auto lg:border-r lg:border-b-0 lg:pr-7">
      <details className="py-4 lg:hidden">
        <summary className="cursor-pointer text-sm font-medium text-[#c5c8c3]">
          Browse icon categories
        </summary>
        <div className="pt-4">
          <SidebarLinks pathname={pathname} />
        </div>
      </details>

      <div className="sticky top-0 hidden py-10 lg:block">
        <p className="mb-5 px-3 font-mono text-xs text-[#7e837e]">Library</p>
        <SidebarLinks pathname={pathname} />
      </div>
    </aside>
  );
}

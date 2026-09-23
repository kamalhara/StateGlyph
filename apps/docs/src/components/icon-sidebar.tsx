"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { iconCatalog, iconCategories } from "@/data/icon-catalog";

function SidebarLinks({ pathname }: { pathname: string }) {
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

      <div className="mt-7 space-y-7">
        {iconCategories.map((category) => (
          <section key={category}>
            <h2 className="px-3 font-mono text-[10px] uppercase tracking-[0.14em] text-[#666b67]">
              {category}
            </h2>
            <div className="mt-2 space-y-1">
              {iconCatalog
                .filter((icon) => icon.category === category)
                .map((icon) => {
                  const href = `/icons/${icon.slug}`;
                  const isActive = pathname === href;

                  return (
                    <Link
                      key={icon.slug}
                      href={href}
                      aria-current={isActive ? "page" : undefined}
                      className={`flex items-center justify-between rounded px-3 py-2 text-sm transition-colors ${
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
          </section>
        ))}
      </div>
    </nav>
  );
}

export function IconSidebar() {
  const pathname = usePathname();

  return (
    <aside className="border-b border-[#2b2e2c] lg:border-r lg:border-b-0 lg:pr-7">
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

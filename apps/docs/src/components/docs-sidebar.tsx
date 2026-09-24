"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const sections = [
  {
    title: "Getting started",
    items: [
      { label: "Guide", href: "/docs/guide" },
      { label: "Installation & Setup", href: "/docs/setup" },
    ],
  },
  {
    title: "Reference",
    items: [
      { label: "API Reference", href: "/docs/api" },
      { label: "Transitions", href: "/docs/transitions" },
      { label: "CLI", href: "/docs/cli" },
    ],
  },
  {
    title: "More",
    items: [
      { label: "Accessibility", href: "/docs/accessibility" },
      { label: "Contributing", href: "/docs/contributing" },
    ],
  },
];

function SidebarLinks({ pathname }: { pathname: string }) {
  return (
    <nav aria-label="Documentation">
      <div className="space-y-7">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="px-3 font-mono text-[10px] uppercase tracking-[0.14em] text-[#666b67]">
              {section.title}
            </h2>
            <div className="mt-2 space-y-1">
              {section.items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`block rounded px-3 py-2 text-sm transition-colors ${
                      isActive
                        ? "bg-[#252825] text-white"
                        : "text-[#929792] hover:bg-[#1b1d1c] hover:text-white"
                    }`}
                  >
                    {item.label}
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

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <aside className="border-b border-[#2b2e2c] lg:border-r lg:border-b-0 lg:pr-7">
      <details className="py-4 lg:hidden">
        <summary className="cursor-pointer text-sm font-medium text-[#c5c8c3]">
          Browse documentation
        </summary>
        <div className="pt-4">
          <SidebarLinks pathname={pathname} />
        </div>
      </details>

      <div className="sticky top-16 hidden py-10 lg:block">
        <p className="mb-5 px-3 font-mono text-xs text-[#7e837e]">
          Documentation
        </p>
        <SidebarLinks pathname={pathname} />
      </div>
    </aside>
  );
}

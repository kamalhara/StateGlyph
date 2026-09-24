"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { label: "Docs", href: "/docs" },
  { label: "Setup", href: "/docs/setup" },
  { label: "API", href: "/docs/api" },
  { label: "CLI", href: "/docs/cli" },
  { label: "Icons", href: "/icons" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#2b2e2c] bg-[#141615]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-3 font-semibold tracking-tight"
        >
          <Image
            src="/stateglyph-sg-mark.png"
            alt=""
            width={28}
            height={28}
            className="size-7"
            unoptimized
            aria-hidden="true"
          />
          <span>StateGlyph</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 text-sm text-[#929792] md:flex">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                className={`transition-colors hover:text-white ${
                  isActive ? "text-white" : ""
                }`}
                href={link.href}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/kamalhara/StateGlyph"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-sm text-[#929792] transition-colors hover:text-white sm:block"
            aria-label="View on GitHub"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-4.5"
              aria-hidden="true"
            >
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>
          <span className="hidden rounded border border-[#303330] bg-[#1b1d1c] px-2.5 py-1 font-mono text-[10px] text-[#a6aaa5] sm:block">
            v0.1 alpha
          </span>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="grid size-9 place-items-center rounded-md text-[#929792] transition-colors hover:text-white md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="border-t border-[#2b2e2c] bg-[#141615] px-5 py-4 md:hidden">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block rounded-md px-3 py-2.5 text-sm transition-colors ${
                    isActive
                      ? "bg-[#252825] text-white"
                      : "text-[#929792] hover:bg-[#1b1d1c] hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
          <div className="mt-4 flex items-center gap-3 border-t border-[#2b2e2c] pt-4">
            <a
              href="https://github.com/kamalhara/StateGlyph"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#929792] transition-colors hover:text-white"
            >
              GitHub
            </a>
            <span className="rounded border border-[#303330] bg-[#1b1d1c] px-2.5 py-1 font-mono text-[10px] text-[#a6aaa5]">
              v0.1 alpha
            </span>
          </div>
        </nav>
      )}
    </header>
  );
}

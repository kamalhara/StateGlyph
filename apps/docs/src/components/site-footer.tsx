import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#2b2e2c] bg-[#101211]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-8 py-10 sm:flex-row sm:justify-between">
          {/* Branding */}
          <div className="max-w-xs">
            <Link
              href="/"
              className="flex items-center gap-3 font-semibold tracking-tight"
            >
              <span className="grid size-7 place-items-center rounded border border-[#686d69] font-mono text-[10px]">
                SI
              </span>
              <span>StateGlyph</span>
            </Link>
            <p className="mt-4 text-sm leading-6 text-[#7e837e]">
              Typed, accessible state icons for React. Open source under the MIT
              License.
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-10 text-sm sm:grid-cols-3">
            <div>
              <h3 className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#666b67]">
                Library
              </h3>
              <ul className="mt-3 space-y-2.5">
                <li>
                  <Link
                    href="/icons"
                    className="text-[#929792] transition-colors hover:text-white"
                  >
                    Browse icons
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#collections"
                    className="text-[#929792] transition-colors hover:text-white"
                  >
                    Collections
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#about"
                    className="text-[#929792] transition-colors hover:text-white"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#roadmap"
                    className="text-[#929792] transition-colors hover:text-white"
                  >
                    Roadmap
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#666b67]">
                Docs
              </h3>
              <ul className="mt-3 space-y-2.5">
                <li>
                  <Link
                    href="/docs/guide"
                    className="text-[#929792] transition-colors hover:text-white"
                  >
                    Guide
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/setup"
                    className="text-[#929792] transition-colors hover:text-white"
                  >
                    Setup
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/api"
                    className="text-[#929792] transition-colors hover:text-white"
                  >
                    API Reference
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/cli"
                    className="text-[#929792] transition-colors hover:text-white"
                  >
                    CLI
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#666b67]">
                Community
              </h3>
              <ul className="mt-3 space-y-2.5">
                <li>
                  <a
                    href="https://github.com/kamalhara/StateGlyph"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#929792] transition-colors hover:text-white"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <Link
                    href="/docs/contributing"
                    className="text-[#929792] transition-colors hover:text-white"
                  >
                    Contributing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/accessibility"
                    className="text-[#929792] transition-colors hover:text-white"
                  >
                    Accessibility
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-[#2b2e2c] py-6 text-xs text-[#666b67] sm:flex-row">
          <span>StateGlyph · Open source · MIT License</span>
          <span className="flex items-center gap-1.5">
            Built by{" "}
            <a
              href="https://kamalhara.me"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-full border border-[#343735] bg-[#1a1c1b] px-2.5 py-1 font-mono text-[10px] text-[#a6aaa5] transition-colors hover:border-[#555a56] hover:text-white"
            >
              <span className="size-1.5 rounded-full bg-emerald-400" />
              kamalhara.me
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

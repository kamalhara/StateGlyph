import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-[#2b2e2c] bg-[#141615]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-3 font-semibold tracking-tight"
        >
          <span className="grid size-7 place-items-center rounded border border-[#686d69] font-mono text-[10px]">
            SI
          </span>
          <span>StateIcons</span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-[#929792] sm:flex">
          <Link className="transition-colors hover:text-white" href="/icons">
            Icons
          </Link>
          <Link
            className="transition-colors hover:text-white"
            href="/#collections"
          >
            Collections
          </Link>
          <Link className="transition-colors hover:text-white" href="/#about">
            About
          </Link>
        </nav>

        <span className="rounded border border-[#303330] bg-[#1b1d1c] px-2.5 py-1 font-mono text-[10px] text-[#a6aaa5]">
          v0.1 alpha
        </span>
      </div>
    </header>
  );
}

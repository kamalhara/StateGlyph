"use client";

import Link from "next/link";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";

import {
  iconCatalog,
  iconCategories,
  type IconRecord,
} from "@/data/icon-catalog";

const categoryEvent = "stateglyph:category";
function subscribeToCategory(callback: () => void) {
  window.addEventListener("popstate", callback);
  window.addEventListener(categoryEvent, callback);
  return () => {
    window.removeEventListener("popstate", callback);
    window.removeEventListener(categoryEvent, callback);
  };
}
function readCategory() {
  const value = new URLSearchParams(window.location.search).get("category");
  return value && (iconCategories as readonly string[]).includes(value)
    ? value
    : "All";
}
function defaultCategory() {
  return "All";
}
function selectCategory(category: string) {
  const url = new URL(window.location.href);
  if (category === "All") url.searchParams.delete("category");
  else url.searchParams.set("category", category);
  window.history.replaceState(window.history.state, "", url);
  window.dispatchEvent(new Event(categoryEvent));
}

function IconCard({ icon }: { icon: IconRecord }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const previewing = hovered || focused;
  const state = icon.states[activeIndex];

  useEffect(() => {
    if (!previewing) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer: number | undefined;
    function syncTimer() {
      window.clearInterval(timer);
      if (!motion.matches) {
        timer = window.setInterval(
          () => setActiveIndex((index) => (index + 1) % icon.states.length),
          1100,
        );
      }
    }
    syncTimer();
    motion.addEventListener("change", syncTimer);
    return () => {
      window.clearInterval(timer);
      motion.removeEventListener("change", syncTimer);
    };
  }, [previewing, icon.states.length]);

  function advance() {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      setActiveIndex((index) => (index + 1) % icon.states.length);
  }

  return (
    <article
      data-icon-card={icon.slug}
      className="catalog-card group overflow-hidden rounded-md border border-[#343735] bg-[#1a1c1b]"
    >
      <Link
        href={`/icons/${icon.slug}`}
        aria-label={`View ${icon.name} icon`}
        onMouseEnter={() => {
          setHovered(true);
          if (!focused) advance();
        }}
        onMouseLeave={() => {
          setHovered(false);
          if (!focused) setActiveIndex(0);
        }}
        onFocus={() => {
          setFocused(true);
          if (!hovered) advance();
        }}
        onBlur={() => {
          setFocused(false);
          if (!hovered) setActiveIndex(0);
        }}
        className="flex min-h-36 flex-col items-center justify-center gap-3 px-3 py-5 text-[#c5c8c3] focus-visible:outline-offset-[-3px]"
      >
        {icon.render({ state: state.name, size: 28 })}
        <div className="w-full text-center">
          <h2 className="truncate text-sm font-medium">{icon.name}</h2>
          <p
            className="mt-1 truncate font-mono text-[10px] text-[#7e837e]"
            aria-hidden="true"
          >
            {previewing ? state.name : `${icon.states.length} states`}
          </p>
        </div>
      </Link>
    </article>
  );
}

export function IconCatalog() {
  const [query, setQuery] = useState("");
  const category = useSyncExternalStore(
    subscribeToCategory,
    readCategory,
    defaultCategory,
  );
  const searchRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const target = event.target as HTMLElement;
      const isTyping =
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable;
      if (
        event.key === "/" &&
        !isTyping &&
        !event.ctrlKey &&
        !event.metaKey &&
        !event.altKey
      ) {
        event.preventDefault();
        searchRef.current?.focus();
      }
      if (
        event.key === "Escape" &&
        document.activeElement === searchRef.current
      ) {
        setQuery("");
        searchRef.current?.blur();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const matchingIcons = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return iconCatalog.filter(
      (icon) =>
        (category === "All" || icon.category === category) &&
        (!normalized ||
          [
            icon.name,
            icon.componentName,
            icon.category,
            icon.description,
            ...icon.keywords,
          ]
            .join(" ")
            .toLowerCase()
            .includes(normalized)),
    );
  }, [category, query]);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motion.matches || !resultsRef.current?.animate) return;
    const animation = resultsRef.current.animate(
      [
        { opacity: 0.55, transform: "translateY(4px)" },
        { opacity: 1, transform: "translateY(0)" },
      ],
      { duration: 180, easing: "ease-out" },
    );
    function cancelForMotion() {
      if (motion.matches) animation.cancel();
    }
    motion.addEventListener("change", cancelForMotion);
    return () => {
      animation.cancel();
      motion.removeEventListener("change", cancelForMotion);
    };
  }, [category, query]);

  return (
    <div>
      <div className="flex flex-col gap-3 border-b border-[#2b2e2c] pb-5 sm:flex-row sm:items-center">
        <label className="catalog-search flex min-h-11 flex-1 items-center gap-3 rounded-md border border-[#343735] bg-[#1b1d1c] px-4">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="size-4 shrink-0 text-[#747974]"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-4-4" />
          </svg>
          <span className="sr-only">Search icons</span>
          <input
            ref={searchRef}
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search icons..."
            className="min-w-0 flex-1 bg-transparent text-sm text-[#f0f1ed] outline-none placeholder:text-[#666b67]"
          />
          <kbd className="hidden rounded border border-[#3b3f3c] px-1.5 py-0.5 font-mono text-[10px] text-[#747974] sm:block">
            /
          </kbd>
        </label>
        <label className="min-w-0 sm:w-48">
          <span className="sr-only">Filter icons by category</span>
          <select
            value={category}
            onChange={(event) => selectCategory(event.target.value)}
            className="catalog-category min-h-11 w-full rounded-md border border-[#343735] bg-[#1b1d1c] px-3 text-xs text-[#c5c8c3]"
          >
            <option value="All">All categories</option>
            {iconCategories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <p
          className="min-w-20 font-mono text-xs tabular-nums text-[#747974] sm:text-right"
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          {matchingIcons.length} {matchingIcons.length === 1 ? "icon" : "icons"}
        </p>
      </div>
      <div ref={resultsRef}>
        {matchingIcons.length > 0 ? (
          <div className="grid grid-cols-2 gap-3 pt-5 sm:grid-cols-3 xl:grid-cols-4">
            {matchingIcons.map((icon) => (
              <IconCard key={icon.slug} icon={icon} />
            ))}
          </div>
        ) : (
          <div className="grid min-h-56 place-items-center border-b border-[#2b2e2c] text-center">
            <div>
              <p className="font-medium">No icons found</p>
              <p className="mt-2 text-sm text-[#7e837e]">
                Try another name, intent, or category.
              </p>
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  selectCategory("All");
                }}
                className="mt-4 text-xs text-[#c5c8c3] underline decoration-[#555a56] underline-offset-4 hover:text-white"
              >
                Clear filters
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

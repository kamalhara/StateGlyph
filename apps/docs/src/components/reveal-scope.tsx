"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function RevealScope({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!root.current || !window.IntersectionObserver) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motion.matches) return;
    const elements =
      root.current.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.removeAttribute("data-reveal-pending");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.05 },
    );
    // Keep SSR and the first screen visible; only queue content below the fold.
    for (const element of elements) {
      if (element.getBoundingClientRect().top >= window.innerHeight) {
        element.setAttribute("data-reveal-pending", "");
        observer.observe(element);
      }
    }
    function showEverything() {
      if (!motion.matches) return;
      observer.disconnect();
      for (const element of elements)
        element.removeAttribute("data-reveal-pending");
    }
    motion.addEventListener("change", showEverything);
    return () => {
      observer.disconnect();
      motion.removeEventListener("change", showEverything);
      for (const element of elements)
        element.removeAttribute("data-reveal-pending");
    };
  }, []);

  return (
    <div ref={root} className={className}>
      {children}
    </div>
  );
}

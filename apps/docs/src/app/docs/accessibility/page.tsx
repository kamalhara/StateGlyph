import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility — StateGlyph",
  description:
    "How StateGlyph handles ARIA labels, roles, reduced motion, and keyboard navigation.",
};

const decorativeCode = `// Decorative — the default
// The icon is purely visual; nearby text already
// conveys the meaning.
<UploadStateIcon state="idle" />

// Equivalent to:
<UploadStateIcon state="idle" decorative={true} />

// Rendered SVG output:
// <svg aria-hidden="true" focusable="false" ... />`;

const semanticCode = `// Semantic — the icon conveys information
// Use when the icon is the only indicator of state.
<UploadStateIcon
  state="success"
  decorative={false}
/>

// Rendered SVG output:
// <svg role="img" aria-label="Upload complete" focusable="false" ... />

// Custom label override:
<UploadStateIcon
  state="success"
  decorative={false}
  label="File uploaded successfully"
/>`;

const reducedMotionCss = `/* StateGlyph docs include this — add it to your project */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}`;

const testingCode = `// Test with data attributes
const icon = screen.getByRole("img", {
  name: "Upload complete",
});
expect(icon).toHaveAttribute("data-state", "success");
expect(icon).toHaveAttribute("data-state-icon", "upload");`;

const features = [
  {
    title: "Decorative by default",
    description:
      "Icons render with aria-hidden=\"true\" and no role. This is correct when the icon appears alongside text that already describes the action — like a button label.",
  },
  {
    title: "Semantic mode",
    description:
      "Set decorative={false} and the icon gains role=\"img\" and an aria-label derived from the state definition. Override with the label prop when needed.",
  },
  {
    title: "No focusable SVGs",
    description:
      "Every SVG renders with focusable=\"false\" to prevent unexpected focus outlines in IE/Edge legacy and assistive technology.",
  },
  {
    title: "Reduced motion",
    description:
      "Continuous states (like loading spinners) use CSS animations that respect prefers-reduced-motion. When enabled, animations are effectively disabled.",
  },
] as const;

export default function AccessibilityPage() {
  return (
    <>
      {/* Header */}
      <div className="border-b border-[#2b2e2c] pb-10">
        <p className="font-mono text-xs text-[#7e837e]">More</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
          Accessibility
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-[#a6aaa5]">
          Every StateGlyph icon ships with built-in ARIA support, reduced-motion
          handling, and predictable focus behavior.
        </p>
      </div>

      {/* Overview */}
      <section className="border-b border-[#2b2e2c] py-10">
        <h2 className="text-2xl font-semibold tracking-[-0.03em]">
          Built-in features
        </h2>
        <div className="mt-8 divide-y divide-[#2b2e2c] border-y border-[#2b2e2c]">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className="grid gap-3 py-6 sm:grid-cols-[48px_1fr] sm:items-baseline"
            >
              <span className="font-mono text-xs text-[#666b67]">
                0{index + 1}
              </span>
              <div>
                <h3 className="font-medium">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#929792]">
                  {feature.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Decorative mode */}
      <section className="border-b border-[#2b2e2c] py-10">
        <h2 className="text-2xl font-semibold tracking-[-0.03em]">
          Decorative mode
        </h2>
        <p className="mt-4 text-sm leading-7 text-[#929792]">
          When an icon appears next to a text label that already describes the
          action, keep the default{" "}
          <code className="rounded bg-[#1b1d1c] px-1.5 py-0.5 font-mono text-[11px] text-[#c5c8c3]">
            {"decorative={true}"}
          </code>
          . The icon is hidden from the accessibility tree:
        </p>

        <div className="mt-6 overflow-hidden rounded-md border border-[#343735] bg-[#101211]">
          <div className="border-b border-[#2b2e2c] px-5 py-3">
            <span className="font-mono text-[10px] text-[#7e837e]">
              Decorative usage
            </span>
          </div>
          <pre className="overflow-x-auto p-6 font-mono text-xs leading-7 text-[#d9dbd7] sm:text-sm">
            <code>{decorativeCode}</code>
          </pre>
        </div>
      </section>

      {/* Semantic mode */}
      <section className="border-b border-[#2b2e2c] py-10">
        <h2 className="text-2xl font-semibold tracking-[-0.03em]">
          Semantic mode
        </h2>
        <p className="mt-4 text-sm leading-7 text-[#929792]">
          When the icon is the only visual indicator of state — for example, a
          standalone status icon — set{" "}
          <code className="rounded bg-[#1b1d1c] px-1.5 py-0.5 font-mono text-[11px] text-[#c5c8c3]">
            {"decorative={false}"}
          </code>
          . Screen readers will announce the state:
        </p>

        <div className="mt-6 overflow-hidden rounded-md border border-[#343735] bg-[#101211]">
          <div className="border-b border-[#2b2e2c] px-5 py-3">
            <span className="font-mono text-[10px] text-[#7e837e]">
              Semantic usage
            </span>
          </div>
          <pre className="overflow-x-auto p-6 font-mono text-xs leading-7 text-[#d9dbd7] sm:text-sm">
            <code>{semanticCode}</code>
          </pre>
        </div>

        <div className="mt-6 rounded-md border border-[#343735] bg-[#1a1c1b] p-5">
          <h3 className="text-sm font-medium">When to use each mode</h3>
          <div className="mt-4 space-y-3 text-sm text-[#929792]">
            <div className="flex items-baseline gap-3">
              <span className="shrink-0 rounded bg-[#252825] px-2 py-0.5 font-mono text-[10px] text-[#929792]">
                decorative
              </span>
              <span>
                Icon appears inside a{" "}
                <code className="rounded bg-[#101211] px-1.5 py-0.5 font-mono text-[11px] text-[#c5c8c3]">
                  {"<button>Upload</button>"}
                </code>{" "}
                — the button text already conveys meaning.
              </span>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="shrink-0 rounded bg-[#252825] px-2 py-0.5 font-mono text-[10px] text-[#929792]">
                semantic
              </span>
              <span>
                Icon is a standalone status indicator — no surrounding text
                explains what it means.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Reduced motion */}
      <section className="border-b border-[#2b2e2c] py-10">
        <h2 className="text-2xl font-semibold tracking-[-0.03em]">
          Reduced motion
        </h2>
        <p className="mt-4 text-sm leading-7 text-[#929792]">
          Some states are marked{" "}
          <code className="rounded bg-[#1b1d1c] px-1.5 py-0.5 font-mono text-[11px] text-[#c5c8c3]">
            {"continuous: true"}
          </code>{" "}
          (e.g. a loading spinner). These use CSS animations that are
          automatically disabled when the user enables the{" "}
          <code className="rounded bg-[#1b1d1c] px-1.5 py-0.5 font-mono text-[11px] text-[#c5c8c3]">
            prefers-reduced-motion
          </code>{" "}
          setting:
        </p>

        <div className="mt-6 overflow-hidden rounded-md border border-[#343735] bg-[#101211]">
          <div className="border-b border-[#2b2e2c] px-5 py-3">
            <span className="font-mono text-[10px] text-[#7e837e]">
              CSS
            </span>
          </div>
          <pre className="overflow-x-auto p-6 font-mono text-xs leading-7 text-[#d9dbd7] sm:text-sm">
            <code>{reducedMotionCss}</code>
          </pre>
        </div>
      </section>

      {/* Testing */}
      <section className="py-10">
        <h2 className="text-2xl font-semibold tracking-[-0.03em]">
          Testing accessibility
        </h2>
        <p className="mt-4 text-sm leading-7 text-[#929792]">
          StateGlyph outputs{" "}
          <code className="rounded bg-[#1b1d1c] px-1.5 py-0.5 font-mono text-[11px] text-[#c5c8c3]">
            data-state-icon
          </code>{" "}
          and{" "}
          <code className="rounded bg-[#1b1d1c] px-1.5 py-0.5 font-mono text-[11px] text-[#c5c8c3]">
            data-state
          </code>{" "}
          attributes on every SVG. Use these with Testing Library or similar
          tools:
        </p>

        <div className="mt-6 overflow-hidden rounded-md border border-[#343735] bg-[#101211]">
          <div className="border-b border-[#2b2e2c] px-5 py-3">
            <span className="font-mono text-[10px] text-[#7e837e]">
              Testing example
            </span>
          </div>
          <pre className="overflow-x-auto p-6 font-mono text-xs leading-7 text-[#d9dbd7] sm:text-sm">
            <code>{testingCode}</code>
          </pre>
        </div>
      </section>
    </>
  );
}

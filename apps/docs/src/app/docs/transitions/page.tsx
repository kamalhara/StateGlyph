import type { Metadata } from "next";

import { CopyButton } from "@/components/copy-button";
import { HighlightedCode } from "@/components/highlighted-code";

export const metadata: Metadata = {
  title: "Transitions — StateGlyph",
  description:
    "Animated state changes with configurable timing and reduced-motion support.",
};

const installCommand = "npm install @stateglyph/react @stateglyph/transitions";
const importCode = 'import "@stateglyph/transitions/styles.css";';
const customizationCode = `// React props: durations are in milliseconds
<ThemeStateIcon state="dark" duration={300} transition="rotate" />
<ThemeStateIcon state="light" animated={false} />

/* Or customize timings with CSS */
.status-icon {
  --stateglyph-duration: 300ms;
  --stateglyph-spin-duration: 1.2s;
  --stateglyph-easing: ease-in-out;
}`;

const transitions = [
  ["crossfade", "A short opacity fade between glyphs."],
  ["scale-fade", "A subtle scale-up paired with a fade."],
  ["rotate", "Outgoing and incoming glyphs rotate in opposite directions."],
  ["slide", "Outgoing and incoming glyphs slide in opposite directions."],
  ["morph", "A blur, scale, and rotation blend between glyphs."],
] as const;

export default function TransitionsPage() {
  return (
    <>
      <div className="border-b border-[#2b2e2c] pb-10">
        <p className="font-mono text-xs text-[#7e837e]">Reference</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
          Transitions
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-[#a6aaa5]">
          State changes animate automatically using the transition declared by
          each icon definition. The outgoing glyph stays visible while the
          incoming glyph enters. No stylesheet or wrapper is required.
        </p>
      </div>

      <section className="border-b border-[#2b2e2c] py-10">
        <h2 className="text-2xl font-semibold tracking-[-0.03em]">Setup</h2>
        <p className="mt-4 text-sm leading-7 text-[#929792]">
          The React package includes the animation renderer. Optionally install
          the timing presets and import their stylesheet once in your app root.
        </p>

        <div className="mt-6 overflow-hidden rounded-md border border-[#343735] bg-[#101211]">
          <div className="flex items-center justify-between border-b border-[#2b2e2c] px-5 py-3">
            <span className="font-mono text-[10px] text-[#7e837e]">
              Terminal
            </span>
            <CopyButton value={installCommand} />
          </div>
          <pre className="overflow-x-auto p-6 font-mono text-sm leading-7 text-[#d9dbd7]">
            <HighlightedCode code={installCommand} language="shell" />
          </pre>
        </div>

        <div className="mt-4 overflow-hidden rounded-md border border-[#343735] bg-[#101211]">
          <div className="flex items-center justify-between border-b border-[#2b2e2c] px-5 py-3">
            <span className="font-mono text-[10px] text-[#7e837e]">
              app/layout.tsx
            </span>
            <CopyButton value={importCode} />
          </div>
          <pre className="overflow-x-auto p-6 font-mono text-sm leading-7 text-[#d9dbd7]">
            <HighlightedCode code={importCode} language="typescript" />
          </pre>
        </div>
      </section>

      <section className="border-b border-[#2b2e2c] py-10">
        <h2 className="text-2xl font-semibold tracking-[-0.03em]">
          Available transitions
        </h2>
        <div className="mt-6 divide-y divide-[#2b2e2c] border-y border-[#2b2e2c]">
          {transitions.map(([name, description]) => (
            <div
              key={name}
              className="grid gap-2 py-4 sm:grid-cols-[160px_1fr]"
            >
              <code className="font-mono text-xs text-[#c5c8c3]">{name}</code>
              <p className="text-sm text-[#929792]">{description}</p>
            </div>
          ))}
        </div>
        <p className="mt-5 text-sm leading-7 text-[#929792]">
          States marked as continuous, such as loading spinners, rotate until
          the state changes. All animation is disabled automatically when the
          user enables reduced motion.
        </p>
      </section>

      <section className="py-10">
        <h2 className="text-2xl font-semibold tracking-[-0.03em]">
          Customize timing
        </h2>
        <p className="mt-4 text-sm leading-7 text-[#929792]">
          Use duration, spinDuration, and transition props, or override CSS
          custom properties on an icon or a parent scope. {"animated={false}"}{" "}
          disables motion for that component; explicit timing props override CSS
          values.
        </p>
        <div className="mt-6 overflow-hidden rounded-md border border-[#343735] bg-[#101211]">
          <div className="flex items-center justify-between border-b border-[#2b2e2c] px-5 py-3">
            <span className="font-mono text-[10px] text-[#7e837e]">CSS</span>
            <CopyButton value={customizationCode} />
          </div>
          <pre className="overflow-x-auto p-6 font-mono text-sm leading-7 text-[#d9dbd7]">
            <HighlightedCode code={customizationCode} language="tsx" />
          </pre>
        </div>
      </section>
    </>
  );
}

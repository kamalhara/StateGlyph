import { act, cleanup, render, screen, waitFor } from "@testing-library/react";
import type { CSSProperties } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { LockStateIcon } from "../icons/lock-state-icon";
import { UploadStateIcon } from "../icons/upload-state-icon";

type FakeAnimation = {
  target: Element;
  frames: Keyframe[];
  options: KeyframeAnimationOptions;
  cancel: ReturnType<typeof vi.fn>;
  onfinish: (() => void) | null;
};
let animations: FakeAnimation[];
let reduced: boolean;
let listeners: Set<() => void>;
const originalAnimate = Object.getOwnPropertyDescriptor(
  Element.prototype,
  "animate",
);

beforeEach(() => {
  animations = [];
  reduced = false;
  listeners = new Set();
  vi.stubGlobal("matchMedia", () => ({
    get matches() {
      return reduced;
    },
    addEventListener: (_event: string, listener: () => void) =>
      listeners.add(listener),
    removeEventListener: (_event: string, listener: () => void) =>
      listeners.delete(listener),
  }));
  Object.defineProperty(Element.prototype, "animate", {
    configurable: true,
    value: vi.fn(function (
      this: Element,
      frames: Keyframe[],
      options: KeyframeAnimationOptions,
    ) {
      const animation: FakeAnimation = {
        target: this,
        frames,
        options,
        cancel: vi.fn(),
        onfinish: null,
      };
      animations.push(animation);
      return animation;
    }),
  });
});

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
  if (originalAnimate)
    Object.defineProperty(Element.prototype, "animate", originalAnimate);
  else Reflect.deleteProperty(Element.prototype, "animate");
});

describe("animated state changes", () => {
  it.each(["crossfade", "scale-fade", "rotate", "slide", "morph"] as const)(
    "animates both layers for %s while exposing one accessible icon",
    (transition) => {
      const { container, rerender } = render(
        <LockStateIcon
          state="unlocked"
          decorative={false}
          transition={transition}
          duration={320}
        />,
      );
      expect(animations).toHaveLength(0);
      const root = container.querySelector("svg");
      rerender(
        <LockStateIcon
          state="locked"
          decorative={false}
          transition={transition}
          duration={320}
        />,
      );
      expect(container.querySelector("svg")).toBe(root);
      expect(screen.getAllByRole("img")).toHaveLength(1);
      expect(screen.getByRole("img", { name: "Locked" })).toBe(root);
      expect(
        container.querySelector(
          '[data-state-layer="outgoing"] .lucide-lock-open',
        ),
      ).not.toBeNull();
      expect(
        container.querySelector('[data-state-layer="incoming"] .lucide-lock'),
      ).not.toBeNull();
      expect(animations).toHaveLength(2);
      expect(animations[0].frames[0].opacity).toBe(1);
      expect(animations[0].frames[1].opacity).toBe(0);
      expect(animations[1].frames[0].opacity).toBe(0);
      expect(animations[1].frames[1].opacity).toBe(1);
      expect(animations[1].options.duration).toBe(320);
      act(() => animations[1].onfinish?.());
      expect(
        container.querySelector('[data-state-layer="outgoing"]'),
      ).toBeNull();
    },
  );

  it("cancels interrupted transitions and ignores stale completion callbacks", () => {
    const { container, rerender, unmount } = render(
      <LockStateIcon state="unlocked" />,
    );
    rerender(<LockStateIcon state="locked" />);
    const staleFinish = animations[1].onfinish;
    rerender(<LockStateIcon state="unlocked" />);
    expect(animations[0].cancel).toHaveBeenCalled();
    expect(animations[1].cancel).toHaveBeenCalled();
    act(() => staleFinish?.());
    expect(
      container.querySelector('[data-state-layer="outgoing"]'),
    ).not.toBeNull();
    expect(container.querySelector("svg")?.getAttribute("data-state")).toBe(
      "unlocked",
    );
    unmount();
    expect(animations[2].cancel).toHaveBeenCalled();
    expect(animations[3].cancel).toHaveBeenCalled();
    expect(listeners.size).toBe(0);
  });

  it("keeps the animation quiet when only an accessible label changes", () => {
    const { rerender } = render(
      <LockStateIcon state="locked" decorative={false} label="First" />,
    );
    rerender(
      <LockStateIcon state="locked" decorative={false} label="Updated" />,
    );
    expect(screen.getByRole("img", { name: "Updated" })).toBeDefined();
    expect(animations).toHaveLength(0);
  });

  it("honors CSS timing and allows explicit props to override it", () => {
    const style = {
      "--stateglyph-duration": "0.35s",
      "--stateglyph-easing": "linear",
    } as CSSProperties;
    const { rerender } = render(
      <LockStateIcon state="unlocked" style={style} />,
    );
    rerender(<LockStateIcon state="locked" style={style} />);
    expect(animations[1].options.duration).toBe(350);
    expect(animations[1].options.easing).toBe("linear");
    rerender(<LockStateIcon state="unlocked" style={style} duration={100} />);
    expect(animations[3].options.duration).toBe(100);
  });

  it("keeps a spinner running when its entrance animation finishes", () => {
    const { container, rerender } = render(<UploadStateIcon state="idle" />);
    rerender(<UploadStateIcon state="loading" />);
    expect(animations).toHaveLength(3);
    const spin = animations.find(
      (animation) => animation.options.iterations === Infinity,
    )!;
    act(() => animations[1].onfinish?.());
    expect(container.querySelector('[data-state-layer="outgoing"]')).toBeNull();
    expect(spin.cancel).not.toHaveBeenCalled();
    expect(animations).toHaveLength(3);
  });

  it("stops a continuous animation when the user enables reduced motion", async () => {
    const { container, rerender } = render(
      <UploadStateIcon state="loading" spinDuration={1200} />,
    );
    expect(animations).toHaveLength(1);
    expect(animations[0].options.iterations).toBe(Infinity);
    expect(animations[0].options.duration).toBe(1200);
    act(() => {
      reduced = true;
      for (const listener of listeners) listener();
    });
    expect(animations[0].cancel).toHaveBeenCalled();
    rerender(<UploadStateIcon state="success" />);
    await waitFor(() =>
      expect(
        container.querySelector('[data-state-layer="outgoing"]'),
      ).toBeNull(),
    );
    expect(animations).toHaveLength(1);
  });

  it.each(["disabled", "zero", "unsupported", "reduced"])(
    "renders the new glyph without motion when %s",
    async (mode) => {
      if (mode === "unsupported")
        Reflect.deleteProperty(Element.prototype, "animate");
      if (mode === "reduced") reduced = true;
      const props =
        mode === "disabled"
          ? { animated: false }
          : mode === "zero"
            ? { duration: 0 }
            : {};
      const { container, rerender } = render(
        <LockStateIcon state="unlocked" {...props} />,
      );
      rerender(<LockStateIcon state="locked" {...props} />);
      await waitFor(() =>
        expect(
          container.querySelector('[data-state-layer="outgoing"]'),
        ).toBeNull(),
      );
      expect(
        container.querySelector('[data-state-layer="incoming"] .lucide-lock'),
      ).not.toBeNull();
      expect(animations).toHaveLength(0);
    },
  );
});

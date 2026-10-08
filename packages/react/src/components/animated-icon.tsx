"use client";

import {
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type SVGProps,
} from "react";
import type { LucideIcon } from "lucide-react";

type TransitionName = "crossfade" | "scale-fade" | "rotate" | "slide" | "morph";

export type AnimatedIconProps = Omit<
  SVGProps<SVGSVGElement>,
  "children" | "dangerouslySetInnerHTML"
> & {
  icon: LucideIcon;
  iconName: string;
  iconId: string;
  state: string;
  transition?: TransitionName;
  duration?: number;
  spinDuration?: number;
  animated?: boolean;
  continuous?: boolean;
  decorative?: boolean;
  label?: string;
  size?: number | string;
  strokeWidth?: number;
};

type Snapshot = Pick<
  AnimatedIconProps,
  "icon" | "iconName" | "iconId" | "state" | "continuous"
>;
type Frame = { current: Snapshot; previous: Snapshot | null; revision: number };

const defaultDurations = {
  crossfade: 180,
  "scale-fade": 200,
  rotate: 240,
  slide: 220,
  morph: 240,
};

function motionPreference() {
  return (
    typeof window !== "undefined" &&
    !!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
  );
}

function subscribeToMotion(callback: () => void) {
  if (typeof window === "undefined" || !window.matchMedia) return () => {};
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

function milliseconds(value: string, fallback: number) {
  const parsed = Number.parseFloat(value);
  if (!Number.isFinite(parsed)) return fallback;
  return Math.max(
    0,
    value.trim().endsWith("ms")
      ? parsed
      : value.trim().endsWith("s")
        ? parsed * 1000
        : parsed,
  );
}

function transitionFrames(transition: TransitionName): {
  incoming: Keyframe[];
  outgoing: Keyframe[];
} {
  const rest = {
    opacity: 1,
    transform: "translateY(0) scale(1) rotate(0deg)",
    filter: "blur(0px)",
  };
  const poses = {
    crossfade: [{ opacity: 0 }, { opacity: 0 }],
    "scale-fade": [
      { opacity: 0, transform: "scale(0.65)" },
      { opacity: 0, transform: "scale(1.2)" },
    ],
    rotate: [
      { opacity: 0, transform: "rotate(-60deg) scale(0.8)" },
      { opacity: 0, transform: "rotate(60deg) scale(0.8)" },
    ],
    slide: [
      { opacity: 0, transform: "translateY(6px)" },
      { opacity: 0, transform: "translateY(-6px)" },
    ],
    morph: [
      {
        opacity: 0,
        transform: "scale(0.75) rotate(-18deg)",
        filter: "blur(2px)",
      },
      {
        opacity: 0,
        transform: "scale(0.75) rotate(18deg)",
        filter: "blur(2px)",
      },
    ],
  } satisfies Record<TransitionName, [Keyframe, Keyframe]>;
  const [start, end] = poses[transition];
  return { incoming: [start, rest], outgoing: [rest, end] };
}

export function AnimatedIcon({
  icon,
  iconName,
  iconId,
  state,
  continuous = false,
  transition = "crossfade",
  duration,
  spinDuration,
  animated = true,
  decorative = true,
  label,
  size = 24,
  strokeWidth = 2,
  className,
  style,
  ...svgProps
}: AnimatedIconProps) {
  const reducedMotion = useSyncExternalStore(
    subscribeToMotion,
    motionPreference,
    () => false,
  );
  const rootRef = useRef<SVGSVGElement>(null);
  const incomingRef = useRef<SVGGElement>(null);
  const outgoingRef = useRef<SVGGElement>(null);
  const spinRef = useRef<SVGGElement>(null);
  const [frame, setFrame] = useState<Frame>(() => ({
    current: { icon, iconName, iconId, state, continuous },
    previous: null,
    revision: 0,
  }));

  // Keep the outgoing glyph until its exit completes. Updating a guarded snapshot
  // during render avoids an intermediate paint with the new state and old glyph.
  if (
    frame.current.state !== state ||
    frame.current.iconId !== iconId ||
    frame.current.icon !== icon ||
    frame.current.continuous !== continuous
  ) {
    setFrame({
      current: { icon, iconName, iconId, state, continuous },
      previous: frame.current.iconId === iconId ? frame.current : null,
      revision: frame.revision + 1,
    });
  }

  useEffect(() => {
    let active = true;
    const animations: Animation[] = [];
    const root = rootRef.current;
    const incoming = incomingRef.current;
    const outgoing = outgoingRef.current;
    const finish = () => {
      if (!active) return;
      setFrame((current) =>
        current.revision === frame.revision && current.previous
          ? { ...current, previous: null }
          : current,
      );
    };
    const computed = root ? getComputedStyle(root) : null;
    const timing = Number.isFinite(duration)
      ? Math.max(0, duration!)
      : milliseconds(
          (computed?.getPropertyValue("--stateglyph-duration") ||
            computed?.getPropertyValue("--stateglyph-preset-duration")) ??
            "",
          defaultDurations[transition],
        );
    const easing =
      computed?.getPropertyValue("--stateglyph-easing").trim() ||
      computed?.getPropertyValue("--stateglyph-preset-easing").trim() ||
      "cubic-bezier(0.22, 1, 0.36, 1)";
    const canAnimate =
      animated && !reducedMotion && typeof incoming?.animate === "function";

    if (frame.previous && outgoing && incoming && canAnimate && timing > 0) {
      const frames = transitionFrames(transition);
      try {
        const exit = outgoing.animate(frames.outgoing, {
          duration: timing,
          easing,
          fill: "both",
        });
        animations.push(exit);
        const enter = incoming.animate(frames.incoming, {
          duration: timing,
          easing,
          fill: "both",
        });
        animations.push(enter);
        enter.onfinish = finish;
      } catch {
        // Invalid consumer-provided CSS timing must never hide an icon.
        for (const animation of animations) animation.cancel();
        queueMicrotask(finish);
      }
    } else if (frame.previous) {
      queueMicrotask(finish);
    }

    return () => {
      active = false;
      for (const animation of animations) {
        animation.onfinish = null;
        animation.cancel();
      }
    };
  }, [frame, animated, reducedMotion, duration, transition]);

  // Continuous motion has a separate lifecycle so finishing an entrance does
  // not reset the spinner's rotation phase.
  useEffect(() => {
    const spin = spinRef.current;
    if (
      !animated ||
      reducedMotion ||
      !frame.current.continuous ||
      !spin ||
      typeof spin.animate !== "function"
    )
      return;
    const computed = rootRef.current ? getComputedStyle(rootRef.current) : null;
    const timing = Number.isFinite(spinDuration)
      ? Math.max(0, spinDuration!)
      : milliseconds(
          (computed?.getPropertyValue("--stateglyph-spin-duration") ||
            computed?.getPropertyValue("--stateglyph-preset-spin-duration")) ??
            "",
          900,
        );
    if (timing <= 0) return;
    const animation = spin.animate(
      [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
      { duration: timing, iterations: Infinity, easing: "linear" },
    );
    return () => animation.cancel();
  }, [
    frame.revision,
    frame.current.continuous,
    animated,
    reducedMotion,
    spinDuration,
  ]);

  const CurrentIcon = frame.current.icon;
  const PreviousIcon = frame.previous?.icon;
  const layerStyle = {
    transformBox: "view-box",
    transformOrigin: "12px 12px",
  } as const;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...svgProps}
      ref={rootRef}
      className={`lucide lucide-${iconName}${className ? ` ${className}` : ""}`}
      style={{
        display: "inline-block",
        verticalAlign: "middle",
        flexShrink: 0,
        overflow: "visible",
        ...style,
      }}
      data-state-icon={iconId}
      data-state={state}
      data-transition={transition}
      data-state-continuous={continuous ? "true" : undefined}
      aria-hidden={decorative ? true : undefined}
      aria-label={decorative ? undefined : label}
      role={decorative ? undefined : "img"}
      focusable="false"
    >
      {PreviousIcon && animated && !reducedMotion && duration !== 0 ? (
        <g
          key={`outgoing-${frame.revision}`}
          ref={outgoingRef}
          data-state-layer="outgoing"
          aria-hidden="true"
          style={layerStyle}
        >
          <PreviousIcon
            size={24}
            strokeWidth={strokeWidth}
            stroke="inherit"
            fill="inherit"
            aria-hidden="true"
            focusable="false"
          />
        </g>
      ) : null}
      <g
        key={`incoming-${frame.revision}`}
        ref={incomingRef}
        data-state-layer="incoming"
        style={{
          ...layerStyle,
          opacity:
            PreviousIcon && animated && !reducedMotion && duration !== 0
              ? 0
              : 1,
        }}
      >
        <g ref={spinRef} data-state-layer="glyph" style={layerStyle}>
          <CurrentIcon
            size={24}
            strokeWidth={strokeWidth}
            stroke="inherit"
            fill="inherit"
            aria-hidden="true"
            focusable="false"
          />
        </g>
      </g>
    </svg>
  );
}

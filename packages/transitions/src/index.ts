export const stateGlyphTransitions = [
  "crossfade",
  "scale-fade",
  "rotate",
  "slide",
  "morph",
] as const;

export type StateGlyphTransitionName = (typeof stateGlyphTransitions)[number];

export const stateGlyphTransitionDurations = {
  crossfade: "180ms",
  "scale-fade": "200ms",
  rotate: "240ms",
  slide: "220ms",
  morph: "240ms",
} satisfies Record<StateGlyphTransitionName, string>;

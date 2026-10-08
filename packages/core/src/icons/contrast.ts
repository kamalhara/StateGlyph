import { defineStateIcon } from "../define-state-icon";

export const contrastStateIcon = defineStateIcon({
  id: "contrast",
  title: "Contrast",
  description: "Represents contrast across standard, high, soft states.",
  category: "appearance",
  states: {
    standard: {
      icon: "circle",
      label: "Standard contrast",
      description: "Standard contrast.",
    },
    high: {
      icon: "contrast",
      label: "High contrast",
      description: "High contrast.",
    },
    soft: {
      icon: "circle-dashed",
      label: "Soft contrast",
      description: "Soft contrast.",
    },
  },
  initialState: "standard",
  transition: "crossfade",
  tags: ["contrast", "standard", "high", "soft"],
  source: {
    library: "lucide",
    license: "ISC",
    url: "https://lucide.dev",
    icons: ["circle", "contrast", "circle-dashed"],
  },
});

export type ContrastState = keyof typeof contrastStateIcon.states;

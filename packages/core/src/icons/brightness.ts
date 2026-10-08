import { defineStateIcon } from "../define-state-icon";

export const brightnessStateIcon = defineStateIcon({
  id: "brightness",
  title: "Brightness",
  description: "Represents brightness across low, medium, high states.",
  category: "appearance",
  states: {
    low: {
      icon: "sun-dim",
      label: "Low brightness",
      description: "Low brightness.",
    },
    medium: {
      icon: "sun-medium",
      label: "Medium brightness",
      description: "Medium brightness.",
    },
    high: {
      icon: "sun",
      label: "High brightness",
      description: "High brightness.",
    },
  },
  initialState: "low",
  transition: "scale-fade",
  tags: ["brightness", "low", "medium", "high"],
  source: {
    library: "lucide",
    license: "ISC",
    url: "https://lucide.dev",
    icons: ["sun-dim", "sun-medium", "sun"],
  },
});

export type BrightnessState = keyof typeof brightnessStateIcon.states;

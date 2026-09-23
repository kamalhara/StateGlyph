import { defineStateIcon } from "../define-state-icon";

export const chevronVerticalStateIcon = defineStateIcon({
  id: "chevron-vertical",
  title: "Vertical chevron",
  description: "Switches between upward and downward directions.",
  category: "navigation",
  states: {
    up: {
      icon: "chevron-up",
      label: "Point up",
      description: "The chevron points upward.",
    },
    down: {
      icon: "chevron-down",
      label: "Point down",
      description: "The chevron points downward.",
    },
  },
  initialState: "down",
  transition: "morph",
  tags: ["chevron-vertical", "chevron", "vertical", "up", "down"],
  source: {
    library: "lucide",
    license: "ISC",
    url: "https://lucide.dev",
    icons: ["chevron-up", "chevron-down"],
  },
});

export type ChevronVerticalState = keyof typeof chevronVerticalStateIcon.states;

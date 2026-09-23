import { defineStateIcon } from "../define-state-icon";

export const chevronHorizontalStateIcon = defineStateIcon({
  id: "chevron-horizontal",
  title: "Horizontal chevron",
  description: "Switches between left and right directions.",
  category: "navigation",
  states: {
    left: {
      icon: "chevron-left",
      label: "Point left",
      description: "The chevron points left.",
    },
    right: {
      icon: "chevron-right",
      label: "Point right",
      description: "The chevron points right.",
    },
  },
  initialState: "right",
  transition: "morph",
  tags: ["chevron-horizontal", "chevron", "horizontal", "left", "right"],
  source: {
    library: "lucide",
    license: "ISC",
    url: "https://lucide.dev",
    icons: ["chevron-left", "chevron-right"],
  },
});

export type ChevronHorizontalState =
  keyof typeof chevronHorizontalStateIcon.states;

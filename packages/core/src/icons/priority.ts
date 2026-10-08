import { defineStateIcon } from "../define-state-icon";

export const priorityStateIcon = defineStateIcon({
  id: "priority",
  title: "Priority",
  description: "Represents priority across low, normal, high states.",
  category: "productivity",
  states: {
    low: {
      icon: "arrow-down",
      label: "Low priority",
      description: "Low priority.",
    },
    normal: {
      icon: "minus",
      label: "Normal priority",
      description: "Normal priority.",
    },
    high: {
      icon: "arrow-up",
      label: "High priority",
      description: "High priority.",
    },
  },
  initialState: "low",
  transition: "slide",
  tags: ["priority", "low", "normal", "high"],
  source: {
    library: "lucide",
    license: "ISC",
    url: "https://lucide.dev",
    icons: ["arrow-down", "minus", "arrow-up"],
  },
});

export type PriorityState = keyof typeof priorityStateIcon.states;

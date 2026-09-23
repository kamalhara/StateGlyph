import { defineStateIcon } from "../define-state-icon";

export const fullscreenStateIcon = defineStateIcon({
  id: "fullscreen",
  title: "Fullscreen",
  description: "Switches between windowed and fullscreen layouts.",
  category: "media",
  states: {
    windowed: {
      icon: "maximize",
      label: "Enter fullscreen",
      description: "The view is windowed.",
    },
    fullscreen: {
      icon: "minimize",
      label: "Exit fullscreen",
      description: "The view is fullscreen.",
    },
  },
  initialState: "windowed",
  transition: "morph",
  tags: ["fullscreen", "windowed"],
  source: {
    library: "lucide",
    license: "ISC",
    url: "https://lucide.dev",
    icons: ["maximize", "minimize"],
  },
});

export type FullscreenState = keyof typeof fullscreenStateIcon.states;

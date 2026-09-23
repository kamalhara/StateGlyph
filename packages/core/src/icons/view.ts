import { defineStateIcon } from "../define-state-icon";

export const viewStateIcon = defineStateIcon({
  id: "view",
  title: "Grid and list",
  description: "Switches a collection between grid and list layouts.",
  category: "navigation",
  states: {
    grid: {
      icon: "layout-grid",
      label: "Show as list",
      description: "The collection uses a grid layout.",
    },
    list: {
      icon: "list",
      label: "Show as grid",
      description: "The collection uses a list layout.",
    },
  },
  initialState: "grid",
  transition: "morph",
  tags: ["view", "grid", "list"],
  source: {
    library: "lucide",
    license: "ISC",
    url: "https://lucide.dev",
    icons: ["layout-grid", "list"],
  },
});

export type ViewState = keyof typeof viewStateIcon.states;

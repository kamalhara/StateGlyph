import { defineStateIcon } from "../define-state-icon";

export const menuStateIcon = defineStateIcon({
  id: "menu",
  title: "Menu",
  description: "Switches between closed and open navigation menus.",
  category: "navigation",
  states: {
    closed: {
      icon: "menu",
      label: "Open menu",
      description: "The menu is closed.",
    },
    open: { icon: "x", label: "Close menu", description: "The menu is open." },
  },
  initialState: "closed",
  transition: "morph",
  tags: ["menu", "closed", "open"],
  source: {
    library: "lucide",
    license: "ISC",
    url: "https://lucide.dev",
    icons: ["menu", "x"],
  },
});

export type MenuState = keyof typeof menuStateIcon.states;

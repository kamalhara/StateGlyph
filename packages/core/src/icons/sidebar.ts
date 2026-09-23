import { defineStateIcon } from "../define-state-icon";

export const sidebarStateIcon = defineStateIcon({
  id: "sidebar",
  title: "Sidebar",
  description: "Switches between open and closed sidebar layouts.",
  category: "navigation",
  states: {
    open: {
      icon: "panel-left-close",
      label: "Close sidebar",
      description: "The sidebar is open.",
    },
    closed: {
      icon: "panel-left-open",
      label: "Open sidebar",
      description: "The sidebar is closed.",
    },
  },
  initialState: "open",
  transition: "morph",
  tags: ["sidebar", "open", "closed"],
  source: {
    library: "lucide",
    license: "ISC",
    url: "https://lucide.dev",
    icons: ["panel-left-close", "panel-left-open"],
  },
});

export type SidebarState = keyof typeof sidebarStateIcon.states;

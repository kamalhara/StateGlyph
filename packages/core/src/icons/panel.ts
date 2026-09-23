import { defineStateIcon } from "../define-state-icon";

export const panelStateIcon = defineStateIcon({
  id: "panel",
  title: "Panel",
  description: "Switches between restored and maximized panel sizes.",
  category: "navigation",
  states: {
    restored: {
      icon: "maximize-2",
      label: "Maximize panel",
      description: "The panel is restored.",
    },
    maximized: {
      icon: "minimize-2",
      label: "Restore panel",
      description: "The panel is maximized.",
    },
  },
  initialState: "restored",
  transition: "morph",
  tags: ["panel", "restored", "maximized"],
  source: {
    library: "lucide",
    license: "ISC",
    url: "https://lucide.dev",
    icons: ["maximize-2", "minimize-2"],
  },
});

export type PanelState = keyof typeof panelStateIcon.states;

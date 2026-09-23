import { defineStateIcon } from "../define-state-icon";

export const expandStateIcon = defineStateIcon({
  id: "expand",
  title: "Expand",
  description: "Switches between collapsed and expanded content.",
  category: "navigation",
  states: {
    collapsed: {
      icon: "chevrons-up-down",
      label: "Expand",
      description: "The content is collapsed.",
    },
    expanded: {
      icon: "chevrons-down-up",
      label: "Collapse",
      description: "The content is expanded.",
    },
  },
  initialState: "collapsed",
  transition: "morph",
  tags: ["expand", "collapsed", "expanded"],
  source: {
    library: "lucide",
    license: "ISC",
    url: "https://lucide.dev",
    icons: ["chevrons-up-down", "chevrons-down-up"],
  },
});

export type ExpandState = keyof typeof expandStateIcon.states;

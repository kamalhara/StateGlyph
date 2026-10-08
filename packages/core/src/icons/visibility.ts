import { defineStateIcon } from "../define-state-icon";

export const visibilityStateIcon = defineStateIcon({
  id: "visibility",
  title: "Visibility",
  description: "Represents visibility across visible, hidden states.",
  category: "security",
  states: {
    visible: { icon: "eye", label: "Visible", description: "Visible." },
    hidden: { icon: "eye-off", label: "Hidden", description: "Hidden." },
  },
  initialState: "visible",
  transition: "morph",
  tags: ["visibility", "visible", "hidden"],
  source: {
    library: "lucide",
    license: "ISC",
    url: "https://lucide.dev",
    icons: ["eye", "eye-off"],
  },
});

export type VisibilityState = keyof typeof visibilityStateIcon.states;

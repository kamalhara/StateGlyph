import { defineStateIcon } from "../define-state-icon";

export const repeatStateIcon = defineStateIcon({
  id: "repeat",
  title: "Repeat",
  description: "Shows whether media repeat is on or off.",
  category: "media",
  states: {
    off: {
      icon: "repeat",
      label: "Turn repeat on",
      description: "Repeat is off.",
    },
    on: {
      icon: "repeat-2",
      label: "Turn repeat off",
      description: "Repeat is on.",
    },
  },
  initialState: "off",
  transition: "morph",
  tags: ["repeat", "off", "on"],
  source: {
    library: "lucide",
    license: "ISC",
    url: "https://lucide.dev",
    icons: ["repeat", "repeat-2"],
  },
});

export type RepeatState = keyof typeof repeatStateIcon.states;

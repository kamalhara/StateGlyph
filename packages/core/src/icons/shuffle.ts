import { defineStateIcon } from "../define-state-icon";

export const shuffleStateIcon = defineStateIcon({
  id: "shuffle",
  title: "Shuffle",
  description: "Shows whether shuffled playback is on or off.",
  category: "media",
  states: {
    off: {
      icon: "list-ordered",
      label: "Turn shuffle on",
      description: "Shuffle is off.",
    },
    on: {
      icon: "shuffle",
      label: "Turn shuffle off",
      description: "Shuffle is on.",
    },
  },
  initialState: "off",
  transition: "morph",
  tags: ["shuffle", "off", "on"],
  source: {
    library: "lucide",
    license: "ISC",
    url: "https://lucide.dev",
    icons: ["list-ordered", "shuffle"],
  },
});

export type ShuffleState = keyof typeof shuffleStateIcon.states;

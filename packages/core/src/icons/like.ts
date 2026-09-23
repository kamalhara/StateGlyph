import { defineStateIcon } from "../define-state-icon";

export const likeStateIcon = defineStateIcon({
  id: "like",
  title: "Like",
  description: "Switches between liked and unliked feedback states.",
  category: "feedback",
  states: {
    unliked: {
      icon: "heart",
      label: "Like",
      description: "The item is not liked.",
    },
    liked: {
      icon: "heart-off",
      label: "Remove like",
      description: "The item is liked.",
    },
  },
  initialState: "unliked",
  transition: "morph",
  tags: ["like", "unliked", "liked"],
  source: {
    library: "lucide",
    license: "ISC",
    url: "https://lucide.dev",
    icons: ["heart", "heart-off"],
  },
});

export type LikeState = keyof typeof likeStateIcon.states;

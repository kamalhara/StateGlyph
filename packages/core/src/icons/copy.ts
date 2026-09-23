import { defineStateIcon } from "../define-state-icon";

export const copyStateIcon = defineStateIcon({
  id: "copy",
  title: "Copy",
  description: "Shows idle, copied, and reset clipboard feedback.",
  category: "feedback",
  states: {
    idle: {
      icon: "copy",
      label: "Copy",
      description: "Content is ready to be copied.",
    },
    copied: {
      icon: "check",
      label: "Copied",
      description: "Content was copied.",
    },
    reset: {
      icon: "rotate-ccw",
      label: "Copy again",
      description: "Copy feedback has reset.",
    },
  },
  initialState: "idle",
  transition: "scale-fade",
  tags: ["copy", "idle", "copied", "reset"],
  source: {
    library: "lucide",
    license: "ISC",
    url: "https://lucide.dev",
    icons: ["copy", "check", "rotate-ccw"],
  },
});

export type CopyState = keyof typeof copyStateIcon.states;

import { defineStateIcon } from "../define-state-icon";

export const pinStateIcon = defineStateIcon({
  id: "pin",
  title: "Pin",
  description: "Represents pin across unpinned, pinned states.",
  category: "productivity",
  states: {
    unpinned: { icon: "pin-off", label: "Unpinned", description: "Unpinned." },
    pinned: { icon: "pin", label: "Pinned", description: "Pinned." },
  },
  initialState: "unpinned",
  transition: "rotate",
  tags: ["pin", "unpinned", "pinned"],
  source: {
    library: "lucide",
    license: "ISC",
    url: "https://lucide.dev",
    icons: ["pin-off", "pin"],
  },
});

export type PinState = keyof typeof pinStateIcon.states;

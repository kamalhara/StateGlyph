import { defineStateIcon } from "../define-state-icon";

export const lockStateIcon = defineStateIcon({
  id: "lock",
  title: "Lock",
  description: "Represents lock across unlocked, locked states.",
  category: "security",
  states: {
    unlocked: {
      icon: "lock-open",
      label: "Unlocked",
      description: "Unlocked.",
    },
    locked: { icon: "lock", label: "Locked", description: "Locked." },
  },
  initialState: "unlocked",
  transition: "morph",
  tags: ["lock", "unlocked", "locked"],
  source: {
    library: "lucide",
    license: "ISC",
    url: "https://lucide.dev",
    icons: ["lock-open", "lock"],
  },
});

export type LockState = keyof typeof lockStateIcon.states;

import { defineStateIcon } from "../define-state-icon";

export const shieldStateIcon = defineStateIcon({
  id: "shield",
  title: "Protection",
  description:
    "Represents protection across unprotected, protected, restricted states.",
  category: "security",
  states: {
    unprotected: {
      icon: "shield",
      label: "Unprotected",
      description: "Unprotected.",
    },
    protected: {
      icon: "shield-check",
      label: "Protected",
      description: "Protected.",
    },
    restricted: {
      icon: "shield-ban",
      label: "Access restricted",
      description: "Access restricted.",
    },
  },
  initialState: "unprotected",
  transition: "scale-fade",
  tags: ["shield", "unprotected", "protected", "restricted"],
  source: {
    library: "lucide",
    license: "ISC",
    url: "https://lucide.dev",
    icons: ["shield", "shield-check", "shield-ban"],
  },
});

export type ShieldState = keyof typeof shieldStateIcon.states;

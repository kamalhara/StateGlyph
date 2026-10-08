import { defineStateIcon } from "../define-state-icon";

export const authenticationStateIcon = defineStateIcon({
  id: "authentication",
  title: "Authentication",
  description:
    "Represents authentication across signed out, signed in, expired states.",
  category: "security",
  states: {
    "signed-out": {
      icon: "user-round",
      label: "Signed out",
      description: "Signed out.",
    },
    "signed-in": {
      icon: "user-round-check",
      label: "Signed in",
      description: "Signed in.",
    },
    expired: {
      icon: "user-round-x",
      label: "Session expired",
      description: "Session expired.",
    },
  },
  initialState: "signed-out",
  transition: "crossfade",
  tags: ["authentication", "signed-out", "signed-in", "expired"],
  source: {
    library: "lucide",
    license: "ISC",
    url: "https://lucide.dev",
    icons: ["user-round", "user-round-check", "user-round-x"],
  },
});

export type AuthenticationState = keyof typeof authenticationStateIcon.states;

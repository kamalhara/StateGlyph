import { defineStateIcon } from "../define-state-icon";

export const linkStateIcon = defineStateIcon({
  id: "link",
  title: "Link",
  description: "Represents link across connected, broken, external states.",
  category: "files",
  states: {
    connected: {
      icon: "link",
      label: "Link connected",
      description: "Link connected.",
    },
    broken: {
      icon: "unlink",
      label: "Link broken",
      description: "Link broken.",
    },
    external: {
      icon: "external-link",
      label: "External link",
      description: "External link.",
    },
  },
  initialState: "connected",
  transition: "morph",
  tags: ["link", "connected", "broken", "external"],
  source: {
    library: "lucide",
    license: "ISC",
    url: "https://lucide.dev",
    icons: ["link", "unlink", "external-link"],
  },
});

export type LinkState = keyof typeof linkStateIcon.states;

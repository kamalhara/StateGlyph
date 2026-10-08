import { defineStateIcon } from "../define-state-icon";

export const ethernetStateIcon = defineStateIcon({
  id: "ethernet",
  title: "Ethernet",
  description: "Represents ethernet across disconnected, connected states.",
  category: "connectivity",
  states: {
    disconnected: {
      icon: "unplug",
      label: "Cable disconnected",
      description: "Cable disconnected.",
    },
    connected: {
      icon: "cable",
      label: "Cable connected",
      description: "Cable connected.",
    },
  },
  initialState: "disconnected",
  transition: "slide",
  tags: ["ethernet", "disconnected", "connected"],
  source: {
    library: "lucide",
    license: "ISC",
    url: "https://lucide.dev",
    icons: ["unplug", "cable"],
  },
});

export type EthernetState = keyof typeof ethernetStateIcon.states;

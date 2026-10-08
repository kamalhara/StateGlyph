import { defineStateIcon } from "../define-state-icon";

export const cellularStateIcon = defineStateIcon({
  id: "cellular",
  title: "Cellular signal",
  description: "Represents cellular signal across offline, low, high states.",
  category: "connectivity",
  states: {
    offline: {
      icon: "signal-zero",
      label: "No cellular signal",
      description: "No cellular signal.",
    },
    low: {
      icon: "signal-low",
      label: "Low cellular signal",
      description: "Low cellular signal.",
    },
    high: {
      icon: "signal-high",
      label: "High cellular signal",
      description: "High cellular signal.",
    },
  },
  initialState: "offline",
  transition: "scale-fade",
  tags: ["cellular", "offline", "low", "high"],
  source: {
    library: "lucide",
    license: "ISC",
    url: "https://lucide.dev",
    icons: ["signal-zero", "signal-low", "signal-high"],
  },
});

export type CellularState = keyof typeof cellularStateIcon.states;

import { defineStateIcon } from "../define-state-icon";

export const wifiStateIcon = defineStateIcon({
  id: "wifi",
  title: "Wi-Fi",
  description: "Represents wi-fi across off, weak, strong states.",
  category: "connectivity",
  states: {
    off: { icon: "wifi-off", label: "Wi-Fi off", description: "Wi-Fi off." },
    weak: {
      icon: "wifi-low",
      label: "Weak Wi-Fi signal",
      description: "Weak Wi-Fi signal.",
    },
    strong: {
      icon: "wifi-high",
      label: "Strong Wi-Fi signal",
      description: "Strong Wi-Fi signal.",
    },
  },
  initialState: "off",
  transition: "scale-fade",
  tags: ["wifi", "off", "weak", "strong"],
  source: {
    library: "lucide",
    license: "ISC",
    url: "https://lucide.dev",
    icons: ["wifi-off", "wifi-low", "wifi-high"],
  },
});

export type WifiState = keyof typeof wifiStateIcon.states;

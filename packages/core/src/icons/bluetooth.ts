import { defineStateIcon } from "../define-state-icon";

export const bluetoothStateIcon = defineStateIcon({
  id: "bluetooth",
  title: "Bluetooth",
  description: "Represents bluetooth across off, on, connected states.",
  category: "connectivity",
  states: {
    off: {
      icon: "bluetooth-off",
      label: "Bluetooth off",
      description: "Bluetooth off.",
    },
    on: {
      icon: "bluetooth",
      label: "Bluetooth on",
      description: "Bluetooth on.",
    },
    connected: {
      icon: "bluetooth-connected",
      label: "Bluetooth connected",
      description: "Bluetooth connected.",
    },
  },
  initialState: "off",
  transition: "scale-fade",
  tags: ["bluetooth", "off", "on", "connected"],
  source: {
    library: "lucide",
    license: "ISC",
    url: "https://lucide.dev",
    icons: ["bluetooth-off", "bluetooth", "bluetooth-connected"],
  },
});

export type BluetoothState = keyof typeof bluetoothStateIcon.states;

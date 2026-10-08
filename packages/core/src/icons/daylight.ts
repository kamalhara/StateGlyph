import { defineStateIcon } from "../define-state-icon";

export const daylightStateIcon = defineStateIcon({
  id: "daylight",
  title: "Daylight",
  description: "Represents daylight across dawn, day, dusk, night states.",
  category: "weather",
  states: {
    dawn: { icon: "sunrise", label: "Dawn", description: "Dawn." },
    day: { icon: "sun", label: "Daytime", description: "Daytime." },
    dusk: { icon: "sunset", label: "Dusk", description: "Dusk." },
    night: { icon: "moon", label: "Nighttime", description: "Nighttime." },
  },
  initialState: "dawn",
  transition: "rotate",
  tags: ["daylight", "dawn", "day", "dusk", "night"],
  source: {
    library: "lucide",
    license: "ISC",
    url: "https://lucide.dev",
    icons: ["sunrise", "sun", "sunset", "moon"],
  },
});

export type DaylightState = keyof typeof daylightStateIcon.states;

import { defineStateIcon } from "../define-state-icon";

export const temperatureStateIcon = defineStateIcon({
  id: "temperature",
  title: "Temperature",
  description: "Represents temperature across cold, mild, hot states.",
  category: "weather",
  states: {
    cold: { icon: "snowflake", label: "Cold", description: "Cold." },
    mild: {
      icon: "thermometer",
      label: "Mild temperature",
      description: "Mild temperature.",
    },
    hot: { icon: "thermometer-sun", label: "Hot", description: "Hot." },
  },
  initialState: "cold",
  transition: "scale-fade",
  tags: ["temperature", "cold", "mild", "hot"],
  source: {
    library: "lucide",
    license: "ISC",
    url: "https://lucide.dev",
    icons: ["snowflake", "thermometer", "thermometer-sun"],
  },
});

export type TemperatureState = keyof typeof temperatureStateIcon.states;

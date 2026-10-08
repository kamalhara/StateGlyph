import { defineStateIcon } from "../define-state-icon";

export const weatherStateIcon = defineStateIcon({
  id: "weather",
  title: "Weather",
  description: "Represents weather across sunny, cloudy, rainy, snowy states.",
  category: "weather",
  states: {
    sunny: { icon: "sun", label: "Sunny", description: "Sunny." },
    cloudy: { icon: "cloud", label: "Cloudy", description: "Cloudy." },
    rainy: { icon: "cloud-rain", label: "Rainy", description: "Rainy." },
    snowy: { icon: "snowflake", label: "Snowy", description: "Snowy." },
  },
  initialState: "sunny",
  transition: "crossfade",
  tags: ["weather", "sunny", "cloudy", "rainy", "snowy"],
  source: {
    library: "lucide",
    license: "ISC",
    url: "https://lucide.dev",
    icons: ["sun", "cloud", "cloud-rain", "snowflake"],
  },
});

export type WeatherState = keyof typeof weatherStateIcon.states;

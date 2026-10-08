import { defineStateIcon } from "../define-state-icon";

export const themeStateIcon = defineStateIcon({
  id: "theme",
  title: "Theme",
  description: "Represents theme across light, dark, system states.",
  category: "appearance",
  states: {
    light: { icon: "sun", label: "Light theme", description: "Light theme." },
    dark: { icon: "moon", label: "Dark theme", description: "Dark theme." },
    system: {
      icon: "monitor",
      label: "System theme",
      description: "System theme.",
    },
  },
  initialState: "light",
  transition: "rotate",
  tags: ["theme", "light", "dark", "system"],
  source: {
    library: "lucide",
    license: "ISC",
    url: "https://lucide.dev",
    icons: ["sun", "moon", "monitor"],
  },
});

export type ThemeState = keyof typeof themeStateIcon.states;

import { defineStateIcon } from "../define-state-icon";

export const volumeStateIcon = defineStateIcon({
  id: "volume",
  title: "Volume",
  description: "Switches between audible and muted audio states.",
  category: "media",
  states: {
    audible: {
      icon: "volume-2",
      label: "Mute audio",
      description: "Audio is audible.",
    },
    muted: {
      icon: "volume-x",
      label: "Unmute audio",
      description: "Audio is muted.",
    },
  },
  initialState: "audible",
  transition: "morph",
  tags: ["volume", "audible", "muted"],
  source: {
    library: "lucide",
    license: "ISC",
    url: "https://lucide.dev",
    icons: ["volume-2", "volume-x"],
  },
});

export type VolumeState = keyof typeof volumeStateIcon.states;

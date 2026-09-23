import { defineStateIcon } from "../define-state-icon";

export const microphoneStateIcon = defineStateIcon({
  id: "microphone",
  title: "Microphone",
  description: "Switches between active and muted microphone states.",
  category: "media",
  states: {
    active: {
      icon: "mic",
      label: "Mute microphone",
      description: "The microphone is active.",
    },
    muted: {
      icon: "mic-off",
      label: "Unmute microphone",
      description: "The microphone is muted.",
    },
  },
  initialState: "active",
  transition: "morph",
  tags: ["microphone", "active", "muted"],
  source: {
    library: "lucide",
    license: "ISC",
    url: "https://lucide.dev",
    icons: ["mic", "mic-off"],
  },
});

export type MicrophoneState = keyof typeof microphoneStateIcon.states;

import { defineStateIcon } from "../define-state-icon";

export const playPauseStateIcon = defineStateIcon({
  id: "play-pause",
  title: "Play and pause",
  description: "Switches between paused and playing media states.",
  category: "media",
  states: {
    paused: {
      icon: "play",
      label: "Play",
      description: "Media is paused and can be played.",
    },
    playing: {
      icon: "pause",
      label: "Pause",
      description: "Media is playing and can be paused.",
    },
  },
  initialState: "paused",
  transition: "morph",
  tags: ["play-pause", "play", "pause", "paused", "playing"],
  source: {
    library: "lucide",
    license: "ISC",
    url: "https://lucide.dev",
    icons: ["play", "pause"],
  },
});

export type PlayPauseState = keyof typeof playPauseStateIcon.states;

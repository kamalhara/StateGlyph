import { defineStateIcon } from "../define-state-icon";

export const playbackStateIcon = defineStateIcon({
  id: "playback",
  title: "Playback",
  description: "Represents idle, buffering, playing, and paused media.",
  category: "media",
  states: {
    idle: {
      icon: "play",
      label: "Play",
      description: "Media is ready to play.",
    },
    buffering: {
      icon: "loader-circle",
      label: "Buffering",
      description: "Media is buffering.",
      continuous: true,
    },
    playing: {
      icon: "pause",
      label: "Pause",
      description: "Media is currently playing.",
    },
    paused: { icon: "play", label: "Resume", description: "Media is paused." },
  },
  initialState: "idle",
  transition: "scale-fade",
  tags: ["playback", "idle", "buffering", "playing", "paused"],
  source: {
    library: "lucide",
    license: "ISC",
    url: "https://lucide.dev",
    icons: ["play", "loader-circle", "pause"],
  },
});

export type PlaybackState = keyof typeof playbackStateIcon.states;

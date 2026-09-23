import { defineStateIcon } from "../define-state-icon";

export const downloadStateIcon = defineStateIcon({
  id: "download",
  title: "Download",
  description: "Shows the current state of a file download.",
  category: "async",
  states: {
    idle: {
      icon: "download",
      label: "Download",
      description: "Ready to download.",
    },
    loading: {
      icon: "loader-circle",
      label: "Downloading",
      description: "Downloading is in progress.",
      continuous: true,
    },
    success: {
      icon: "circle-check",
      label: "Download complete",
      description: "Download complete successfully.",
    },
    error: {
      icon: "circle-alert",
      label: "Download failed",
      description: "The download action failed.",
    },
  },
  initialState: "idle",
  transition: "scale-fade",
  tags: ["download", "idle", "loading", "success", "error"],
  source: {
    library: "lucide",
    license: "ISC",
    url: "https://lucide.dev",
    icons: ["download", "loader-circle", "circle-check", "circle-alert"],
  },
});

export type DownloadState = keyof typeof downloadStateIcon.states;

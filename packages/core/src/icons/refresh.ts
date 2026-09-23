import { defineStateIcon } from "../define-state-icon";

export const refreshStateIcon = defineStateIcon({
  id: "refresh",
  title: "Refresh",
  description: "Shows the progress and result of refreshing content.",
  category: "async",
  states: {
    idle: {
      icon: "refresh-cw",
      label: "Refresh",
      description: "Ready to refresh.",
    },
    refreshing: {
      icon: "loader-circle",
      label: "Refreshing",
      description: "Refreshing is in progress.",
      continuous: true,
    },
    complete: {
      icon: "circle-check",
      label: "Refresh complete",
      description: "Refresh complete successfully.",
    },
    error: {
      icon: "circle-alert",
      label: "Refresh failed",
      description: "The refresh action failed.",
    },
  },
  initialState: "idle",
  transition: "scale-fade",
  tags: ["refresh", "idle", "refreshing", "complete", "error"],
  source: {
    library: "lucide",
    license: "ISC",
    url: "https://lucide.dev",
    icons: ["refresh-cw", "loader-circle", "circle-check", "circle-alert"],
  },
});

export type RefreshState = keyof typeof refreshStateIcon.states;

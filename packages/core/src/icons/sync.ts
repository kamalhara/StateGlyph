import { defineStateIcon } from "../define-state-icon";

export const syncStateIcon = defineStateIcon({
  id: "sync",
  title: "Sync",
  description: "Shows whether data is idle, syncing, synced, or failed.",
  category: "async",
  states: {
    idle: { icon: "refresh-cw", label: "Sync", description: "Ready to sync." },
    syncing: {
      icon: "loader-circle",
      label: "Syncing",
      description: "Syncing is in progress.",
      continuous: true,
    },
    synced: {
      icon: "circle-check",
      label: "Synced",
      description: "Synced successfully.",
    },
    error: {
      icon: "circle-alert",
      label: "Sync failed",
      description: "The sync action failed.",
    },
  },
  initialState: "idle",
  transition: "scale-fade",
  tags: ["sync", "idle", "syncing", "synced", "error"],
  source: {
    library: "lucide",
    license: "ISC",
    url: "https://lucide.dev",
    icons: ["refresh-cw", "loader-circle", "circle-check", "circle-alert"],
  },
});

export type SyncState = keyof typeof syncStateIcon.states;

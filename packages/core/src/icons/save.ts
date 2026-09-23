import { defineStateIcon } from "../define-state-icon";

export const saveStateIcon = defineStateIcon({
  id: "save",
  title: "Save",
  description: "Shows whether a change is saving, saved, or failed.",
  category: "async",
  states: {
    idle: { icon: "save", label: "Save", description: "Ready to save." },
    saving: {
      icon: "loader-circle",
      label: "Saving",
      description: "Saving is in progress.",
      continuous: true,
    },
    saved: {
      icon: "circle-check",
      label: "Saved",
      description: "Saved successfully.",
    },
    error: {
      icon: "circle-alert",
      label: "Save failed",
      description: "The save action failed.",
    },
  },
  initialState: "idle",
  transition: "scale-fade",
  tags: ["save", "idle", "saving", "saved", "error"],
  source: {
    library: "lucide",
    license: "ISC",
    url: "https://lucide.dev",
    icons: ["save", "loader-circle", "circle-check", "circle-alert"],
  },
});

export type SaveState = keyof typeof saveStateIcon.states;

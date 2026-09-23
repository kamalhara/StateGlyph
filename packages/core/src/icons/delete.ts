import { defineStateIcon } from "../define-state-icon";

export const deleteStateIcon = defineStateIcon({
  id: "delete",
  title: "Delete",
  description: "Shows the lifecycle of a delete action.",
  category: "async",
  states: {
    idle: { icon: "trash-2", label: "Delete", description: "Ready to delete." },
    deleting: {
      icon: "loader-circle",
      label: "Deleting",
      description: "Deleting is in progress.",
      continuous: true,
    },
    deleted: {
      icon: "circle-check",
      label: "Deleted",
      description: "Deleted successfully.",
    },
    error: {
      icon: "circle-alert",
      label: "Delete failed",
      description: "The delete action failed.",
    },
  },
  initialState: "idle",
  transition: "scale-fade",
  tags: ["delete", "idle", "deleting", "deleted", "error"],
  source: {
    library: "lucide",
    license: "ISC",
    url: "https://lucide.dev",
    icons: ["trash-2", "loader-circle", "circle-check", "circle-alert"],
  },
});

export type DeleteState = keyof typeof deleteStateIcon.states;

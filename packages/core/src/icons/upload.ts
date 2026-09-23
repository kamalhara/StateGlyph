import { defineStateIcon } from "../define-state-icon";

export const uploadStateIcon = defineStateIcon({
  id: "upload",
  title: "Upload",
  description: "Shows the current state of a file upload.",
  category: "async",
  states: {
    idle: { icon: "upload", label: "Upload", description: "Ready to upload." },
    loading: {
      icon: "loader-circle",
      label: "Uploading",
      description: "Uploading is in progress.",
      continuous: true,
    },
    success: {
      icon: "circle-check",
      label: "Upload complete",
      description: "Upload complete successfully.",
    },
    error: {
      icon: "circle-alert",
      label: "Upload failed",
      description: "The upload action failed.",
    },
  },
  initialState: "idle",
  transition: "scale-fade",
  tags: ["upload", "idle", "loading", "success", "error"],
  source: {
    library: "lucide",
    license: "ISC",
    url: "https://lucide.dev",
    icons: ["upload", "loader-circle", "circle-check", "circle-alert"],
  },
});

export type UploadState = keyof typeof uploadStateIcon.states;

import { defineStateIcon } from "../define-state-icon";

export const uploadStateIcon = defineStateIcon({
  id: "upload",
  title: "Upload",
  description: "Shows the current state of a file upload.",
  category: "async",
  states: {
    idle: {
      icon: "upload",
      label: "Upload",
    },
    loading: {
      icon: "loader-circle",
      label: "Uploading",
      continuous: true,
    },
    success: {
      icon: "circle-check",
      label: "Upload complete",
    },
    error: {
      icon: "circle-alert",
      label: "Upload failed",
    },
  },
  initialState: "idle",
  transition: "scale-fade",
  tags: ["upload", "file", "loading", "success", "error"],
  source: {
    library: "lucide",
    license: "ISC",
    url: "https://lucide.dev",
    icons: ["upload", "loader-circle", "circle-check", "circle-alert"],
  },
});

export type UploadState = keyof typeof uploadStateIcon.states;

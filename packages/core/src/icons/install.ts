import { defineStateIcon } from "../define-state-icon";

export const installStateIcon = defineStateIcon({
  id: "install",
  title: "Install",
  description: "Shows the lifecycle of installing a package or application.",
  category: "async",
  states: {
    idle: {
      icon: "package",
      label: "Install",
      description: "Ready to install.",
    },
    installing: {
      icon: "loader-circle",
      label: "Installing",
      description: "Installing is in progress.",
      continuous: true,
    },
    installed: {
      icon: "package-check",
      label: "Installed",
      description: "Installed successfully.",
    },
    error: {
      icon: "circle-alert",
      label: "Install failed",
      description: "The install action failed.",
    },
  },
  initialState: "idle",
  transition: "scale-fade",
  tags: ["install", "idle", "installing", "installed", "error"],
  source: {
    library: "lucide",
    license: "ISC",
    url: "https://lucide.dev",
    icons: ["package", "loader-circle", "package-check", "circle-alert"],
  },
});

export type InstallState = keyof typeof installStateIcon.states;

import { defineStateIcon } from "../define-state-icon";

export const submitStateIcon = defineStateIcon({
  id: "submit",
  title: "Submit",
  description: "Shows the progress and result of a form submission.",
  category: "async",
  states: {
    idle: {
      icon: "send-horizontal",
      label: "Submit",
      description: "Ready to submit.",
    },
    submitting: {
      icon: "loader-circle",
      label: "Submitting",
      description: "Submitting is in progress.",
      continuous: true,
    },
    success: {
      icon: "circle-check",
      label: "Submission complete",
      description: "Submission complete successfully.",
    },
    error: {
      icon: "circle-alert",
      label: "Submit failed",
      description: "The submit action failed.",
    },
  },
  initialState: "idle",
  transition: "scale-fade",
  tags: ["submit", "idle", "submitting", "success", "error"],
  source: {
    library: "lucide",
    license: "ISC",
    url: "https://lucide.dev",
    icons: ["send-horizontal", "loader-circle", "circle-check", "circle-alert"],
  },
});

export type SubmitState = keyof typeof submitStateIcon.states;

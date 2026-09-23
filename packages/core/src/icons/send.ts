import { defineStateIcon } from "../define-state-icon";

export const sendStateIcon = defineStateIcon({
  id: "send",
  title: "Send",
  description: "Shows the progress and result of sending content.",
  category: "async",
  states: {
    idle: { icon: "send", label: "Send", description: "Ready to send." },
    sending: {
      icon: "loader-circle",
      label: "Sending",
      description: "Sending is in progress.",
      continuous: true,
    },
    sent: {
      icon: "circle-check",
      label: "Sent",
      description: "Sent successfully.",
    },
    error: {
      icon: "circle-alert",
      label: "Send failed",
      description: "The send action failed.",
    },
  },
  initialState: "idle",
  transition: "scale-fade",
  tags: ["send", "idle", "sending", "sent", "error"],
  source: {
    library: "lucide",
    license: "ISC",
    url: "https://lucide.dev",
    icons: ["send", "loader-circle", "circle-check", "circle-alert"],
  },
});

export type SendState = keyof typeof sendStateIcon.states;

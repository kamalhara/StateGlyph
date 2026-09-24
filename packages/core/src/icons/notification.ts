import { defineStateIcon } from "../define-state-icon";

export const notificationStateIcon = defineStateIcon({
  id: "notification",
  title: "Notification",
  description: "Shows off, enabled, and unread notification states.",
  category: "notification",
  states: {
    off: {
      icon: "bell-off",
      label: "Enable notifications",
      description: "Notifications are off.",
    },
    on: {
      icon: "bell",
      label: "Notifications on",
      description: "Notifications are enabled.",
    },
    unread: {
      icon: "bell-ring",
      label: "Unread notifications",
      description: "There are unread notifications.",
    },
  },
  initialState: "off",
  transition: "scale-fade",
  tags: ["notification", "off", "on", "unread"],
  source: {
    library: "lucide",
    license: "ISC",
    url: "https://lucide.dev",
    icons: ["bell-off", "bell", "bell-ring"],
  },
});

export type NotificationState = keyof typeof notificationStateIcon.states;

import { defineStateIcon } from "../define-state-icon";

export const paymentStateIcon = defineStateIcon({
  id: "payment",
  title: "Payment",
  description: "Shows a payment moving through processing and completion.",
  category: "commerce",
  states: {
    idle: {
      icon: "credit-card",
      label: "Payment",
      description: "Ready to payment.",
    },
    processing: {
      icon: "loader-circle",
      label: "Processing payment",
      description: "Processing payment is in progress.",
      continuous: true,
    },
    success: {
      icon: "circle-check",
      label: "Payment complete",
      description: "Payment complete successfully.",
    },
    error: {
      icon: "circle-alert",
      label: "Payment failed",
      description: "The payment action failed.",
    },
  },
  initialState: "idle",
  transition: "scale-fade",
  tags: ["payment", "idle", "processing", "success", "error"],
  source: {
    library: "lucide",
    license: "ISC",
    url: "https://lucide.dev",
    icons: ["credit-card", "loader-circle", "circle-check", "circle-alert"],
  },
});

export type PaymentState = keyof typeof paymentStateIcon.states;

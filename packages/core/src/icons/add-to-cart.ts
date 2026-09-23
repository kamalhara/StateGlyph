import { defineStateIcon } from "../define-state-icon";

export const addToCartStateIcon = defineStateIcon({
  id: "add-to-cart",
  title: "Add to cart",
  description: "Shows the lifecycle of adding an item to a cart.",
  category: "async",
  states: {
    idle: {
      icon: "shopping-cart",
      label: "Add to cart",
      description: "Ready to add to cart.",
    },
    adding: {
      icon: "loader-circle",
      label: "Adding to cart",
      description: "Adding to cart is in progress.",
      continuous: true,
    },
    added: {
      icon: "circle-check",
      label: "Added to cart",
      description: "Added to cart successfully.",
    },
    error: {
      icon: "circle-alert",
      label: "Add to cart failed",
      description: "The add to cart action failed.",
    },
  },
  initialState: "idle",
  transition: "scale-fade",
  tags: [
    "add-to-cart",
    "add",
    "to",
    "cart",
    "idle",
    "adding",
    "added",
    "error",
  ],
  source: {
    library: "lucide",
    license: "ISC",
    url: "https://lucide.dev",
    icons: ["shopping-cart", "loader-circle", "circle-check", "circle-alert"],
  },
});

export type AddToCartState = keyof typeof addToCartStateIcon.states;

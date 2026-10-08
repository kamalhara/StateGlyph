import { defineStateIcon } from "../define-state-icon";

export const toolStateIcon = defineStateIcon({
  id: "tool",
  title: "Editing tool",
  description: "Represents editing tool across select, draw, erase states.",
  category: "editing",
  states: {
    select: {
      icon: "mouse-pointer-2",
      label: "Selection tool",
      description: "Selection tool.",
    },
    draw: {
      icon: "pencil",
      label: "Drawing tool",
      description: "Drawing tool.",
    },
    erase: {
      icon: "eraser",
      label: "Eraser tool",
      description: "Eraser tool.",
    },
  },
  initialState: "select",
  transition: "rotate",
  tags: ["tool", "select", "draw", "erase"],
  source: {
    library: "lucide",
    license: "ISC",
    url: "https://lucide.dev",
    icons: ["mouse-pointer-2", "pencil", "eraser"],
  },
});

export type ToolState = keyof typeof toolStateIcon.states;

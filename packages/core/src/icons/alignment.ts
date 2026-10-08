import { defineStateIcon } from "../define-state-icon";

export const alignmentStateIcon = defineStateIcon({
  id: "alignment",
  title: "Text alignment",
  description:
    "Represents text alignment across start, center, end, justify states.",
  category: "editing",
  states: {
    start: {
      icon: "text-align-start",
      label: "Align to start",
      description: "Align to start.",
    },
    center: {
      icon: "text-align-center",
      label: "Align to center",
      description: "Align to center.",
    },
    end: {
      icon: "text-align-end",
      label: "Align to end",
      description: "Align to end.",
    },
    justify: {
      icon: "text-align-justify",
      label: "Justified text",
      description: "Justified text.",
    },
  },
  initialState: "start",
  transition: "slide",
  tags: ["alignment", "start", "center", "end", "justify"],
  source: {
    library: "lucide",
    license: "ISC",
    url: "https://lucide.dev",
    icons: [
      "text-align-start",
      "text-align-center",
      "text-align-end",
      "text-align-justify",
    ],
  },
});

export type AlignmentState = keyof typeof alignmentStateIcon.states;

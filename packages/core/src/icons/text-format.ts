import { defineStateIcon } from "../define-state-icon";

export const textFormatStateIcon = defineStateIcon({
  id: "text-format",
  title: "Text format",
  description: "Represents text format across regular, bold, italic states.",
  category: "editing",
  states: {
    regular: {
      icon: "type",
      label: "Regular text",
      description: "Regular text.",
    },
    bold: { icon: "bold", label: "Bold text", description: "Bold text." },
    italic: {
      icon: "italic",
      label: "Italic text",
      description: "Italic text.",
    },
  },
  initialState: "regular",
  transition: "crossfade",
  tags: ["text-format", "text", "format", "regular", "bold", "italic"],
  source: {
    library: "lucide",
    license: "ISC",
    url: "https://lucide.dev",
    icons: ["type", "bold", "italic"],
  },
});

export type TextFormatState = keyof typeof textFormatStateIcon.states;

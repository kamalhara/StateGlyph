import { stateIconCatalog } from "@stateglyph/core";

const categoryLabels = {
  async: "Async workflows",
  media: "Media controls",
  navigation: "Navigation and layout",
  feedback: "Feedback and toggles",
  device: "Device and connection",
} as const;

export function formatIconList(): string {
  const sections = Object.entries(categoryLabels).flatMap(
    ([category, label]) => {
      const icons = stateIconCatalog.filter(
        (icon) => icon.category === category,
      );

      if (icons.length === 0) {
        return [];
      }

      const rows = icons.map(
        (icon) =>
          `  ${icon.id.padEnd(22)} ${icon.title} (${Object.keys(icon.states).length} states)`,
      );

      return [[`${label} (${icons.length})`, ...rows].join("\n")];
    },
  );

  return [
    `StateGlyph — ${stateIconCatalog.length} icons`,
    "",
    ...sections.flatMap((section, index) =>
      index === sections.length - 1 ? [section] : [section, ""],
    ),
  ].join("\n");
}

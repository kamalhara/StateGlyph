import { defineStateIcon } from "../define-state-icon";

export const bookmarkStateIcon = defineStateIcon({
  id: "bookmark",
  title: "Bookmark",
  description: "Switches between bookmarked and unbookmarked states.",
  category: "feedback",
  states: {
    unbookmarked: {
      icon: "bookmark",
      label: "Add bookmark",
      description: "The item is not bookmarked.",
    },
    bookmarked: {
      icon: "bookmark-check",
      label: "Remove bookmark",
      description: "The item is bookmarked.",
    },
  },
  initialState: "unbookmarked",
  transition: "morph",
  tags: ["bookmark", "unbookmarked", "bookmarked"],
  source: {
    library: "lucide",
    license: "ISC",
    url: "https://lucide.dev",
    icons: ["bookmark", "bookmark-check"],
  },
});

export type BookmarkState = keyof typeof bookmarkStateIcon.states;

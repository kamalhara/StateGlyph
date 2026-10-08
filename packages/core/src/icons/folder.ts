import { defineStateIcon } from "../define-state-icon";

export const folderStateIcon = defineStateIcon({
  id: "folder",
  title: "Folder",
  description: "Represents folder across closed, open, locked states.",
  category: "files",
  states: {
    closed: {
      icon: "folder",
      label: "Folder closed",
      description: "Folder closed.",
    },
    open: {
      icon: "folder-open",
      label: "Folder open",
      description: "Folder open.",
    },
    locked: {
      icon: "folder-lock",
      label: "Folder locked",
      description: "Folder locked.",
    },
  },
  initialState: "closed",
  transition: "morph",
  tags: ["folder", "closed", "open", "locked"],
  source: {
    library: "lucide",
    license: "ISC",
    url: "https://lucide.dev",
    icons: ["folder", "folder-open", "folder-lock"],
  },
});

export type FolderState = keyof typeof folderStateIcon.states;

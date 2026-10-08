import { defineStateIcon } from "../define-state-icon";

export const archiveStateIcon = defineStateIcon({
  id: "archive",
  title: "Archive",
  description: "Represents archive across unpacked, archived states.",
  category: "files",
  states: {
    unpacked: {
      icon: "folder-open",
      label: "Unpacked",
      description: "Unpacked.",
    },
    archived: { icon: "archive", label: "Archived", description: "Archived." },
  },
  initialState: "unpacked",
  transition: "scale-fade",
  tags: ["archive", "unpacked", "archived"],
  source: {
    library: "lucide",
    license: "ISC",
    url: "https://lucide.dev",
    icons: ["folder-open", "archive"],
  },
});

export type ArchiveState = keyof typeof archiveStateIcon.states;

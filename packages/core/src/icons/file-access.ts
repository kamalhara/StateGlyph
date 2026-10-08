import { defineStateIcon } from "../define-state-icon";

export const fileAccessStateIcon = defineStateIcon({
  id: "file-access",
  title: "File access",
  description:
    "Represents file access across private, shared, read only states.",
  category: "files",
  states: {
    private: {
      icon: "file-lock",
      label: "Private file",
      description: "Private file.",
    },
    shared: {
      icon: "file-user",
      label: "Shared file",
      description: "Shared file.",
    },
    "read-only": {
      icon: "file-text",
      label: "Read-only file",
      description: "Read-only file.",
    },
  },
  initialState: "private",
  transition: "crossfade",
  tags: ["file-access", "file", "access", "private", "shared", "read-only"],
  source: {
    library: "lucide",
    license: "ISC",
    url: "https://lucide.dev",
    icons: ["file-lock", "file-user", "file-text"],
  },
});

export type FileAccessState = keyof typeof fileAccessStateIcon.states;

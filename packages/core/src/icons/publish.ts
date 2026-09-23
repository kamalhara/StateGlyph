import { defineStateIcon } from "../define-state-icon";

export const publishStateIcon = defineStateIcon({
  id: "publish",
  title: "Publish",
  description: "Shows content moving from draft to published.",
  category: "async",
  states: {
    draft: {
      icon: "file-pen-line",
      label: "Draft",
      description: "The content is still a draft.",
    },
    publishing: {
      icon: "loader-circle",
      label: "Publishing",
      description: "Publication is in progress.",
      continuous: true,
    },
    published: {
      icon: "circle-check",
      label: "Published",
      description: "The content is published.",
    },
    error: {
      icon: "circle-alert",
      label: "Publishing failed",
      description: "The content could not be published.",
    },
  },
  initialState: "draft",
  transition: "scale-fade",
  tags: ["publish", "draft", "publishing", "published", "error"],
  source: {
    library: "lucide",
    license: "ISC",
    url: "https://lucide.dev",
    icons: ["file-pen-line", "loader-circle", "circle-check", "circle-alert"],
  },
});

export type PublishState = keyof typeof publishStateIcon.states;

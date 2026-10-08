import { defineStateIcon } from "../define-state-icon";

export const taskStateIcon = defineStateIcon({
  id: "task",
  title: "Task",
  description: "Represents task across todo, active, done, skipped states.",
  category: "productivity",
  states: {
    todo: { icon: "circle", label: "To do", description: "To do." },
    active: {
      icon: "circle-dot",
      label: "In progress",
      description: "In progress.",
    },
    done: { icon: "circle-check", label: "Done", description: "Done." },
    skipped: {
      icon: "circle-slash",
      label: "Skipped",
      description: "Skipped.",
    },
  },
  initialState: "todo",
  transition: "scale-fade",
  tags: ["task", "todo", "active", "done", "skipped"],
  source: {
    library: "lucide",
    license: "ISC",
    url: "https://lucide.dev",
    icons: ["circle", "circle-dot", "circle-check", "circle-slash"],
  },
});

export type TaskState = keyof typeof taskStateIcon.states;

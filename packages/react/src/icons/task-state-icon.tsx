"use client";

import { taskStateIcon } from "@stateglyph/core";
import { StateIcon, type StateIconProps } from "../components/state-icon";

export type TaskStateIconProps = Omit<
  StateIconProps<typeof taskStateIcon.states>,
  "definition"
>;
export function TaskStateIcon(props: TaskStateIconProps) {
  return <StateIcon definition={taskStateIcon} {...props} />;
}

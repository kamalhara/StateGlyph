"use client";

import { priorityStateIcon } from "@stateglyph/core";
import { StateIcon, type StateIconProps } from "../components/state-icon";

export type PriorityStateIconProps = Omit<
  StateIconProps<typeof priorityStateIcon.states>,
  "definition"
>;
export function PriorityStateIcon(props: PriorityStateIconProps) {
  return <StateIcon definition={priorityStateIcon} {...props} />;
}

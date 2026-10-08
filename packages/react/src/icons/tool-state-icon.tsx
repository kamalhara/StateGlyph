"use client";

import { toolStateIcon } from "@stateglyph/core";
import { StateIcon, type StateIconProps } from "../components/state-icon";

export type ToolStateIconProps = Omit<
  StateIconProps<typeof toolStateIcon.states>,
  "definition"
>;
export function ToolStateIcon(props: ToolStateIconProps) {
  return <StateIcon definition={toolStateIcon} {...props} />;
}

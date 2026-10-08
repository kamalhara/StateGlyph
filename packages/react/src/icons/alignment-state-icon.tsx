"use client";

import { alignmentStateIcon } from "@stateglyph/core";
import { StateIcon, type StateIconProps } from "../components/state-icon";

export type AlignmentStateIconProps = Omit<
  StateIconProps<typeof alignmentStateIcon.states>,
  "definition"
>;
export function AlignmentStateIcon(props: AlignmentStateIconProps) {
  return <StateIcon definition={alignmentStateIcon} {...props} />;
}

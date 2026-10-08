"use client";

import { lockStateIcon } from "@stateglyph/core";
import { StateIcon, type StateIconProps } from "../components/state-icon";

export type LockStateIconProps = Omit<
  StateIconProps<typeof lockStateIcon.states>,
  "definition"
>;
export function LockStateIcon(props: LockStateIconProps) {
  return <StateIcon definition={lockStateIcon} {...props} />;
}

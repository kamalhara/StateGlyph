"use client";

import { pinStateIcon } from "@stateglyph/core";
import { StateIcon, type StateIconProps } from "../components/state-icon";

export type PinStateIconProps = Omit<
  StateIconProps<typeof pinStateIcon.states>,
  "definition"
>;
export function PinStateIcon(props: PinStateIconProps) {
  return <StateIcon definition={pinStateIcon} {...props} />;
}

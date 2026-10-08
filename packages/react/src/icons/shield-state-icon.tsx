"use client";

import { shieldStateIcon } from "@stateglyph/core";
import { StateIcon, type StateIconProps } from "../components/state-icon";

export type ShieldStateIconProps = Omit<
  StateIconProps<typeof shieldStateIcon.states>,
  "definition"
>;
export function ShieldStateIcon(props: ShieldStateIconProps) {
  return <StateIcon definition={shieldStateIcon} {...props} />;
}

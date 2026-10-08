"use client";

import { cellularStateIcon } from "@stateglyph/core";
import { StateIcon, type StateIconProps } from "../components/state-icon";

export type CellularStateIconProps = Omit<
  StateIconProps<typeof cellularStateIcon.states>,
  "definition"
>;
export function CellularStateIcon(props: CellularStateIconProps) {
  return <StateIcon definition={cellularStateIcon} {...props} />;
}

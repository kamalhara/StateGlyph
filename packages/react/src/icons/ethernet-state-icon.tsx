"use client";

import { ethernetStateIcon } from "@stateglyph/core";
import { StateIcon, type StateIconProps } from "../components/state-icon";

export type EthernetStateIconProps = Omit<
  StateIconProps<typeof ethernetStateIcon.states>,
  "definition"
>;
export function EthernetStateIcon(props: EthernetStateIconProps) {
  return <StateIcon definition={ethernetStateIcon} {...props} />;
}

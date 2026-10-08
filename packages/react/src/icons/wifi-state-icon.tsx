"use client";

import { wifiStateIcon } from "@stateglyph/core";
import { StateIcon, type StateIconProps } from "../components/state-icon";

export type WifiStateIconProps = Omit<
  StateIconProps<typeof wifiStateIcon.states>,
  "definition"
>;
export function WifiStateIcon(props: WifiStateIconProps) {
  return <StateIcon definition={wifiStateIcon} {...props} />;
}

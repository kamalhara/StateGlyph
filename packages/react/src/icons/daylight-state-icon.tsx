"use client";

import { daylightStateIcon } from "@stateglyph/core";
import { StateIcon, type StateIconProps } from "../components/state-icon";

export type DaylightStateIconProps = Omit<
  StateIconProps<typeof daylightStateIcon.states>,
  "definition"
>;
export function DaylightStateIcon(props: DaylightStateIconProps) {
  return <StateIcon definition={daylightStateIcon} {...props} />;
}

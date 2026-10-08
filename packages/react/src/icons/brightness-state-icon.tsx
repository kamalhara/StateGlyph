"use client";

import { brightnessStateIcon } from "@stateglyph/core";
import { StateIcon, type StateIconProps } from "../components/state-icon";

export type BrightnessStateIconProps = Omit<
  StateIconProps<typeof brightnessStateIcon.states>,
  "definition"
>;
export function BrightnessStateIcon(props: BrightnessStateIconProps) {
  return <StateIcon definition={brightnessStateIcon} {...props} />;
}

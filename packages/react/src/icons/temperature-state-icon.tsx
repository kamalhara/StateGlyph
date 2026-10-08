"use client";

import { temperatureStateIcon } from "@stateglyph/core";
import { StateIcon, type StateIconProps } from "../components/state-icon";

export type TemperatureStateIconProps = Omit<
  StateIconProps<typeof temperatureStateIcon.states>,
  "definition"
>;
export function TemperatureStateIcon(props: TemperatureStateIconProps) {
  return <StateIcon definition={temperatureStateIcon} {...props} />;
}

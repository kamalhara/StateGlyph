"use client";

import { weatherStateIcon } from "@stateglyph/core";
import { StateIcon, type StateIconProps } from "../components/state-icon";

export type WeatherStateIconProps = Omit<
  StateIconProps<typeof weatherStateIcon.states>,
  "definition"
>;
export function WeatherStateIcon(props: WeatherStateIconProps) {
  return <StateIcon definition={weatherStateIcon} {...props} />;
}

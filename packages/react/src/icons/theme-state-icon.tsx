"use client";

import { themeStateIcon } from "@stateglyph/core";
import { StateIcon, type StateIconProps } from "../components/state-icon";

export type ThemeStateIconProps = Omit<
  StateIconProps<typeof themeStateIcon.states>,
  "definition"
>;
export function ThemeStateIcon(props: ThemeStateIconProps) {
  return <StateIcon definition={themeStateIcon} {...props} />;
}

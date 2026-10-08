"use client";

import { textFormatStateIcon } from "@stateglyph/core";
import { StateIcon, type StateIconProps } from "../components/state-icon";

export type TextFormatStateIconProps = Omit<
  StateIconProps<typeof textFormatStateIcon.states>,
  "definition"
>;
export function TextFormatStateIcon(props: TextFormatStateIconProps) {
  return <StateIcon definition={textFormatStateIcon} {...props} />;
}

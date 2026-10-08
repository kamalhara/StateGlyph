"use client";

import { contrastStateIcon } from "@stateglyph/core";
import { StateIcon, type StateIconProps } from "../components/state-icon";

export type ContrastStateIconProps = Omit<
  StateIconProps<typeof contrastStateIcon.states>,
  "definition"
>;
export function ContrastStateIcon(props: ContrastStateIconProps) {
  return <StateIcon definition={contrastStateIcon} {...props} />;
}

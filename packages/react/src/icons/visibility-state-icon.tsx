"use client";

import { visibilityStateIcon } from "@stateglyph/core";
import { StateIcon, type StateIconProps } from "../components/state-icon";

export type VisibilityStateIconProps = Omit<
  StateIconProps<typeof visibilityStateIcon.states>,
  "definition"
>;
export function VisibilityStateIcon(props: VisibilityStateIconProps) {
  return <StateIcon definition={visibilityStateIcon} {...props} />;
}

"use client";

import { linkStateIcon } from "@stateglyph/core";
import { StateIcon, type StateIconProps } from "../components/state-icon";

export type LinkStateIconProps = Omit<
  StateIconProps<typeof linkStateIcon.states>,
  "definition"
>;
export function LinkStateIcon(props: LinkStateIconProps) {
  return <StateIcon definition={linkStateIcon} {...props} />;
}

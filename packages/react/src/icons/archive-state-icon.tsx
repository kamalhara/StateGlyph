"use client";

import { archiveStateIcon } from "@stateglyph/core";
import { StateIcon, type StateIconProps } from "../components/state-icon";

export type ArchiveStateIconProps = Omit<
  StateIconProps<typeof archiveStateIcon.states>,
  "definition"
>;
export function ArchiveStateIcon(props: ArchiveStateIconProps) {
  return <StateIcon definition={archiveStateIcon} {...props} />;
}

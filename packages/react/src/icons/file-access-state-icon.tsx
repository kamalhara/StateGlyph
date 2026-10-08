"use client";

import { fileAccessStateIcon } from "@stateglyph/core";
import { StateIcon, type StateIconProps } from "../components/state-icon";

export type FileAccessStateIconProps = Omit<
  StateIconProps<typeof fileAccessStateIcon.states>,
  "definition"
>;
export function FileAccessStateIcon(props: FileAccessStateIconProps) {
  return <StateIcon definition={fileAccessStateIcon} {...props} />;
}

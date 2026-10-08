"use client";

import { folderStateIcon } from "@stateglyph/core";
import { StateIcon, type StateIconProps } from "../components/state-icon";

export type FolderStateIconProps = Omit<
  StateIconProps<typeof folderStateIcon.states>,
  "definition"
>;
export function FolderStateIcon(props: FolderStateIconProps) {
  return <StateIcon definition={folderStateIcon} {...props} />;
}

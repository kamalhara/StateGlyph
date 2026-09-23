import { sidebarStateIcon } from "@stateglyph/core";
import { StateIcon, type StateIconProps } from "../components/state-icon";

export type SidebarStateIconProps = Omit<
  StateIconProps<typeof sidebarStateIcon.states>,
  "definition"
>;
export function SidebarStateIcon(props: SidebarStateIconProps) {
  return <StateIcon definition={sidebarStateIcon} {...props} />;
}

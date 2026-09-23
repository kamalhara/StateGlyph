import { menuStateIcon } from "@stateicons/core";
import { StateIcon, type StateIconProps } from "../components/state-icon";

export type MenuStateIconProps = Omit<
  StateIconProps<typeof menuStateIcon.states>,
  "definition"
>;
export function MenuStateIcon(props: MenuStateIconProps) {
  return <StateIcon definition={menuStateIcon} {...props} />;
}

import { panelStateIcon } from "@stateicons/core";
import { StateIcon, type StateIconProps } from "../components/state-icon";

export type PanelStateIconProps = Omit<
  StateIconProps<typeof panelStateIcon.states>,
  "definition"
>;
export function PanelStateIcon(props: PanelStateIconProps) {
  return <StateIcon definition={panelStateIcon} {...props} />;
}

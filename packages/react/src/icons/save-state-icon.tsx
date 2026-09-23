import { saveStateIcon } from "@stateicons/core";
import { StateIcon, type StateIconProps } from "../components/state-icon";

export type SaveStateIconProps = Omit<
  StateIconProps<typeof saveStateIcon.states>,
  "definition"
>;
export function SaveStateIcon(props: SaveStateIconProps) {
  return <StateIcon definition={saveStateIcon} {...props} />;
}

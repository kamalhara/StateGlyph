import { deleteStateIcon } from "@stateicons/core";
import { StateIcon, type StateIconProps } from "../components/state-icon";

export type DeleteStateIconProps = Omit<
  StateIconProps<typeof deleteStateIcon.states>,
  "definition"
>;
export function DeleteStateIcon(props: DeleteStateIconProps) {
  return <StateIcon definition={deleteStateIcon} {...props} />;
}

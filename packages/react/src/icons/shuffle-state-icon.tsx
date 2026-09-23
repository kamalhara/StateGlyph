import { shuffleStateIcon } from "@stateicons/core";
import { StateIcon, type StateIconProps } from "../components/state-icon";

export type ShuffleStateIconProps = Omit<
  StateIconProps<typeof shuffleStateIcon.states>,
  "definition"
>;
export function ShuffleStateIcon(props: ShuffleStateIconProps) {
  return <StateIcon definition={shuffleStateIcon} {...props} />;
}

import { repeatStateIcon } from "@stateicons/core";
import { StateIcon, type StateIconProps } from "../components/state-icon";

export type RepeatStateIconProps = Omit<
  StateIconProps<typeof repeatStateIcon.states>,
  "definition"
>;
export function RepeatStateIcon(props: RepeatStateIconProps) {
  return <StateIcon definition={repeatStateIcon} {...props} />;
}

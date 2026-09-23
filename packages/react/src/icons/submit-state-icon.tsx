import { submitStateIcon } from "@stateicons/core";
import { StateIcon, type StateIconProps } from "../components/state-icon";

export type SubmitStateIconProps = Omit<
  StateIconProps<typeof submitStateIcon.states>,
  "definition"
>;
export function SubmitStateIcon(props: SubmitStateIconProps) {
  return <StateIcon definition={submitStateIcon} {...props} />;
}

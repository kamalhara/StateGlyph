import { installStateIcon } from "@stateicons/core";
import { StateIcon, type StateIconProps } from "../components/state-icon";

export type InstallStateIconProps = Omit<
  StateIconProps<typeof installStateIcon.states>,
  "definition"
>;
export function InstallStateIcon(props: InstallStateIconProps) {
  return <StateIcon definition={installStateIcon} {...props} />;
}

import { publishStateIcon } from "@stateicons/core";
import { StateIcon, type StateIconProps } from "../components/state-icon";

export type PublishStateIconProps = Omit<
  StateIconProps<typeof publishStateIcon.states>,
  "definition"
>;
export function PublishStateIcon(props: PublishStateIconProps) {
  return <StateIcon definition={publishStateIcon} {...props} />;
}

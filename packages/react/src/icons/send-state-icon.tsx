import { sendStateIcon } from "@stateglyph/core";
import { StateIcon, type StateIconProps } from "../components/state-icon";

export type SendStateIconProps = Omit<
  StateIconProps<typeof sendStateIcon.states>,
  "definition"
>;
export function SendStateIcon(props: SendStateIconProps) {
  return <StateIcon definition={sendStateIcon} {...props} />;
}

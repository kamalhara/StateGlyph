import { microphoneStateIcon } from "@stateglyph/core";
import { StateIcon, type StateIconProps } from "../components/state-icon";

export type MicrophoneStateIconProps = Omit<
  StateIconProps<typeof microphoneStateIcon.states>,
  "definition"
>;
export function MicrophoneStateIcon(props: MicrophoneStateIconProps) {
  return <StateIcon definition={microphoneStateIcon} {...props} />;
}

import { playPauseStateIcon } from "@stateicons/core";
import { StateIcon, type StateIconProps } from "../components/state-icon";

export type PlayPauseStateIconProps = Omit<
  StateIconProps<typeof playPauseStateIcon.states>,
  "definition"
>;
export function PlayPauseStateIcon(props: PlayPauseStateIconProps) {
  return <StateIcon definition={playPauseStateIcon} {...props} />;
}

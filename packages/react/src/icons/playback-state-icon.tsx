import { playbackStateIcon } from "@stateglyph/core";
import { StateIcon, type StateIconProps } from "../components/state-icon";

export type PlaybackStateIconProps = Omit<
  StateIconProps<typeof playbackStateIcon.states>,
  "definition"
>;
export function PlaybackStateIcon(props: PlaybackStateIconProps) {
  return <StateIcon definition={playbackStateIcon} {...props} />;
}

import { volumeStateIcon } from "@stateglyph/core";
import { StateIcon, type StateIconProps } from "../components/state-icon";

export type VolumeStateIconProps = Omit<
  StateIconProps<typeof volumeStateIcon.states>,
  "definition"
>;
export function VolumeStateIcon(props: VolumeStateIconProps) {
  return <StateIcon definition={volumeStateIcon} {...props} />;
}

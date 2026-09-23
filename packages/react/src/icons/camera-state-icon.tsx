import { cameraStateIcon } from "@stateglyph/core";
import { StateIcon, type StateIconProps } from "../components/state-icon";

export type CameraStateIconProps = Omit<
  StateIconProps<typeof cameraStateIcon.states>,
  "definition"
>;
export function CameraStateIcon(props: CameraStateIconProps) {
  return <StateIcon definition={cameraStateIcon} {...props} />;
}

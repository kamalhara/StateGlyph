import { fullscreenStateIcon } from "@stateglyph/core";
import { StateIcon, type StateIconProps } from "../components/state-icon";

export type FullscreenStateIconProps = Omit<
  StateIconProps<typeof fullscreenStateIcon.states>,
  "definition"
>;
export function FullscreenStateIcon(props: FullscreenStateIconProps) {
  return <StateIcon definition={fullscreenStateIcon} {...props} />;
}

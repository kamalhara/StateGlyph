import { likeStateIcon } from "@stateglyph/core";
import { StateIcon, type StateIconProps } from "../components/state-icon";

export type LikeStateIconProps = Omit<
  StateIconProps<typeof likeStateIcon.states>,
  "definition"
>;
export function LikeStateIcon(props: LikeStateIconProps) {
  return <StateIcon definition={likeStateIcon} {...props} />;
}

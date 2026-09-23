import { viewStateIcon } from "@stateglyph/core";
import { StateIcon, type StateIconProps } from "../components/state-icon";

export type ViewStateIconProps = Omit<
  StateIconProps<typeof viewStateIcon.states>,
  "definition"
>;
export function ViewStateIcon(props: ViewStateIconProps) {
  return <StateIcon definition={viewStateIcon} {...props} />;
}

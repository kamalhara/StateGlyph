import { refreshStateIcon } from "@stateglyph/core";
import { StateIcon, type StateIconProps } from "../components/state-icon";

export type RefreshStateIconProps = Omit<
  StateIconProps<typeof refreshStateIcon.states>,
  "definition"
>;
export function RefreshStateIcon(props: RefreshStateIconProps) {
  return <StateIcon definition={refreshStateIcon} {...props} />;
}

import { expandStateIcon } from "@stateglyph/core";
import { StateIcon, type StateIconProps } from "../components/state-icon";

export type ExpandStateIconProps = Omit<
  StateIconProps<typeof expandStateIcon.states>,
  "definition"
>;
export function ExpandStateIcon(props: ExpandStateIconProps) {
  return <StateIcon definition={expandStateIcon} {...props} />;
}

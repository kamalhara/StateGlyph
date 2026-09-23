import { chevronVerticalStateIcon } from "@stateglyph/core";
import { StateIcon, type StateIconProps } from "../components/state-icon";

export type ChevronVerticalStateIconProps = Omit<
  StateIconProps<typeof chevronVerticalStateIcon.states>,
  "definition"
>;
export function ChevronVerticalStateIcon(props: ChevronVerticalStateIconProps) {
  return <StateIcon definition={chevronVerticalStateIcon} {...props} />;
}

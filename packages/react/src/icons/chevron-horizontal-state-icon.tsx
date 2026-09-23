import { chevronHorizontalStateIcon } from "@stateicons/core";
import { StateIcon, type StateIconProps } from "../components/state-icon";

export type ChevronHorizontalStateIconProps = Omit<
  StateIconProps<typeof chevronHorizontalStateIcon.states>,
  "definition"
>;
export function ChevronHorizontalStateIcon(
  props: ChevronHorizontalStateIconProps,
) {
  return <StateIcon definition={chevronHorizontalStateIcon} {...props} />;
}

import { addToCartStateIcon } from "@stateicons/core";
import { StateIcon, type StateIconProps } from "../components/state-icon";

export type AddToCartStateIconProps = Omit<
  StateIconProps<typeof addToCartStateIcon.states>,
  "definition"
>;
export function AddToCartStateIcon(props: AddToCartStateIconProps) {
  return <StateIcon definition={addToCartStateIcon} {...props} />;
}

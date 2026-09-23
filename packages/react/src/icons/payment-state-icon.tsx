import { paymentStateIcon } from "@stateicons/core";
import { StateIcon, type StateIconProps } from "../components/state-icon";

export type PaymentStateIconProps = Omit<
  StateIconProps<typeof paymentStateIcon.states>,
  "definition"
>;
export function PaymentStateIcon(props: PaymentStateIconProps) {
  return <StateIcon definition={paymentStateIcon} {...props} />;
}

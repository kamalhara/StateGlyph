import { notificationStateIcon } from "@stateglyph/core";
import { StateIcon, type StateIconProps } from "../components/state-icon";

export type NotificationStateIconProps = Omit<
  StateIconProps<typeof notificationStateIcon.states>,
  "definition"
>;
export function NotificationStateIcon(props: NotificationStateIconProps) {
  return <StateIcon definition={notificationStateIcon} {...props} />;
}

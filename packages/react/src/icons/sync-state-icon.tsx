import { syncStateIcon } from "@stateglyph/core";
import { StateIcon, type StateIconProps } from "../components/state-icon";

export type SyncStateIconProps = Omit<
  StateIconProps<typeof syncStateIcon.states>,
  "definition"
>;
export function SyncStateIcon(props: SyncStateIconProps) {
  return <StateIcon definition={syncStateIcon} {...props} />;
}

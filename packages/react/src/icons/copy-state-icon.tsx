import { copyStateIcon } from "@stateglyph/core";
import { StateIcon, type StateIconProps } from "../components/state-icon";

export type CopyStateIconProps = Omit<
  StateIconProps<typeof copyStateIcon.states>,
  "definition"
>;
export function CopyStateIcon(props: CopyStateIconProps) {
  return <StateIcon definition={copyStateIcon} {...props} />;
}

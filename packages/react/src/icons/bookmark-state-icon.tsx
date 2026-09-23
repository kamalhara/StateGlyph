import { bookmarkStateIcon } from "@stateicons/core";
import { StateIcon, type StateIconProps } from "../components/state-icon";

export type BookmarkStateIconProps = Omit<
  StateIconProps<typeof bookmarkStateIcon.states>,
  "definition"
>;
export function BookmarkStateIcon(props: BookmarkStateIconProps) {
  return <StateIcon definition={bookmarkStateIcon} {...props} />;
}

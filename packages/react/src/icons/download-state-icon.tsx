import { downloadStateIcon } from "@stateglyph/core";
import { StateIcon, type StateIconProps } from "../components/state-icon";

export type DownloadStateIconProps = Omit<
  StateIconProps<typeof downloadStateIcon.states>,
  "definition"
>;
export function DownloadStateIcon(props: DownloadStateIconProps) {
  return <StateIcon definition={downloadStateIcon} {...props} />;
}

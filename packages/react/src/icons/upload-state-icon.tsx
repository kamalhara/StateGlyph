import { uploadStateIcon } from "@stateicons/core";

import { StateIcon, type StateIconProps } from "../components/state-icon";

export type UploadStateIconProps = Omit<
  StateIconProps<typeof uploadStateIcon.states>,
  "definition"
>;

export function UploadStateIcon(props: UploadStateIconProps) {
  return <StateIcon definition={uploadStateIcon} {...props} />;
}

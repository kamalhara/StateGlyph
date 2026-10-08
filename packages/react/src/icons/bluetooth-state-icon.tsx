"use client";

import { bluetoothStateIcon } from "@stateglyph/core";
import { StateIcon, type StateIconProps } from "../components/state-icon";

export type BluetoothStateIconProps = Omit<
  StateIconProps<typeof bluetoothStateIcon.states>,
  "definition"
>;
export function BluetoothStateIcon(props: BluetoothStateIconProps) {
  return <StateIcon definition={bluetoothStateIcon} {...props} />;
}

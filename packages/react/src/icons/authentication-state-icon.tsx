"use client";

import { authenticationStateIcon } from "@stateglyph/core";
import { StateIcon, type StateIconProps } from "../components/state-icon";

export type AuthenticationStateIconProps = Omit<
  StateIconProps<typeof authenticationStateIcon.states>,
  "definition"
>;
export function AuthenticationStateIcon(props: AuthenticationStateIconProps) {
  return <StateIcon definition={authenticationStateIcon} {...props} />;
}

import type { StateIconDefinition, StateIconStates } from "./types";

export function defineStateIcon<const States extends StateIconStates>(
  definition: StateIconDefinition<States>,
): StateIconDefinition<States> {
  return definition;
}

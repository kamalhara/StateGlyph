"use client";

import type { StateIconDefinition, StateIconStates } from "@stateglyph/core";
import { lucideIconMap, type LucideIconName } from "../lucide/icons-map";
import { AnimatedIcon, type AnimatedIconProps } from "./animated-icon";

export type StateIconProps<States extends StateIconStates> = Omit<
  AnimatedIconProps,
  "icon" | "iconName" | "iconId" | "state" | "continuous"
> & {
  definition: StateIconDefinition<States>;
  state: keyof States & string;
};

export function StateIcon<States extends StateIconStates>({
  definition,
  state,
  label,
  transition,
  ...props
}: StateIconProps<States>) {
  const stateDefinition = definition.states[state];
  if (!stateDefinition) {
    console.warn(
      `[StateGlyph] Unknown state "${state}" for icon "${definition.id}".`,
    );
    return null;
  }
  if (definition.source.library !== "lucide") {
    console.warn(
      `[StateGlyph] Unsupported icon library: ${definition.source.library}`,
    );
    return null;
  }
  const Icon = lucideIconMap[stateDefinition.icon as LucideIconName];
  if (!Icon) {
    console.warn(`[StateGlyph] Unknown Lucide icon: ${stateDefinition.icon}`);
    return null;
  }
  return (
    <AnimatedIcon
      {...props}
      icon={Icon}
      iconName={stateDefinition.icon}
      iconId={definition.id}
      state={state}
      label={label ?? stateDefinition.label}
      transition={transition ?? definition.transition}
      continuous={stateDefinition.continuous}
    />
  );
}

import type { SVGProps } from "react";

import type { StateIconDefinition, StateIconStates } from "@stateglyph/core";

import { lucideIconMap, type LucideIconName } from "../lucide/icons-map";

export type StateIconProps<States extends StateIconStates> = Omit<
  SVGProps<SVGSVGElement>,
  "children"
> & {
  definition: StateIconDefinition<States>;
  state: keyof States & string;
  size?: number | string;
  strokeWidth?: number;
  decorative?: boolean;
  label?: string;
};

export function StateIcon<States extends StateIconStates>({
  definition,
  state,
  size = 24,
  strokeWidth = 2,
  decorative = true,
  label,
  ...svgProps
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

  const IconComponent = lucideIconMap[stateDefinition.icon as LucideIconName];

  if (!IconComponent) {
    console.warn(`[StateGlyph] Unknown Lucide icon: ${stateDefinition.icon}`);
    return null;
  }

  const accessibleLabel = label ?? stateDefinition.label;

  return (
    <IconComponent
      {...svgProps}
      size={size}
      strokeWidth={strokeWidth}
      data-state-icon={definition.id}
      data-state={state}
      data-transition={definition.transition}
      data-state-continuous={stateDefinition.continuous ? "true" : undefined}
      aria-hidden={decorative ? true : undefined}
      aria-label={decorative ? undefined : accessibleLabel}
      role={decorative ? undefined : "img"}
      focusable="false"
    />
  );
}

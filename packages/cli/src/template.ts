import type {
  StateIconStateDefinition,
  StateIconTransition,
} from "@stateglyph/core";
import { animationSource } from "./animation-source";

type RenderableIconDefinition = {
  id: string;
  states: Readonly<Record<string, StateIconStateDefinition>>;
  transition?: StateIconTransition;
};

function toPascalCase(value: string): string {
  return value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

export function renderIconComponent(
  definition: RenderableIconDefinition,
): string {
  const componentName = `${toPascalCase(definition.id)}StateIcon`;
  const stateTypeName = `${toPascalCase(definition.id)}State`;
  const propsTypeName = `${componentName}Props`;
  const states = Object.entries(definition.states);
  const glyphs = [...new Set(states.map(([, value]) => value.icon))];
  const imports = glyphs.map(toPascalCase).sort();
  const runtime = animationSource.replace(
    'import type { LucideIcon } from "lucide-react";',
    `import { ${imports.join(", ")}, type LucideIcon } from "lucide-react";`,
  );
  const stateUnion = states.map(([name]) => JSON.stringify(name)).join(" | ");
  const iconRows = states
    .map(
      ([name, value]) =>
        `  ${JSON.stringify(name)}: ${toPascalCase(value.icon)},`,
    )
    .join("\n");
  const nameRows = states
    .map(
      ([name, value]) =>
        `  ${JSON.stringify(name)}: ${JSON.stringify(value.icon)},`,
    )
    .join("\n");
  const labelRows = states
    .map(
      ([name, value]) =>
        `  ${JSON.stringify(name)}: ${JSON.stringify(value.label)},`,
    )
    .join("\n");
  const continuous = states
    .filter(([, value]) => value.continuous)
    .map(([name]) => name);

  return `${runtime}
export type ${stateTypeName} = ${stateUnion};
export type ${propsTypeName} = Omit<AnimatedIconProps, "icon" | "iconName" | "iconId" | "state" | "continuous"> & { state: ${stateTypeName}; };
const iconByState = {
${iconRows}
} satisfies Record<${stateTypeName}, LucideIcon>;
const nameByState = {
${nameRows}
} satisfies Record<${stateTypeName}, string>;
const labelByState = {
${labelRows}
} satisfies Record<${stateTypeName}, string>;
const continuousStates = new Set<${stateTypeName}>(${JSON.stringify(continuous)});

export function ${componentName}({ state, label, transition = ${JSON.stringify(definition.transition ?? "crossfade")}, ...props }: ${propsTypeName}) {
  const Icon = iconByState[state];
  if (!Icon) return null;
  return <AnimatedIcon {...props} icon={Icon} iconName={nameByState[state]} iconId=${JSON.stringify(definition.id)}
    state={state} label={label ?? labelByState[state]} transition={transition} continuous={continuousStates.has(state)} />;
}
`;
}

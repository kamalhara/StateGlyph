import type { StateIconStateDefinition } from "@stateicons/core";

type RenderableIconDefinition = {
  id: string;
  states: Readonly<Record<string, StateIconStateDefinition>>;
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
  const lucideComponents = [
    ...new Set(states.map(([, stateDefinition]) => stateDefinition.icon)),
  ]
    .map(toPascalCase)
    .sort();
  const continuousStates = states
    .filter(([, stateDefinition]) => stateDefinition.continuous)
    .map(([name]) => name);
  const animationName = `stateicons-${definition.id}-spin`;
  const stateUnion = states.map(([name]) => JSON.stringify(name)).join(" | ");
  const iconRows = states
    .map(
      ([name, stateDefinition]) =>
        `  ${JSON.stringify(name)}: ${toPascalCase(stateDefinition.icon)},`,
    )
    .join("\n");
  const labelRows = states
    .map(
      ([name, stateDefinition]) =>
        `  ${JSON.stringify(name)}: ${JSON.stringify(stateDefinition.label)},`,
    )
    .join("\n");

  return `import type { SVGProps } from "react";
import {
${lucideComponents.map((name) => `  ${name},`).join("\n")}
  type LucideIcon,
} from "lucide-react";

export type ${stateTypeName} = ${stateUnion};

export type ${propsTypeName} = Omit<SVGProps<SVGSVGElement>, "children"> & {
  state: ${stateTypeName};
  size?: number | string;
  strokeWidth?: number;
  duration?: number;
  decorative?: boolean;
  label?: string;
};

const iconByState = {
${iconRows}
} satisfies Record<${stateTypeName}, LucideIcon>;

const labelByState = {
${labelRows}
} satisfies Record<${stateTypeName}, string>;

const continuousStates = new Set<${stateTypeName}>(${JSON.stringify(continuousStates)});

export function ${componentName}({
  state,
  size = 24,
  strokeWidth = 2,
  duration = 900,
  decorative = true,
  label,
  style,
  ...svgProps
}: ${propsTypeName}) {
  const Icon = iconByState[state];
  const isContinuous = continuousStates.has(state);
  const accessibleLabel = label ?? labelByState[state];

  return (
    <>
      {isContinuous ? (
        <style>{\`@keyframes ${animationName} { to { transform: rotate(360deg); } } @media (prefers-reduced-motion: reduce) { [data-state-icon="${definition.id}"] { animation: none !important; } }\`}</style>
      ) : null}
      <Icon
        {...svgProps}
        size={size}
        strokeWidth={strokeWidth}
        data-state-icon="${definition.id}"
        data-state={state}
        aria-hidden={decorative ? true : undefined}
        aria-label={decorative ? undefined : accessibleLabel}
        role={decorative ? undefined : "img"}
        focusable="false"
        style={{
          ...style,
          animation:
            style?.animation ??
            (isContinuous
              ? \`${animationName} \${duration}ms linear infinite\`
              : undefined),
        }}
      />
    </>
  );
}
`;
}

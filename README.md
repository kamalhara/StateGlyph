# StateGlyph

StateGlyph is an open-source collection of typed React icons that communicate
what an interface is doing, not only what an action looks like. Each component
has named states such as `idle`, `loading`, and `success`, with accessible
labels and predictable TypeScript props.

The first release contains 31 icons across async actions, media, navigation,
feedback, forms, commerce, and notifications. The icons use the open-source
[Lucide](https://lucide.dev/) icon set as their visual foundation.

> StateGlyph is currently an early `0.1.0` release. The API may evolve before
> version `1.0.0`.

## Install the React package

```bash
npm install @stateglyph/react
```

Import from the main package:

```tsx
import { UploadStateIcon } from "@stateglyph/react";

export function UploadButton() {
  return <UploadStateIcon state="uploading" />;
}
```

Or import one icon directly:

```tsx
import { UploadStateIcon } from "@stateglyph/react/upload";
```

StateGlyph components are decorative by default. Give an icon an accessible
name when it communicates information that is not already written nearby:

```tsx
<UploadStateIcon state="success" decorative={false} label="Upload complete" />
```

## Copy components with the CLI

The CLI copies editable components into your own project. This is useful when
you want to own the source instead of installing the React package.

```bash
npx @stateglyph/cli list
npx @stateglyph/cli add upload
npx @stateglyph/cli add upload save --dir src/components/stateglyph
npx @stateglyph/cli add all
```

Generated components require `react` and `lucide-react` in the receiving
project. Existing files are preserved unless you pass `--force`.

## Packages

| Package                   | Purpose                                              |
| ------------------------- | ---------------------------------------------------- |
| `@stateglyph/react`       | Ready-to-use React components                        |
| `@stateglyph/core`        | Framework-independent icon definitions and metadata  |
| `@stateglyph/cli`         | Copy-and-own component generator                     |
| `@stateglyph/transitions` | Optional CSS transitions with reduced-motion support |

To enable the transition declared by each icon definition, install the optional
package and import its stylesheet once:

```ts
import "@stateglyph/transitions/styles.css";
```

## Local development

This repository is an npm workspace monorepo using TypeScript, Next.js,
Tailwind CSS, tsup, and Vitest.

```bash
npm install
npm run dev
```

Before opening a pull request, run:

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

See [CONTRIBUTING.md](./CONTRIBUTING.md) for the contribution workflow.

## License

StateGlyph is available under the [MIT License](./LICENSE). The underlying
Lucide icons are available under the ISC License.

# StateIcons

StateIcons is an open-source collection of typed React icons that communicate
what an interface is doing, not only what an action looks like. Each component
has named states such as `idle`, `loading`, and `success`, with accessible
labels and predictable TypeScript props.

The first release contains 30 icons across async actions, media, navigation,
feedback, and device controls. The icons use the open-source
[Lucide](https://lucide.dev/) icon set as their visual foundation.

> StateIcons is currently an early `0.1.0` release. The API may evolve before
> version `1.0.0`.

## Install the React package

```bash
npm install @stateicons/react
```

Import from the main package:

```tsx
import { UploadStateIcon } from "@stateicons/react";

export function UploadButton() {
  return <UploadStateIcon state="uploading" />;
}
```

Or import one icon directly:

```tsx
import { UploadStateIcon } from "@stateicons/react/upload";
```

StateIcons are decorative by default. Give an icon an accessible name when it
communicates information that is not already written nearby:

```tsx
<UploadStateIcon state="success" decorative={false} label="Upload complete" />
```

## Copy components with the CLI

The CLI copies editable components into your own project. This is useful when
you want to own the source instead of installing the React package.

```bash
npx @stateicons/cli list
npx @stateicons/cli add upload
npx @stateicons/cli add upload save --dir src/components/stateicons
npx @stateicons/cli add all
```

Generated components require `react` and `lucide-react` in the receiving
project. Existing files are preserved unless you pass `--force`.

## Packages

| Package             | Purpose                                             |
| ------------------- | --------------------------------------------------- |
| `@stateicons/react` | Ready-to-use React components                       |
| `@stateicons/core`  | Framework-independent icon definitions and metadata |
| `@stateicons/cli`   | Copy-and-own component generator                    |

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

StateIcons is available under the [MIT License](./LICENSE). The underlying
Lucide icons are available under the ISC License.

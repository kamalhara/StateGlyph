# @stateglyph/react

Typed, accessible state icon components for React.

```bash
npm install @stateglyph/react
```

```tsx
import { SaveStateIcon } from "@stateglyph/react";

export function SaveStatus({ saving }: { saving: boolean }) {
  return <SaveStateIcon state={saving ? "saving" : "idle"} />;
}
```

Each icon can also be imported through its own entry point:

```tsx
import { SaveStateIcon } from "@stateglyph/react/save";
```

Common props include `state`, `size`, `strokeWidth`, `decorative`, and `label`,
plus normal SVG props. Components are decorative by default. Set
`decorative={false}` when an icon needs to be announced by assistive
technology.

The package requires React 18 or newer. Its visual foundation is the
open-source Lucide icon set.

MIT licensed. The source icons from Lucide use the ISC License.

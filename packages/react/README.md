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

Common props include `state`, `size`, `strokeWidth`, `decorative`, `label`,
`animated`, `duration`, `spinDuration`, and `transition`,
plus normal SVG props. Components are decorative by default. Set
`decorative={false}` when an icon needs to be announced by assistive
technology.

State changes animate automatically, retaining the outgoing glyph while the
incoming glyph enters. No stylesheet is required. Set `animated={false}` to
disable motion, override the definition with `transition`, use `duration` for
state changes (milliseconds), and use `spinDuration` for continuous rotation.
Reduced-motion preferences are respected and changes to the preference take
effect immediately. The SVG remains a single accessible status indicator.

```tsx
import { ThemeStateIcon } from "@stateglyph/react/theme";

<ThemeStateIcon state="dark" duration={300} transition="rotate" />;
```

The package requires React 18 or newer. Its visual foundation is the
open-source Lucide icon set.

MIT licensed. The source icons from Lucide use the ISC License.

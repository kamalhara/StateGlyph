# @stateglyph/core

Framework-independent definitions and metadata for
[StateGlyph](https://github.com/kamalhara/StateGlyph).

```bash
npm install @stateglyph/core
```

```ts
import { stateIconCatalog, uploadStateIcon } from "@stateglyph/core";

console.log(uploadStateIcon.states);
console.log(stateIconCatalog.length); // 30
```

Most React applications should install `@stateglyph/react` instead. Use this
package when building documentation, integrations, or tooling around the icon
catalog.

MIT licensed. The source icons from Lucide use the ISC License.

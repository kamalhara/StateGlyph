# @stateglyph/transitions

Optional CSS timing presets for StateGlyph's built-in animated state changes.

```bash
npm install @stateglyph/react @stateglyph/transitions
```

```ts
import "@stateglyph/transitions/styles.css";
```

React components and CLI-generated components animate without this stylesheet.
The renderer retains the outgoing glyph while the incoming glyph enters, using
`crossfade`, `scale-fade`, `rotate`, `slide`, or a blur blend named `morph`.
The optional stylesheet sets timing defaults using `data-transition`.

```css
.status-icon {
  --stateglyph-duration: 300ms;
  --stateglyph-spin-duration: 1.2s;
  --stateglyph-easing: ease-in-out;
}
```

Set a custom duration on a class or parent scope. Explicit React `duration` and
`spinDuration` props take precedence over CSS variables. Use `animated={false}`
to disable animation on one component. Live reduced-motion preferences disable
both state transitions and continuous rotation.

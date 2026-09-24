# @stateglyph/transitions

Optional, accessible CSS transitions for StateGlyph React icons.

```bash
npm install @stateglyph/react @stateglyph/transitions
```

Import the stylesheet once near the root of your application:

```ts
import "@stateglyph/transitions/styles.css";
```

StateGlyph components expose their definition's transition through a
`data-transition` attribute, so no wrapper or per-icon class is required. The
stylesheet implements `crossfade`, `scale-fade`, `rotate`, `slide`, and
`morph`, plus continuous rotation for loading states.

You can customize timing with CSS custom properties:

```css
.status-icon {
  --stateglyph-duration: 300ms;
  --stateglyph-spin-duration: 1.2s;
  --stateglyph-easing: ease-in-out;
}
```

All animation is disabled when the user enables reduced motion.

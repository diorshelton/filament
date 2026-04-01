# filament — Accessibility

**Target standard:** WCAG 2.1 AA

Accessibility in filament is enforced at the token layer, not bolted onto components later. Contrast ratios are validated before a token value is committed.

---

## Color Contrast

### What's already handled in the token file

Several semantic tokens use hardcoded hex values (not palette references) because the nearest palette stop fails WCAG AA contrast on its target background. These are documented with `$description` in `tokens/tokens.json`:

| Token | Value | Background | Reason |
|---|---|---|---|
| `light.text.subheading` | `#1F6475` | `#FFFFFF` | steel-600 (`#2E6878`) fails AA on white |
| `light.text.link` | `#1F6475` | `#FFFFFF` | same |
| `light.text.caption` | `#546B78` | `#FAFAF6` | neutral-800 (`#4A6070`) fails AA on warm off-white |
| `light.text.hint` | `#546B78` | `#FAFAF6` | same |
| `dark.text.caption` | `#7A9EAE` | `#1C2D39` | neutral-600 fails on dark surface |

### Rules for adding new tokens

1. Always test against the actual semantic background token, not `#FFFFFF`
2. Page background is `#FAFAF6` (not white) — this affects contrast math
3. Dark surface is `#1C2D39` — lighter than `#131D25` (page), so test on surface
4. Use [APCA](https://www.myndex.com/APCA/) for nuanced cases; WCAG 2.1 contrast ratio for baseline compliance
5. Annotate any adjusted value with `$description` explaining why it deviates from the palette

### Action button contrast

| Variant | Background | Text | Passes AA |
|---|---|---|---|
| Primary | `#E7CC86` (gold-400) | `#3A2C0A` | Yes — high contrast dark-on-gold |
| Secondary | `#254052` (navy-600) | `#E7CC86` (gold-400) | Yes |
| Danger | `#F64740` (vermillion-600) | `#FFFFFF` | Yes |
| Info | `#5296A5` (steel-400) | `#FFFFFF` | Yes |
| Ghost | transparent | `#4A6070` (neutral-800) | Yes on both light backgrounds |

---

## Focus Management

All interactive components must have a visible focus ring.

**Focus ring tokens:**
- Light mode input: `global.shadow.focus-steel` — `0 0 0 2.5px rgba(31, 100, 117, 0.20)`
- Dark mode input: `global.shadow.focus-steel-dark` — `0 0 0 2.5px rgba(82, 150, 165, 0.25)`
- Primary action: `global.shadow.focus-gold`
- Error state: `global.shadow.focus-red`

Rules:
- Never use `outline: none` without providing an equivalent custom focus style
- Focus rings must be visible on both light and dark backgrounds
- Tab order must follow visual reading order

---

## Keyboard Navigation

For React components using Radix UI primitives, keyboard behavior is provided by Radix. Baseline requirements:

| Component | Keyboard requirement |
|---|---|
| Button | Activates on `Enter` and `Space` |
| Input | Standard text input behavior |
| Dropdown/Select | Arrow keys navigate options; `Escape` closes |
| Modal | Focus trapped inside; `Escape` closes; focus returns to trigger on close |
| Toast | Dismissible with keyboard; auto-dismiss does not interrupt keyboard users |

---

## Semantic Markup

- Use `<button>` for buttons (not `<div onClick>`)
- Use `<input>` / `<select>` / `<textarea>` for form elements
- Use heading hierarchy (`h1` → `h2` → `h3`) without skipping levels
- Labels must be programmatically associated with their inputs (`<label for>` or `aria-labelledby`)
- Error messages must be associated with their field (`aria-describedby`)
- Status/feedback banners should use `role="alert"` for errors, `role="status"` for informational

---

## Typography Accessibility

- Minimum body font size: 13px (`font.size.md`) — above the 12px minimum
- Line heights: body text uses `relaxed` (1.7) — readable for longer content
- No all-caps for body text or paragraph content (caps are fine for labels/badges with `letter-spacing.wide`)
- Spectral italic (subheadings) is used sparingly — not for body text or long runs

---

## Motion

- All transitions respect `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

- The `spring` easing (slight overshoot) must be opt-in and not applied to critical UI feedback

---

## Testing Plan

| Category | Method |
|---|---|
| Contrast ratios | Manual check with [Colour Contrast Checker](https://colourcontrast.cc/) on each new semantic token |
| Keyboard navigation | Manual tab-through test in React components |
| Screen reader | VoiceOver (macOS) spot-check on interactive components |
| Focus rings | Visual inspection in both light and dark mode |
| Reduced motion | Test with `prefers-reduced-motion: reduce` enabled in OS |

---

## Known Gaps

| Gap | Status |
|---|---|
| `component.*` tokens not compiled to CSS yet | Deferred to Build phase |
| No automated contrast CI check | Future — can add axe-core or Storybook a11y addon in V1 |

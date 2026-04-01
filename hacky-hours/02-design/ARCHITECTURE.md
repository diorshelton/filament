# filament — Architecture

## Overview

filament is a build-time design token pipeline with an optional React component layer. There is no runtime server, no API, no cloud dependency.

```
src/tokens/filament-tokens-v0.1.0.json
       │
       └── src/filament.css    CSS custom properties (owner writes directly)
                │
                └── src/components/   React components consume CSS vars
                        │
                        └── Storybook   visual catalog + a11y checks
```

## Token Source Format

`tokens/tokens.json` uses the **Tokens Studio** format:
- Leaf tokens: `{ "value": "...", "type": "..." }`
- References: `{path.to.token}` — resolved at build time
- Theme arrays: `"$themes": ["light"]` or `"$themes": ["dark"]`
- Annotations: `"$description": "..."` — preserved in build output as comments

**Token hierarchy:**
1. `global.*` — raw primitives (color palettes, spacing scale, font scale, motion, z-index, shadows)
2. `light.*` / `dark.*` — semantic aliases that reference `global.*`
3. `component.*` — component-level specs that reference semantic and global tokens

No component token directly references a global color primitive. The indirection through semantic tokens is what makes theming work.

## CSS Layer (`src/filament.css`)

The owner translates `src/tokens/filament-tokens-v0.1.0.json` directly into CSS custom properties — no build script:

```css
:root {
  --color-background-page: #FAFAF6;
  --color-text-display: #254052;
  --spacing-4: 16px;
  --font-family-display: Spectral, Georgia, serif;
  /* ... */
}

[data-theme='dark'],
.theme-dark {
  --color-background-page: #131D25;
  --color-text-display: #F0E8D6;
  /* ... */
}
```

Applied via `data-theme` attribute or `.theme-dark` class on `<html>` or any container element. Storybook uses `.theme-light` / `.theme-dark` class names via the `withThemeByClassName` decorator.

## React Component Layer (`src/components/`)

Thin wrappers around **Radix UI** primitives, styled with CSS custom properties from the token layer. No inline styles, no CSS-in-JS — just class names that reference CSS vars.

```tsx
// Consumes token CSS vars, not hardcoded values
<Button variant="primary">Save</Button>
// → renders with --color-action-primary-background, --component-button-height, etc.
```

V1 components: Button, Card, Badge, Nav, Avatar, Footer, Tooltip. Blog and form components come in V2.

**Why Radix UI?**
- Accessible by default (ARIA, keyboard, focus management)
- Headless — brings no opinions about visual style
- MIT licensed
- React only

## Design Tool

Storybook is the visual catalog and documentation layer. Components are browsed, themed (light/dark), and a11y-checked in Storybook — no external design tool dependency.

### Penpot (optional, manual)
- Import `src/filament.css` as a CSS asset in Penpot for reference
- Manual update required when tokens change — no sync pipeline

## Delivery to Consuming Projects

### Web/React projects
Option A — git submodule: `git submodule add <filament-repo>`
Option B — local npm package: `"filament": "file:../filament"`

Both import:
```ts
import 'filament/src/filament.css'; // CSS vars
```

## Key Technical Decisions

| Decision | Choice | Reason |
|---|---|---|
| Token format | Tokens Studio JSON | Well-structured, portable, already validated |
| CSS authoring | Owner writes `filament.css` directly | No build script needed for a single CSS target |
| CSS delivery | Custom properties on `data-theme` / `.theme-dark` | Framework-agnostic, zero runtime overhead |
| React primitives | Radix UI | Accessible-by-default, headless, MIT |
| Dark mode | CSS attribute + class | Works without JS; SSR-safe; Storybook-compatible |
| Design tool | Storybook | Visual catalog, theme switching, a11y checks — no external tool dependency |
| Border default | 0.5px hairline | Refined visual weight; intentional system-wide default |
| Dark elevation | Background lightening | Avoids visible shadow artifacts on dark surfaces |

## Known Constraints

- Penpot sync is manual — reimport `filament.css` when tokens change
- `component.*` tokens are not yet in `filament.css` — they exist as documentation and reference values

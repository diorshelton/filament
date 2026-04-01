# filament — Style Guide

## Brand Voice

| Dimension | Value |
|---|---|
| Tone | Precise, minimal, direct |
| Aesthetic | Simple, clean, elegant |
| Personality | Considered without being loud. Confident without being aggressive. |

Filament never competes with content. The design language recedes; the work speaks.

---

## Color System

### Primitives (global.color)

Five palettes. Each runs 50 → 900 with steps at 50, 100, 200, 400, 600, 800, 900.

| Palette | Role | Key stops |
|---|---|---|
| **Gold** | Primary action, accent, warning | 400 = primary button bg; 600 = border; 800 = text on light |
| **Navy** | Text, headings, nav background | 600 = heading/display text, nav bg; 900 = darkest |
| **Vermillion** | Danger, error | 600 = action bg/border; 800 = error text on light |
| **Steel** | Info, focus, links | 400 = info action, focus border dark; 600 = focus border light |
| **Neutral** | Backgrounds, borders, body text | 0 = white; 50 = page base; 800 = body text light |

### Semantic aliases

All component and layout decisions use semantic tokens (`light.*` / `dark.*`), never global primitives directly. This is what makes theme switching work.

**Key light mode values:**
- Page background: `#FAFAF6` (neutral-50) — warm off-white, not pure white
- Surface (cards/inputs): `#FFFFFF`
- Heading/display text: `#254052` (navy-600)
- Body text: `#4A6070` (neutral-800)
- Links/subheadings: `#1F6475` (steel-600 darkened for AA compliance)

**Key dark mode values:**
- Page background: `#131D25` — deepest layer
- Surface: `#1C2D39`
- Display text: `#F0E8D6` — warm cream, not pure white
- Body text: `#8A9CA8` (neutral-600)
- Dark mode elevates via background lightening, not box shadows

### AA Compliance notes

Several semantic tokens use hardcoded hex values rather than palette references where the palette stop itself fails contrast on the target background. These values are annotated with `$description` in the token file.

- `text.subheading` light: `#1F6475` (steel-600 darkened)
- `text.link` light: `#1F6475`
- `text.caption` light: `#546B78` (neutral-800 darkened)
- `text.caption` dark: `#7A9EAE` (lightened)

---

## Typography

### Type families

| Role | Family | Weight | Usage |
|---|---|---|---|
| Display | Spectral | 600 (semibold) | Headings, logo mark, stat values |
| Display italic | Spectral | 400 italic | Subheadings, pull quotes, editorial |
| UI | DM Sans | 500 (medium) | Labels, buttons, nav links |
| Body | DM Sans | 400 (regular) | Body text, captions, table content |

Fallbacks: `Spectral, Georgia, serif` / `'DM Sans', system-ui, sans-serif`

### Type scale

| Token | px | Usage |
|---|---|---|
| `font.size.xs` | 10 | Captions, timestamps, meta |
| `font.size.sm` | 11 | Labels, badges, small UI |
| `font.size.md` | 13 | Body text, table content |
| `font.size.lg` | 16 | Section headings, nav |
| `font.size.xl` | 20 | Page headings |
| `font.size.2xl` | 28 | Display / hero |

### Line heights

| Token | Value | Usage |
|---|---|---|
| `tight` | 1.1 | Display headings (Spectral large) |
| `snug` | 1.25 | Section headings |
| `normal` | 1.5 | Labels, captions |
| `relaxed` | 1.7 | Body text |
| `loose` | 1.75 | Long-form reading |

### Letter spacing

| Token | Value | Usage |
|---|---|---|
| `tighter` | -0.02em | Display — Spectral large sizes |
| `tight` | -0.01em | Headings — Spectral |
| `normal` | 0 | Body — DM Sans |
| `wide` | 0.04em | Labels, badges |
| `wider` | 0.09em | Section labels / eyebrows |
| `widest` | 0.12em | Mode labels, ALL CAPS UI |

---

## Spacing

4px base grid. Token name = px value ÷ 4.

Key reference points:
- `spacing.2` (8px) — icon gaps, tight internal spacing
- `spacing.3` (12px) — input padding, compact lists
- `spacing.4` (16px) — button padding, card section gaps
- `spacing.6` (24px) — card padding, section gaps
- `spacing.8` (32px) — modal padding, large cards
- `spacing.12` (48px) — nav height, page sections

---

## Border Radius

| Token | px | Usage |
|---|---|---|
| `none` | 0 | Dividers, flush elements |
| `sm` | 4 | Badges, tags |
| `md` | 8 | Inputs, buttons |
| `lg` | 12 | Cards, dropdowns |
| `xl` | 16 | Modals, drawers |
| `2xl` | 20 | Feature cards, hero sections |
| `full` | 9999 | Pills, toggles |

---

## Border Widths

| Token | Value | Usage |
|---|---|---|
| `hairline` | 0.5px | **Default** — all borders and dividers |
| `thin` | 1px | Emphasis borders |
| `accent` | 2px | Pull quotes, featured card ring |
| `thick` | 3px | Top accent bars on cards |

The default is hairline (0.5px). This is intentional — it reads as refined and light, not heavy or structural.

---

## Elevation

**Light mode:** Box shadows (navy-tinted, low opacity)
- xs → xl, with dual-layer shadows from `md` up for depth

**Dark mode:** Background lightening (no shadows)
- `page` → `surface` → `raised` → `modal` → `overlay`
- Each step is a lighter navy value, not a shadow layer

---

## Motion

**Durations:**
- `instant` (75ms) — toggles, checkboxes
- `fast` (100ms) — hovers, tooltips — **default for most UI**
- `default` (200ms) — color/border/opacity transitions
- `slow` (300ms) — modals, panels entering
- `slower` (400ms) — staggered reveals

**Easing:**
- `ease-out` — all entering elements (default)
- `ease-in` — exiting elements
- `ease-in-out` — elements that change position
- `spring` — toasts, confirmations (slight overshoot, adds life)

---

## Component Specifications

See `tokens/tokens.json → component.*` for exact values. Summary:

| Component | Height | Padding | Radius | Font |
|---|---|---|---|---|
| Button (standard) | 32px | 16px X | 8px | DM Sans 500, 11px |
| Button (compact) | 28px | 12px X | 8px | DM Sans 500, 11px |
| Button (large) | 40px | 24px X | 8px | DM Sans 500, 11px |
| Input | 36px | 12px X, 8px Y | 8px | DM Sans 400, 13px |
| Card | — | 24px | 12px | — |
| Nav | 48px height | 16px X | — | Logo: Spectral 600 17px; Links: DM Sans 500 10px |
| Modal (md) | — | 32px | 16px | — |
| Badge | — | 8px X, 3px Y | pill | DM Sans 500, 10px |

---

## Design Tool Integration

- **Figma:** Tokens Studio plugin → point at `tokens/tokens.json`. Themes map to `light` and `dark` sets. Enable GitHub sync for bidirectional edits.
- **Penpot:** Import `build/css/filament.css` (CSS custom properties output). Component specs are in `component.*` tokens.

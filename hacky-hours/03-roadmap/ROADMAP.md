# filament — Roadmap

## Feature Inventory

| Feature | Priority | Complexity | Notes |
|---|---|---|---|
| Write `src/filament.css` — CSS custom properties from token JSON | MVP | Low | Owner writes directly, no build script |
| MIT LICENSE file | MVP | Trivial | Done |
| Button component (React) | V1 | Low | Radix UI Primitive + token CSS vars |
| Card component (React) | V1 | Low | Base primitive + project card variant |
| Badge component (React) | V1 | Low | gold, steel, red, neutral variants — pure CSS |
| Nav component (React) | V1 | Medium | Spectral logo, DM Sans links, navy bg |
| Avatar component (React) | V1 | Low | Profile/headshot with fallback |
| Footer component (React) | V1 | Low | Site-wide links + copyright |
| Tooltip component (React) | V1 | Low | Radix already installed |
| Storybook setup | V1 | Done | Visual catalog + a11y addon for contrast CI |
| Penpot CSS import workflow | V1 | Low | Document and test import of built CSS |
| Input component (React) | V2 | Low | Radix UI + token CSS vars |
| Feedback banner (React) | V2 | Low | danger / info / warning variants |
| Prose component (React) | V2 | Low | Typography wrapper for markdown/MDX |
| CodeBlock component (React) | V2 | Medium | Syntax highlighting — dep TBD (Shiki or Prism) |
| ArticleCard component (React) | V2 | Low | Date, excerpt, read time — Card variant |
| Pagination component (React) | V2 | Low | Prev/next + page numbers |
| Breadcrumb component (React) | V2 | Low | Blog post → category → home |
| Token pipeline: JSON → Go constants | Deferred | Medium | Only needed if Go project requires email/image generation with token values |
| Token pipeline: JSON → Zig comptime | Deferred | Medium | No concrete use case yet |
| Modal / Dialog component (React) | V2 | Medium | Radix Dialog + focus trap |
| Navigation component (React) | V2 | Medium | Top nav with Spectral logo mark |
| Toast / notification (React) | V2 | Medium | Radix Toast + spring easing |
| Table component (React) | V2 | Low-Med | Styling only — no data-fetching |
| Icon library | V2+ | Medium | Token-integrated SVG icon set; library TBD |
| Animation library | V2+ | Medium | Extends motion tokens; library TBD (Framer Motion, Motion One, or custom) |
| Automated contrast CI check | V2 | Medium | Storybook a11y addon (added in V1 Storybook setup) |

---

## MVP

**Done when:** `src/filament.css` is fully populated from the token JSON, importable in a React project, and dark mode switches correctly.

### MVP Features
- `src/filament.css` — all `:root` and `.theme-dark` custom properties written from token JSON
- Verified: all CSS vars resolve, no broken references
- Verified: dark mode switches correctly via `.theme-dark` class or `data-theme="dark"` attribute
- MIT `LICENSE` file

### MVP Milestones
1. `src/filament.css` fully populated — all token values present
2. CSS imports correctly in the Vite dev app — all CSS vars resolve, no broken references
3. Dark mode switches correctly in Storybook via theme toggle

---

## V1

**Done when:** Core React components exist, consume token CSS vars, pass keyboard and contrast checks, are catalogued in Storybook, and are usable in a real project.

### V1 Features
- Button (primary, secondary, danger, info, ghost variants; standard, compact, large sizes)
- Card (base primitive + project card variant with image, title, description, links)
- Badge (gold, steel, red, neutral variants — tech stack labels, status pills)
- Nav (Spectral logo mark, DM Sans links, navy background)
- Avatar (profile/headshot with fallback)
- Footer (site-wide links, copyright)
- Tooltip (tech stack badge descriptions on hover — Radix already installed)
- Storybook (component catalog, Storybook a11y addon for automated contrast checks)
- Penpot import workflow documented and tested

### V1 Milestones
1. All V1 components render correctly in both light and dark mode
2. All interactive components (Button, Input) pass keyboard navigation test
3. All components pass WCAG AA contrast check in both themes (via Storybook a11y)
4. Storybook runs locally — all components visible with all variants
5. At least one real project consumes filament as a submodule or local package

---

## V2

**Done when:** Remaining React components cover the full component token set.

### V2 Features
- Modal / Dialog (Radix Dialog, focus trap, spring entrance)
- Toast / notification (spring easing, auto-dismiss, keyboard-dismissible)
- Table (header/cell styling, hairline borders)
- Input (default, focus, error, disabled states)
- Feedback banner (danger, info, warning)
- Prose (typography wrapper for markdown/MDX body content)
- CodeBlock (syntax highlighting — dep TBD: Shiki or Prism)
- ArticleCard (date, excerpt, read time — Card variant for blog listings)
- Pagination (prev/next + page numbers)
- Breadcrumb (blog post → category → home navigation)
- Automated contrast check in CI (Storybook a11y, already set up in V1)

---

## V2+ (Planned, not yet scoped)

| Item | Notes |
|---|---|
| Icon library | Token-integrated SVG icons. Library decision (Phosphor, Lucide, custom) deferred until a project needs it |
| Animation library | Builds on `global.motion` tokens. Library decision (Framer Motion, Motion One, custom) deferred |

---

## Out of Scope

| Item | Reason |
|---|---|
| Hosted documentation site | No audience beyond personal use |
| Dark mode auto-detection (`prefers-color-scheme`) | Useful but not blocking — can add in V1 patch |

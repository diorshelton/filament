# filament — Build Backlog

## MVP Tasks

| Status | Task | Notes |
|---|---|---|
| Done | Initialize repo — `package.json`, `vite.config.ts`, `tsconfig.json`, `index.html`, `.gitignore`, `LICENSE` | Completed during scaffolding |
| Done | Scaffold `src/` — `main.tsx`, `App.tsx`, `vite-env.d.ts`, `filament.css` | Completed during scaffolding |
| Done | Scaffold token file — `src/tokens/filament-tokens-v0.1.0.json` | Tokens Studio format, full light/dark semantic layer |
| Done | Configure Storybook — `.storybook/main.ts`, `.storybook/preview.ts`, all addons | a11y, themes, docs, viewport |
| Done | Configure GitHub Pages deploy — `.github/workflows/deploy.yml` | Portfolio at root, Storybook at `/system` |
| Done | Foundation token reference — `docs/foundation-tokens.html` | Standalone visual reference, no build step |
| Done | Write `src/filament.css` — populate `:root` and `.theme-dark` from token JSON | Owner writes directly; no build script |

## V1 Tasks

| Status | Task | Notes |
|---|---|---|
| Todo | Build Button component — all variants + sizes | `src/components/Button/` |
| Todo | Build Card component — base primitive + project card variant | `src/components/Card/` |
| Todo | Build Badge component — gold, steel, red, neutral | `src/components/Badge/` |
| Todo | Build Nav component — Spectral logo, DM Sans links, navy bg | `src/components/Nav/` |
| Todo | Build Avatar component — headshot with fallback | `src/components/Avatar/` |
| Todo | Build Footer component — links, copyright | `src/components/Footer/` |
| Todo | Build Tooltip component — Radix already installed | `src/components/Tooltip/` |
| Todo | Add Storybook stories for all V1 components — light + dark | `src/components/**/*.stories.tsx` |
| Todo | Run a11y checks on all V1 components — fix any failures | Storybook a11y addon |
| Todo | Document Penpot import workflow — import `src/filament.css` | `hacky-hours/` doc or README |
| Todo | Import filament into one real project as a test | Submodule or local npm link |

## V2 Tasks

| Status | Task | Notes |
|---|---|---|
| Todo | Build Modal / Dialog — Radix Dialog, focus trap | `src/components/Modal/` |
| Todo | Build Toast — Radix Toast, spring easing | `src/components/Toast/` |
| Todo | Build Table — hairline borders, compact cells | `src/components/Table/` |
| Todo | Build Input component — default, focus, error, disabled | `src/components/Input/` |
| Todo | Build Feedback banner — danger, info, warning | `src/components/Feedback/` |
| Todo | Build Prose component — typography wrapper for markdown/MDX | `src/components/Prose/` |
| Todo | Build CodeBlock component — syntax highlighted; pick highlighter dep | `src/components/CodeBlock/` |
| Todo | Build ArticleCard component — date, excerpt, read time | `src/components/ArticleCard/` |
| Todo | Build Pagination component — prev/next + page numbers | `src/components/Pagination/` |
| Todo | Build Breadcrumb component — blog post → category → home | `src/components/Breadcrumb/` |

## V2+ Tasks (Parked)

| Status | Task | Notes |
|---|---|---|
| Parked | Icon library | Decide on library (Phosphor, Lucide, custom SVG) when a project needs it |
| Parked | Animation library | Decide on library (Framer Motion, Motion One) when a project needs it |
| Parked | Dark mode auto-detection (`prefers-color-scheme`) | Add as a patch when convenient |

## Completed Tasks

| Completed | Task |
|---|---|
| 2026-04-01 | Initialize repo and scaffold full project structure |
| 2026-04-01 | Configure Storybook 8 with a11y, themes, docs, viewport addons |
| 2026-04-01 | Configure GitHub Pages deploy workflow |
| 2026-04-01 | Create foundation token visual reference (`docs/foundation-tokens.html`) |
| 2026-04-01 | Rename token file to match project version (`filament-tokens-v0.1.0.json`) |
| 2026-04-01 | Write `src/filament.css` — all primitives, typography, spacing, radius, borders, shadows, motion, z-index, and semantic light/dark tokens |

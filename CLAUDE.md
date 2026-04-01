# filament — Claude Collaboration Guide

## What This Project Is

filament is a portable design token system and minimal component layer for consistent branding across personal projects. It is not a general-purpose component library — it is one person's design language, compiled to the targets they use.

**The human is the driver. Claude is the collaborator.**

## Project Structure

```
filament/
├── CLAUDE.md                    ← you are here
├── src/
│   ├── filament.css             ← CSS custom properties (owner writes directly from token JSON)
│   ├── tokens/
│   │   └── filament-tokens-v0.1.0.json  ← source of truth for all design decisions
│   ├── components/              ← React component primitives (Radix UI + token CSS vars)
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── docs/
│   └── foundation-tokens.html  ← standalone visual token reference
├── public/
│   └── CNAME
├── .storybook/
│   ├── main.ts
│   └── preview.ts
├── .github/
│   └── workflows/
│       └── deploy.yml           ← GitHub Pages: portfolio at root, Storybook at /system
└── hacky-hours/                 ← design system documentation
    ├── 01-ideate/
    │   └── PRODUCT_OVERVIEW.md
    ├── 02-design/
    │   ├── STYLE_GUIDE.md
    │   ├── ARCHITECTURE.md
    │   ├── ACCESSIBILITY.md
    │   └── LICENSING.md
    ├── 03-roadmap/
    │   └── ROADMAP.md
    └── 04-build/
        └── BACKLOG.md
```

## Design Principles

1. **Token-first** — every design decision lives in `src/tokens/filament-tokens-v0.1.0.json`. Nothing is hardcoded.
2. **Web-first** — tokens compile to CSS custom properties. The owner writes `filament.css` directly from the token JSON — no build script.
3. **Storybook as the design tool** — Storybook is the visual catalog and component documentation layer. No Figma dependency.
4. **Simple, clean, elegant** — no unnecessary abstraction. If the output file does the job, that's enough.
5. **Accessible by default** — WCAG 2.1 AA compliance is built into the token values, not bolted on later.

## Token Format

Tokens use the **Tokens Studio** format:
- `{ "value": "...", "type": "..." }` for leaf tokens
- References use `{path.to.token}` syntax
- Global primitives live under `global.*`
- Semantic tokens live under `light.*` and `dark.*`
- `$themes` and `$description` fields are preserved (load-bearing for format compatibility)

The owner translates tokens manually into `src/filament.css` as CSS custom properties — no generation script.

## Project State Machine

At the start of each session, Claude should:

1. Read this file to understand the project
2. Check `hacky-hours/04-build/BACKLOG.md` for current task state
3. Ask the user what they want to work on if it isn't clear

When completing work:
- Update `BACKLOG.md` task status
- Note any new decisions that affect `ARCHITECTURE.md` or `STYLE_GUIDE.md`

## What Claude Should NOT Do

- Don't introduce component abstractions that aren't needed yet
- Don't add dependencies without discussing the tradeoff
- Don't write `filament.css` on the owner's behalf — they populate it directly from the token JSON
- Don't remove or change `$themes` arrays or `$description` fields in the token file — they are load-bearing for format compatibility

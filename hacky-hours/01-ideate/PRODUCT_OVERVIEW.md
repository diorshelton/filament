# filament — Product Overview

## Who

**Primary user:** Dior Shelton — a developer building personal and professional projects, primarily on the web with React. Needs consistent visual branding without redefining colors, spacing, typography, or motion in every project.

**No other users.** This is not a public design system. It is a personal design language.

## What

A token-first design system that compiles a single source-of-truth JSON file into language-specific output:

- **CSS custom properties** — for all web contexts (React, plain HTML, any CSS framework)
- **TypeScript constants and types** — for type-safe usage in React and Node.js projects (charts, canvas, JS-driven animation)
- **Figma** — via Tokens Studio plugin, which reads `tokens/tokens.json` natively and supports bidirectional GitHub sync
- **Penpot** — via imported CSS custom properties or community plugin

The React layer adds a thin component primitive layer (Radix UI primitives styled with filament tokens) for components reused across projects.

## Where

- **Source:** A git repository that acts as a submodule or local package dependency
- **Design tools:** Tokens Studio (Figma) synced to `tokens/tokens.json`; Penpot via CSS import
- **No server, no cloud, no database.** Build-time artifact only.

## When

- **MVP:** Token pipeline operational — `tokens/tokens.json` → CSS custom properties + TypeScript types. Figma/Tokens Studio connected and verified.
- **V1:** React component primitives (Button, Input, Tag, Feedback banner, Card) consuming the token layer.

## Why

Every new project starts by re-inventing the same color palette, spacing scale, and button styles. filament exists so that decision is made once, refined over time, and available everywhere — in the browser, in design tools, and in non-web runtimes.

## Non-Goals

- Not a general-purpose component library
- Not designed for other people to use or configure
- Not opinionated about routing, state management, or anything outside of visual design
- No hosted documentation site (at least not in MVP)

## Constraints & Values

| Dimension | Decision |
|---|---|
| Licensing | MIT |
| Privacy | No telemetry. Figma sync is opt-in via Tokens Studio GitHub integration |
| Infrastructure | Zero — pure build-time artifact, no runtime server dependencies |
| Accessibility | WCAG 2.1 AA — compliance is built into token values, not retrofitted |
| Targets | Web only (CSS + TypeScript). Other language targets deferred until a concrete use case exists |
| Design tools | Figma (Tokens Studio) primary; Penpot secondary |
| Typography | Spectral (display/headings) + DM Sans (UI/body) |
| Aesthetic | Simple, clean, elegant |

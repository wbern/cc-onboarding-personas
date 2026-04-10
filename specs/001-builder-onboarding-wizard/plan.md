# Implementation Plan: Builder Onboarding Wizard

**Branch**: `001-builder-onboarding-wizard` | **Date**: 2026-04-10 | **Spec**: [spec.md](spec.md)
**Input**: Feature specification from `/specs/001-builder-onboarding-wizard/spec.md`

## Summary

Build a multi-page static onboarding site using Astro.js that guides
the "Builder" persona through installing and running Claude Code on
macOS. The site starts with a persona selection landing page, then
walks through a step-by-step wizard: platform check → install command
copy → open Terminal via Spotlight → paste and run → first-run
walkthrough (theme, login, ready). Each wizard step is a separate
Astro page with its own URL. Interactive elements (copy button,
sparkle animation on key visuals) use Astro islands for minimal JS.

## Technical Context

**Language/Version**: TypeScript 5.x, Astro 5.x
**Primary Dependencies**: Astro, Tailwind CSS
**Storage**: N/A (static site, no persistence)
**Testing**: Vitest (component), Playwright (E2E wizard flow)
**Target Platform**: Static hosting (Netlify, Vercel, Cloudflare Pages, or GitHub Pages)
**Project Type**: Static website (SSG)
**Performance Goals**: < 2s landing page load on broadband (SC-003)
**Constraints**: Zero client-side JS by default; islands only for interactive components
**Scale/Scope**: ~10 pages (1 landing + ~8 wizard steps), single persona (Builder)

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle | Status | Evidence |
|-----------|--------|----------|
| I. Persona-First Design | ✅ PASS | Every wizard page targets Builder persona. Landing page declares persona explicitly. |
| II. Universal Core, Personalized Paths | ✅ PASS | Landing page architecture supports future personas. Wizard steps are persona-specific paths. Core concepts (what Claude Code is) are shared via the install/first-run steps. |
| III. Meet Them Where They Are | ✅ PASS | Builder persona gets depth and "why" explanations. Troubleshooting via edge case fallbacks (clipboard failure, key detection failure). |
| IV. Practical Over Theoretical | ✅ PASS | Every step requires the visitor to do something: click, copy, open Terminal, paste, run. No theory-only pages. |
| V. Evolving Capabilities | ✅ PASS | Install command and first-run prompts are isolated content that can be updated independently. No permanent capability claims. |

**Gate result**: PASS — no violations.

## Project Structure

### Documentation (this feature)

```text
specs/001-builder-onboarding-wizard/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
└── tasks.md             # Phase 2 output (/speckit.tasks command)
```

### Source Code (repository root)

```text
src/
├── components/
│   ├── PersonaCard.astro        # Landing page persona card
│   ├── WizardNav.astro          # Forward/back navigation buttons
│   ├── CopyButton.tsx           # Interactive copy-to-clipboard (island)
│   ├── KeyVisual.tsx            # Interactive Cmd+Space keys with sparkle (island)
│   ├── TerminalMockup.astro     # Static terminal-style code display
│   └── BuilderSvg.astro         # Builder persona SVG illustration
├── layouts/
│   ├── BaseLayout.astro         # HTML shell, meta, global styles
│   └── WizardLayout.astro       # Wizard chrome: progress indicator, nav
├── pages/
│   ├── index.astro              # Landing page (persona selection)
│   └── builder/
│       ├── platform.astro       # Step 1: Are you using a Mac?
│       ├── install.astro        # Step 2: Copy install command
│       ├── terminal.astro       # Step 3: Open Terminal via Spotlight
│       ├── run.astro            # Step 4: Paste and run install
│       ├── theme.astro          # Step 5: Theme selection prompt
│       ├── login.astro          # Step 6: Account login
│       └── ready.astro          # Step 7: Congratulations, you're in
└── styles/
    └── global.css               # Tailwind imports, custom properties
```

**Structure Decision**: Single Astro project with file-based routing.
Each wizard step is a standalone `.astro` page under `src/pages/builder/`.
Interactive components (CopyButton, KeyVisual) are TypeScript islands
hydrated with `client:load`. All other components are static Astro
components (zero JS shipped).

## Complexity Tracking

No constitution violations to justify.

# Quickstart: Builder Onboarding Wizard

**Date**: 2026-04-10
**Branch**: `001-builder-onboarding-wizard`

## Prerequisites

- Node.js 18+ (LTS recommended)
- npm 9+ or pnpm 8+

## Setup

```bash
# Clone and enter the project
cd /path/to/project

# Install dependencies
npm install

# Start development server
npm run dev
```

The dev server starts at `http://localhost:4321` by default.

## Project Layout

```
src/pages/index.astro          → Landing page (http://localhost:4321/)
src/pages/builder/platform.astro → Step 1 (/builder/platform)
src/pages/builder/install.astro  → Step 2 (/builder/install)
src/pages/builder/terminal.astro → Step 3 (/builder/terminal)
src/pages/builder/run.astro      → Step 4 (/builder/run)
src/pages/builder/theme.astro    → Step 5 (/builder/theme)
src/pages/builder/login.astro    → Step 6 (/builder/login)
src/pages/builder/ready.astro    → Step 7 (/builder/ready)
```

## Development Workflow

1. Edit any `.astro` file — the dev server hot-reloads.
2. Static components (layouts, SVG, terminal mockups) are in
   `src/components/` as `.astro` files — zero JS shipped.
3. Interactive components (CopyButton, KeyVisual) are `.tsx` files
   hydrated with `client:load`.
4. Styles use Tailwind utilities + Astro scoped `<style>` blocks.

## Testing

```bash
# Component tests
npm run test

# E2E wizard flow tests
npm run test:e2e
```

## Build & Preview

```bash
# Build static site
npm run build

# Preview production build locally
npm run preview
```

Output goes to `dist/`. Deploy the contents of `dist/` to any
static hosting provider.

## Verification Checklist

After setup, verify:

- [ ] `npm run dev` starts without errors
- [ ] Landing page loads at `/` with Builder persona card
- [ ] Clicking Builder card navigates to `/builder/platform`
- [ ] Each wizard step loads at its URL
- [ ] Copy button on `/builder/install` copies to clipboard
- [ ] Key visuals on `/builder/terminal` trigger sparkle on click
- [ ] Forward/back navigation works on all steps

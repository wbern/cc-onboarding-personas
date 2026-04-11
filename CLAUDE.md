# Claude Code Onboarding

Interactive onboarding wizard for Claude Code — built with Astro, Preact, and Tailwind.

## Stack

- Astro 6.x + Preact (islands)
- Tailwind CSS 3.x
- TypeScript 6.x
- Vitest (unit tests), Playwright (e2e)
- Biome (linting/formatting)

## Commands

```bash
pnpm install --frozen-lockfile   # install deps
pnpm dev                         # dev server
pnpm build                       # production build
pnpm test                        # vitest run
pnpm test:e2e                    # playwright e2e
pnpm typecheck                   # tsc --noEmit
pnpm lint                        # biome check .
pnpm lint:fix                    # biome check --write .
```

## Project Structure

```
src/
  components/    # Preact interactive components
  layouts/       # Astro layouts
  pages/         # Astro pages (file-based routing)
  styles/        # Global styles
public/          # Static assets
tests/           # Vitest unit tests
specs/           # Feature specifications
```

## Code Style

- Biome for linting and formatting (see biome.json)
- Conventional commits enforced via commitlint
- Secrets scanning via secretlint

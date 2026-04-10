# Research: Builder Onboarding Wizard

**Date**: 2026-04-10
**Branch**: `001-builder-onboarding-wizard`

## R1: Astro.js for Multi-Page Static Wizard

**Decision**: Use Astro 5.x with file-based routing (SSG mode).

**Rationale**: Astro's default static generation produces zero-JS HTML
pages — perfect for a content-heavy wizard where most steps are pure
text and illustrations. Islands architecture allows surgical hydration
only for CopyButton and KeyVisual components. File-based routing in
`src/pages/` maps directly to the multi-page URL requirement from
clarifications (each step = own URL).

**Alternatives considered**:
- Next.js: Overkill for a static site; ships React runtime by default.
- Plain HTML: No component reuse, no layout system, harder to maintain.
- Eleventy: Strong static generator but lacks Astro's island
  architecture for the interactive components.

## R2: CSS Framework

**Decision**: Tailwind CSS with Astro scoped styles.

**Rationale**: Tailwind provides utility-first styling that keeps the
design consistent without writing custom CSS for every element.
Astro's scoped `<style>` blocks handle component-specific styles
(sparkle animation, terminal mockup) with automatic namespacing to
prevent collisions.

**Alternatives considered**:
- Plain CSS: Viable but slower to develop and harder to maintain
  design consistency across ~10 pages.
- CSS Modules: Adds build complexity; Astro scoped styles achieve the
  same isolation natively.

## R3: Cmd+Space Key Detection

**Decision**: Cmd+Space CANNOT be detected by browsers. Use clickable
key visuals as primary interaction.

**Rationale**: macOS Spotlight intercepts Cmd+Space at the OS level
before the browser receives the keypress event. The `keydown` event
never fires. The wizard must use clickable/tappable key visuals
styled as keyboard keys. Clicking triggers the sparkle animation.

**Alternatives considered**:
- Listen for keydown on Meta+Space: Does not fire on macOS.
- Use a different key combo (e.g., Shift+Space): Confusing — the
  whole point is teaching the visitor to press Cmd+Space. A
  substitute key defeats the purpose.
- Skip detection entirely: Still show the keys but make them a
  button. This is the chosen approach.

## R4: Sparkle/Fairy-Dust Animation

**Decision**: CSS-only animation with JavaScript trigger. No library.

**Rationale**: A lightweight CSS `@keyframes` animation using
dynamically positioned pseudo-elements gives the sparkle effect with
< 3KB of code. GPU-accelerated via `transform` and `opacity`. No
canvas or animation libraries needed.

**Pattern**:
- Create 8-12 particle `<div>` elements on click
- Each particle gets randomized `--x`, `--y`, `--duration` CSS vars
- Animation: scale(1) → scale(0) with opacity fade and translation
- Particles self-remove after animation completes (~1s)

**Alternatives considered**:
- Canvas-based particle system: Heavier, harder to style-match with
  the page, overkill for a single animation.
- Lottie/animated SVG: Adds dependency and complexity for one effect.
- GIF/video: Not interactive, fixed size, harder to integrate.

## R5: Copy-to-Clipboard

**Decision**: Use the Clipboard API (`navigator.clipboard.writeText()`)
with fallback to `document.execCommand('copy')`.

**Rationale**: The Clipboard API is supported in all modern browsers
(Safari 13+, Chrome 66+, Firefox 63+). The fallback handles older
browsers. Visual feedback ("Copied!") confirms success.

**Fallback behavior**: If clipboard access is denied (permissions),
show a message: "Select the command and copy manually (Cmd+C)."

## R6: Testing Strategy

**Decision**: Vitest for component tests, Playwright for E2E.

**Rationale**: Vitest integrates natively with Astro's Vite-based
build. Playwright's `webServer` config auto-launches the Astro
preview server for full wizard flow testing. E2E tests can verify
the complete wizard path: landing → platform → install → terminal →
run → theme → login → ready.

## R7: Claude Code Install Command

**Decision**: `curl -fsSL https://claude.ai/install.sh | bash`

**Rationale**: This is the official one-liner from Anthropic's
documentation. An alternative exists via Homebrew
(`brew install --cask claude-code`) but the curl command is
universal and doesn't require Homebrew as a prerequisite.

## R8: Claude Code First-Run Prompts

**Decision**: Document three first-run prompts: theme selection,
account login, ready state.

**Rationale**: Based on current Claude Code behavior:
1. **Theme**: First launch shows a theme/color prompt. Default
   (Enter) selects dark mode.
2. **Login**: Opens browser for Anthropic account authentication.
3. **Ready**: After login, the Claude Code prompt appears and is
   ready for input.

These prompts may change across Claude Code versions. Each is
isolated to its own wizard page so updates are localized (per
Evolving Capabilities principle).

## R9: OS Detection

**Decision**: Use `navigator.userAgent` or `navigator.platform` to
detect macOS and pre-select the platform check answer.

**Rationale**: `navigator.platform` returns "MacIntel" or "MacARM"
on macOS. The newer `navigator.userAgentData.platform` returns
"macOS" where available. Use a simple check:
`/Mac|macOS/.test(navigator.userAgent || navigator.platform)`.
This runs client-side in a small island component.

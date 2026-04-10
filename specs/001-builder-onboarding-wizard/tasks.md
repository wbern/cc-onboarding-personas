# Tasks: Builder Onboarding Wizard

**Input**: Design documents from `/specs/001-builder-onboarding-wizard/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (US1-US6)
- Include exact file paths in descriptions

## Phase 1: Setup

**Purpose**: Initialize Astro project with Tailwind CSS

- [x] T001 Initialize Astro 5.x project with TypeScript at repository root (`npm create astro@latest`)
- [x] T002 [P] Install and configure Tailwind CSS integration in `astro.config.mjs`
- [x] T003 [P] Create global styles with Tailwind imports and custom properties in `src/styles/global.css`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Shared layouts and reusable components needed by all wizard pages

**CRITICAL**: No user story work can begin until this phase is complete

- [x] T004 Create BaseLayout with HTML shell, meta tags, and global style import in `src/layouts/BaseLayout.astro`
- [x] T005 Create WizardLayout with step progress indicator and slot for page content in `src/layouts/WizardLayout.astro` (extends BaseLayout, accepts `currentStep`, `totalSteps`, `prevHref`, `nextHref` props)
- [x] T006 [P] Create WizardNav component with forward/back navigation links in `src/components/WizardNav.astro` (accepts `prevHref`, `nextHref` props; renders styled anchor tags)
- [x] T007 [P] Create TerminalMockup component for displaying styled terminal output in `src/components/TerminalMockup.astro` (accepts `command` and optional `output` props; renders dark rounded box with monospace text)

**Checkpoint**: Foundation ready — user story implementation can now begin

---

## Phase 3: User Story 1 — Persona Selection Landing Page (Priority: P1) MVP

**Goal**: Visitors land on a page showing persona cards and can select "The Builder" to enter the wizard

**Independent Test**: Load `/`, see the Builder card with SVG illustration and bullet points, click it, arrive at `/builder/platform`

- [x] T008 [P] [US1] Create BuilderSvg inline SVG illustration (chess-pawn silhouette with hammer, minimalistic geometric shapes, playful-professional style) in `src/components/BuilderSvg.astro`
- [x] T009 [P] [US1] Create PersonaCard component in `src/components/PersonaCard.astro` (accepts `name`, `tagline`, `bullets`, `illustration` slot, `href`, `available` props; renders clickable card when available, "coming soon" style when not)
- [x] T010 [US1] Create landing page in `src/pages/index.astro` using BaseLayout; render PersonaCard for Builder (available: true) with BuilderSvg, linking to `/builder/platform`

**Checkpoint**: Landing page functional — visitors can select Builder persona

---

## Phase 4: User Story 2 — Platform Check (Priority: P1)

**Goal**: Detect visitor's OS and gate the wizard to macOS-only

**Independent Test**: Load `/builder/platform`, see "Yes" pre-selected on Mac, click Yes to reach `/builder/install`, click No to see "come back later" message

- [x] T011 [US2] Create platform check page in `src/pages/builder/platform.astro` using WizardLayout (step 1 of 7, prevHref: `/`); include inline `<script>` to detect macOS via `navigator.userAgent`/`navigator.platform` and pre-select Yes; Yes links to `/builder/install`; No toggles a "macOS only for now — come back later" message and hides the next button

**Checkpoint**: Platform gate works — non-Mac visitors see dead-end message

---

## Phase 5: User Story 3 — Install Command Copy (Priority: P1)

**Goal**: Visitor copies the Claude Code install command to clipboard

**Independent Test**: Load `/builder/install`, see install command in styled code block, click copy button, see "Copied!" feedback

- [x] T012 [US3] Create CopyButton island component in `src/components/CopyButton.tsx` using `client:load` directive; accepts `text` prop; uses `navigator.clipboard.writeText()` with `execCommand('copy')` fallback; shows "Copied!" confirmation state for 2 seconds; shows manual copy fallback message if clipboard access denied
- [x] T013 [US3] Create install page in `src/pages/builder/install.astro` using WizardLayout (step 2 of 7, prevHref: `/builder/platform`, nextHref: `/builder/terminal`); display install command `curl -fsSL https://claude.ai/install.sh | bash` in TerminalMockup with CopyButton; next button is visually muted until copy occurs (still clickable)

**Checkpoint**: Install command copy flow works end-to-end

---

## Phase 6: User Story 4 — Open Terminal via Spotlight (Priority: P2)

**Goal**: Guide visitor to open Terminal using Spotlight with interactive key visuals

**Independent Test**: Load `/builder/terminal`, see styled Cmd+Space keys, click them to trigger sparkle animation, read instruction to type "Terminal"

- [x] T014 [US4] Create KeyVisual island component in `src/components/KeyVisual.tsx` using `client:load` directive; render styled keyboard key shapes (Cmd ⌘ and Space); on click, spawn 8-12 particle divs with randomized CSS custom properties (`--x`, `--y`, `--duration`) and `@keyframes sparkle` animation (scale+opacity fade); particles self-remove after 1s; include sparkle CSS in component or scoped style
- [x] T015 [US4] Create terminal/Spotlight page in `src/pages/builder/terminal.astro` using WizardLayout (step 3 of 7, prevHref: `/builder/install`, nextHref: `/builder/run`); display KeyVisual component as clickable keys; add instructional text: "Press ⌘ + Space on your keyboard" then "Type 'Terminal' and press Enter"

**Checkpoint**: Spotlight step renders with interactive sparkle animation

---

## Phase 7: User Story 5 — Paste and Run Install (Priority: P2)

**Goal**: Instruct visitor to paste install command into Terminal and run it

**Independent Test**: Load `/builder/run`, see terminal mockup with install command and paste instructions

- [x] T016 [US5] Create paste-and-run page in `src/pages/builder/run.astro` using WizardLayout (step 4 of 7, prevHref: `/builder/terminal`, nextHref: `/builder/theme`); display TerminalMockup showing `curl -fsSL https://claude.ai/install.sh | bash` with instruction text: "Paste with ⌘V and press Enter"

**Checkpoint**: Paste-and-run step clearly bridges web guide to terminal

---

## Phase 8: User Story 6 — First-Run Walkthrough (Priority: P2)

**Goal**: Walk visitor through Claude Code's first-run prompts until they have a running session

**Independent Test**: Navigate `/builder/theme` → `/builder/login` → `/builder/ready` and verify each shows the expected terminal mockup and instructions

- [x] T017 [P] [US6] Create theme selection page in `src/pages/builder/theme.astro` using WizardLayout (step 5 of 7, prevHref: `/builder/run`, nextHref: `/builder/login`); display TerminalMockup showing theme prompt; instruction: "Just press Enter for dark mode"
- [x] T018 [P] [US6] Create login page in `src/pages/builder/login.astro` using WizardLayout (step 6 of 7, prevHref: `/builder/theme`, nextHref: `/builder/ready`); display instruction that a browser window will open for Anthropic account login; show TerminalMockup of expected login prompt
- [x] T019 [US6] Create ready/congratulations page in `src/pages/builder/ready.astro` using WizardLayout (step 7 of 7, prevHref: `/builder/login`, nextHref: null); display "Congratulations!" heading, TerminalMockup showing Claude Code prompt, and message confirming setup is complete

**Checkpoint**: Full wizard flow from landing to "you're in!" is navigable

---

## Phase 9: Polish & Cross-Cutting Concerns

**Purpose**: Verify full flow and responsive behavior

- [x] T020 [P] Verify responsive behavior across viewport sizes (mobile 375px, tablet 768px, desktop 1280px) and fix layout issues in wizard pages and landing page
- [x] T021 Run quickstart.md verification checklist: dev server starts, landing page loads, Builder card links work, all wizard steps load at their URLs, copy button works, key visuals animate, forward/back navigation works on all steps

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies — start immediately
- **Foundational (Phase 2)**: Depends on Setup completion — BLOCKS all user stories
- **US1 (Phase 3)**: Depends on Phase 2 — landing page needs BaseLayout
- **US2 (Phase 4)**: Depends on Phase 2 — needs WizardLayout
- **US3 (Phase 5)**: Depends on Phase 2 — needs WizardLayout, TerminalMockup
- **US4 (Phase 6)**: Depends on Phase 2 — needs WizardLayout
- **US5 (Phase 7)**: Depends on Phase 2 — needs WizardLayout, TerminalMockup
- **US6 (Phase 8)**: Depends on Phase 2 — needs WizardLayout, TerminalMockup
- **Polish (Phase 9)**: Depends on all user stories being complete

### User Story Dependencies

- **US1 (P1)**: Can start after Phase 2 — no dependencies on other stories
- **US2 (P1)**: Can start after Phase 2 — no dependencies on other stories
- **US3 (P1)**: Can start after Phase 2 — no dependencies on other stories
- **US4 (P2)**: Can start after Phase 2 — no dependencies on other stories
- **US5 (P2)**: Can start after Phase 2 — no dependencies on other stories
- **US6 (P2)**: Can start after Phase 2 — no dependencies on other stories

All user stories are independent — they share foundational components but modify different files.

### Parallel Opportunities

```bash
# Phase 1: Setup tasks T002 and T003 in parallel (after T001)
Task: T002 "Configure Tailwind CSS"
Task: T003 "Create global styles"

# Phase 2: T006 and T007 in parallel (after T004)
Task: T006 "Create WizardNav component"
Task: T007 "Create TerminalMockup component"

# Phase 3 (US1): T008 and T009 in parallel
Task: T008 "Create BuilderSvg illustration"
Task: T009 "Create PersonaCard component"

# Phase 8 (US6): T017 and T018 in parallel
Task: T017 "Create theme page"
Task: T018 "Create login page"

# After Phase 2, ALL user stories can run in parallel:
Task: T010 (US1), T011 (US2), T012-T013 (US3), T014-T015 (US4), T016 (US5), T017-T019 (US6)
```

---

## Implementation Strategy

### MVP First (User Stories 1-3)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: US1 (Landing Page)
4. Complete Phase 4: US2 (Platform Check)
5. Complete Phase 5: US3 (Install Command Copy)
6. **STOP and VALIDATE**: Landing → Platform → Install flow works end-to-end
7. Deploy/demo if ready — visitor can at least get the install command

### Incremental Delivery

1. Setup + Foundational → Foundation ready
2. Add US1 → Landing page shows Builder card → Deploy
3. Add US2 + US3 → Platform gate + install copy flow → Deploy (MVP!)
4. Add US4 + US5 → Spotlight + paste-and-run guidance → Deploy
5. Add US6 → Full wizard through to "you're in!" → Deploy
6. Polish → Responsive verification, final QA → Deploy

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story is independently completable and testable
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- All interactive components (CopyButton, KeyVisual) are TypeScript islands — they ship JS only where needed
- TerminalMockup is a static Astro component — zero JS

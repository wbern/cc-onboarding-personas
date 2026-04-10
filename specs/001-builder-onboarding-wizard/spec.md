# Feature Specification: Builder Onboarding Wizard

**Feature Branch**: `001-builder-onboarding-wizard`
**Created**: 2026-04-10
**Status**: Draft
**Persona**: Builder (primary)

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Persona Selection Landing Page (Priority: P1)

A new visitor arrives at the onboarding site. They see a landing page
with persona cards — for now, only "The Builder" is available. The
Builder card shows a minimalistic SVG illustration (chess-pawn-like
silhouette carrying a hammer) alongside bullet points that describe
the Builder personality so the visitor can self-identify. The visitor
clicks the Builder card and enters the Builder onboarding path.

**Why this priority**: This is the entry point. Without it, no other
onboarding flow is reachable. It also establishes the persona-driven
architecture that future personas will plug into.

**Independent Test**: A visitor can load the landing page, read the
Builder description, click the card, and be routed to the Builder
wizard. The page renders correctly and the illustration displays.

**Acceptance Scenarios**:

1. **Given** a visitor loads the landing page, **When** the page
   renders, **Then** they see at least one persona card (Builder)
   with an SVG illustration and descriptive bullet points.
2. **Given** a visitor is on the landing page, **When** they click
   the Builder card, **Then** they are navigated to the first step
   of the Builder onboarding wizard.
3. **Given** future personas are not yet implemented, **When** the
   page renders, **Then** only the Builder card is interactive;
   other placeholder slots (if shown) are visually distinct and
   not clickable.

---

### User Story 2 - Platform Check (Priority: P1)

After selecting the Builder persona, the visitor enters a wizard-style
flow. The first step asks "Are you using a Mac?" with Yes/No options.
The page auto-detects the visitor's OS from the browser and pre-selects
the appropriate answer. If the visitor confirms Mac, they proceed. If
they select No, they see a friendly "Come back later — Windows and
Linux support is coming soon" message.

**Why this priority**: Mac-only support is a hard gate — all subsequent
steps assume macOS. This must exist before install instructions make
sense.

**Independent Test**: Visit the platform check step directly. On a Mac
browser, "Yes" is pre-selected. Clicking Yes proceeds to the next
step. Clicking No shows the "come back later" message.

**Acceptance Scenarios**:

1. **Given** the visitor is on the platform check step using a Mac
   browser, **When** the page loads, **Then** "Yes" is visually
   pre-selected (but not auto-submitted).
2. **Given** the visitor selects "Yes", **When** they confirm,
   **Then** they proceed to the install step.
3. **Given** the visitor selects "No", **When** they confirm,
   **Then** they see a message indicating macOS-only support for now,
   with no way to proceed further.

---

### User Story 3 - Install Command Copy (Priority: P1)

The visitor sees the Claude Code install command displayed prominently
with a one-click copy button. The command is
`curl -fsSL https://claude.ai/install.sh | bash`. After copying, the
step visually confirms the copy succeeded and enables the visitor to
proceed to the next step.

**Why this priority**: This is the core action of onboarding —
getting Claude Code onto the machine. Without it, nothing else works.

**Independent Test**: Visit the install step, click the copy button,
verify the command is in the clipboard, and confirm the visual
feedback appears.

**Acceptance Scenarios**:

1. **Given** the visitor is on the install step, **When** the page
   renders, **Then** the install command is displayed in a styled
   code block with a visible copy button.
2. **Given** the visitor clicks the copy button, **When** the copy
   succeeds, **Then** the button shows a "Copied!" confirmation
   and the next-step navigation becomes enabled.
3. **Given** the visitor has not yet copied the command, **When**
   they look at the next-step button, **Then** it is visually
   muted (but still clickable — we don't force the copy, just
   encourage it).

---

### User Story 4 - Open Terminal via Spotlight (Priority: P2)

The visitor is guided to open Terminal using Spotlight. The page shows
stylized keyboard keys for Cmd+Space. When the visitor presses those
keys on their actual keyboard, the key visuals on the page illuminate
with a sparkle/fairy-dust animation. The page then instructs them to
type "Terminal" and press Enter.

**Why this priority**: This bridges the gap between the web guide and
the local machine. The interactive key detection is a delight moment
but not strictly required — the instructions alone would suffice.

**Independent Test**: Visit the Spotlight step. Press Cmd+Space and
observe the key animation. Read the instruction to type "Terminal."

**Acceptance Scenarios**:

1. **Given** the visitor is on the Spotlight step, **When** the page
   renders, **Then** stylized Cmd and Space keys are visible with
   instructional text.
2. **Given** the visitor presses Cmd+Space on their keyboard,
   **When** the browser detects the key combination, **Then** the
   key visuals illuminate with a sparkle animation.
3. **Given** the key animation has played (or the visitor skips it),
   **When** they read the page, **Then** they see instructions to
   type "Terminal" in Spotlight and press Enter.
4. **Given** the visitor has read the instructions, **When** they
   click next, **Then** they proceed to the paste-and-run step.

---

### User Story 5 - Paste and Run Install (Priority: P2)

The visitor is instructed to paste the previously copied install
command into Terminal and run it. The page shows a terminal-style
visual with the expected command, reinforcing what they should see.

**Why this priority**: Connects the copy step to actual execution.
The guide must bridge web and terminal clearly.

**Independent Test**: Visit this step, read the instruction to paste
and press Enter, see the terminal mock showing the expected command.

**Acceptance Scenarios**:

1. **Given** the visitor is on the paste step, **When** the page
   renders, **Then** they see a terminal mockup showing the install
   command and instructions to paste (Cmd+V) and press Enter.
2. **Given** the visitor proceeds, **When** they click next, **Then**
   they move to the first-run guidance step.

---

### User Story 6 - First-Run Walkthrough (Priority: P2)

The visitor is walked through what happens after running `claude` for
the first time. Each prompt Claude Code shows during first run is
previewed on a separate wizard step:

1. Theme selection — "Just press Enter for dark mode"
2. Account login — "Your browser will open. Log in with your
   Anthropic account."
3. Ready state — "You'll see the Claude prompt. You're in!"

Each step shows a screenshot or terminal mockup of what the visitor
should expect to see.

**Why this priority**: Without this, the visitor is dropped into an
unfamiliar terminal UI with no guidance. This is the "last mile" of
the onboarding.

**Independent Test**: Navigate through each first-run step and
verify the instructions match the actual Claude Code first-run
experience.

**Acceptance Scenarios**:

1. **Given** the visitor is on the theme step, **When** the page
   renders, **Then** they see a mockup of the theme prompt and
   the instruction "Press Enter for dark mode."
2. **Given** the visitor proceeds to the login step, **When** the
   page renders, **Then** they see an explanation that a browser
   window will open for Anthropic account login.
3. **Given** the visitor proceeds to the ready step, **When** the
   page renders, **Then** they see a "Congratulations" state with
   a mockup of the Claude Code prompt, confirming they are done
   with initial setup.

---

### Edge Cases

- What happens if the visitor's browser blocks clipboard access?
  The copy button should show a fallback: "Select the command and
  copy manually (Cmd+C)."
- What happens if the visitor navigates backward in the wizard?
  They should be able to revisit any previous step without losing
  progress state.
- What happens if Cmd+Space detection fails (e.g., browser
  security restrictions on key events)? The sparkle animation is
  a nice-to-have; the step must be completable without it via a
  manual "Next" button.
- What happens on a non-Mac browser that somehow reaches the
  install step? The platform check should have caught this, but
  the install command shown should still be correct for macOS.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The landing page MUST display persona cards with an
  SVG illustration and descriptive bullet points for each persona.
- **FR-002**: Only the Builder persona card MUST be interactive in
  this version; other slots, if present, MUST be visually
  distinguished as "coming soon."
- **FR-003**: The wizard MUST present steps in a fixed linear
  sequence with forward and backward navigation. Each step MUST
  be a separate page with its own URL.
- **FR-004**: The platform check step MUST auto-detect the
  visitor's operating system and pre-select the answer.
- **FR-005**: Selecting "No" on the platform check MUST display a
  "macOS only for now" message and prevent further progression.
- **FR-006**: The install step MUST display the official Claude Code
  install command with a one-click copy-to-clipboard button.
- **FR-007**: The copy button MUST provide visual feedback on
  successful copy.
- **FR-008**: The Spotlight step MUST detect Cmd+Space keypress and
  trigger a sparkle/illuminate animation on the key visuals.
- **FR-009**: The first-run walkthrough MUST present each setup
  prompt (theme, login, ready) as a separate wizard step with a
  terminal mockup or screenshot.
- **FR-010**: The site MUST be built as a static site optimized for
  fast load times.
- **FR-011**: All SVG illustrations MUST use minimalistic geometric
  shapes in a style that is playful yet professional.
- **FR-012**: Each wizard step MUST be directly accessible via its
  URL. No client-side session or storage is required for navigation
  state — the URL is the state.

### Key Entities

- **Persona**: A user archetype with a name, description bullet
  points, SVG illustration, and a linked onboarding path. For now,
  only "Builder" exists.
- **Wizard Step**: A single screen in the onboarding flow with
  content, optional interactivity (copy button, key detection),
  and forward/back navigation.
- **Install Command**: The canonical one-liner for installing
  Claude Code, sourced from Anthropic's official documentation.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: A first-time visitor can go from landing page to
  "Claude Code is running" confirmation in under 10 minutes.
- **SC-002**: 90% of visitors who start the wizard complete all
  steps without abandoning. (Aspirational — no analytics in v1;
  validated through user feedback.)
- **SC-003**: The landing page loads in under 2 seconds on a
  standard broadband connection.
- **SC-004**: Every wizard step is reachable via backward
  navigation without data loss or broken state.
- **SC-005**: The copy-to-clipboard interaction succeeds on first
  attempt for 95% of visitors using supported browsers.

## Clarifications

### Session 2026-04-10

- Q: Should wizard steps be separate pages (unique URLs) or a single-page client-side flow? → A: Multi-page — each wizard step is a separate URL (e.g., /builder/install, /builder/terminal).
- Q: Should wizard progress persist across browser sessions? → A: No browser storage needed — the URL itself is the persistence mechanism. Visitors can bookmark or revisit any step directly.
- Q: How will the 90% completion rate (SC-002) be measured? → A: Aspirational goal, not actively measured. No analytics in this version.

## Assumptions

- Only macOS is supported in this version. Windows and Linux
  onboarding paths will be added later.
- The official Claude Code install command is
  `curl -fsSL https://claude.ai/install.sh | bash` and is
  maintained by Anthropic. If it changes, the guide must be
  updated.
- Visitors have a modern browser (Safari, Chrome, Firefox, Edge)
  that supports the Clipboard API.
- The site is a static site built with Astro.js, deployed to a
  static hosting provider.
- The sparkle animation on Cmd+Space is best-effort; browsers may
  not reliably detect this key combination since Spotlight
  intercepts it. A fallback "I did it" button is acceptable.
- Claude Code's first-run prompts (theme, login) may change across
  versions. The guide content should be easy to update
  independently per the Evolving Capabilities principle.
- No user accounts, server-side state, or client-side storage.
  Each wizard step is a standalone page; the URL is the only state.

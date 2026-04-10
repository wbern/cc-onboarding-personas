# Data Model: Builder Onboarding Wizard

**Date**: 2026-04-10
**Branch**: `001-builder-onboarding-wizard`

## Overview

This is a static site with no server-side storage. The "data model"
describes the content structures that define the wizard, not database
entities.

## Entities

### Persona

Represents a user archetype displayed on the landing page.

| Field | Type | Description |
|-------|------|-------------|
| id | string | Unique identifier (e.g., "builder") |
| name | string | Display name (e.g., "The Builder") |
| tagline | string | One-line description |
| bullets | string[] | 3-5 descriptive traits |
| illustration | SVG component | Minimalistic persona illustration |
| path | string | URL path to persona's wizard (e.g., "/builder/platform") |
| available | boolean | Whether this persona's path is implemented |

**Current instances**: Only "builder" (available: true). Future
personas (pragmatist, product-seeker) will be available: false
with "coming soon" visual treatment.

### WizardStep

Represents a single page in the wizard flow.

| Field | Type | Description |
|-------|------|-------------|
| id | string | URL slug (e.g., "platform", "install") |
| title | string | Step heading displayed to visitor |
| persona | string | Which persona this step belongs to |
| order | number | Position in the wizard sequence (1-based) |
| totalSteps | number | Total steps in this persona's wizard |
| prevStep | string or null | URL of previous step (null for first) |
| nextStep | string or null | URL of next step (null for last) |
| interactive | boolean | Whether this step contains an island component |

**Builder wizard steps** (in order):
1. platform — "Are you using a Mac?"
2. install — "Copy the install command"
3. terminal — "Open Terminal"
4. run — "Paste and run"
5. theme — "Choose your theme"
6. login — "Log in to your account"
7. ready — "You're all set!"

### InstallCommand

The canonical install command shown to visitors.

| Field | Type | Description |
|-------|------|-------------|
| command | string | The shell command to copy |
| source | string | Where the command comes from (e.g., "Anthropic docs") |
| lastVerified | date | When this command was last confirmed correct |

**Current value**: `curl -fsSL https://claude.ai/install.sh | bash`

## Relationships

```text
Persona (1) ──has──> (N) WizardStep
WizardStep "install" ──displays──> InstallCommand
WizardStep ──prev/next──> WizardStep (linked list)
```

## State Transitions

No application state. The only "state" is which page the visitor is
on, determined entirely by the URL. There are no user sessions,
no form data to persist, and no server-side state.

The platform check step has a binary branch:
- Yes (Mac) → proceed to install step
- No (not Mac) → dead end with "come back later" message

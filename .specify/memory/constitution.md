<!--
  Sync Impact Report
  ==================
  Version change: N/A (template) → 1.0.0
  Modified principles: N/A (initial ratification)
  Added sections:
    - Core Principles (5 principles)
    - Persona Definitions
    - Content Development Standards
    - Governance
  Removed sections: None
  Templates requiring updates:
    - .specify/templates/plan-template.md — ✅ compatible (no changes needed)
    - .specify/templates/spec-template.md — ✅ compatible (persona-driven
      user stories align with existing priority structure)
    - .specify/templates/tasks-template.md — ✅ compatible (no changes needed)
  Follow-up TODOs: None
-->

# Agentic Onboarding Guide Constitution

## Core Principles

### I. Persona-First Design

All content MUST be designed for a specific persona, never for a
generic "user." Every page, tutorial, and guide MUST declare which
persona it serves. Content that tries to address everyone addresses
no one — if a piece of content cannot name its audience, it does
not ship.

### II. Universal Core, Personalized Paths

A shared checklist of concepts MUST exist that all personas need to
understand (what agentic products are, what they can do, how to stay
safe). The *delivery* of those concepts — depth, vocabulary, examples,
and hands-on requirements — MUST vary by persona. The core checklist
is the skeleton; persona paths are the flesh.

### III. Meet Them Where They Are

Each persona has a different emotional relationship with friction.
Content MUST acknowledge and design for that relationship:
- Tinkerers get curious when things break — give them the "why."
- Pragmatists get frustrated when things break — give them the fix.
- Product Seekers don't want to know things broke — give them the
  outcome.

Tone, error handling guidance, and troubleshooting depth MUST match
the persona's tolerance, not the author's.

### IV. Practical Over Theoretical

Every concept taught MUST connect to something the reader can do,
appropriate to their persona. No concept exists in the guide purely
as background knowledge. If a reader cannot take an action after
reading a section, that section MUST be revised or removed.

### V. Evolving Capabilities

LLM capabilities are a moving target. Content MUST NOT make permanent
claims about what personas can or cannot achieve. Each persona's
boundary of possibility shifts as models improve. The guide MUST be
structured so that capability claims can be updated independently
without rewriting surrounding content. Date-stamp or version-tag
any capability assertion.

## Persona Definitions

Three primary personas guide all content decisions:

**The Tinkerer** — Technical, curious, builder-minded. Picks up new
tools immediately and runs with them. When something breaks, they
ask "why did that happen?" and dig in. They want depth, control,
and understanding of the system. Most likely to use Claude Code CLI,
CLAUDE.md files, hooks, MCP servers, and advanced configuration.
They are the early adopters.

**The Pragmatist** — May or may not be technical, but values polish
and reliability above exploration. They want things to "just work."
When something breaks, they feel frustration, not curiosity. They
will adopt agentic tools when the experience is smooth and the value
is clear. They need clear setup paths, predictable behavior, and
confidence that the tool won't waste their time.

**The Product Seeker** — Self-identifies as non-technical. They want
a specific outcome: an integration, a small app, a workflow
automated. They see Claude Code as a means to get a free or low-cost
product built. They do not want to learn the tool deeply — they want
the tool to carry them. Content for this persona MUST minimize jargon
and maximize guided, step-by-step flows.

These personas are not mutually exclusive — a person may shift between
them depending on context. But content MUST target one primary persona
per page/section.

## Content Development Standards

- Every guide page MUST include a persona tag at the top indicating
  its primary audience.
- Tutorials MUST be testable: a new reader following the steps MUST
  reach the stated outcome without undocumented prerequisites.
- The universal core checklist MUST be maintained as a single source
  of truth. Persona-specific paths reference it but do not duplicate
  it.
- Capability claims (e.g., "Claude Code can build a full web app
  from a description") MUST include a version or date context so
  they can be updated as models improve.
- Content MUST cover both Claude Code (CLI/IDE) and Claude with
  code capabilities (web), with clear labeling of which product
  each guide applies to.
- Troubleshooting sections MUST exist for Tinkerer and Pragmatist
  paths. Product Seeker paths MUST route errors to guided recovery
  flows rather than technical troubleshooting.

## Governance

This constitution is the highest-authority document for the Agentic
Onboarding Guide project. All content decisions, feature specs, and
implementation plans MUST be consistent with these principles.

**Amendment procedure**: Any principle change MUST be documented with
rationale, reviewed, and result in a version bump. Adding a principle
or materially expanding guidance is a MINOR bump. Removing or
redefining a principle is a MAJOR bump. Wording clarifications are
PATCH bumps.

**Compliance**: Every spec and plan produced by the speckit workflow
MUST pass a constitution check verifying alignment with these
principles before implementation begins.

**Versioning**: MAJOR.MINOR.PATCH semantic versioning.

**Version**: 1.0.0 | **Ratified**: 2026-04-10 | **Last Amended**: 2026-04-10

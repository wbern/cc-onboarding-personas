# Persona: The Builder

**Created**: 2026-04-11
**Status**: Active
**Onboarding path**: `/builder/`

## Identity

- **Display name**: The Builder
- **Tagline**: Curious, hands-on, ready to tinker

## Portrait

The Builder is the person who opens the box before reading the manual. They learn
by doing — installing, breaking, fixing, and iterating until the tool feels like
an extension of their thinking. They don't want a slideshow about what Claude Code
can do; they want a terminal prompt and a first task.

They may be a professional developer shipping production code, a hobbyist building
weekend side-projects, or a technical founder prototyping an MVP. What unites them
is orientation: they face toward the work, not the documentation.

## Jobs to Be Done

| Job | Context | Desired outcome |
|-----|---------|-----------------|
| **Get Claude Code running on my machine** | Just heard about it, wants to try it now | Working install in under 5 minutes, no friction |
| **Build something real immediately** | Has a project idea (or at least a direction) | First meaningful interaction with Claude Code within the onboarding session |
| **Understand what's possible** | Knows it's an AI coding tool, wants to feel the boundaries | Mental model of capabilities and workflow, learned through doing |
| **Integrate into my existing workflow** | Already has a dev setup (editor, terminal, git) | Claude Code fits alongside their tools, not in place of them |

## Key Traits

- **Bias toward action**: Would rather try something and see what happens than
  read about it first. "Show me the command" beats "here's how it works."
- **Comfortable with the terminal**: Not intimidated by a CLI. May even prefer it
  to a GUI. Sees the terminal as a natural workspace.
- **Tinker mentality**: Finds broken things interesting, not frustrating. A failed
  command is a puzzle, not a blocker.
- **Depth-seeking**: Wants control and understanding, not just recipes. Cares about
  *why* something works, but will figure that out by experimenting rather than reading.
- **Impatient with ceremony**: Skips intros, dismisses tooltips, scrolls past
  preamble. Wants the substance immediately.

## Motivations

- **Curiosity**: Genuinely excited about what AI-assisted coding can unlock.
  Wants to see it with their own hands.
- **Velocity**: Wants to move faster — ship more, prototype more, explore more.
  Sees Claude Code as a multiplier.
- **Autonomy**: Prefers self-service. If the onboarding can be done without talking
  to anyone, that's the ideal path.
- **Mastery**: Wants to get *good* at this tool, not just use it once. Investing
  time now to save time later.

## Pain Points

- **Slow onboarding**: If installation takes more than a few minutes, they'll
  context-switch to something else and may not come back.
- **Hand-holding**: Over-explained steps feel patronizing. "Click the button
  labeled 'Next'" is wasted words for this audience.
- **Platform friction**: Being told their OS isn't supported (yet) without a clear
  timeline feels like a dead end.
- **Unclear prerequisites**: Discovering halfway through that they need an account,
  a specific shell, or a dependency they don't have.
- **No payoff**: If the onboarding ends at "you installed it" without a taste of
  what it can do, the experience feels hollow.

## Ideal Onboarding Tone

- **Direct**: Lead with the action, not the explanation. Commands first, context
  if they want it.
- **Respectful of competence**: Assume they know what a terminal is, what `curl`
  does, and how to paste a command. Don't explain the basics.
- **Encouraging without being cheerful**: Confidence-building, not peppy. "You're
  set" is better than "Awesome job! You did it!"
- **Honest about limits**: If something is Mac-only or a feature isn't ready, say
  so plainly. The Builder respects transparency.

## What Success Looks Like

1. **Installed and running**: Claude Code is on their machine, authenticated, and
   responding to prompts — achieved within the onboarding flow.
2. **Mental model formed**: They understand the basic interaction pattern (terminal
   prompt, natural language input, code output) from hands-on experience.
3. **Momentum established**: They leave the onboarding with something they want to
   try next — a project idea, a workflow to explore, a capability to test.
4. **No lingering confusion**: They don't need to Google "how to use Claude Code"
   after finishing the wizard. The onboarding *was* the getting-started guide.

## Anti-Patterns (What Fails This Persona)

- Video tutorials instead of interactive steps
- Requiring account creation before showing any value
- Marketing language where technical language belongs
- Wizard steps that can't be skipped or revisited
- Assuming they'll read a separate "Getting Started" doc after the wizard

## Relationship to Other Personas

The Builder is the first persona. Future personas (e.g., Explorer, Team Lead) may
share some traits but differ in their primary job-to-be-done. The Builder's
onboarding path is optimized for speed-to-first-interaction; other paths may
prioritize different outcomes.

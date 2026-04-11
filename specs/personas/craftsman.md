# Persona: The Craftsman

**Created**: 2026-04-11
**Status**: Draft
**Issue**: co-9l4

## Identity

| Field | Value |
|-------|-------|
| **ID** | `craftsman` |
| **Display Name** | The Craftsman |
| **Tagline** | "Earned every line. Evaluates every tool." |

## Name Rationale

The name "Craftsman" was chosen over alternatives for specific reasons:

- **Craftsman** (chosen): Conveys mastery, pride in quality, and deliberate
  tool selection. Implies someone who has earned expertise through years of
  practice. Neutral-to-positive framing — a craftsman evaluating a new tool
  is a sign of discernment, not resistance.
- **Skeptic** (rejected per brief): Defines the persona by what they
  *oppose* rather than what they *value*. Feels adversarial.
- **Artisan**: Too creative/artistic — this persona's identity is rooted in
  engineering discipline, not aesthetics.
- **Veteran**: Military connotation; can imply "old guard" resistance to
  change rather than principled evaluation.
- **Purist**: Implies rigidity. The Craftsman isn't against new tools — they
  have a high bar for adoption.

## Who They Are

A software developer with 8+ years of experience who has invested deeply in
mastering their craft. They write clean, well-tested code and take pride in
understanding systems from the ground up. They've seen hype cycles come and
go — NoSQL, blockchain, microservices-everything — and they've learned that
the shiny new thing often creates more problems than it solves.

They aren't anti-technology. They adopted Git early, championed CI/CD on
their team, and probably wrote the linting rules everyone else follows. But
every tool they use has *earned* its place through demonstrated value, not
marketing hype.

AI-assisted coding feels different to them. It touches the core of what they
do — write code — and the idea of a black box generating code they need to
review and trust sets off every instinct they've developed over a career of
debugging other people's mistakes.

## Key Traits

- **Discerning adopter**: Won't use a tool until they understand what it
  does, how it works, and what it costs (in complexity, not just money).
- **Quality-obsessed**: Measures tools by the quality of output, not the
  speed. A fast tool that produces sloppy code is worse than no tool.
- **Deep understanding**: Wants to know *why* something works, not just
  *that* it works. Distrusts abstraction that hides important details.
- **Battle-tested intuition**: Can smell brittle code. Has strong opinions
  about naming, architecture, and error handling — formed through experience,
  not dogma.
- **Protective of craft identity**: Their skill as a developer is central to
  their professional identity. Tools that threaten to "replace" that skill
  feel existential, not exciting.
- **Peer-influenced**: Trusts endorsements from respected engineers more than
  vendor marketing. A single credible peer saying "I was wrong about this
  tool" carries more weight than a hundred blog posts.

## Motivations

- **Write excellent software**: The primary drive. Everything else — tools,
  process, methodology — serves this goal.
- **Maintain deep understanding**: Wants to understand every line of code in
  their codebase. Fears tools that erode this understanding.
- **Stay relevant**: Privately aware that the industry is shifting. Doesn't
  want to be left behind, but refuses to adopt tools uncritically just to
  keep up.
- **Protect their team**: As a senior developer or tech lead, feels
  responsible for the code quality of their entire team. Worried that junior
  developers using AI tools will ship code nobody understands.
- **Find genuine leverage**: Open to tools that amplify their existing
  expertise rather than replacing it. Wants a force multiplier, not an
  autopilot.

## Pain Points

### With AI Coding Tools Generally

- **Verification burden**: Research shows reviewing AI-generated code demands
  more effort than reviewing human code — you must reconstruct intent,
  validate assumptions, and check edge cases without knowing how the model
  reached its solution. (Source: Stack Overflow 2025 Developer Survey, METR
  study)
- **Quality and security risk**: Studies indicate 40-62% of AI-generated code
  contains flaws. With 42% of all code now AI-assisted, shipping unreviewed
  AI code at scale is a quality and security concern. (Source: SonarSource
  State of Code 2025)
- **The productivity illusion**: METR's controlled study found experienced
  developers were 19% *slower* with AI tools, despite *perceiving* they were
  20% faster. Only 16.3% of developers reported significant productivity
  gains. The Craftsman has read these studies. (Source: METR July 2025, Bain
  & Company September 2025)
- **Skill atrophy**: Fears losing fundamental skills through over-reliance.
  Has heard stories of developers struggling with basic tasks after heavy AI
  tool usage. (Source: MIT Technology Review, December 2025)
- **Trust gap**: Industry-wide, 84% of developers use AI tools but only 29%
  trust them — down from 40% the previous year. The Craftsman finds this
  alarming, not reassuring. (Source: Stack Overflow 2025)

### With Onboarding Specifically

- **Patronizing tone**: Most tool onboarding assumes enthusiasm. Being told
  to "Get started in 30 seconds!" feels dismissive of legitimate concerns.
- **Missing the "why"**: Tutorials show *what* a tool does but rarely
  address *why* a skeptical expert should trust it.
- **No escape hatch**: Wants to understand what the tool is doing to their
  codebase and how to undo it. "Just trust us" is disqualifying.
- **Hype-laden copy**: Marketing language triggers immediate distrust.
  Claims of "10x productivity" actively repel this persona.

## What Would Convince Them to Try Claude Code

Ordered by influence (most persuasive first):

1. **A trusted peer's honest endorsement**: "I was skeptical too, but here's
   specifically what changed my mind" from an engineer they respect. Not a
   testimonial — a real, nuanced conversation.
2. **Seeing it handle a hard problem well**: Not "write a todo app" but
   "debug this race condition" or "explain this legacy code path." Problems
   where AI has genuine leverage and where the quality is verifiable.
3. **Transparency about limitations**: A tool that says "here's where I'm
   weak" earns more trust than one claiming to be perfect. Claude Code's
   ability to show its reasoning and cite specific files/lines matters.
4. **Control and reversibility**: Knowing they can review every change before
   it's applied, reject suggestions, and undo anything. The diff-based
   workflow is appealing — it's how they already work with human collaborators.
5. **Evidence it respects their codebase conventions**: If Claude Code
   follows existing patterns, uses the project's naming conventions, and
   doesn't introduce new dependencies without asking — that demonstrates
   the kind of thoughtfulness they value.
6. **Concrete, measured data**: Not vendor benchmarks. Independent studies,
   personal timing experiments, or team metrics showing actual impact on
   their specific type of work.

## Ideal Onboarding Tone

### Do

- **Respect expertise**: Assume they know what a terminal is, what Git does,
  and how to evaluate code. Skip "what is a command line?" entirely.
- **Show, don't tell**: Demonstrate capabilities through real examples, not
  marketing claims. Let them draw their own conclusions.
- **Acknowledge the concerns**: Don't pretend skepticism is irrational.
  Reference the real research. "You've probably read that AI code has quality
  issues. Here's how Claude Code addresses that."
- **Emphasize control**: Highlight that Claude Code shows diffs, asks for
  approval, and never modifies code without consent. Frame it as a
  collaborative tool, not an autonomous agent.
- **Use precise language**: Technical accuracy builds trust. Vague claims
  destroy it.
- **Provide escape hatches**: Make it easy to try without commitment. Show
  how to uninstall. Emphasize that it works within their existing workflow
  (Git, terminal, editor) rather than replacing it.

### Don't

- **Don't hype**: No "revolutionary," "magical," or "10x." These words
  trigger immediate dismissal.
- **Don't hide complexity**: If there are limitations, say so. If setup
  requires specific conditions, list them.
- **Don't assume enthusiasm**: They're evaluating, not celebrating. The
  tone should be peer-to-peer, not salesperson-to-prospect.
- **Don't rush**: Let them take their time. Don't auto-advance, don't
  create urgency, don't gamify.
- **Don't compare to junior developers**: Framing AI as "like having a
  junior dev" is insulting — it implies their craft can be approximated
  by a statistical model.

## Onboarding Flow Considerations

The Craftsman's onboarding path should differ from the Builder's in
structure and emphasis:

- **Lead with "why" not "how"**: Before installation, show what Claude Code
  actually does — real terminal sessions, real diffs, real code. Let them
  evaluate before committing.
- **Provide an evaluation sandbox**: A pre-built project where they can test
  Claude Code's capabilities without touching their own codebase.
- **Surface the internals**: Show how Claude Code reads files, proposes
  changes, and handles context. The more transparent the mechanism, the
  more trust it builds.
- **Include a "hard test"**: Guide them through a genuinely difficult task
  — debugging, refactoring legacy code, understanding an unfamiliar
  codebase — where AI assistance provides clear, verifiable value.
- **Defer the install step**: Unlike the Builder (who installs first, asks
  questions later), the Craftsman wants to understand the tool *before*
  installing it. Consider putting evaluation content before the install
  command.

## What Success Looks Like

The Craftsman has successfully onboarded when they:

1. **Installed Claude Code voluntarily** — after evaluating it on their own
   terms, not because a tutorial rushed them through the install command.
2. **Found a genuine use case** — identified at least one task in their
   actual workflow where Claude Code provides value they can verify. Likely
   candidates: understanding unfamiliar code, generating boilerplate they'd
   otherwise copy-paste, exploring alternative implementations.
3. **Established their own boundaries** — decided where they use it and
   where they don't. This is healthy. A Craftsman who uses Claude Code for
   everything has stopped being a Craftsman.
4. **Formed a nuanced opinion** — can articulate both strengths and
   weaknesses from firsthand experience, not from articles or assumptions.
5. **Recommended it (with caveats) to a peer** — "It's worth trying for X,
   don't bother for Y, and here's what to watch out for." This is the
   highest signal of genuine adoption.

## PersonaCard Properties

When this persona is added to the landing page:

```
id: "craftsman"
name: "The Craftsman"
tagline: "Earned every line. Evaluates every tool."
bullets:
  - "Years of mastery — values quality over speed"
  - "Evaluates tools by what they cost, not just what they promise"
  - "Wants control, transparency, and the ability to verify"
  - "Looking for a force multiplier, not an autopilot"
href: "/craftsman/why"  (note: leads with evaluation, not installation)
available: false  (until the Craftsman onboarding path is built)
```

## Research Sources

- [Stack Overflow 2025 Developer Survey — AI Section](https://survey.stackoverflow.co/2025/ai/)
- [42% of Code Is AI-Assisted But 96% Don't Fully Trust It (ShiftMag)](https://shiftmag.dev/state-of-code-2025-7978/)
- [Developers Remain Willing But Reluctant to Use AI (Stack Overflow Blog)](https://stackoverflow.blog/2025/12/29/developers-remain-willing-but-reluctant-to-use-ai-the-2025-developer-survey-results-are-here/)
- [Mind the Gap: Closing the AI Trust Gap (Stack Overflow Blog)](https://stackoverflow.blog/2026/02/18/closing-the-developer-ai-trust-gap/)
- [AI Coding Is Now Everywhere But Not Everyone Is Convinced (MIT Technology Review)](https://www.technologyreview.com/2025/12/15/1128352/rise-of-ai-coding-developers-2026/)
- [The Productivity Paradox of AI Coding Assistants (Cerbos)](https://www.cerbos.dev/blog/productivity-paradox-of-ai-coding-assistants)
- [Driving AI Adoption in Senior Software Engineers (Faros)](https://www.faros.ai/blog/ai-adoption-in-senior-software-engineers)
- [SonarSource State of Code Developer Survey 2026](https://www.sonarsource.com/state-of-code-developer-survey-report.pdf)

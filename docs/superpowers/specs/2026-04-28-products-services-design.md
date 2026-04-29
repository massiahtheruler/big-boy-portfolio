# Products And Services Page Design

## Summary

Add a new routed `Products + Services` experience that sells `Manifest Method` as the flagship offer, positions `Brand Architect` as the primary identity, and gives visitors clear lower-commitment ways to work together without turning the site into a generic freelancer menu.

The page should feel consistent with the current portfolio: dark-first, polished, premium, slightly cinematic, and readable to both recruiters and real clients. The goal is not only to show what services exist. The goal is to move serious visitors toward the higher-trust `Manifest Method` offer while still making smaller offers easy to understand and easier to buy.

## Goals

- Add a clear `Products + Services` path to the portfolio.
- Make `Manifest Method` the star of the show.
- Position the user primarily as a `Brand Architect`.
- Give clients a clear ladder of offers from lighter entry points to deeper partnership.
- Keep pricing transparent enough to reduce friction without boxing scope-variable work into rigid flat pricing.
- Add a light inquiry flow that pre-fills the chosen offer and asks only one or two good questions.

## Non-Goals

- Do not expose the full internal `Manifest Method` playbook step-by-step.
- Do not build payment or checkout yet.
- Do not turn the page into a dense agency pricing grid.
- Do not make the inquiry form long or application-heavy.

## Positioning

### Lead Identity

`Brand Architect`

### Supporting Identity

Use supporting language where useful:

- `Creative Director`
- `Brand Systems Designer`
- `Frontend Engineer` or `Web Design Engineer` only when technical clarity matters

### Core Statement

Use the tone already validated in conversation:

- `From Idea to Identity. Make It Real.`
- `I make your brand look as real as it actually is.`

The page should present the user as a partner, strategist, and builder rather than a generic freelancer for hire.

## Route Structure

Add:

- `/services`

Plan next, but not necessarily in this same implementation pass:

- `/inquire`
- Optional query-string prefill such as `/inquire?offer=manifest-method`

## Entry Points

Add links into the new page from multiple high-value locations:

- Header navigation: `Services`
- Hero action row: `Products + Services`
- Lower-page CTA near the About/value section
- Optional small CTA from any Manifest/Litty-adjacent area if the placement feels natural

## Services Page Architecture

### 1. Hero

The hero should introduce the page as a premium `Products + Services` destination, not a cheap service list.

Content priorities:

- `Manifest`
- `Brand Architect`
- Short, strong positioning copy
- A primary CTA that drives inquiry
- A secondary CTA that points deeper into the offers

The copy should imply depth and system thinking without revealing the whole Manifest framework in detail.

### 2. Flagship Feature

Feature `Manifest Method` first and most prominently.

Purpose:

- Sell the deepest partnership offer
- Make it clear this is more than logo + website work
- Frame it as the full realization lane: strategy, audit, planning, build, rollout, management, hosting, updates, and execution support

Content should describe:

- what kind of client it is for
- what transformation it creates
- what kind of partnership it feels like

Avoid:

- listing every internal step in full
- overly theoretical or mystical language

### 3. Strategy Entry Offer

Place `Initiate Identity` directly under or beside the flagship section.

Purpose:

- lighter strategic entry point
- idea-to-identity planning lane
- clarity, audit, positioning, planning, blueprint, and direction before deeper execution

This should clearly read as the lower-commitment way into the bigger system.

### 4. Offer Grid

Present supporting offers as a clean grid or card set beneath the flagship sections.

Locked offers:

- `Presence Pack`
- `Rebuild + Revitalize`
- `New Growth`
- `Brand Audit`
- `Templates`
- `Consultations`

Offer definitions:

#### Presence Pack

Brand-facing starter bundle.

Examples:

- logo polish
- social direction
- branded templates
- light identity cleanup

Pricing style:

- `Starting at 550+`

#### Rebuild + Revitalize

Existing website or digital presence needs to be reworked better.

Examples:

- site refresh
- structure cleanup
- messaging improvement
- visual redesign of existing presence

Pricing style:

- `Starting at ...`

#### New Growth

From-scratch launch lane.

Examples:

- new site
- new social launch
- new digital presence
- new rollout setup

Pricing style:

- `Starting at 800+`

#### Brand Audit

Lower-friction entry point and lead-in offer.

Examples:

- site + social audit
- first-impression review
- clarity / consistency breakdown

Pricing style:

- `Starting at 150`
- or a clearly framed range for deeper audits

#### Templates

Prebuilt brand/social/digital assets that can later become productized more fully.

Pricing style:

- likely no hard pricing yet unless scope is tightly defined

#### Consultations

Smaller strategic session or planning lane for people who need direction first.

Pricing style:

- `Starting at ...`
- or `Custom quote` if scope is too variable

### 5. Inquiry CTA

End the page with a strong CTA that makes the next step feel easy.

The CTA should reinforce:

- partnership
- clarity
- making the brand real

## Pricing Strategy

Use hybrid pricing across the page.

### Show Pricing Signals

Use these formats:

- `Starting at`
- `Typical range`
- `Custom quote`
- `Investment based on scope`

### Avoid

- hard flat prices for variable work
- zero pricing information across the whole page

### Recommended Pricing Presentation

- `Manifest Method`: `Custom quote` or `Investment based on scope`
- `Initiate Identity`: `Starting at` or `Investment begins at`
- `Presence Pack`: `Starting at 550+`
- `Rebuild + Revitalize`: `Starting at ...`
- `New Growth`: `Starting at 800+`
- `Brand Audit`: `Starting at 150` or range-based depending on complexity

## Inquiry Flow

The inquiry experience should stay intentionally light.

### Form Shape

- selected offer prefilled
- one or two meaningful questions only
- short supporting note telling the visitor what to have ready

### Question Style

Examples:

- `What are you trying to make real right now?`
- `Do you need a refresh, a rebuild, or a new launch?`

### Helper Copy

Example note:

`Have your current site, socials, goals, and rough timeline ready.`

## Homepage Adjustments

Make small supporting homepage updates so the services offering feels integrated.

Recommended:

- add `Brand Architect` somewhere in or near the hero
- add a hero CTA for `Products + Services`
- add a lower CTA near the About/value area
- optionally mention strategy, audits, and brand realization briefly in a value card or supporting copy

These updates should stay light. The homepage should still primarily feel like a portfolio.

## Visual Direction

The services route should inherit the current site language:

- dark-first
- premium glass and polished surfaces
- strong hierarchy
- restrained motion
- bold but readable typography

The page should feel a little more ceremonial than the portfolio pages because it is selling offers, but not so abstract that clients have to decode what is being sold.

## Content Tone

Tone requirements:

- clear
- premium
- slightly branded
- human
- culturally grounded
- not overexplained

Do not:

- sound like a generic agency
- sound like a fake luxury consultant
- sound too mystical to be practical

The right tone is:

`woo-woo enough to feel branded, concrete enough to close`

## Implementation Notes

Likely implementation pieces:

- new `ServicesPage` route/component
- new data source for offers, pricing text, and inquiry metadata
- header update for `Services`
- hero CTA update
- lower-page CTA update
- inquiry page or inquiry-panel route with offer-prefill behavior

The data for offers should be structured rather than hardcoded across multiple components.

## Risks And Safeguards

### Risk: Too Much Theory

If the page explains the entire method in detail, it loses intrigue and becomes heavy.

Safeguard:

- imply the framework
- show major ingredients and outcomes
- keep the full recipe private

### Risk: Too Much Pricing Ambiguity

If everything says `contact for quote`, buyers may bounce early.

Safeguard:

- show pricing signals for defined offers
- reserve full custom pricing for the flagship lane

### Risk: Offer Overlap

If the difference between `Presence Pack`, `Rebuild + Revitalize`, and `New Growth` is blurry, people will not know what to click.

Safeguard:

- each offer needs a one-line use case
- each inquiry state should prefill the offer clearly

## Success Criteria

- Visitors can immediately understand that the user offers more than portfolio projects.
- `Manifest Method` is clearly the premium headline offer.
- Smaller offers feel real and useful, not filler.
- Pricing feels credible and transparent without overcommitting scope.
- Inquiry feels easy enough that serious leads will actually use it.
- The page still feels visually consistent with the rest of the portfolio.

## Current Status

Design approved in chat on 2026-04-28.

Ready for implementation planning after user review.

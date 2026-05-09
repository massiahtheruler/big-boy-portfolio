# Big Boy Portfolio

This portfolio is a React rebuild shaped to feel like a real brand and product presentation. The goal was to create a space that shows visual direction, frontend engineering ability, service positioning, and project storytelling in one system.

I built it to do two jobs at once. It needs to present work in a premium, memorable way and explain clearly what I actually do for clients, teams, and collaborators. That is why the repo includes routed case studies, a services section, an inquiry path, a reusable content layer, and a contact experience that feels built in.

The visual tone is dark, polished, and design-led, but the project is still grounded in structure. The pages, data files, modal behavior, theme handling, and route setup were built so the portfolio can keep growing without turning into a one-off landing page.

## Core Features

- React + Vite portfolio build with React Router and curated local content
- Dedicated routes for home, services, inquiry, and individual project case studies
- Dynamic project route at `projects/:slug` powered by structured case study data
- Premium service positioning around Manifest, brand systems, audits, and rebuild work
- Contact modal plus separate inquiry page for stronger lead flow
- EmailJS integration for direct inquiry delivery
- Theme toggle and body-level theme persistence
- Scroll-triggered reveal behavior and section pacing across the site
- SCSS architecture split into base, layout, component, and page styles
- Lightweight test coverage for services content and route rendering
- Current work and case-study content structured to support ongoing portfolio growth

## Architecture Snapshot

Frontend:
- React 19
- Vite
- React Router 7
- Sass / SCSS

Content and Flow:
- Structured local data for case studies, services, current work, and site copy
- Dynamic route handling for project detail pages
- Global contact modal plus dedicated inquiry route

Experience Layer:
- Theme toggle with body-level theme state
- Scroll reveal behavior through shared hooks and wrappers
- Reusable layout and section components across pages

## What I Built

### 1. Product-Style Portfolio Structure

I did not want this to be a one-page placeholder with vague “about me” copy and some links at the bottom.

That includes:

- a routed application structure
- a reusable layout shell
- clear page separation for portfolio, services, and inquiry
- route-aware scroll reset behavior
- a contact system that can open globally from multiple entry points

The result is a portfolio that feels intentional to move through, not just nice to look at.

### 2. Case Study Routing and Project Storytelling

The work section is built around actual project pages, not only homepage cards.

That includes:

- dynamic project routing with `useParams`
- case study lookup from local data
- live link and code link handling
- project-specific highlights, technical proof, and build story sections
- safe fallback state when a case study slug is not live yet

This matters because a strong portfolio should explain the work, not just tease it.

### 3. Services Layer and Clear Offer Positioning

This repo is also meant to sell the working relationship, not only archive finished projects.

That includes:

- a dedicated `ServicesPage`
- flagship offer framing around `Manifest Method`
- entry and supporting offers in structured content
- inquiry helpers and offer-based query params
- positioning for audits, rebuilds, templates, consultations, and launch work

That made the portfolio stronger as a business tool, not just a showcase.

### 4. Inquiry Flow and Contact Experience

I wanted the contact side to feel built in, not pasted on at the end.

That includes:

- a global contact modal
- body locking while the modal is open
- a dedicated inquiry page
- preselected offer support through URL params
- EmailJS delivery configuration in `src/utils/email.js`

That gives the site a real conversion path while still keeping the front end lean.

### 5. Content-Driven Growth

The portfolio is structured so new work and new service offers can be added without rewriting the app every time.

That includes:

- `src/data/caseStudies.js`
- `src/data/currentWork.js`
- `src/data/servicesContent.js`
- `src/data/siteContent.js`
- `src/data/techBadges.js`

This makes the portfolio easier to maintain and keeps the content closer to the structure it powers.

### 6. Theme, Motion, and Presentation

The visual layer is important here, but it is tied to reusable logic instead of random effects.

That includes:

- theme state through `useTheme`
- body dataset theme switching
- scroll reveal hooks and shared reveal wrappers
- SCSS partials for layout, pages, and components
- consistent dark premium presentation across pages

The goal was a portfolio that feels polished on first look and still makes sense when someone opens the repo.

## Tech Stack

- React 19
- Vite
- React Router 7
- Sass / SCSS
- EmailJS
- Vitest
- Testing Library

## Project Structure

```text
src/
  components/
    home/
    layout/
    services/
    shared/
  data/
  hooks/
  pages/
  styles/
  utils/
```

- `src/pages/` contains the routed page views.
- `src/components/` holds the reusable building blocks for home, layout, services, and shared transitions.
- `src/data/` powers the portfolio content and service positioning.
- `src/hooks/` contains theme and reveal logic.
- `src/styles/` is split into maintainable SCSS partials instead of one oversized stylesheet.

## Running Locally

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173).

Build for production:

```bash
npm run build
```

Run tests:

```bash
npm run test
```

## Current Scope

This portfolio is strongest right now in:

- premium frontend presentation
- portfolio storytelling
- service positioning
- inquiry flow
- expandable content structure

It is not pretending to be:

- a CMS-backed portfolio platform
- a fully automated client intake system
- a backend-heavy app

That is intentional. The value here is in the clarity of the frontend, the structure of the offers, and the way the work is presented.

## Why This Project Stands Out

A lot of portfolios either feel polished but empty, or technically correct with no real point of view. This one is built to hold both sides together.

- real routed structure
- reusable content-driven sections
- clear service framing
- premium interface direction
- practical conversion paths through inquiry and contact

## Closing

Big Boy Portfolio is a build about presentation with substance behind it. It shows the kind of work I want to keep doing more of: premium UI, sharper brand systems, better product structure, and frontend experiences that feel deliberate all the way through.

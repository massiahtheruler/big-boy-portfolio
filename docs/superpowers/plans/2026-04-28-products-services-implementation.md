# Products + Services Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a new `Products + Services` route plus a light inquiry flow that sells `Manifest Method` as the flagship offer, integrates `Brand Architect` positioning into the homepage, and gives visitors clear service entry points throughout the site.

**Architecture:** Keep the implementation inside the current React + Vite + React Router structure. Add structured offer data, a dedicated `ServicesPage`, a light `InquirePage`, and reusable services components so the copy, pricing, and inquiry metadata live in one source of truth. Update the existing header, hero, and lower-page CTA to route into the new services flow without disturbing the current portfolio structure.

**Tech Stack:** React 19, React Router, Vite, Sass, Vitest, React Testing Library, jsdom

---

## File Structure

### Create

- `src/data/servicesContent.js`
  - Source of truth for page hero copy, flagship offers, supporting offers, pricing strings, inquiry hints, and CTA copy.
- `src/pages/ServicesPage.jsx`
  - Main `Products + Services` route.
- `src/pages/InquirePage.jsx`
  - Lightweight inquiry page with selected-offer prefill via query string.
- `src/components/services/ServicesHero.jsx`
  - Top hero for `/services`.
- `src/components/services/FlagshipOfferSection.jsx`
  - `Manifest Method` and `Initiate Identity` sections.
- `src/components/services/OfferGridSection.jsx`
  - Supporting offer cards for `Presence Pack`, `Rebuild + Revitalize`, `New Growth`, `Brand Audit`, `Templates`, and `Consultations`.
- `src/components/services/InquiryForm.jsx`
  - Shared inquiry form UI for `/inquire`.
- `src/styles/pages/_services.scss`
  - Services page styling.
- `src/styles/pages/_inquire.scss`
  - Inquiry page styling.
- `src/__tests__/servicesContent.test.jsx`
  - Data-level tests for required offer metadata.
- `src/__tests__/servicesRoutes.test.jsx`
  - Route-level smoke tests for `/services` and `/inquire`.
- `src/test/setup.js`
  - Testing Library and jest-dom setup.

### Modify

- `package.json`
  - Add `test` script and test dev dependencies.
- `vite.config.js`
  - Add Vitest config.
- `src/App.jsx`
  - Register `/services` and `/inquire` routes.
- `src/components/layout/SiteHeader.jsx`
  - Add `Services` nav item and active state.
- `src/components/home/HeroSection.jsx`
  - Add `Products + Services` CTA and `Brand Architect` language.
- `src/components/home/AboutValueSection.jsx`
  - Add lower CTA toward services/inquiry.
- `src/data/siteContent.js`
  - Add homepage copy updates supporting `Brand Architect` and service positioning.
- `src/styles/main.scss`
  - Import new page partials.
- `src/styles/layout/_header.scss`
  - Support extra nav button width/active behavior if needed.
- `src/styles/pages/_home.scss`
  - Support hero CTA layout and lower CTA block.

---

### Task 1: Add The Services Content Model And Test Harness

**Files:**
- Create: `src/data/servicesContent.js`
- Create: `src/test/setup.js`
- Create: `src/__tests__/servicesContent.test.jsx`
- Modify: `package.json`
- Modify: `vite.config.js`

- [ ] **Step 1: Add test dependencies and script to `package.json`**

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "vitest run"
  },
  "devDependencies": {
    "@testing-library/jest-dom": "^6.6.3",
    "@testing-library/react": "^16.1.0",
    "@vitejs/plugin-react": "^5.0.0",
    "jsdom": "^25.0.1",
    "sass": "^1.83.0",
    "vite": "^7.0.0",
    "vitest": "^2.1.8"
  }
}
```

- [ ] **Step 2: Update `vite.config.js` with a basic Vitest config**

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/test/setup.js"
  }
});
```

- [ ] **Step 3: Create `src/test/setup.js`**

```js
import "@testing-library/jest-dom";
```

- [ ] **Step 4: Write the failing services data test in `src/__tests__/servicesContent.test.jsx`**

```jsx
import { describe, expect, it } from "vitest";
import { servicesContent } from "../data/servicesContent";

describe("servicesContent", () => {
  it("defines the flagship and supporting offer ladder", () => {
    expect(servicesContent.identity.role).toBe("Brand Architect");
    expect(servicesContent.flagship.slug).toBe("manifest-method");
    expect(servicesContent.entryOffer.slug).toBe("initiate-identity");
    expect(
      servicesContent.supportingOffers.map((offer) => offer.slug)
    ).toEqual([
      "presence-pack",
      "rebuild-revitalize",
      "new-growth",
      "brand-audit",
      "templates",
      "consultations"
    ]);
  });
});
```

- [ ] **Step 5: Run test to verify it fails**

Run: `npm test -- src/__tests__/servicesContent.test.jsx`

Expected: FAIL because `servicesContent.js` does not exist yet.

- [ ] **Step 6: Create `src/data/servicesContent.js` with structured offer data**

```js
export const servicesContent = {
  identity: {
    brand: "Manifest",
    role: "Brand Architect",
    support: ["Creative Director", "Brand Systems Designer"],
    eyebrow: "Products + Services",
    statement: "From Idea to Identity. Make It Real.",
    substatement:
      "I make your brand look as real as it actually is."
  },
  flagship: {
    slug: "manifest-method",
    title: "Manifest Method",
    pricing: "Custom quote",
    tagline: "Brand realization in real life.",
    summary:
      "A deeper partnership for turning vision into a real brand system, digital presence, rollout direction, and ongoing execution support.",
    ctaLabel: "Inquire about Manifest Method"
  },
  entryOffer: {
    slug: "initiate-identity",
    title: "Initiate Identity",
    pricing: "Investment begins at ...",
    tagline: "Idea to Identity.",
    summary:
      "A strategic starting point for clarity, positioning, audit thinking, planning, and direction before the deeper buildout."
  },
  supportingOffers: [
    {
      slug: "presence-pack",
      title: "Presence Pack",
      pricing: "Starting at 550+",
      summary:
        "Logo polish, social direction, branded templates, and lighter identity cleanup."
    },
    {
      slug: "rebuild-revitalize",
      title: "Rebuild + Revitalize",
      pricing: "Starting at ...",
      summary:
        "A stronger rebuild lane for an existing site or digital presence that is not matching the real brand."
    },
    {
      slug: "new-growth",
      title: "New Growth",
      pricing: "Starting at 800+",
      summary:
        "A from-scratch launch path for a new site, new presence, and new digital momentum."
    },
    {
      slug: "brand-audit",
      title: "Brand Audit",
      pricing: "Starting at 150",
      summary:
        "A lower-friction review of site, social, consistency, clarity, and where the brand is losing people."
    },
    {
      slug: "templates",
      title: "Templates",
      pricing: "Defined scope pricing available",
      summary:
        "Starter digital products and reusable brand assets for people who need a smaller first step."
    },
    {
      slug: "consultations",
      title: "Consultations",
      pricing: "Starting at ...",
      summary:
        "Focused strategic sessions for people who need direction, rollout help, or a clearer next move."
    }
  ],
  inquiry: {
    helperCopy:
      "Have your current site, socials, goals, and rough timeline ready.",
    questions: [
      "What are you trying to make real right now?",
      "Do you need a refresh, a rebuild, or a new launch?"
    ]
  }
};
```

- [ ] **Step 7: Run the test again**

Run: `npm test -- src/__tests__/servicesContent.test.jsx`

Expected: PASS

- [ ] **Step 8: Commit**

```bash
git add package.json vite.config.js src/test/setup.js src/data/servicesContent.js src/__tests__/servicesContent.test.jsx
git commit -m "feat: add services content model and test setup"
```

### Task 2: Add The New Routes And Route Smoke Tests

**Files:**
- Create: `src/pages/ServicesPage.jsx`
- Create: `src/pages/InquirePage.jsx`
- Create: `src/__tests__/servicesRoutes.test.jsx`
- Modify: `src/App.jsx`

- [ ] **Step 1: Write the failing route smoke test**

```jsx
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App";

describe("services routes", () => {
  it("renders the services page", () => {
    render(
      <MemoryRouter initialEntries={["/services"]}>
        <App />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("heading", { name: /products \+ services/i })
    ).toBeInTheDocument();
  });

  it("renders the inquiry page with the selected offer", () => {
    render(
      <MemoryRouter initialEntries={["/inquire?offer=manifest-method"]}>
        <App />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("heading", { name: /start the conversation/i })
    ).toBeInTheDocument();
    expect(screen.getByDisplayValue("manifest-method")).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- src/__tests__/servicesRoutes.test.jsx`

Expected: FAIL because `/services` and `/inquire` do not exist yet.

- [ ] **Step 3: Add placeholder pages**

`src/pages/ServicesPage.jsx`

```jsx
function ServicesPage() {
  return (
    <section className="services-page">
      <div className="shell">
        <h1>Products + Services</h1>
      </div>
    </section>
  );
}

export default ServicesPage;
```

`src/pages/InquirePage.jsx`

```jsx
import { useSearchParams } from "react-router-dom";

function InquirePage() {
  const [searchParams] = useSearchParams();
  const offer = searchParams.get("offer") ?? "";

  return (
    <section className="inquire-page">
      <div className="shell">
        <h1>Start the conversation</h1>
        <form>
          <input name="offer" defaultValue={offer} aria-label="Selected offer" />
        </form>
      </div>
    </section>
  );
}

export default InquirePage;
```

- [ ] **Step 4: Register the routes in `src/App.jsx`**

```jsx
import ServicesPage from "./pages/ServicesPage";
import InquirePage from "./pages/InquirePage";

// inside <Routes>
<Route path="/services" element={<ServicesPage />} />
<Route path="/inquire" element={<InquirePage />} />
```

- [ ] **Step 5: Run route tests again**

Run: `npm test -- src/__tests__/servicesRoutes.test.jsx`

Expected: PASS

- [ ] **Step 6: Commit**

```bash
git add src/App.jsx src/pages/ServicesPage.jsx src/pages/InquirePage.jsx src/__tests__/servicesRoutes.test.jsx
git commit -m "feat: add services and inquiry routes"
```

### Task 3: Build The Services Page Sections

**Files:**
- Create: `src/components/services/ServicesHero.jsx`
- Create: `src/components/services/FlagshipOfferSection.jsx`
- Create: `src/components/services/OfferGridSection.jsx`
- Modify: `src/pages/ServicesPage.jsx`
- Modify: `src/data/servicesContent.js`

- [ ] **Step 1: Replace the placeholder `ServicesPage` with composed sections**

```jsx
import ServicesHero from "../components/services/ServicesHero";
import FlagshipOfferSection from "../components/services/FlagshipOfferSection";
import OfferGridSection from "../components/services/OfferGridSection";

function ServicesPage() {
  return (
    <section className="services-page">
      <ServicesHero />
      <FlagshipOfferSection />
      <OfferGridSection />
    </section>
  );
}

export default ServicesPage;
```

- [ ] **Step 2: Create `src/components/services/ServicesHero.jsx`**

```jsx
import { Link } from "react-router-dom";
import { servicesContent } from "../../data/servicesContent";
import Reveal from "../shared/Reveal";

function ServicesHero() {
  const { identity, flagship } = servicesContent;

  return (
    <section className="services-hero">
      <div className="shell services-hero__grid">
        <Reveal className="services-hero__copy">
          <p className="section-eyebrow">{identity.eyebrow}</p>
          <span className="services-hero__brand">{identity.brand}</span>
          <h1>{identity.role}</h1>
          <p className="services-hero__statement">{identity.statement}</p>
          <p>{identity.substatement}</p>
          <div className="services-hero__actions">
            <Link to={`/inquire?offer=${flagship.slug}`} className="button button--primary">
              {flagship.ctaLabel}
            </Link>
            <a href="#offers" className="button button--ghost">
              View offers
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default ServicesHero;
```

- [ ] **Step 3: Create `src/components/services/FlagshipOfferSection.jsx`**

```jsx
import { Link } from "react-router-dom";
import { servicesContent } from "../../data/servicesContent";
import Reveal from "../shared/Reveal";

function FlagshipOfferSection() {
  const { flagship, entryOffer } = servicesContent;

  return (
    <section className="services-flagship content-section">
      <div className="shell services-flagship__grid">
        <Reveal className="services-offer services-offer--flagship">
          <p className="section-eyebrow">Flagship offer</p>
          <h2>{flagship.title}</h2>
          <p className="services-offer__tagline">{flagship.tagline}</p>
          <p>{flagship.summary}</p>
          <span className="services-offer__price">{flagship.pricing}</span>
          <Link to={`/inquire?offer=${flagship.slug}`} className="button button--primary">
            Inquire
          </Link>
        </Reveal>

        <Reveal className="services-offer services-offer--entry" delay={90}>
          <p className="section-eyebrow">Strategy entry</p>
          <h2>{entryOffer.title}</h2>
          <p className="services-offer__tagline">{entryOffer.tagline}</p>
          <p>{entryOffer.summary}</p>
          <span className="services-offer__price">{entryOffer.pricing}</span>
          <Link to={`/inquire?offer=${entryOffer.slug}`} className="button button--ghost">
            Start here
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export default FlagshipOfferSection;
```

- [ ] **Step 4: Create `src/components/services/OfferGridSection.jsx`**

```jsx
import { Link } from "react-router-dom";
import { servicesContent } from "../../data/servicesContent";
import Reveal from "../shared/Reveal";

function OfferGridSection() {
  return (
    <section id="offers" className="content-section">
      <div className="shell">
        <Reveal className="section-heading">
          <p className="section-eyebrow">Ways to work together</p>
          <h2>Different entry points. One bigger direction.</h2>
        </Reveal>

        <div className="services-offer-grid">
          {servicesContent.supportingOffers.map((offer, index) => (
            <Reveal key={offer.slug} delay={index * 80} className="services-card">
              <h3>{offer.title}</h3>
              <p>{offer.summary}</p>
              <span className="services-card__price">{offer.pricing}</span>
              <Link to={`/inquire?offer=${offer.slug}`} className="services-card__link">
                Ask about this
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OfferGridSection;
```

- [ ] **Step 5: Run route tests and build**

Run: `npm test -- src/__tests__/servicesRoutes.test.jsx`

Expected: PASS

Run: `npm run build`

Expected: PASS

- [ ] **Step 6: Commit**

```bash
git add src/pages/ServicesPage.jsx src/components/services src/data/servicesContent.js
git commit -m "feat: build services page sections"
```

### Task 4: Build The Light Inquiry Page

**Files:**
- Create: `src/components/services/InquiryForm.jsx`
- Modify: `src/pages/InquirePage.jsx`
- Modify: `src/data/servicesContent.js`

- [ ] **Step 1: Expand `servicesContent.js` with offer labels for inquiry prefill**

```js
export function getOfferBySlug(slug) {
  const allOffers = [
    servicesContent.flagship,
    servicesContent.entryOffer,
    ...servicesContent.supportingOffers
  ];

  return allOffers.find((offer) => offer.slug === slug);
}
```

- [ ] **Step 2: Create `src/components/services/InquiryForm.jsx`**

```jsx
function InquiryForm({ offer, helperCopy, questions }) {
  return (
    <form className="inquiry-form">
      <label>
        Selected offer
        <input name="offer" defaultValue={offer?.title ?? ""} readOnly />
      </label>

      <label>
        {questions[0]}
        <textarea
          name="goal"
          rows="4"
          placeholder="Tell me what you want this to become."
        />
      </label>

      <label>
        {questions[1]}
        <input
          name="scope"
          placeholder="Refresh, rebuild, new launch, or not sure yet"
        />
      </label>

      <p className="inquiry-form__helper">{helperCopy}</p>

      <button type="button" className="button button--primary">
        Contact to continue
      </button>
    </form>
  );
}

export default InquiryForm;
```

- [ ] **Step 3: Replace the placeholder `InquirePage.jsx`**

```jsx
import { useSearchParams } from "react-router-dom";
import { getOfferBySlug, servicesContent } from "../data/servicesContent";
import InquiryForm from "../components/services/InquiryForm";

function InquirePage() {
  const [searchParams] = useSearchParams();
  const slug = searchParams.get("offer") ?? "manifest-method";
  const offer = getOfferBySlug(slug);

  return (
    <section className="inquire-page">
      <div className="shell inquire-page__grid">
        <div className="inquire-page__intro">
          <p className="section-eyebrow">Inquiry</p>
          <h1>Start the conversation</h1>
          <p>
            Picked offer: <strong>{offer?.title ?? "Manifest Method"}</strong>
          </p>
        </div>

        <InquiryForm
          offer={offer}
          helperCopy={servicesContent.inquiry.helperCopy}
          questions={servicesContent.inquiry.questions}
        />
      </div>
    </section>
  );
}

export default InquirePage;
```

- [ ] **Step 4: Run route tests and build**

Run: `npm test -- src/__tests__/servicesRoutes.test.jsx`

Expected: PASS

Run: `npm run build`

Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/components/services/InquiryForm.jsx src/pages/InquirePage.jsx src/data/servicesContent.js
git commit -m "feat: add lightweight inquiry flow"
```

### Task 5: Wire Services Entry Points Into Existing Pages

**Files:**
- Modify: `src/components/layout/SiteHeader.jsx`
- Modify: `src/components/home/HeroSection.jsx`
- Modify: `src/components/home/AboutValueSection.jsx`
- Modify: `src/data/siteContent.js`

- [ ] **Step 1: Add the `Services` nav item to `SiteHeader.jsx`**

```jsx
{
  label: "Services",
  to: "/services",
  isActive:
    location.pathname === "/services" ||
    location.pathname === "/inquire"
}
```

- [ ] **Step 2: Add the hero CTA and `Brand Architect` language**

```jsx
<p className="section-eyebrow">Brand Architect · Frontend Engineer</p>

<div className="hero-section__actions">
  <Link to="/#featured-work" className="button button--primary">
    View work
  </Link>
  <Link to="/services" className="button button--ghost">
    Products + Services
  </Link>
  <button type="button" className="button button--ghost" onClick={onOpenContact}>
    Open contact
  </button>
</div>
```

- [ ] **Step 3: Add a lower CTA block in `AboutValueSection.jsx`**

```jsx
<Reveal className="about-services-cta" delay={220}>
  <p className="section-eyebrow">Need more than a portfolio piece?</p>
  <h3>Strategy, audits, and brand realization work live here too.</h3>
  <Link to="/services" className="button button--primary">
    Explore services
  </Link>
</Reveal>
```

- [ ] **Step 4: Update `siteContent.js` for the hero/value messaging**

```js
title: "Brand Architect building premium product experiences",
intro:
  "I build dark, polished interfaces and clearer brand systems that feel memorable on first look and still hold up when the product logic gets real."
```

- [ ] **Step 5: Run route tests and build**

Run: `npm test -- src/__tests__/servicesRoutes.test.jsx`

Expected: PASS

Run: `npm run build`

Expected: PASS

- [ ] **Step 6: Commit**

```bash
git add src/components/layout/SiteHeader.jsx src/components/home/HeroSection.jsx src/components/home/AboutValueSection.jsx src/data/siteContent.js
git commit -m "feat: add services entry points across the site"
```

### Task 6: Add Services And Inquiry Styling

**Files:**
- Create: `src/styles/pages/_services.scss`
- Create: `src/styles/pages/_inquire.scss`
- Modify: `src/styles/main.scss`
- Modify: `src/styles/pages/_home.scss`
- Modify: `src/styles/layout/_header.scss`

- [ ] **Step 1: Import the new page partials in `src/styles/main.scss`**

```scss
@use "./pages/home";
@use "./pages/project";
@use "./pages/services";
@use "./pages/inquire";
```

- [ ] **Step 2: Add the services page styling in `src/styles/pages/_services.scss`**

```scss
.services-page {
  padding: 3rem 0 6rem;
}

.services-hero__grid,
.services-flagship__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;
}

.services-offer,
.services-card {
  padding: 1.75rem;
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  background: var(--bg-elevated);
  box-shadow: var(--shadow);
}

.services-offer-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.4rem;
}
```

- [ ] **Step 3: Add inquiry page styling in `src/styles/pages/_inquire.scss`**

```scss
.inquire-page {
  padding: 3rem 0 6rem;
}

.inquire-page__grid {
  display: grid;
  grid-template-columns: 0.95fr 1.05fr;
  gap: 1.5rem;
}

.inquiry-form {
  display: grid;
  gap: 1rem;
  padding: 1.75rem;
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  background: var(--bg-elevated);
  box-shadow: var(--shadow);
}
```

- [ ] **Step 4: Add hero/about support styles**

```scss
.hero-section__actions {
  align-items: center;
}

.about-services-cta {
  display: grid;
  gap: 1rem;
  margin-top: 2rem;
}
```

- [ ] **Step 5: Run tests and build**

Run: `npm test`

Expected: PASS

Run: `npm run build`

Expected: PASS

- [ ] **Step 6: Commit**

```bash
git add src/styles/main.scss src/styles/pages/_services.scss src/styles/pages/_inquire.scss src/styles/pages/_home.scss src/styles/layout/_header.scss
git commit -m "feat: style services and inquiry pages"
```

### Task 7: Manual QA And Content Tightening

**Files:**
- Modify: `src/data/servicesContent.js`
- Modify: `src/pages/ServicesPage.jsx`
- Modify: `src/pages/InquirePage.jsx`

- [ ] **Step 1: Run the full automated checks**

Run: `npm test`

Expected: PASS

Run: `npm run build`

Expected: PASS

- [ ] **Step 2: Manual route checks**

Run: `npm run dev`

Then verify:

- `/services` loads and shows `Brand Architect`
- `Manifest Method` appears first
- `Initiate Identity` appears as the lighter strategy offer
- all support offers render with pricing language
- clicking any offer card opens `/inquire?offer=<slug>`
- `/inquire` pre-fills the selected offer title
- hero and about CTAs route into services

- [ ] **Step 3: Tighten any repeated copy after manual review**

Target areas:

- `src/data/servicesContent.js`
- `src/pages/ServicesPage.jsx`
- `src/pages/InquirePage.jsx`

Keep:

- premium
- clear
- slightly branded

Avoid:

- repeating the same promise in every card
- revealing the full internal method

- [ ] **Step 4: Commit**

```bash
git add src/data/servicesContent.js src/pages/ServicesPage.jsx src/pages/InquirePage.jsx
git commit -m "chore: verify services flow and tighten copy"
```

---

## Self-Review

### Spec Coverage

- `/services` route: covered in Tasks 2 and 3
- `Manifest Method` flagship emphasis: covered in Task 3
- `Initiate Identity` strategy lane: covered in Task 3
- supporting offers and pricing ladder: covered in Tasks 1 and 3
- light inquiry flow: covered in Task 4
- header/hero/lower CTA entry points: covered in Task 5
- styling and page consistency: covered in Task 6

### Placeholder Scan

Known intentional placeholders that must be filled during implementation review:

- `Initiate Identity` exact starting price
- `Rebuild + Revitalize` exact starting price
- `Consultations` exact starting price

These are content placeholders, not implementation placeholders. Fill them before final content freeze.

### Type Consistency

- Offer selection is consistently keyed by `slug`
- Inquiry query string uses `offer`
- Shared content source is `servicesContent`
- Lookup helper is `getOfferBySlug`


const experience = [
  {
    title: "Frontend Engineer & Digital Brand Systems Lead",
    date: "Mar 2025 – Present",
    org: "Litty Co. — Remote, Contract",
    bullets: [
      "Leading frontend development and digital identity systems across a multi-brand ecosystem spanning ecommerce, service, and lifestyle-focused brands.",
      "Building and maintaining responsive web experiences, component systems, branding assets, and content infrastructure across multiple concurrent projects.",
      "Owning end-to-end implementation across UI architecture, brand consistency, site performance, and digital presence.",
      "Working directly with ownership in an ongoing contract capacity, covering both technical execution and digital positioning."
    ]
  },
  {
    title: "Operations Manager & Contract Partner",
    date: "2022 – 2025",
    org: "JJ's Pro Service — NJ / Remote",
    bullets: [
      "Managed daily operations, client relationships, and field coordination across active service contracts.",
      "Expanded into brand marketing, business development, and digital presence work as the company scaled.",
      "Transitioned into frontend development while applying operational and customer-behavior experience to product and UX decisions."
    ]
  },
  {
    title: "Solar Sales Consultant",
    date: "2016 – 2022",
    org: "Momentum Solar · Solar Xchange — NJ / FL",
    bullets: [
      "Handled full consultative residential solar sales cycles across competitive NJ and FL markets.",
      "Built strong instincts for persuasion, objection handling, and reading behavior in high-volume client environments."
    ]
  },
  {
    title: "Branch Manager",
    date: "2014 – 2016",
    org: "Penske Truck Leasing — Passaic, NJ",
    bullets: [
      "Managed branch operations including team oversight, customer service, fleet coordination, and account management."
    ]
  }
];

const projects = [
  {
    title: "GoCart",
    subtitle: "Full-Stack E-Commerce Platform",
    live: "https://gocart-beta-one.vercel.app",
    code: "https://github.com/massiahtheruler/gocart",
    stack: "Next.js · React · TypeScript · Tailwind CSS · Redux · Prisma · PostgreSQL · Stripe",
    bullets: [
      "Built a multi-role ecommerce platform with customer, seller, and admin behavior inside one product system.",
      "Implemented checkout, coupon flows, dashboard logic, order handling, and AI-assisted listing support.",
      "Balanced dense product behavior with a polished storefront and custom premium UI direction."
    ]
  },
  {
    title: "Glitter",
    subtitle: "Original Social Product",
    live: "https://glitter-theta.vercel.app",
    code: "https://github.com/massiahtheruler/glitter",
    stack: "Next.js · React · TypeScript · Tailwind CSS · Prisma · MongoDB · NextAuth",
    bullets: [
      "Built a branded social platform with dynamic profiles, messaging, notifications, and account-aware UI.",
      "Added product-specific extensions like Brok AI chat and Dee-EM messaging while keeping the app cohesive.",
      "Pushed a tutorial-style foundation into a more original product with stronger identity and cleaner interaction flow."
    ]
  },
  {
    title: "Big Boy Portfolio",
    subtitle: "Portfolio Product System",
    live: "https://big-boy-portfolio.vercel.app",
    code: "https://github.com/massiahtheruler/big-boy-portfolio",
    stack: "React · Vite · React Router · Sass · EmailJS · Vitest",
    bullets: [
      "Built a routed portfolio system with case studies, services, inquiry flow, and contact behavior integrated into one product shell.",
      "Structured the site around reusable local content, cleaner project framing, and premium frontend presentation."
    ]
  },
  {
    title: "Netflix Clone",
    subtitle: "Streaming UI & Interaction Systems",
    live: "https://netflix-clone-delta-indol.vercel.app/login",
    code: "https://github.com/massiahtheruler/netflix-clone",
    stack: "React · Vite · Firebase Auth · Firestore · TMDB API · Sass",
    bullets: [
      "Recreated a recognizable streaming product experience with auth gating, cinematic autoplay behavior, and TMDB-powered title rails.",
      "Built motion, timing, and player-state coordination directly with React state, CSS, timers, masks, and browser APIs."
    ]
  }
];

const skills = [
  {
    label: "Frontend",
    items: "React, Next.js, TypeScript, JavaScript, Tailwind CSS, Sass, Redux, Vite"
  },
  {
    label: "Backend / Data",
    items: "Node.js, Prisma, MongoDB, PostgreSQL (Neon), Firebase, NextAuth, Clerk, REST APIs"
  },
  {
    label: "Tools",
    items: "Git, GitHub, Vercel, Stripe, Figma, Notion, VS Code"
  }
];

function ResumePage({ onOpenContact }) {
  return (
    <section className="resume-page">
      <div className="shell resume-page__grid">
        <div className="resume-page__hero">
          <p className="section-eyebrow">Resume</p>
          <h1>Frontend Engineer with product instincts and brand systems depth.</h1>
          <p className="resume-page__lede">
            This page keeps the resume readable inside the portfolio while the PDF stays
            ready for recruiters, clients, and hiring managers who want the standard format.
          </p>

          <div className="resume-page__actions">
            <a
              href="/docs/Justin-Henry-Frontend-Engineer.pdf"
              className="button button--primary"
              target="_blank"
              rel="noreferrer"
            >
              PDF
              <span>Open PDF</span>
            </a>
            <a
              href="/docs/Justin-Henry-Frontend-Engineer.pdf"
              className="button button--ghost"
              download="Justin-Henry-Frontend-Engineer.pdf"
            >
              DL
              <span>Download PDF</span>
            </a>
            <button type="button" className="button button--ghost" onClick={onOpenContact}>
              Contact
            </button>
          </div>

          <div className="resume-page__meta">
            <span>Clifton, NJ</span>
            <a href="mailto:justin.henry0024@gmail.com" target="_blank" rel="noreferrer">
              justin.henry0024@gmail.com
            </a>
            <a
              href="https://github.com/massiahtheruler"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/justin-frontend/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="resume-page__summary resume-card">
          <p className="section-eyebrow">Summary</p>
          <p>
            Frontend-focused developer building polished, interaction-driven web products
            with React, Next.js, TypeScript, and modern frontend tooling. Background in
            sales, operations, and business development informs a product-oriented
            approach to UI systems, UX flow, and customer-facing experiences.
          </p>
        </div>

        <div className="resume-page__skills resume-card">
          <p className="section-eyebrow">Skills</p>
          <div className="resume-skill-grid">
            {skills.map((group) => (
              <article key={group.label} className="resume-skill-group">
                <h2>{group.label}</h2>
                <p>{group.items}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="resume-page__experience resume-card">
          <p className="section-eyebrow">Experience</p>
          <div className="resume-entry-list">
            {experience.map((entry) => (
              <article key={`${entry.title}-${entry.date}`} className="resume-entry">
                <div className="resume-entry__header">
                  <div>
                    <h2>{entry.title}</h2>
                    <p className="resume-entry__org">{entry.org}</p>
                  </div>
                  <span className="resume-entry__date">{entry.date}</span>
                </div>
                <ul className="detail-list">
                  {entry.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <div className="resume-page__projects resume-card">
          <p className="section-eyebrow">Selected Projects</p>
          <div className="resume-entry-list">
            {projects.map((project) => (
              <article key={project.title} className="resume-entry">
                <div className="resume-entry__header">
                  <div>
                    <h2>
                      {project.title}
                      <span className="resume-entry__subtitle"> — {project.subtitle}</span>
                    </h2>
                    <p className="resume-entry__stack">{project.stack}</p>
                  </div>
                  <div className="resume-entry__links">
                    <a href={project.live} target="_blank" rel="noreferrer">
                      Live
                    </a>
                    <a href={project.code} target="_blank" rel="noreferrer">
                      Code
                    </a>
                  </div>
                </div>
                <ul className="detail-list">
                  {project.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <div className="resume-page__education resume-card">
          <p className="section-eyebrow">Education</p>
          <div className="resume-entry-list">
            <article className="resume-entry">
              <div className="resume-entry__header">
                <div>
                  <h2>Frontend Simplified</h2>
                  <p className="resume-entry__org">Web Engineering Program</p>
                </div>
                <span className="resume-entry__date">2025</span>
              </div>
              <p>
                12-week intensive covering HTML, CSS, JavaScript, React, Node.js, and
                full-stack fundamentals with real project work and job placement support.
              </p>
            </article>

            <article className="resume-entry">
              <div className="resume-entry__header">
                <div>
                  <h2>Clifton High School</h2>
                  <p className="resume-entry__org">Clifton, NJ</p>
                </div>
                <span className="resume-entry__date">2011</span>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResumePage;

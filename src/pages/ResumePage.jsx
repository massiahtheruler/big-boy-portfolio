import { siteContent } from "../data/siteContent";
import { getResumeProjects } from "../data/projects";

const experience = [
  {
    title: "Frontend Engineer & Digital Brand Systems Lead",
    date: "Mar 2025 – Present",
    org: "Litty Co. — Remote, Contract",
    bullets: [
      "Leading frontend development and digital identity systems across a multi-brand ecosystem spanning ecommerce, service, and lifestyle-focused brands.",
      "Building responsive web experiences, component systems, branded content structures, and reusable digital assets across multiple active projects.",
      "Owning implementation across UI architecture, brand consistency, frontend performance, and customer-facing digital presence.",
      "Working directly with ownership as a contract partner, combining technical execution, visual systems, and strategic positioning.",
    ],
  },
  {
    title: "Operations Manager & Contract Partner",
    date: "2022 – 2025",
    org: "JJ's Pro Service — NJ / Remote",
    bullets: [
      "Managed daily operations, client relationships, scheduling, field coordination, and service delivery across active contracts.",
      "Expanded into brand marketing, business development, and digital presence as the company grew.",
      "Applied operational and customer-behavior experience directly to frontend, UX, and product decisions.",
    ],
  },
  {
    title: "Solar Sales Consultant",
    date: "2016 – 2022",
    org: "Momentum Solar · Solar Xchange — NJ / FL",
    bullets: [
      "Handled full consultative residential solar sales cycles across competitive NJ and FL markets.",
      "Built strong instincts for persuasion, objection handling, trust-building, and reading user behavior in high-volume client environments.",
    ],
  },
  {
    title: "Branch Manager",
    date: "2014 – 2016",
    org: "Penske Truck Leasing — Passaic, NJ",
    bullets: [
      "Managed branch operations across team oversight, customer service, fleet coordination, account management, and daily execution.",
    ],
  },
];

const skills = [
  {
    label: "Frontend",
    items:
      "React, Next.js, TypeScript, JavaScript, Tailwind CSS, Sass, Redux, Vite",
  },
  {
    label: "Backend / Data",
    items:
      "Node.js, Prisma, MongoDB, PostgreSQL (Neon), Firebase, NextAuth, Clerk, REST APIs",
  },
  {
    label: "Tools",
    items: "Git, GitHub, Vercel, Stripe, Figma, Notion, VS Code",
  },
];

function ResumePage({ onOpenContact }) {
  const projects = getResumeProjects();
  const certifications = siteContent.certifications;

  return (
    <section className="resume-page">
      <div className="shell resume-page__grid">
        <div className="resume-page__hero">
          <p className="section-eyebrow">Resumé</p>

          <h1>Frontend Engineer. Product Builder. Brand Architect.</h1>

          <p className="resume-page__lede">
            A web-friendly version of my resumé, built to show the experience
            behind the PDF: frontend systems, shipped projects, client-facing
            work, and the business context that shapes how I build.
          </p>

          <div className="resume-page__actions">
            <a
              href={siteContent.resumePdfPath}
              className="button button--primary"
              target="_blank"
              rel="noreferrer"
            >
              PDF
              <span>Open PDF</span>
            </a>
            <a
              href={siteContent.resumePdfPath}
              className="button button--ghost"
              download="Justin-Henry-Frontend-Engineer.pdf"
            >
              DL
              <span>Download PDF</span>
            </a>
            <button
              type="button"
              className="button button--ghost"
              onClick={onOpenContact}
            >
              Contact
            </button>
          </div>

          <div className="resume-page__meta">
            <span>Clifton, NJ</span>
            <a href={siteContent.phoneHref}>{siteContent.phoneDisplay}</a>
            <a
              href={`mailto:${siteContent.email}`}
              target="_blank"
              rel="noreferrer"
            >
              {siteContent.email}
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
            Frontend engineer with a background in sales, operations, and brand
            development. I build products that balance frontend execution,
            interaction quality, and business context, bringing a broader
            perspective to how digital experiences are designed and shipped.
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
              <article
                key={`${entry.title}-${entry.date}`}
                className="resume-entry"
              >
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
                      <span className="resume-entry__subtitle">
                        {" "}
                        — {project.subtitle}
                      </span>
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
                <span className="resume-entry__date">2025 </span>
              </div>
              <p>
                12-week intensive covering HTML, CSS, JavaScript, React,
                Node.js, and full-stack fundamentals with real project work and
                job placement support.
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

        <div className="resume-page__certifications resume-card">
          <p className="section-eyebrow">Certifications</p>
          <div className="resume-entry-list">
            {certifications.map((certification) => (
              <article key={certification.title} className="resume-entry">
                <div className="resume-entry__header">
                  <div>
                    <h2>
                      {certification.title}, {certification.issuer} (
                      {certification.year})
                    </h2>
                    <a
                      className="resume-entry__credential"
                      href={certification.credentialPath}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Open certificate
                    </a>
                  </div>
                </div>
                <ul className="detail-list">
                  {certification.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResumePage;

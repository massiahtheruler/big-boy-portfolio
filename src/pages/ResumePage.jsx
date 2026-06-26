import { siteContent } from "../data/siteContent";
import { getResumeProjects } from "../data/projects";

const currentExperience = [
  {
    title: "Founder & Frontend Engineer",
    date: "Mar 2025 - Present",
    org: "Manifest - New Jersey / NYC Metro",
    links: [
      { label: "Manifest", href: "https://manifest-gamma-one.vercel.app/" },
      { label: "Litty Co.", href: "https://litty-hub.vercel.app/" },
      { label: "Great Wall", href: "https://great-wall-omega.vercel.app/" },
    ],
    bullets: [
      "Founded Manifest, a brand identity and frontend consultancy specializing in responsive web applications, interaction systems, and conversion-focused digital experiences.",
      "Partner with businesses to translate strategy into polished digital products through frontend architecture, UI implementation, performance optimization, and design systems.",
      "Current client work includes Litty Co., where I lead frontend development across multiple brands and digital initiatives.",
      "Current engagements include Great Wall, a trust-driven landing experience featuring responsive layouts, motion systems, SVG/3D interactions, a 3D model configuration estimator, and conversion-focused user journeys.",
    ],
  },
];

const professionalFrontendExperience = [
  {
    title: "Skinstric - Frontend Engineering Assignment",
    date: "Next.js / GSAP",
    bullets: [
      "Built production-ready frontend features inside an existing Next.js application, converting provided designs into responsive interfaces with GSAP animation and clean implementation patterns.",
      "Delivered a two-week assignment in four days while preserving existing project structure, visual direction, and responsive behavior.",
    ],
  },
  {
    title: "Summarist - Subscription Product Internship",
    date: "Next.js / Stripe / Firebase",
    links: [
      { label: "Live", href: "https://summarist-rust.vercel.app/" },
      { label: "Code", href: "https://github.com/massiahtheruler/summarist" },
    ],
    bullets: [
      "Owned auth, Stripe checkout, responsive UI, audio player behavior, premium gating, saved books, settings, and search inside an existing production-style Next.js codebase.",
    ],
  },
  {
    title: "Ultraverse NFT Marketplace - Frontend Internship",
    date: "React / API UI",
    links: [
      { label: "Live", href: "https://internship-flax-five.vercel.app/" },
      {
        label: "Code",
        href: "https://github.com/massiahtheruler/justin-internship",
      },
    ],
    bullets: [
      "Implemented React marketplace features in an existing application, including dynamic routing, API-driven item/detail pages, loading states, creator views, and UI consistency across product surfaces.",
    ],
  },
];

const businessBackground = [
  {
    title: "Operations, Sales, and Customer-Facing Leadership",
    date: "2014 - 2025",
    org: "JJ's Pro Service / Momentum Solar / Solar Xchange / Penske",
    bullets: [
      "Managed operations, client relationships, sales cycles, scheduling, account support, and service delivery, building practical instincts for trust, user behavior, objections, and conversion-focused UX.",
    ],
  },
];

const skills = [
  {
    label: "Frontend",
    items:
      "React, Next.js, TypeScript, JavaScript, HTML, CSS, Tailwind, SCSS, Redux, Framer Motion",
  },
  {
    label: "Backend",
    items:
      "Node, Prisma, MongoDB, PostgreSQL, Firebase, REST APIs, Authentication",
  },
  {
    label: "Tools",
    items: "Git, GitHub, Vercel, Figma, VS Code, Stripe, Postman",
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

          <h1>Founder & Frontend Engineer. Manifest. Digital Experience.</h1>

          <p className="resume-page__lede">
            A web-friendly version of my resume, built to show the experience
            behind the PDF: Manifest, client-facing frontend systems, polished
            UI implementation, shipped products, and the business context that
            shapes how I build.
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
            Frontend engineer and founder of Manifest, a brand identity and
            digital experience consultancy focused on responsive web
            applications, interaction systems, and conversion-focused frontend
            experiences. I translate strategy into polished UI, frontend
            architecture, performance-minded implementation, and digital systems
            that make businesses easier to trust and remember. My background in
            sales, operations, and branding sharpens my instincts for user
            behavior, credibility, and conversion.
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
          <p className="section-eyebrow">Current Experience</p>
          <div className="resume-entry-list">
            {currentExperience.map((entry) => (
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
                {entry.links && (
                  <div className="resume-entry__links">
                    {entry.links.map((link) => (
                      <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>

        <div className="resume-page__professional resume-card">
          <p className="section-eyebrow">Professional Frontend Experience</p>
          <div className="resume-entry-list">
            {professionalFrontendExperience.map((entry) => (
              <article
                key={`${entry.title}-${entry.date}`}
                className="resume-entry"
              >
                <div className="resume-entry__header">
                  <div>
                    <h2>{entry.title}</h2>
                  </div>
                  <span className="resume-entry__date">{entry.date}</span>
                </div>
                {entry.links && (
                  <div className="resume-entry__links resume-entry__links--inline">
                    {entry.links.map((link) => (
                      <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
                <ul className="detail-list">
                  {entry.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <div className="resume-page__business resume-card">
          <p className="section-eyebrow">Business Background</p>
          <div className="resume-entry-list">
            {businessBackground.map((entry) => (
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
          <p className="section-eyebrow">Independent Products</p>
          <div className="resume-entry-list">
            {projects.map((project) => (
              <article key={project.title} className="resume-entry">
                <div className="resume-entry__header">
                  <div>
                    <h2>
                      {project.title}
                      <span className="resume-entry__subtitle">
                        {" "}
                        - {project.subtitle}
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

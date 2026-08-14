import { siteContent } from "../data/siteContent";
import { getResumeProjects } from "../data/projects";

const manifestExperience = [
  {
    title: "Founder & Frontend Engineer",
    date: "March 2025 - Present",
    org: "Manifest · Independent Digital Experience Practice",
    links: [{ label: "Visit Manifest", href: "https://manifest-gamma-one.vercel.app/" }],
    bullets: [
      "Founded an independent digital experience practice helping businesses turn fragmented brands and online touchpoints into cohesive systems across identity, responsive websites, content direction, social presence, and customer journeys.",
      "Built Manifest's client-facing site and service framework to connect brand strategy, frontend execution, service selection, and qualified inquiry within one polished experience.",
    ],
  },
];

const littyExperience = [
  {
    title: "Brand & Digital Experience Partner",
    date: "Active Client Engagement",
    org: "Litty Co.",
    links: [{ label: "View Litty Co.", href: "https://litty-hub.vercel.app/" }],
    bullets: [
      "Partner across an evolving multi-brand ecosystem, creating a shared digital foundation while helping connected businesses maintain distinct identities, positioning, and customer-facing experiences.",
      "Engagement scope spans visual identity, responsive websites, frontend systems, reusable social content direction, and rollout planning as Litty and its sub-brands continue to develop.",
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
    label: "Frontend Engineering",
    items: [
      "React, Next.js, TypeScript",
      "JavaScript, HTML, CSS",
      "Tailwind, SCSS, Redux, Framer Motion",
    ],
  },
  {
    label: "Product & Brand",
    items: [
      "Responsive UI, accessibility",
      "Interaction and design systems",
      "Visual identity, content, conversion UX",
    ],
  },
  {
    label: "Backend & Tools",
    items: [
      "Node.js, Prisma, PostgreSQL",
      "MongoDB, Firebase, REST APIs",
      "Stripe, GitHub, Vercel, Figma",
    ],
  },
];

function ExperienceCard({ eyebrow, entries, className }) {
  return (
    <div className={`${className} resume-card`}>
      <p className="section-eyebrow">{eyebrow}</p>
      <div className="resume-entry-list">
        {entries.map((entry) => (
          <article key={`${entry.title}-${entry.date}`} className="resume-entry">
            <div className="resume-entry__header">
              <div>
                <h2>{entry.title}</h2>
                {entry.org && <p className="resume-entry__org">{entry.org}</p>}
              </div>
              <span className="resume-entry__date">{entry.date}</span>
            </div>
            <ul className="detail-list">
              {entry.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
            </ul>
            {entry.links && (
              <div className="resume-entry__links resume-entry__links--inline">
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
  );
}

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
            Frontend engineer and founder of Manifest, building responsive
            digital products and complete brand experiences across identity,
            websites, interaction systems, content structure, and conversion
            journeys. My customer-focused background in operations and sales
            helps me translate business context into interfaces people can
            understand, trust, and use.
          </p>
        </div>

        <div className="resume-page__skills resume-card">
          <p className="section-eyebrow">Skills</p>
          <div className="resume-skill-grid">
            {skills.map((group) => (
              <article key={group.label} className="resume-skill-group">
                <h2>{group.label}</h2>
                {group.items.map((item) => <p key={item}>{item}</p>)}
              </article>
            ))}
          </div>
        </div>

        <ExperienceCard eyebrow="Manifest" entries={manifestExperience} className="resume-page__experience" />

        <ExperienceCard eyebrow="Litty Co." entries={littyExperience} className="resume-page__litty" />

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

        <div className="resume-page__projects resume-card">
          <p className="section-eyebrow">Selected Client & Product Work</p>
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
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noreferrer">
                        Live
                      </a>
                    )}
                    {project.code && (
                      <a href={project.code} target="_blank" rel="noreferrer">
                        Code
                      </a>
                    )}
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

        <div className="resume-page__business resume-card">
          <p className="section-eyebrow">Business Background</p>
          <div className="resume-entry-list">
            {businessBackground.map((entry) => (
              <article key={`${entry.title}-${entry.date}`} className="resume-entry">
                <div className="resume-entry__header">
                  <div>
                    <h2>{entry.title}</h2>
                    <p className="resume-entry__org">{entry.org}</p>
                  </div>
                  <span className="resume-entry__date">{entry.date}</span>
                </div>
                <ul className="detail-list">
                  {entry.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <div className="resume-page__education resume-card">
          <p className="section-eyebrow">Education & Certification</p>
          <div className="resume-entry-list">
            <article className="resume-entry">
              <div className="resume-entry__header">
                <div>
                  <h2>Frontend Simplified / FES Institute</h2>
                  <p className="resume-entry__org">
                    Web Engineering Program and Frontend Development Bootcamp Certificate
                  </p>
                </div>
                <span className="resume-entry__date">2025 - 2026</span>
              </div>
              <p>
                Practical frontend training covering HTML, CSS, JavaScript,
                React, Next.js, TypeScript, Redux, Node.js, and internship-style
                project work.
              </p>
              <a
                className="resume-entry__credential"
                href={certifications[0].credentialPath}
                target="_blank"
                rel="noreferrer"
              >
                Open certificate
              </a>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResumePage;

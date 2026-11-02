import { siteContent } from "../data/siteContent";
import { getResumeProjects } from "../data/projects";

const professionalExperience = [
  {
    title: "Founder & Frontend Engineer",
    date: "March 2025 - Present",
    org: "Manifest · Independent Practice · New Jersey / Remote",
    links: [{ label: "Visit Manifest", href: "https://manifest-gamma-one.vercel.app/" }],
    bullets: [
      "Own requirements, interface design, frontend implementation, and deployment for client web experiences, translating business-owner feedback into concrete product and design decisions.",
      "Build reusable components and responsive interactions connecting visual identity with product discovery, configuration, and inquiry.",
    ],
  },
  {
    title: "Litty Co.",
    date: "Ongoing Client Engagement",
    org: "Frontend Development and Digital Experience · Remote",
    links: [{ label: "View Litty Co.", href: "https://litty-hub.vercel.app/" }],
    bullets: [
      "Work directly with ownership across connected brands, balancing shared web foundations with distinct positioning, content, and customer journeys.",
    ],
  },
  {
    title: "Great Wall / Metro Media Walls",
    date: "Working Web Experience · Continued Refinement",
    org: "Client Showroom & Configurator · Next.js, React, TypeScript",
    links: [
      { label: "Showroom Demo", href: "https://great-wall-omega.vercel.app/" },
    ],
    bullets: [
      "Developed a visual showroom intended to help customers explore custom media walls, choose configurations, and move into an informed estimate conversation.",
      "Connected reusable catalog data, selectable upgrades, pricing calculations, and inquiry flows; added automated checks for estimate totals and configuration rules.",
    ],
  },
];

const trainingExperience = [
  {
    title: "Frontend Simplified / FES Institute",
    date: "2025 - 2026",
    org: "Practical Frontend Assignments · Training and Internship Projects",
    bullets: [
      "Implemented authentication, Stripe checkout, premium access, search, saved content, and audio-player behavior in the Summarist subscription application.",
      "Built API-driven marketplace views, dynamic routing, and loading states for Ultraverse; implemented responsive interfaces and animation within an existing Next.js architecture for Skinstric.",
    ],
    links: [
      { label: "Summarist", href: "https://summarist-rust.vercel.app/" },
      { label: "Ultraverse", href: "https://internship-flax-five.vercel.app/" },
    ],
  },
];

const businessBackground = [
  {
    title: "Operations Manager & Contract Partner",
    date: "2022 - 2025",
    org: "JJ's Pro Service · New Jersey / Remote",
    bullets: [
      "Managed daily operations, client relationships, scheduling, and field coordination across active service contracts.",
    ],
  },
  {
    title: "Sales Consultant",
    date: "2020 - 2023",
    org: "Momentum Solar · New Jersey / Florida",
    bullets: [
      "Supported consultative residential solar sales, guiding customers through their questions and purchase decisions.",
    ],
  },
  {
    title: "Sales Consultant",
    date: "2016 - 2019",
    org: "Solar Xchange · New Jersey / Florida",
    bullets: [
      "Developed customer relationships through residential solar sales and follow-up, drawing on prospecting and objection-handling experience.",
    ],
  },
  {
    title: "Branch Manager",
    date: "2014 - 2016",
    org: "Penske Truck Leasing · Passaic, NJ",
    bullets: [
      "Managed branch operations, including team oversight, customer service, fleet coordination, and account management for a commercial leasing location.",
    ],
  },
];

const skills = [
  {
    label: "Frontend",
    items: [
      "React, Next.js, TypeScript, JavaScript",
      "HTML, CSS, Tailwind CSS, Sass",
      "Redux, Recharts",
    ],
  },
  {
    label: "Integrations & Data",
    items: [
      "REST APIs, Stripe, Clerk, Firebase",
      "Prisma, PostgreSQL, MongoDB",
    ],
  },
  {
    label: "Delivery",
    items: [
      "Git, GitHub, Vercel, Figma",
      "Responsive UI, form validation, accessibility",
      "Component systems",
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

          <h1>Frontend Engineer. React. Next.js. TypeScript.</h1>

          <p className="resume-page__lede">
            Client websites and independent products built from requirements
            through deployment, with visual design, cinematic interaction, and
            clear navigation working together.
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
              download="JH-Frontend-Oct23.pdf"
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
            Frontend engineer building client websites and independent products
            with React, Next.js, and TypeScript. I combine visual design,
            cinematic interaction, and clear navigation to create immersive
            experiences that remain easy to use. I own work from requirements
            through deployment, informed by prior operations leadership and
            customer-facing experience.
          </p>
        </div>

        <div className="resume-page__skills resume-card">
          <p className="section-eyebrow">Technical Skills</p>
          <div className="resume-skill-grid">
            {skills.map((group) => (
              <article key={group.label} className="resume-skill-group">
                <h2>{group.label}</h2>
                {group.items.map((item) => <p key={item}>{item}</p>)}
              </article>
            ))}
          </div>
        </div>

        <ExperienceCard
          eyebrow="Professional Experience"
          entries={professionalExperience}
          className="resume-page__experience"
        />

        <div className="resume-page__projects resume-card">
          <p className="section-eyebrow">Independent Product Development</p>
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
          <p className="section-eyebrow">Additional Professional Experience</p>
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
          <p className="section-eyebrow">Training & Education</p>
          <div className="resume-entry-list">
            {trainingExperience.map((entry) => (
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
                <div className="resume-entry__links resume-entry__links--inline">
                  {entry.links.map((link) => (
                    <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                      {link.label}
                    </a>
                  ))}
                </div>
              </article>
            ))}
            <article className="resume-entry">
              <div className="resume-entry__header">
                <div>
                  <h2>Frontend Development Bootcamp Certificate</h2>
                  <p className="resume-entry__org">FES Institute</p>
                </div>
                <span className="resume-entry__date">2026</span>
              </div>
              <a
                className="resume-entry__credential"
                href={certifications[0].credentialPath}
                target="_blank"
                rel="noreferrer"
              >
                Open certificate
              </a>
            </article>
            <article className="resume-entry">
              <div className="resume-entry__header">
                <div>
                  <h2>Web Engineering Program</h2>
                  <p className="resume-entry__org">Frontend Simplified</p>
                </div>
                <span className="resume-entry__date">2025</span>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResumePage;

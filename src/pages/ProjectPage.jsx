import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getProjectBySlug } from "../data/projects";
import Reveal from "../components/shared/Reveal";

function ProjectPage({ onOpenContact }) {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  useEffect(() => {
    if (!project) {
      return undefined;
    }

    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const previousDescription = description?.getAttribute("content");
    const canonical = document.querySelector('link[rel="canonical"]');
    const previousCanonical = canonical?.getAttribute("href");
    const canonicalUrl = `https://big-boy-portfolio.vercel.app/projects/${project.slug}`;
    const metaTitle = project.meta?.title ?? `${project.name} | Justin Henry`;
    const metaDescription = project.meta?.description ?? project.summary;
    const metaImagePath = project.meta?.image ?? project.previewImage;
    const metaImage = metaImagePath
      ? new URL(metaImagePath, window.location.origin).href
      : null;
    const socialMeta = [
      ['meta[property="og:title"]', metaTitle],
      ['meta[property="og:description"]', metaDescription],
      ['meta[name="twitter:title"]', metaTitle],
      ['meta[name="twitter:description"]', metaDescription],
      ['meta[property="og:image"]', metaImage],
      ['meta[name="twitter:image"]', metaImage],
    ].map(([selector, content]) => {
      const element = document.querySelector(selector);
      const previousContent = element?.getAttribute("content");
      if (content) {
        element?.setAttribute("content", content);
      }
      return { element, previousContent };
    });

    document.title = metaTitle;
    description?.setAttribute("content", metaDescription);
    canonical?.setAttribute("href", canonicalUrl);

    return () => {
      document.title = previousTitle;
      if (previousDescription) {
        description?.setAttribute("content", previousDescription);
      }
      if (previousCanonical) {
        canonical?.setAttribute("href", previousCanonical);
      }
      socialMeta.forEach(({ element, previousContent }) => {
        if (previousContent) {
          element?.setAttribute("content", previousContent);
        }
      });
    };
  }, [project]);

  if (!project) {
    return (
      <section className="project-page">
        <div className="shell project-page__missing">
          <p className="section-eyebrow">Project not found</p>
          <h1>This case study is not live yet.</h1>
          <p>Go back to the project archive and open one of the live case studies instead.</p>
          <Link to="/projects" className="button button--primary">
            Back to projects
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="project-page">
      <div className="shell">
        <Reveal className={`case-study-hero case-study-hero--${project.accent}`}>
          <div className="case-study-hero__copy">
            <p className="section-eyebrow">{project.heroMedia.eyebrow}</p>
            <h1>{project.name}</h1>
            <p className="case-study-hero__tagline">{project.tagline}</p>
            <p>{project.summary}</p>

            {project.relationship ? (
              <div className="case-study-hero__context" aria-label="Project context">
                {project.projectType ? <strong>{project.projectType}</strong> : null}
                <span>{project.relationship}</span>
              </div>
            ) : null}

            <div className="case-study-hero__actions">
              {project.links.live ? (
                <a
                  href={project.links.live}
                  className="button button--primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live project
                </a>
              ) : (
                <span className="button button--disabled">Live link coming later</span>
              )}
              {project.links.code ? (
                <a
                  href={project.links.code}
                  className="button button--ghost"
                  target="_blank"
                  rel="noreferrer"
                >
                  View code
                </a>
              ) : (
                <span className="button button--ghost button--disabled">
                  Code link available on request
                </span>
              )}
            </div>
          </div>

          <div className="case-study-hero__visual">
            {project.links.live ? (
              <a
                href={project.links.live}
                className="device-panel device-panel--link"
                target="_blank"
                rel="noreferrer"
                aria-label={`Open live preview for ${project.name}`}
              >
                <img
                  src={project.previewImage}
                  alt={`${project.name} live homepage preview`}
                  className="device-panel__image"
                />
                <div className="device-panel__scrim" />
                <span className="device-panel__label">{project.status}</span>
                <strong>{project.heroMedia.heading}</strong>
                <p>{project.heroMedia.detail}</p>
                <span className="device-panel__cta">Open live preview ↗</span>
              </a>
            ) : (
              <div className="device-panel">
                <img
                  src={project.previewImage}
                  alt={`${project.name} live homepage preview`}
                  className="device-panel__image"
                />
                <div className="device-panel__scrim" />
                <span className="device-panel__label">{project.status}</span>
                <strong>{project.heroMedia.heading}</strong>
                <p>{project.heroMedia.detail}</p>
              </div>
            )}
          </div>
        </Reveal>

        <div className="case-study-grid">
          <Reveal className="case-study-panel">
            <p className="section-eyebrow">Plain-language summary</p>
            <h2>What this project proves</h2>
            <p>{project.audienceSummary}</p>
          </Reveal>

          <Reveal className="case-study-panel" delay={100}>
            <p className="section-eyebrow">Role and stack</p>
            <h2>How I approached it</h2>
            <p>{project.role}</p>
            <div className="tag-list">
              {project.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </Reveal>

          {project.demoAccounts?.length ? (
            <Reveal className="case-study-panel" delay={140}>
              <p className="section-eyebrow">Demo access</p>
              <h2>Test the live build</h2>
              <div className="demo-account-list">
                {project.demoAccounts.map((account) => (
                  <article key={`${account.label}-${account.email}`} className="demo-account-card">
                    <h3>{account.label}</h3>
                    <p>
                      <strong>Email:</strong> <span>{account.email}</span>
                    </p>
                    <p>
                      <strong>Password:</strong> <span>{account.password}</span>
                    </p>
                  </article>
                ))}
              </div>
            </Reveal>
          ) : null}

          <Reveal className="case-study-panel" delay={180}>
            <p className="section-eyebrow">Feature highlights</p>
            <ul className="detail-list">
              {project.featureHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="case-study-panel" delay={240}>
            <p className="section-eyebrow">Technical proof</p>
            <ul className="detail-list">
              {project.technicalProof.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>

        {project.detailSections?.length > 0 && (
          <div className="case-study-grid case-study-grid--secondary">
            {project.detailSections.map((section, index) => (
              <Reveal
                key={section.title}
                className="case-study-panel"
                delay={index * 90}
              >
                <p className="section-eyebrow">{section.eyebrow}</p>
                <h2>{section.title}</h2>
                {section.body ? <p>{section.body}</p> : null}
                {section.media ? (
                  <figure className="case-study-evidence">
                    <img src={section.media.src} alt={section.media.alt} />
                    {section.media.caption ? (
                      <figcaption>{section.media.caption}</figcaption>
                    ) : null}
                  </figure>
                ) : null}
                {section.list ? (
                  <ul className="detail-list">
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </Reveal>
            ))}
          </div>
        )}

        <Reveal className="case-study-story">
          <p className="section-eyebrow">Build story</p>
          <h2>What mattered while building it</h2>
          <p>{project.buildStory}</p>
          <button type="button" className="button button--ghost" onClick={onOpenContact}>
            Start a conversation
          </button>
        </Reveal>
      </div>
    </section>
  );
}

export default ProjectPage;

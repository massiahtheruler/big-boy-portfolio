import { Link, useParams } from "react-router-dom";
import { getCaseStudyBySlug } from "../data/caseStudies";
import Reveal from "../components/shared/Reveal";

function ProjectPage({ onOpenContact }) {
  const { slug } = useParams();
  const project = getCaseStudyBySlug(slug);

  if (!project) {
    return (
      <section className="project-page">
        <div className="shell project-page__missing">
          <p className="section-eyebrow">Project not found</p>
          <h1>This case study is not live yet.</h1>
          <p>Go back to the home page and open one of the featured projects instead.</p>
          <Link to="/" className="button button--primary">
            Back home
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

            <div className="case-study-hero__actions">
              {project.links.live ? (
                <a href={project.links.live} className="button button--primary">
                  Live project
                </a>
              ) : (
                <span className="button button--disabled">Live link coming later</span>
              )}
              {project.links.code ? (
                <a href={project.links.code} className="button button--ghost">
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

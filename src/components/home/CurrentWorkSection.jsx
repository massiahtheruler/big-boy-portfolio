import { Link } from "react-router-dom";
import { currentWork } from "../../data/currentWork";
import Reveal from "../shared/Reveal";

function CurrentWorkSection() {
  return (
    <section id="current-work" className="content-section content-section--current">
      <div className="shell">
        <Reveal className="section-heading">
          <p className="section-eyebrow">Current work</p>
          <h2>The portfolio is live, but the pipeline is still moving.</h2>
          <p>
            I am not treating this as a finished archive. The strongest thing a
            portfolio can do is show what is already real and what is actively
            gaining shape.
          </p>
        </Reveal>

        <div className="current-work-grid">
          {currentWork.map((item, index) => (
            <Reveal key={item.title} delay={index * 100}>
              {item.featured ? (
                <Link
                  to={`/projects/${item.slug}`}
                  className={`project-card project-card--spotlight project-card--${item.accent}`}
                  aria-label={`Open ${item.title} preview page`}
                >
                  <div className="project-card__surface">
                    <img
                      src={item.previewImage}
                      alt={`${item.title} homepage preview`}
                      className="project-card__image"
                    />
                    <div className="project-card__scrim" />
                    <p className="project-card__eyebrow">{item.eyebrow}</p>
                    <div className="project-card__status">{item.status}</div>
                    <h3>{item.title}</h3>
                    <p className="project-card__tagline">{item.cardTagline}</p>
                    <div className="work-card__metrics">
                      {item.metrics.map((metric) => (
                        <span key={metric}>{metric}</span>
                      ))}
                    </div>
                  </div>

                  <div className="project-card__overlay">
                    <p>{item.previewSummary}</p>
                    <ul>
                      {item.previewHighlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                    <span className="project-card__link">Open Litty preview</span>
                  </div>
                </Link>
              ) : (
                <article
                  className={`work-card ${item.links.length === 0 ? "work-card--static" : ""}`}
                >
                  <div className="work-card__header">
                    <h3>{item.title}</h3>
                    <span>{item.status}</span>
                  </div>
                  <p>{item.description}</p>
                  <div className="tag-list">
                    {item.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  {item.links.length > 0 && (
                    <div className="work-card__links">
                      {item.links.map((link) => (
                        <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </article>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CurrentWorkSection;

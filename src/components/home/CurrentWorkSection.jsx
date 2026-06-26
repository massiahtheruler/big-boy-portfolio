import { Link } from "react-router-dom";
import { getCurrentProjects } from "../../data/projects";
import ProjectCard from "../shared/ProjectCard";
import Reveal from "../shared/Reveal";

function CurrentWorkSection() {
  const currentWork = getCurrentProjects();

  return (
    <section
      id="current-work"
      className="content-section content-section--current"
    >
      <div className="shell">
        <Reveal className="section-heading">
          <p className="section-eyebrow">Current work</p>
          <h2>Still Building | Always Refining.</h2>

          <p>
            The work below shows the Manifest framework moving through active
            brands, client-facing systems, frontend products, and proof that
            identity has to become something people can recognize and act on.
          </p>
        </Reveal>

        <div className="current-work-grid">
          {currentWork.map((item, index) => (
            <Reveal key={item.slug ?? item.id} delay={index * 100}>
              {item.slug ? (
                <ProjectCard
                  project={item}
                  cta="Open Litty preview"
                  spotlight
                />
              ) : (
                <article className="work-card work-card--static">
                  {item.previewImage ? (
                    <div className="work-card__media">
                      <img src={item.previewImage} alt={`${item.name} preview`} />
                    </div>
                  ) : null}
                  <div className="work-card__header">
                    <h3>{item.name}</h3>
                    <span>{item.status}</span>
                  </div>
                  <p>{item.description}</p>
                  <div className="tag-list">
                    {item.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  {item.links?.live ? (
                    <div className="work-card__links">
                      <a href={item.links.live} target="_blank" rel="noreferrer">
                        Visit {item.name}
                      </a>
                    </div>
                  ) : null}
                </article>
              )}
            </Reveal>
          ))}
        </div>
        <Reveal className="current-work-cta">
          <Link to="/current" className="button button--ghost">
            See all current work
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export default CurrentWorkSection;

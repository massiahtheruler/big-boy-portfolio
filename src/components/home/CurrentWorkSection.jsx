import { Link } from "react-router-dom";
import { getCurrentProjects } from "../../data/projects";
import ProjectCard from "../shared/ProjectCard";
import Reveal from "../shared/Reveal";

function CurrentWorkSection() {
  const currentWork = getCurrentProjects().filter(
    (item) => item.slug === "litty-hub",
  );

  return (
    <section
      id="current-work"
      className="content-section content-section--current"
    >
      <div className="shell">
        <Reveal className="section-heading">
          <p className="section-eyebrow">Active client relationship</p>
          <h2>Building the Litty ecosystem over time.</h2>

          <p>
            I am contracted to build, create, and manage Litty Hub's websites,
            social presence, and connected sub-brands. This ongoing relationship
            is the larger client system behind Great Wall and the work still in motion.
          </p>
        </Reveal>

        <div className="current-work-grid">
          {currentWork.map((item, index) => (
            <Reveal key={item.slug ?? item.id} delay={index * 100}>
              {item.slug ? (
                <ProjectCard
                  project={item}
                  cta="Open Litty Hub case study"
                  spotlight
                />
              ) : item.links?.live ? (
                <a
                  className="work-card work-card--action interactive-card"
                  href={item.links.live}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visit ${item.name}`}
                >
                  <WorkCardContent item={item} cta={`Visit ${item.name}`} />
                </a>
              ) : (
                <Link
                  to="/current"
                  className="work-card work-card--action interactive-card"
                  aria-label={`Open current work details for ${item.name}`}
                >
                  <WorkCardContent item={item} cta="More info" />
                </Link>
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

function WorkCardContent({ item, cta }) {
  return (
    <>
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
      <span className="work-card__action">{cta}</span>
    </>
  );
}

export default CurrentWorkSection;

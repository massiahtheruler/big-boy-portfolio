import { Link } from "react-router-dom";
import { caseStudies } from "../../data/caseStudies";
import Reveal from "../shared/Reveal";

function FeaturedProjectsSection() {
  return (
    <section id="featured-work" className="content-section">
      <div className="shell">
        <Reveal className="section-heading">
          <p className="section-eyebrow">Featured work</p>
          <h2>Three projects that show range without losing polish.</h2>
          <p>
            The goal is not to throw every build on the page. It is to show

  product thinking, frontend depth, and the way I structure systems

  when interfaces need to feel intuitive, scalable, and reliable under

   pressure.
          </p>
        </Reveal>

        <div className="project-grid">
          {caseStudies.map((project, index) => (
            <Reveal key={project.slug} delay={index * 120}>
              <Link
                to={`/projects/${project.slug}`}
                className={`project-card project-card--${project.accent}`}
                aria-label={`Open ${project.name} case study`}
              >
                <div className="project-card__surface">
                  <img
                    src={project.previewImage}
                    alt={`${project.name} homepage preview`}
                    className="project-card__image"
                  />
                  <div className="project-card__scrim" />
                  <p className="project-card__eyebrow">{project.heroMedia.eyebrow}</p>
                  <h3>{project.name}</h3>
                  <p className="project-card__tagline">{project.tagline}</p>
                </div>

                <div className="project-card__overlay">
                  <p>{project.audienceSummary}</p>
                  <ul>
                    {project.stack.slice(0, 4).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <span className="project-card__link">
                    Open case study
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjectsSection;

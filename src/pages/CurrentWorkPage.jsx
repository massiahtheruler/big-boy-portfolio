import { Link } from "react-router-dom";
import { manifestFramework } from "../data/manifestFramework";
import { getCurrentProjects } from "../data/projects";
import ProjectCard from "../components/shared/ProjectCard";
import Reveal from "../components/shared/Reveal";

function CurrentWorkPage() {
  const currentProjects = getCurrentProjects();

  return (
    <section className="project-archive project-archive--current">
      <div className="shell">
        <Reveal className="project-archive__hero">
          <p className="section-eyebrow">Current work</p>
          <h1>Active transformations, product systems, and client work.</h1>
          <p>
            These projects are live, in active development, or still being
            documented before I call them complete. Each one shows a different
            way I translate identity, business context, and complex decisions
            into clear digital experiences.
          </p>
          <div className="project-archive__actions">
            <a
              href={manifestFramework.primaryCta.href}
              className="button button--primary"
              target="_blank"
              rel="noreferrer"
            >
              Explore Manifest
            </a>
            <Link to="/projects" className="button button--ghost">
              View completed work
            </Link>
            <Link to="/" className="button button--ghost">
              Back home
            </Link>
          </div>
        </Reveal>

        {currentProjects.length ? (
          <section className="project-archive__group">
            <Reveal className="section-heading">
              <p className="section-eyebrow">In progress</p>
              <h2>Work with a clear reason to be here</h2>
              <p>
                Juicy City carries the transformation story. Bodywork Network
                carries the reusable matching model. Great Wall and Litty Hub
                show the depth of an active contracted client relationship.
              </p>
            </Reveal>
            <div className="project-grid">
              {currentProjects.map((project, index) => (
                <Reveal key={project.slug ?? project.id} delay={index * 90}>
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          </section>
        ) : null}
      </div>

    </section>
  );
}

export default CurrentWorkPage;

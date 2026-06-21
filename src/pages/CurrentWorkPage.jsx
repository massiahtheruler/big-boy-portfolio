import { useState } from "react";
import { Link } from "react-router-dom";
import { getCurrentProjects } from "../data/projects";
import ProjectCard from "../components/shared/ProjectCard";
import ProjectGalleryModal from "../components/shared/ProjectGalleryModal";
import Reveal from "../components/shared/Reveal";

function CurrentWorkPage() {
  const currentProjects = getCurrentProjects();
  const [activeProject, setActiveProject] = useState(null);
  const featuredProject = currentProjects.find((project) => project.slug);
  const currentInitiatives = currentProjects.filter((project) => !project.slug);

  return (
    <section className="project-archive project-archive--current">
      <div className="shell">
        <Reveal className="project-archive__hero">
          <p className="section-eyebrow">Current work</p>
          <h1>Active builds, evolving systems, and what is being shaped now.</h1>
          <p>
            This page tracks active projects, product ideas, client work, and systems that are still being shaped. Some are live, some are in progress, and some may grow into full case studies later.
          </p>
          <div className="project-archive__actions">
            <Link to="/projects" className="button button--primary">
              View completed work
            </Link>
            <Link to="/" className="button button--ghost">
              Back home
            </Link>
          </div>
        </Reveal>

        {featuredProject ? (
          <section className="project-archive__group">
            <Reveal className="section-heading">
              <p className="section-eyebrow">Featured current project</p>
              <h2>Featured current build</h2>
              <p>
                The highlighted project can change as the work evolves, but this space stays focused on the build currently carrying the most momentum.
              </p>
            </Reveal>
            <ProjectCard
              project={featuredProject}
              cta="Open Litty preview"
              spotlight
            />
          </section>
        ) : null}

        {currentInitiatives.length ? (
          <section className="project-archive__group">
            <Reveal className="section-heading">
              <p className="section-eyebrow">In motion</p>
              <h2>Projects and systems in motion</h2>
              <p>
                These are active ideas, service systems, and builds that are still developing. They can stay lightweight for now and expand into full project pages when the work calls for it.
              </p>
            </Reveal>
            <div className="current-work-grid current-work-grid--page">
              {currentInitiatives.map((project, index) => (
                <Reveal key={project.id} delay={index * 90}>
                  <article className="work-card">
                    <div className="work-card__header">
                      <h3>{project.name}</h3>
                      <span>{project.status}</span>
                    </div>
                    <p>{project.description}</p>
                    <div className="tag-list">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    <button
                      type="button"
                      className="work-card__detail-button"
                      onClick={() => setActiveProject(project)}
                    >
                      More info
                    </button>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>
        ) : null}
      </div>

      <ProjectGalleryModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}

export default CurrentWorkPage;

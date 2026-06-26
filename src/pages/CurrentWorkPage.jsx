import { useState } from "react";
import { Link } from "react-router-dom";
import { manifestFramework } from "../data/manifestFramework";
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
            This page tracks the work currently being shaped through Manifest:
            brand identity, digital presence, frontend systems, and
            conversion-focused experiences connected by one operating
            framework.
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

        {featuredProject ? (
          <section className="project-archive__group">
            <Reveal className="section-heading">
              <p className="section-eyebrow">Featured current project</p>
              <h2>Featured current build</h2>
              <p>
                Litty Hub is the broader ecosystem layer. Great Wall is the
                flagship Manifest engagement proving that framework against a
                real service-business experience.
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
                  {project.links?.live ? (
                    <a
                      className="work-card work-card--action interactive-card"
                      href={project.links.live}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Visit ${project.name}`}
                    >
                      <WorkCardContent
                        project={project}
                        cta={`Visit ${project.name}`}
                      />
                    </a>
                  ) : (
                    <button
                      type="button"
                      className="work-card work-card--button work-card--action interactive-card"
                      onClick={() => setActiveProject(project)}
                      aria-label={`Open ${project.name} details`}
                    >
                      <WorkCardContent project={project} cta="More info" />
                    </button>
                  )}
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

function WorkCardContent({ project, cta }) {
  return (
    <>
      {project.previewImage ? (
        <div className="work-card__media">
          <img src={project.previewImage} alt={`${project.name} preview`} />
        </div>
      ) : null}
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
      <span className="work-card__action">{cta}</span>
    </>
  );
}

export default CurrentWorkPage;

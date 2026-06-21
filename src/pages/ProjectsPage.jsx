import { Link } from "react-router-dom";
import { getArchiveGroups } from "../data/projects";
import ProjectCard from "../components/shared/ProjectCard";
import Reveal from "../components/shared/Reveal";

function ProjectGroup({ eyebrow, title, description, projects }) {
  if (!projects.length) {
    return null;
  }

  return (
    <section className="project-archive__group">
      <Reveal className="section-heading">
        <p className="section-eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p>{description}</p>
      </Reveal>

      <div className="project-grid">
        {projects.map((project, index) => (
          <Reveal key={project.slug} delay={index * 90}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ProjectsPage() {
  const archiveGroups = getArchiveGroups();

  return (
    <section className="project-archive">
      <div className="shell">
        <Reveal className="project-archive__hero">
          <p className="section-eyebrow">Project archive</p>
          <h1>Completed work, case studies, and the larger build record.</h1>
          <p>
            This is the full project archive. The homepage highlights a select
            group of featured projects. Here you’ll find client work,
            internships, product builds, and experiments that reflect how I
            approach frontend engineering, product development, and digital
            experiences in scalable project systems.
          </p>
          <div className="project-archive__actions">
            <Link to="/current" className="button button--primary">
              View current work
            </Link>
            <Link to="/" className="button button--ghost">
              Back home
            </Link>
          </div>
        </Reveal>

        {archiveGroups.map((group) => (
          <ProjectGroup key={group.group} {...group} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsPage;

import { Link } from "react-router-dom";

function ProjectCard({
  project,
  cta = "Open case study",
  spotlight = false,
  onOpen,
}) {
  const cardClass = `project-card interactive-card ${spotlight ? "project-card--spotlight " : ""}project-card--${project.accent ?? "violet"}`;
  const cardContent = (
    <>
      <div className="project-card__surface">
        {project.previewImage ? (
          <img
            src={project.previewImage}
            alt={`${project.name} homepage preview`}
            className="project-card__image"
          />
        ) : null}
        <div className="project-card__scrim" />
        <p className="project-card__eyebrow">
          {project.heroMedia?.eyebrow ?? project.status}
        </p>
        {project.status ? (
          <div className="project-card__status">{project.status}</div>
        ) : null}
        <h3>{project.name}</h3>
        <p className="project-card__tagline">
          {project.cardTagline ?? project.tagline}
        </p>
        {project.metrics?.length ? (
          <div className="work-card__metrics">
            {project.metrics.map((metric) => (
              <span key={metric}>{metric}</span>
            ))}
          </div>
        ) : null}
      </div>

      <div className="project-card__overlay">
        <p>{project.previewSummary ?? project.audienceSummary}</p>
        <ul>
          {(project.previewHighlights ?? project.stack ?? project.tags ?? [])
            .slice(0, 4)
            .map((item) => (
              <li key={item}>{item}</li>
            ))}
        </ul>
        <span className="project-card__link">{cta}</span>
      </div>
    </>
  );

  if (project.slug) {
    return (
      <Link
        to={`/projects/${project.slug}`}
        className={cardClass}
        aria-label={`Open ${project.name} case study`}
      >
        {cardContent}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={`${cardClass} project-card--button`}
      onClick={() => onOpen?.(project)}
      aria-label={`Open ${project.name} details`}
    >
      {cardContent}
    </button>
  );
}

export default ProjectCard;

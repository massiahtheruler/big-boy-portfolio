import { useEffect, useMemo, useState } from "react";

function ProjectGalleryModal({ project, onClose }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = useMemo(() => project?.gallery ?? [], [project]);
  const activeSlide = slides[activeIndex];

  useEffect(() => {
    setActiveIndex(0);
  }, [project]);

  useEffect(() => {
    if (!project) {
      return undefined;
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose, project]);

  if (!project) {
    return null;
  }

  return (
    <div className="project-modal project-modal--open" role="presentation">
      <button
        type="button"
        className="project-modal__backdrop"
        aria-label="Close project details"
        onClick={onClose}
      />
      <section
        className="project-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <button
          type="button"
          className="project-modal__close"
          onClick={onClose}
          aria-label="Close project details"
        >
          Close
        </button>
        <p className="section-eyebrow">{project.status}</p>
        <h2 id="project-modal-title">{project.name}</h2>
        <p>{project.description ?? project.audienceSummary}</p>

        {activeSlide ? (
          <article className="project-modal__slide">
            {activeSlide.image ? (
              <img src={activeSlide.image} alt={activeSlide.alt ?? ""} />
            ) : null}
            <div>
              <h3>{activeSlide.title}</h3>
              <p>{activeSlide.body}</p>
            </div>
          </article>
        ) : null}

        {slides.length > 1 ? (
          <div className="project-modal__controls">
            <button
              type="button"
              className="button button--ghost"
              onClick={() =>
                setActiveIndex((current) =>
                  current === 0 ? slides.length - 1 : current - 1,
                )
              }
            >
              Previous
            </button>
            <span>
              {activeIndex + 1} / {slides.length}
            </span>
            <button
              type="button"
              className="button button--ghost"
              onClick={() =>
                setActiveIndex((current) =>
                  current === slides.length - 1 ? 0 : current + 1,
                )
              }
            >
              Next
            </button>
          </div>
        ) : null}

        {project.tags?.length ? (
          <div className="tag-list">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        ) : null}
      </section>
    </div>
  );
}

export default ProjectGalleryModal;

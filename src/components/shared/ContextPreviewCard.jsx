function ContextPreviewCard({ eyebrow, title, description, image, primaryLink }) {
  return (
    <article className="context-preview-card">
      {image ? (
        <div className="context-preview-card__media">
          <img src={image.src} alt={image.alt} />
        </div>
      ) : null}
      <p className="section-eyebrow">{eyebrow}</p>
      <h3>{title}</h3>
      <p>{description}</p>
      {primaryLink ? (
        <a
          href={primaryLink.href}
          className="context-preview-card__link"
          target="_blank"
          rel="noreferrer"
        >
          {primaryLink.label}
        </a>
      ) : null}
    </article>
  );
}

export default ContextPreviewCard;

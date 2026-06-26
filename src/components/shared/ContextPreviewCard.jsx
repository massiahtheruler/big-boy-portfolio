function ContextPreviewCard({ eyebrow, title, description, image, primaryLink }) {
  const CardTag = primaryLink ? "a" : "article";
  const linkProps = primaryLink
    ? {
        href: primaryLink.href,
        target: "_blank",
        rel: "noreferrer",
        "aria-label": primaryLink.label,
      }
    : {};

  return (
    <CardTag className="context-preview-card interactive-card" {...linkProps}>
      {image ? (
        <div className="context-preview-card__media">
          <img src={image.src} alt={image.alt} />
        </div>
      ) : null}
      <p className="section-eyebrow">{eyebrow}</p>
      <h3>{title}</h3>
      <p>{description}</p>
      {primaryLink ? (
        <span className="context-preview-card__link">{primaryLink.label}</span>
      ) : null}
    </CardTag>
  );
}

export default ContextPreviewCard;

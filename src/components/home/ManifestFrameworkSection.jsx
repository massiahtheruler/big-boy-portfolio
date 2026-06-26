import { manifestFramework } from "../../data/manifestFramework";
import ContextPreviewCard from "../shared/ContextPreviewCard";
import Reveal from "../shared/Reveal";

function ManifestFrameworkSection() {
  const { greatWall } = manifestFramework;

  return (
    <section className="content-section manifest-framework-section">
      <div className="shell manifest-framework">
        <Reveal>
          <a
            className="manifest-framework__copy manifest-framework__card interactive-card"
            href={manifestFramework.primaryCta.href}
            target="_blank"
            rel="noreferrer"
            aria-label={manifestFramework.primaryCta.label}
          >
            <p className="section-eyebrow">{manifestFramework.eyebrow}</p>

            <img
              src={manifestFramework.image.src}
              alt={manifestFramework.image.alt}
              className="manifest-framework__logo"
            />

            <h2>{manifestFramework.title}</h2>
            <p>{manifestFramework.body}</p>
            <div
              className="manifest-chain"
              aria-label="Manifest framework chain"
            >
              {manifestFramework.chain.map((step) => (
                <span key={step}>{step}</span>
              ))}
            </div>
            <span className="button button--primary">
              {manifestFramework.primaryCta.label}
            </span>
          </a>
        </Reveal>

        <Reveal delay={120}>
          <ContextPreviewCard
            eyebrow={greatWall.label}
            title={greatWall.title}
            description={greatWall.description}
            image={greatWall.image}
            primaryLink={{
              href: greatWall.href,
              label: greatWall.ctaLabel,
            }}
          />
        </Reveal>
      </div>
    </section>
  );
}

export default ManifestFrameworkSection;

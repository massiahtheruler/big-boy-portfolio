import { manifestFramework } from "../../data/manifestFramework";
import ContextPreviewCard from "../shared/ContextPreviewCard";
import Reveal from "../shared/Reveal";

function ManifestServicesIntro() {
  const { greatWall } = manifestFramework;

  return (
    <section className="services-manifest">
      <div className="shell services-manifest__grid">
        <Reveal className="services-manifest__copy">
          <p className="section-eyebrow">Operating framework</p>
          <h2>Manifest</h2>
          <p>
            Manifest is the method behind my services: brand identity, digital
            presence, frontend execution, and conversion-focused systems working
            together so a business looks as credible online as it is in real
            life.
          </p>
          <div className="manifest-chain manifest-chain--compact">
            {manifestFramework.chain.map((step) => (
              <span key={step}>{step}</span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={110}>
          <ContextPreviewCard
            eyebrow="Framework in practice"
            title="Great Wall"
            description="See the framework in practice through a trust-driven landing experience built for clarity, contact, and credibility."
            image={greatWall.image}
            primaryLink={{
              href: greatWall.href,
              label: "Visit Great Wall",
            }}
          />
        </Reveal>
      </div>
    </section>
  );
}

export default ManifestServicesIntro;

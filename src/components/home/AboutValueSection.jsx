import { Link } from "react-router-dom";
import { siteContent } from "../../data/siteContent";
import Reveal from "../shared/Reveal";

function AboutValueSection() {
  return (
    <section id="about" className="content-section">
      <div className="shell about-grid">
        <Reveal className="about-intro">
          <p className="section-eyebrow">About</p>
          <h2>Art direction matters. So does the structure underneath it.</h2>
          <p>
            I like interfaces that feel considered: darker, cleaner, and a little
            surprising. But I also want the work to stand up when somebody asks
            what it actually does, how it behaves, and whether the decisions make
            sense.
          </p>
        </Reveal>

        <div className="value-list">
          {siteContent.valuePoints.map((point, index) => (
            <Reveal key={point.title} delay={index * 100} className="value-card">
              <h3>{point.title}</h3>
              <p>{point.description}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="about-services-cta" delay={220}>
          <p className="section-eyebrow">{siteContent.aboutCta.eyebrow}</p>
          <h3>{siteContent.aboutCta.title}</h3>
          <p>{siteContent.aboutCta.description}</p>
          <div className="about-services-cta__actions">
            <Link to="/services" className="button button--primary">
              {siteContent.aboutCta.primaryLabel}
            </Link>
            <Link to="/inquire?offer=manifest-method" className="button button--ghost">
              {siteContent.aboutCta.secondaryLabel}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default AboutValueSection;

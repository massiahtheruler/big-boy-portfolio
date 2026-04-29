import { Link } from "react-router-dom";
import { getInquiryHref, servicesContent } from "../../data/servicesContent";
import Reveal from "../shared/Reveal";

function ServicesHero() {
  const { identity, flagship } = servicesContent;

  return (
    <section className="services-hero">
      <div className="shell services-hero__grid">
        <Reveal className="services-hero__copy">
          <p className="section-eyebrow">{identity.eyebrow}</p>
          <span className="services-hero__brand">{identity.brand}</span>
          <h1>{identity.role}</h1>
          <p className="services-hero__statement">{identity.statement}</p>
          <p>{identity.substatement}</p>
          <div className="services-hero__actions">
            <Link
              to={getInquiryHref(flagship.slug)}
              className="button button--primary"
            >
              {flagship.ctaLabel}
            </Link>
            <a href="#offers" className="button button--ghost">
              View offers
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default ServicesHero;
